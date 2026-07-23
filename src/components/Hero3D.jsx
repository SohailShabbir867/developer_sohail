import { Suspense, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Sparkles,
  Environment,
  AdaptiveDpr,
} from "@react-three/drei";
import * as THREE from "three";

/* ─────────────────────────────────────────
   Brand palette (matches tailwind.config.js)
───────────────────────────────────────── */
const ACCENT = "#FF6600";
const ACCENT_LIGHT = "#FF8533";
const ACCENT_DARK = "#E65100";

/* ─────────────────────────────────────────
   Central distortion blob — the hero 3D object.
   A slowly morphing organic sphere lit in orange.
───────────────────────────────────────── */
const DistortionBlob = () => {
  const meshRef = useRef(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    // Gentle drift so it feels alive
    meshRef.current.rotation.x = t * 0.12;
    meshRef.current.rotation.y = t * 0.18;
    meshRef.current.position.y = Math.sin(t * 0.6) * 0.12;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={1.7}>
      <icosahedronGeometry args={[1, 12]} />
      <MeshDistortMaterial
        color={ACCENT}
        emissive={ACCENT_DARK}
        emissiveIntensity={0.35}
        roughness={0.18}
        metalness={0.85}
        distort={0.38}
        speed={1.6}
        clearcoat={1}
      />
    </mesh>
  );
};

/* ─────────────────────────────────────────
   A single floating polyhedron.
   Reacts dynamically when cursor hovers or moves near it.
───────────────────────────────────────── */
const FloatingShape = ({ geometry, position, scale, color, speed, rotationSpeed }) => {
  const meshRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const currentOffset = useRef({ x: 0, y: 0, z: 0, scale: scale, emissive: 0.12 });

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Spin faster when hovered
    const rotMult = hovered ? 2.5 : 1.0;
    meshRef.current.rotation.x += delta * rotationSpeed.x * rotMult;
    meshRef.current.rotation.y += delta * rotationSpeed.y * rotMult;

    // Estimate cursor 3D position at shape depth
    const pointer = state.pointer;
    const mouseX = pointer.x * 4.5;
    const mouseY = pointer.y * 2.8;

    const dx = mouseX - position[0];
    const dy = mouseY - position[1];
    const dist = Math.sqrt(dx * dx + dy * dy);

    const isNear = dist < 1.8;
    const followFactor = hovered ? 0.6 : isNear ? (1.8 - dist) * 0.28 : 0;

    const targetX = dx * followFactor;
    const targetY = dy * followFactor;
    const targetZ = hovered ? 0.5 : isNear ? 0.25 : 0;
    const targetScale = scale * (hovered ? 1.5 : isNear ? 1.25 : 1.0);
    const targetEmissive = hovered ? 0.55 : isNear ? 0.35 : 0.12;

    const lerpRate = delta * 8;
    currentOffset.current.x = THREE.MathUtils.lerp(currentOffset.current.x, targetX, lerpRate);
    currentOffset.current.y = THREE.MathUtils.lerp(currentOffset.current.y, targetY, lerpRate);
    currentOffset.current.z = THREE.MathUtils.lerp(currentOffset.current.z, targetZ, lerpRate);
    currentOffset.current.scale = THREE.MathUtils.lerp(currentOffset.current.scale, targetScale, lerpRate);
    currentOffset.current.emissive = THREE.MathUtils.lerp(currentOffset.current.emissive, targetEmissive, lerpRate);

    meshRef.current.position.x = position[0] + currentOffset.current.x;
    meshRef.current.position.y = position[1] + currentOffset.current.y;
    meshRef.current.position.z = position[2] + currentOffset.current.z;
    meshRef.current.scale.setScalar(currentOffset.current.scale);

    if (meshRef.current.material) {
      meshRef.current.material.emissiveIntensity = currentOffset.current.emissive;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.6} floatIntensity={1.1}>
      <mesh
        ref={meshRef}
        position={position}
        scale={scale}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = "auto";
        }}
      >
        {geometry}
        <meshStandardMaterial
          color={color}
          roughness={0.25}
          metalness={0.7}
          emissive={color}
          emissiveIntensity={0.12}
          flatShading
        />
      </mesh>
    </Float>
  );
};

/* ─────────────────────────────────────────
   Orbiting wireframe ring — adds a tech / orbit feel.
───────────────────────────────────────── */
const OrbitRing = () => {
  const ref = useRef(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.z = t * 0.25;
    ref.current.rotation.x = Math.PI / 2.4;
  });
  return (
    <mesh ref={ref} rotation={[Math.PI / 2.4, 0, 0]}>
      <torusGeometry args={[3.1, 0.012, 16, 120]} />
      <meshBasicMaterial color={ACCENT_LIGHT} transparent opacity={0.35} />
    </mesh>
  );
};

/* ─────────────────────────────────────────
   Mouse-parallax rig — rotates the whole group
   slightly toward the pointer for an immersive feel.
───────────────────────────────────────── */
const ParallaxGroup = ({ children }) => {
  const group = useRef(null);
  useFrame((state) => {
    if (!group.current) return;
    const { x, y } = state.pointer; // -1..1 normalised pointer
    // Smoothly ease toward the target rotation
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, x * 0.35, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -y * 0.25, 0.05);
  });
  return <group ref={group}>{children}</group>;
};

/* ─────────────────────────────────────────
   The scene contents (rendered inside <Canvas>).
───────────────────────────────────────── */
const Scene = () => {
  // Stable positions / smaller scales for more floating shapes
  const shapes = useMemo(
    () => [
      { kind: "ico", pos: [-3.5, 1.8, -1.0], scale: 0.28, color: ACCENT, speed: 1.4 },
      { kind: "octa", pos: [3.4, -1.6, -0.5], scale: 0.32, color: ACCENT_LIGHT, speed: 1.1 },
      { kind: "dodeca", pos: [-2.8, -1.9, 0.4], scale: 0.25, color: ACCENT_DARK, speed: 1.7 },
      { kind: "ico", pos: [2.9, 2.1, -1.2], scale: 0.22, color: ACCENT_LIGHT, speed: 1.5 },
      { kind: "octa", pos: [0.3, 2.6, -1.6], scale: 0.20, color: ACCENT, speed: 1.3 },
      { kind: "dodeca", pos: [-3.8, -0.4, -1.8], scale: 0.18, color: ACCENT_LIGHT, speed: 1.2 },
      { kind: "tetra", pos: [1.8, -2.2, -0.8], scale: 0.24, color: ACCENT, speed: 1.6 },
      { kind: "ico", pos: [-1.5, 2.2, -1.4], scale: 0.21, color: ACCENT_DARK, speed: 1.4 },
      { kind: "octa", pos: [3.8, 0.5, -1.5], scale: 0.26, color: ACCENT_LIGHT, speed: 1.2 },
      { kind: "dodeca", pos: [-3.2, 0.8, -0.6], scale: 0.23, color: ACCENT, speed: 1.5 },
      { kind: "tetra", pos: [-1.2, -2.4, -1.0], scale: 0.19, color: ACCENT_LIGHT, speed: 1.8 },
      { kind: "ico", pos: [2.2, -0.8, -1.9], scale: 0.25, color: ACCENT_DARK, speed: 1.3 },
      { kind: "octa", pos: [-0.8, -1.6, -1.8], scale: 0.17, color: ACCENT, speed: 1.6 },
      { kind: "dodeca", pos: [1.2, 1.8, -1.5], scale: 0.22, color: ACCENT_LIGHT, speed: 1.4 },
      { kind: "tetra", pos: [-2.2, 1.2, -1.3], scale: 0.20, color: ACCENT_DARK, speed: 1.5 },
    ],
    [],
  );

  // Build geometries once
  const geometries = useMemo(
    () => ({
      ico: <icosahedronGeometry args={[1, 0]} />,
      octa: <octahedronGeometry args={[1, 0]} />,
      dodeca: <dodecahedronGeometry args={[1, 0]} />,
      tetra: <tetrahedronGeometry args={[1, 0]} />,
    }),
    [],
  );

  const randRot = (i) => ({
    x: 0.15 + ((i * 37) % 10) / 30,
    y: 0.2 + ((i * 53) % 10) / 25,
  });

  return (
    <>
      {/* Lighting — warm orange key + cool rim */}
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={60} color={ACCENT} />
      <pointLight position={[-5, -3, 2]} intensity={35} color={ACCENT_LIGHT} />
      <pointLight position={[0, 4, -6]} intensity={25} color="#ffffff" />
      <directionalLight position={[0, 2, 4]} intensity={1.2} color={ACCENT_LIGHT} />

      <ParallaxGroup>
        {shapes.map((s, i) => (
          <FloatingShape
            key={i}
            geometry={geometries[s.kind]}
            position={s.pos}
            scale={s.scale}
            color={s.color}
            speed={s.speed}
            rotationSpeed={randRot(i)}
          />
        ))}

        {/* Glittering particle field in brand orange */}
        <Sparkles
          count={60}
          scale={[12, 8, 6]}
          size={3}
          speed={0.3}
          opacity={0.6}
          color={ACCENT_LIGHT}
        />
      </ParallaxGroup>

      {/* Environment for realistic metal reflections (preset, no HDR fetch) */}
      <Environment preset="sunset" />
      <AdaptiveDpr pixelated />
    </>
  );
};

/* ─────────────────────────────────────────
   Hero3D — full public component.
   Renders a fixed-size canvas. Pointer events pass
   through to the UI beneath so buttons stay clickable.
───────────────────────────────────────── */
const Hero3DCanvas = () => (
  <Canvas
    camera={{ position: [0, 0, 7], fov: 45 }}
    dpr={[1, 1.8]}
    gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    style={{ width: "100%", height: "100%" }}
    className="w-full h-full"
  >
    <Suspense fallback={null}>
      <Scene />
    </Suspense>
  </Canvas>
);

export default Hero3DCanvas;
