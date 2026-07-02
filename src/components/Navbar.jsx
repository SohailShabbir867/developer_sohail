import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["Home", "About", "Portfolio", "Experience"];

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const [scrolled, setScrolled]       = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = ["home", "about", "portfolio", "experience", "contact"];

    const handleScroll = () => {
      const scrollY  = window.scrollY;
      const docH     = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollY > 50);
      setScrollProgress(docH > 0 ? (scrollY / docH) * 100 : 0);

      let current = "home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom > 150) current = id;
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark/90 backdrop-blur-xl shadow-xl shadow-black/30 border-b border-dark-200/60"
          : "bg-dark md:bg-transparent"
      }`}
    >
      {/* ── Scroll progress bar ── */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-accent via-accent-light to-accent"
        style={{ width: `${scrollProgress}%` }}
        transition={{ ease: "linear" }}
      />

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">

          {/* Logo */}
          <a href="#home" className="relative z-10 group">
            <motion.span
              whileHover={{ letterSpacing: "0.12em" }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="text-lg font-extrabold tracking-tight text-accent transition-all duration-300 group-hover:text-shimmer"
              style={{ display: "inline-block" }}
            >
              DEVELOPER SOHAIL
            </motion.span>
            {/* Underline slide */}
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-accent to-accent-light rounded-full group-hover:w-full transition-all duration-400" />
          </a>

          {/* Desktop Menu */}
          <div className="items-center hidden space-x-8 md:flex">
            {navLinks.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07, type: "spring", stiffness: 260, damping: 20 }}
                className={`relative text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
                  activeSection === link.toLowerCase()
                    ? "text-accent"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link}
                {activeSection === link.toLowerCase() && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                    style={{
                      background: "linear-gradient(90deg, #FF6600, #FF8533)",
                      boxShadow: "0 0 8px rgba(255,102,0,0.6)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 28 }}
                  />
                )}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 18 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,102,0,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="ripple-btn px-5 py-2 text-sm font-semibold text-white transition-all duration-300 rounded-lg bg-accent hover:bg-accent-dark"
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-50 flex flex-col items-center justify-center w-10 h-10 md:hidden"
            aria-label="Toggle menu"
          >
            {[
              isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 },
              isMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 },
              isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 },
            ].map((anim, i) => (
              <motion.span
                key={i}
                animate={anim}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className={`block w-6 h-0.5 bg-white ${i === 1 ? "mb-1.5" : ""} ${i === 0 ? "mb-1.5" : ""}`}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, filter: "blur(8px)" }}
            animate={{ opacity: 1, height: "auto", filter: "blur(0px)" }}
            exit={{ opacity: 0, height: 0, filter: "blur(6px)" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t md:hidden bg-dark/95 backdrop-blur-xl border-dark-200"
          >
            <div className="flex flex-col items-center py-6 space-y-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.06, type: "spring", stiffness: 260, damping: 22 }}
                  className={`text-lg font-medium tracking-wider transition-colors duration-300 ${
                    activeSection === link.toLowerCase()
                      ? "text-accent"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 260, damping: 20 }}
                whileTap={{ scale: 0.95 }}
                className="ripple-btn px-6 py-2.5 mt-2 text-sm font-semibold text-white rounded-lg bg-accent hover:bg-accent-dark transition-all"
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
