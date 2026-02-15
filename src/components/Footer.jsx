import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { SOCIAL_LINKS } from "../data/constants";

const navLinks = ["Home", "About", "Portfolio", "Experience", "Contact"];

const socials = [
  { icon: <FaGithub size={18} />, href: SOCIAL_LINKS.github },
  { icon: <FaLinkedin size={18} />, href: SOCIAL_LINKS.linkedin },
  { icon: <FaFacebook size={18} />, href: SOCIAL_LINKS.facebook },
  { icon: <FaInstagram size={18} />, href: SOCIAL_LINKS.instagram },
];

const Footer = () => {
  return (
    <footer className="py-12 border-t bg-dark border-dark-200">
      <div className="container flex flex-col items-center gap-8 px-6 mx-auto max-w-7xl lg:px-8 md:flex-row md:justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-extrabold tracking-tight text-accent"
        >
          SOHAIL
        </a>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-gray-400 transition-colors duration-300 hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-3">
          {socials.map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 text-gray-400 transition-all duration-300 border rounded-lg border-dark-200 hover:text-accent hover:border-accent"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-8 text-xs text-center text-gray-600">
        &copy; {new Date().getFullYear()} Sohail Shabbir. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
