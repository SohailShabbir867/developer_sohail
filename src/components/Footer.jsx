import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { SOCIAL_LINKS } from "../data/constants";

const navLinks = ["Home", "About", "Portfolio", "Experience", "Contact"];

const socials = [
  { icon: <FaGithub size={18} />,    href: SOCIAL_LINKS.github },
  { icon: <FaLinkedin size={18} />,  href: SOCIAL_LINKS.linkedin },
  { icon: <FaFacebook size={18} />,  href: SOCIAL_LINKS.facebook },
  { icon: <FaInstagram size={18} />, href: SOCIAL_LINKS.instagram },
];

const Footer = () => {
  return (
    <footer className="py-12 border-t bg-dark border-dark-200 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </div>

      <div className="container flex flex-col items-center gap-8 px-6 mx-auto max-w-7xl lg:px-8 md:flex-row md:justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ letterSpacing: "0.1em", textShadow: "0 0 20px rgba(255,102,0,0.5)" }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="text-xl font-extrabold tracking-tight text-accent transition-all duration-300"
        >
          SOHAIL
        </motion.a>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-6">
          {navLinks.map((link, i) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, type: "spring", stiffness: 260, damping: 22 }}
              whileHover={{ y: -2, color: "#FF6600" }}
              className="text-sm text-gray-400 transition-colors duration-300 hover:text-white"
            >
              {link}
            </motion.a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-3">
          {socials.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 300, damping: 18 }}
              whileHover={{ scale: 1.2, rotate: 8, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center w-9 h-9 text-gray-400 transition-all duration-300 border rounded-lg border-dark-200 hover:text-accent hover:border-accent hover:shadow-lg hover:shadow-accent/15"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Bottom text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-8 text-xs text-center text-gray-600"
      >
        &copy; {new Date().getFullYear()} Sohail Shabbir. All rights reserved.
        <span className="mx-2 text-accent/40">•</span>
        Built with <span className="text-accent">❤</span> using React & Framer Motion
      </motion.div>
    </footer>
  );
};

export default Footer;
