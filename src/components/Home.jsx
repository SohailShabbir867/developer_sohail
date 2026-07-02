import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import Profile from "../assets/profile.webp";
import { SOCIAL_LINKS } from "../data/constants";

/* ── Floating orb config ── */
const orbs = [
  { size: 500, x: "-10%", y: "-20%", color: "rgba(255,102,0,0.07)", delay: 0, dur: 12 },
  { size: 380, x: "60%",  y: "50%",  color: "rgba(255,133,51,0.05)", delay: 2, dur: 15 },
  { size: 300, x: "30%",  y: "80%",  color: "rgba(255,102,0,0.06)", delay: 4, dur: 10 },
  { size: 220, x: "80%",  y: "10%",  color: "rgba(230,81,0,0.04)",  delay: 1, dur: 18 },
];

/* ── Tiny particle config ── */
const particles = [
  { size: 4, x: "15%", y: "20%", delay: 0,   cls: "particle-1" },
  { size: 3, x: "75%", y: "35%", delay: 1,   cls: "particle-2" },
  { size: 5, x: "45%", y: "70%", delay: 2.5, cls: "particle-3" },
  { size: 3, x: "88%", y: "65%", delay: 0.8, cls: "particle-1" },
  { size: 4, x: "25%", y: "85%", delay: 3.2, cls: "particle-2" },
  { size: 2, x: "60%", y: "15%", delay: 1.5, cls: "particle-3" },
];

/* ── Letter-by-letter animation ── */
const LetterReveal = ({ text, className }) => {
  const letters = Array.from(text);
  return (
    <span className={className} aria-label={text}>
      {letters.map((ch, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: -18, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            delay: 0.35 + i * 0.045,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          style={{ display: "inline-block", transformOrigin: "top center" }}
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </span>
  );
};

const Home = () => {
  const [textIndex, setTextIndex]     = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex]     = useState(0);
  const roles = [
    "Full Stack MERN Developer",
    "React.js Developer",
    "Node.js & Express.js Developer",
    "MongoDB Specialist",
    "UI/UX Enthusiast",
  ];

  useEffect(() => {
    if (charIndex < roles[textIndex].length) {
      const t = setTimeout(() => {
        setDisplayedText((prev) => prev + roles[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 75);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setCharIndex(0);
        setDisplayedText("");
        setTextIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(t);
    }
  }, [charIndex, textIndex]);

  const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "10+", label: "MERN Projects" },
    { value: "30+", label: "Happy Clients" },
  ];

  const socialIcons = [
    { icon: FaGithub,    href: SOCIAL_LINKS.github },
    { icon: FaLinkedin,  href: SOCIAL_LINKS.linkedin },
    { icon: FaFacebook,  href: SOCIAL_LINKS.facebook },
    { icon: FaInstagram, href: SOCIAL_LINKS.instagram },
  ];

  return (
    <section
      id="home"
      className="relative w-full min-h-[calc(100vh-64px)] md:min-h-screen flex items-center bg-dark overflow-hidden"
    >
      {/* ── Floating ambient orbs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {orbs.map((orb, i) => (
          <motion.div
            key={i}
            className="orb-float absolute rounded-full"
            style={{
              width: orb.size,
              height: orb.size,
              left: orb.x,
              top: orb.y,
              background: `radial-gradient(circle at center, ${orb.color}, transparent 70%)`,
              animationDelay: `${orb.delay}s`,
              animationDuration: `${orb.dur}s`,
            }}
          />
        ))}

        {/* Tiny floating particles */}
        {particles.map((p, i) => (
          <div
            key={i}
            className={`particle ${p.cls}`}
            style={{
              width: p.size,
              height: p.size,
              left: p.x,
              top: p.y,
              background: "rgba(255,102,0,0.7)",
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}

        {/* Subtle animated grid */}
        <motion.div
          className="absolute inset-0 opacity-[0.025]"
          animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* ── Accent glow top-right ── */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-accent/8 rounded-full blur-[140px] animate-glow-pulse pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">

          {/* ── Left Content ── */}
          <div className="order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-2 text-lg text-gray-400 tracking-widest uppercase font-medium"
            >
              Hi, I am
            </motion.p>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.3 }}
              className="mb-3 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl"
              style={{ perspective: "600px" }}
            >
              <LetterReveal text="Sohail Shabbir" className="" />
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mb-6 text-2xl font-extrabold sm:text-3xl md:text-4xl gradient-text min-h-[3rem] md:min-h-[3.5rem]"
            >
              {displayedText}
              <span className="text-accent animate-pulse">|</span>
            </motion.h2>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="flex items-center mb-8 space-x-3"
            >
              {socialIcons.map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1 + i * 0.08, type: "spring", stiffness: 300, damping: 18 }}
                  whileHover={{
                    scale: 1.25,
                    rotate: [0, -10, 10, -5, 0],
                    transition: { rotate: { duration: 0.4 } },
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center justify-center w-10 h-10 text-gray-400 transition-colors duration-300 border rounded-full border-dark-200 hover:text-accent hover:border-accent hover:shadow-lg hover:shadow-accent/25"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.a
                href="#contact"
                whileHover={{ y: -3, boxShadow: "0 20px 40px rgba(255,102,0,0.4)" }}
                whileTap={{ scale: 0.97 }}
                className="ripple-btn px-8 py-3.5 text-sm font-semibold text-white rounded-lg bg-accent hover:bg-accent-dark transition-colors duration-300"
              >
                Hire Me
              </motion.a>
              <motion.a
                href="https://drive.google.com/file/d/1kcXV6ug3PhmZGFPTqi37Az63yUPnpKi4/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, borderColor: "#FF6600", color: "#FF6600" }}
                whileTap={{ scale: 0.97 }}
                className="ripple-btn px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 border rounded-lg border-dark-200 hover:border-accent hover:text-accent"
              >
                Download CV
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="flex divide-x divide-dark-200"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="px-6 first:pl-0"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + i * 0.12, type: "spring", stiffness: 250, damping: 18 }}
                >
                  <motion.p
                    className="text-2xl font-extrabold text-accent md:text-3xl"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="mt-1 text-xs text-gray-400 md:text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── Right — Profile Image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 120, damping: 18 }}
            className="relative flex items-end justify-center order-1 lg:order-2"
          >
            <div className="relative group">
              {/* Rotating halo ring — outer */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full pointer-events-none"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 60%, rgba(255,102,0,0.5) 80%, transparent 100%)",
                  borderRadius: "50%",
                }}
              />
              {/* Rotating halo ring — inner (opposite dir) */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 rounded-full pointer-events-none"
                style={{
                  background:
                    "conic-gradient(from 180deg, transparent 70%, rgba(255,133,51,0.3) 90%, transparent 100%)",
                  borderRadius: "50%",
                }}
              />

              {/* Dark circle behind person */}
              <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[430px] lg:h-[430px] rounded-full bg-dark-200 absolute bottom-0 left-1/2 -translate-x-1/2 ring-1 ring-white/5">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/8 via-transparent to-accent/5 animate-glow-pulse" />
              </div>

              {/* Profile image */}
              <img
                src={Profile}
                alt="Sohail Shabbir"
                width={430}
                height={430}
                fetchPriority="high"
                decoding="sync"
                className="relative z-10 w-[280px] sm:w-[320px] md:w-[380px] lg:w-[430px] h-auto object-contain brightness-105 contrast-110 saturate-[0.85] group-hover:scale-[1.03] transition-transform duration-700 drop-shadow-[0_15px_40px_rgba(0,0,0,0.7)]"
              />

              {/* Bottom fade blend */}
              <div className="absolute bottom-0 left-0 right-0 z-20 h-20 bg-gradient-to-t from-dark to-transparent" />

              {/* Decorative floating dots */}
              <motion.div
                className="absolute z-10 w-3 h-3 rounded-full shadow-lg top-6 right-4 bg-accent shadow-accent/50"
                animate={{ y: [0, -12, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute z-10 w-2 h-2 rounded-full shadow-md bottom-20 -left-2 bg-accent/70 shadow-accent/30"
                animate={{ y: [0, 10, 0], scale: [1, 1.3, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              />
              <motion.div
                className="absolute z-10 w-1.5 h-1.5 rounded-full top-1/2 -right-3 bg-accent/50"
                animate={{ y: [0, -8, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute flex flex-col items-center gap-2 -translate-x-1/2 bottom-8 left-1/2"
      >
        {/* Outer glow ring */}
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-10 h-14 rounded-full border border-accent/30"
        />
        <div className="flex items-start justify-center w-6 h-10 p-1 border-2 rounded-full border-accent/50">
          <div className="w-1.5 h-3 rounded-full bg-accent animate-scroll-dot" />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
