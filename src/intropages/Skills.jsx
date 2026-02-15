import { motion } from "framer-motion";

import ReactLogo from "../assets/react.webp";
import NodeLogo from "../assets/node.webp";
import CssLogo from "../assets/css.webp";
import HtmlLogo from "../assets/html.webp";
import JavascriptLogo from "../assets/javascript.webp";
import BootstrapLogo from "../assets/bootstrap.webp";
import MongoLogo from "../assets/mongo.webp";
import CppLogo from "../assets/cplusplus.webp";
import CsharpLogo from "../assets/csharp.webp";
import JavaLogo from "../assets/java.webp";
import LinuxLogo from "../assets/linux.webp";
import CLogo from "../assets/c.webp";
import PhotoshopLogo from "../assets/photoshop.webp";
import IllustratorLogo from "../assets/illustrator.webp";
import LightroomLogo from "../assets/lightroom.webp";

const skillsData = [
  { name: "React", imgSrc: ReactLogo },
  { name: "Node.js", imgSrc: NodeLogo },
  { name: "JavaScript", imgSrc: JavascriptLogo },
  { name: "HTML", imgSrc: HtmlLogo },
  { name: "CSS", imgSrc: CssLogo },
  { name: "Bootstrap", imgSrc: BootstrapLogo },
  { name: "MongoDB", imgSrc: MongoLogo },
  { name: "C++", imgSrc: CppLogo },
  { name: "Canva", imgSrc: CsharpLogo },
  { name: "Java", imgSrc: JavaLogo },
  { name: "Linux", imgSrc: LinuxLogo },
  { name: "C", imgSrc: CLogo },
  { name: "Photoshop", imgSrc: PhotoshopLogo },
  { name: "Illustrator", imgSrc: IllustratorLogo },
  { name: "Lightroom", imgSrc: LightroomLogo },
];

const Skills = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-5">
        {skillsData.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            whileHover={{ y: -8, scale: 1.05 }}
            className="flex flex-col items-center justify-center p-4 transition-all duration-300 border group rounded-xl bg-dark-100 border-dark-200 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10"
          >
            <img
              src={skill.imgSrc}
              alt={skill.name}
              width={48}
              height={48}
              loading="lazy"
              decoding="async"
              className="object-contain w-10 h-10 mb-3 transition-transform duration-300 sm:w-12 sm:h-12 group-hover:scale-110"
            />
            <span className="text-xs font-medium text-center text-gray-400 transition-colors group-hover:text-white">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export { Skills };
