import { motion } from "framer-motion";

import ReactLogo from "../assets/react.png";
import NodeLogo from "../assets/node.png";
import CssLogo from "../assets/css.png";
import HtmlLogo from "../assets/html.png";
import JavascriptLogo from "../assets/javascript.png";
import BootstrapLogo from "../assets/bootstrap.png";
import MongoLogo from "../assets/mongo.png";
import CppLogo from "../assets/cplusplus.png";
import CsharpLogo from "../assets/csharp.png";
import JavaLogo from "../assets/java.png";
import LinuxLogo from "../assets/linux.png";
import CLogo from "../assets/c.png";
import PhotoshopLogo from "../assets/photoshop.png";
import IllustratorLogo from "../assets/illustrator.png";
import LightroomLogo from "../assets/lightroom.png";

const skillsData = [
  { name: "React", imgSrc: ReactLogo },
  { name: "Node.js", imgSrc: NodeLogo },
  { name: "JavaScript", imgSrc: JavascriptLogo },
  { name: "HTML", imgSrc: HtmlLogo },
  { name: "CSS", imgSrc: CssLogo },
  { name: "Bootstrap", imgSrc: BootstrapLogo },
  { name: "MongoDB", imgSrc: MongoLogo },
  { name: "C++", imgSrc: CppLogo },
  { name: "C#", imgSrc: CsharpLogo },
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
              className="object-contain w-10 h-10 mb-3 transition-transform duration-300 sm:w-12 sm:h-12 group-hover:scale-110"
            />
            <span className="text-xs font-medium text-center text-gray-400 group-hover:text-white transition-colors">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export { Skills };
