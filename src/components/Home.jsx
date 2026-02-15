import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import Profile from "../assets/profile.webp";
import { SOCIAL_LINKS } from "../data/constants";

const Home = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const roles = [
    "Full Stack MERN Developer",
    "React.js Developer",
    "Node.js & Express.js Developer",
    "MongoDB Specialist",
    "UI/UX Enthusiast",
  ];

  useEffect(() => {
    if (charIndex < roles[textIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + roles[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setDisplayedText("");
        setTextIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex]);

  const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "10+", label: "MERN Projects" },
    { value: "30+", label: "Happy Clients" },
  ];

  return (
    <section
      id="home"
      className="relative w-full min-h-[calc(100vh-64px)] md:min-h-screen flex items-center bg-dark overflow-hidden"
    >
      {/* ── Animated background lines (reduced for mobile perf) ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent will-change-transform"
            style={{
              top: `${15 + i * 25}%`,
              left: "-10%",
              width: "120%",
              rotate: `${-10 + i * 8}deg`,
            }}
            initial={{ x: "-100%", opacity: 0 }}
            animate={{
              x: ["−100%", "100%"],
              opacity: [0, 0.4, 0.4, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "linear",
            }}
          />
        ))}
        {/* Vertical accent lines */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute w-px bg-gradient-to-b from-transparent via-accent/10 to-transparent will-change-transform"
            style={{
              left: `${25 + i * 35}%`,
              top: "-10%",
              height: "120%",
            }}
            animate={{
              y: ["-20%", "20%"],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 10 + i * 3,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Orange gradient glow - top right */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />

      <div className="relative z-10 w-full px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-3 text-lg text-gray-400"
            >
              Hi I am
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-2 text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              Sohail Shabbir
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-6 text-2xl font-extrabold sm:text-3xl md:text-4xl lg:text-5xl gradient-text min-h-[3.5rem] md:min-h-[4rem]"
            >
              {displayedText}
              <span className="text-accent animate-pulse">|</span>
            </motion.h2>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center mb-8 space-x-4"
            >
              {[
                { icon: FaGithub, href: SOCIAL_LINKS.github },
                { icon: FaLinkedin, href: SOCIAL_LINKS.linkedin },
                { icon: FaFacebook, href: SOCIAL_LINKS.facebook },
                { icon: FaInstagram, href: SOCIAL_LINKS.instagram },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 text-gray-400 transition-all duration-300 border rounded-full border-dark-200 hover:text-accent hover:border-accent hover:shadow-lg hover:shadow-accent/20"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="#contact"
                className="px-8 py-3.5 text-sm font-semibold text-white rounded-lg bg-accent hover:bg-accent-dark transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
              >
                Hire Me
              </a>
              <a
                href="https://drive.google.com/file/d/1TZNT_KzNEJazYbAMm2D7H7rPgdATrsKn/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 border rounded-lg border-dark-200 hover:border-accent hover:text-accent hover:-translate-y-0.5"
              >
                Download CV
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex divide-x divide-dark-200"
            >
              {stats.map((stat, i) => (
                <div key={i} className="px-6 first:pl-0">
                  <p className="text-2xl font-extrabold text-accent md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-gray-400 md:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative flex items-end justify-center order-1 lg:order-2"
          >
            <div className="relative group">
              {/* Dark circle behind the person */}
              <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[430px] lg:h-[430px] rounded-full bg-dark-200 absolute bottom-0 left-1/2 -translate-x-1/2 ring-1 ring-white/5">
                {/* Subtle inner glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/5 via-transparent to-accent/5" />
              </div>

              {/* Person image — overflows the circle */}
              <img
                src={Profile}
                alt="Sohail Shabbir"
                width={430}
                height={430}
                fetchPriority="high"
                decoding="sync"
                className="relative z-10 w-[280px] sm:w-[320px] md:w-[380px] lg:w-[430px] h-auto object-contain brightness-105 contrast-110 saturate-[0.85] group-hover:scale-[1.02] transition-transform duration-700 drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
              />

              {/* Bottom fade to blend into background */}
              <div className="absolute bottom-0 left-0 right-0 z-20 h-16 bg-gradient-to-t from-dark to-transparent" />

              {/* Decorative floating dots */}
              <div className="absolute z-10 w-3 h-3 rounded-full shadow-lg top-4 right-2 bg-accent animate-float shadow-accent/50" />
              <div
                className="absolute z-10 w-2 h-2 rounded-full shadow-md bottom-16 -left-2 bg-accent/70 animate-float shadow-accent/30"
                style={{ animationDelay: "1.2s" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute flex flex-col items-center -translate-x-1/2 bottom-8 left-1/2"
      >
        <div className="flex items-start justify-center w-6 h-10 p-1 border-2 rounded-full border-accent/40">
          <div className="w-1.5 h-3 rounded-full bg-accent animate-scroll-dot" />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
