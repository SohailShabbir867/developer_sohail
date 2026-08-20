import { motion } from "framer-motion";
import { HoverCard } from "../animations/MotionWrappers";
import { BrainCircuit, Cpu, Workflow, Cloud, Server, Network, Bot, Code2 } from "lucide-react";

import ReactLogo      from "../assets/react.webp";
import NodeLogo       from "../assets/node.webp";
import CssLogo        from "../assets/css.webp";
import HtmlLogo       from "../assets/html.webp";
import JavascriptLogo from "../assets/javascript.webp";
import BootstrapLogo  from "../assets/bootstrap.webp";
import MongoLogo      from "../assets/mongo.webp";
import CppLogo        from "../assets/cplusplus.webp";
import CsharpLogo     from "../assets/csharp.webp";
import JavaLogo       from "../assets/java.webp";
import LinuxLogo      from "../assets/linux.webp";
import CLogo          from "../assets/c.webp";
import PhotoshopLogo  from "../assets/photoshop.webp";
import IllustratorLogo from "../assets/illustrator.webp";
import LightroomLogo  from "../assets/lightroom.webp";

const skillsData = [
  { name: "React",               imgSrc: ReactLogo },
  { name: "Node.js",             imgSrc: NodeLogo },
  { name: "TypeScript",          icon: <Code2 className="w-10 h-10 sm:w-12 sm:h-12 text-accent" /> },
  { name: "MCP Protocol",        icon: <Bot className="w-10 h-10 sm:w-12 sm:h-12 text-accent" /> },
  { name: "JavaScript",          imgSrc: JavascriptLogo },
  { name: "HTML",                imgSrc: HtmlLogo },
  { name: "CSS",                 imgSrc: CssLogo },
  { name: "Bootstrap",           imgSrc: BootstrapLogo },
  { name: "MongoDB",             imgSrc: MongoLogo },
  { name: "RAG AI Training",     icon: <BrainCircuit className="w-10 h-10 sm:w-12 sm:h-12 text-accent" /> },
  { name: "Openclaw Automation", icon: <Cpu className="w-10 h-10 sm:w-12 sm:h-12 text-accent" /> },
  { name: "n8n Automation",      icon: <Workflow className="w-10 h-10 sm:w-12 sm:h-12 text-accent" /> },
  { name: "Azure",               icon: <Cloud className="w-10 h-10 sm:w-12 sm:h-12 text-accent" /> },
  { name: "Amazon Web Hosting",  icon: <Server className="w-10 h-10 sm:w-12 sm:h-12 text-accent" /> },
  { name: "Basic Networking",    icon: <Network className="w-10 h-10 sm:w-12 sm:h-12 text-accent" /> },
  { name: "C++",                 imgSrc: CppLogo },
  { name: "Canva",               imgSrc: CsharpLogo },
  { name: "Java",                imgSrc: JavaLogo },
  { name: "Linux",               imgSrc: LinuxLogo },
  { name: "C",                   imgSrc: CLogo },
  { name: "Photoshop",           imgSrc: PhotoshopLogo },
  { name: "Illustrator",         imgSrc: IllustratorLogo },
  { name: "Lightroom",           imgSrc: LightroomLogo },
];

const Skills = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5">
        {skillsData.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.04,
              type: "spring",
              stiffness: 280,
              damping: 18,
            }}
          >
            <HoverCard intensity={15}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 380, damping: 22 }}
                className="shimmer-card flex flex-col items-center justify-center p-4 transition-all duration-300 border group rounded-xl bg-dark-100 border-dark-200 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 relative overflow-hidden cursor-pointer"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-accent/5 via-transparent to-transparent rounded-xl" />

                {skill.imgSrc ? (
                  <motion.img
                    src={skill.imgSrc}
                    alt={skill.name}
                    width={48}
                    height={48}
                    loading="lazy"
                    decoding="async"
                    className="object-contain w-10 h-10 mb-3 sm:w-12 sm:h-12 relative z-10"
                    whileHover={{ rotate: [0, -8, 8, 0], scale: 1.15 }}
                    transition={{ duration: 0.4 }}
                  />
                ) : (
                  <motion.div
                    className="flex items-center justify-center w-10 h-10 mb-3 sm:w-12 sm:h-12 relative z-10"
                    whileHover={{ rotate: [0, -8, 8, 0], scale: 1.15 }}
                    transition={{ duration: 0.4 }}
                  >
                    {skill.icon}
                  </motion.div>
                )}

                <span className="text-xs font-medium text-center text-gray-400 transition-colors group-hover:text-white relative z-10">
                  {skill.name}
                </span>

                {/* Active ring on hover */}
                <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-accent/30 transition-all duration-300" />
              </motion.div>
            </HoverCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export { Skills };
