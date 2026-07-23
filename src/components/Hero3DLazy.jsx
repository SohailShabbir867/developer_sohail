import { lazy, Suspense } from "react";

/* ─────────────────────────────────────────
   Lazy-loaded wrapper around the WebGL hero scene.
   Three.js + R3F is heavy (~600KB), so we keep it out of
   the critical path: the hero renders first with CSS/2D
   animations, and the 3D layer streams in afterwards.
───────────────────────────────────────── */
const Hero3DCanvas = lazy(() => import("./Hero3D"));

const Hero3DLazy = () => (
  <Suspense fallback={null}>
    <Hero3DCanvas />
  </Suspense>
);

export default Hero3DLazy;
