import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"; // eslint-disable-line
import { useRef } from "react";

/* ─── Spring config presets ─── */
const springSnappy = { type: "spring", stiffness: 300, damping: 22 };
const springGentle = { type: "spring", stiffness: 120, damping: 18 };

/* ─────────────────────────────────────────
   FadeUp — spring-based reveal from below
───────────────────────────────────────── */
export const FadeUp = ({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ ...springGentle, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─────────────────────────────────────────
   FadeLeft — slide from left with spring
───────────────────────────────────────── */
export const FadeLeft = ({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
}) => (
  <motion.div
    initial={{ opacity: 0, x: -70 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ ...springGentle, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─────────────────────────────────────────
   FadeRight — slide from right with spring
───────────────────────────────────────── */
export const FadeRight = ({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
}) => (
  <motion.div
    initial={{ opacity: 0, x: 70 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ ...springGentle, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─────────────────────────────────────────
   BlurIn — blur-to-clear fade entrance
───────────────────────────────────────── */
export const BlurIn = ({
  children,
  delay = 0,
  className = "",
}) => (
  <motion.div
    initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
    whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─────────────────────────────────────────
   ScaleUp — pop-in entrance
───────────────────────────────────────── */
export const ScaleUp = ({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.75 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ ...springSnappy, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─────────────────────────────────────────
   StaggerContainer — orchestrates children
───────────────────────────────────────── */
export const StaggerContainer = ({
  children,
  staggerDelay = 0.1,
  className = "",
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: staggerDelay } },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─────────────────────────────────────────
   StaggerItem — richer entry: rotate + y + blur
───────────────────────────────────────── */
export const StaggerItem = ({ children, className = "" }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 40, rotateX: -12, filter: "blur(6px)" },
      visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        filter: "blur(0px)",
        transition: { ...springGentle },
      },
    }}
    style={{ transformStyle: "preserve-3d" }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─────────────────────────────────────────
   HoverCard — 3D tilt effect on hover
───────────────────────────────────────── */
export const HoverCard = ({ children, className = "", intensity = 12 }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [intensity, -intensity]), springSnappy);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-intensity, intensity]), springSnappy);

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
