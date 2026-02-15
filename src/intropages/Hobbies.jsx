import { motion } from "framer-motion";
import { Code, Terminal, Shield, MonitorSmartphone } from "lucide-react";

const hobbies = [
  {
    icon: <Code className="w-6 h-6 text-accent" />,
    title: "Coding & Web Development",
    highlight: "Front-End Development, React.js, JavaScript, Tailwind CSS",
    description: [
      "I enjoy writing clean and optimized code while building real-world web applications.",
      "I regularly practice problem-solving, improving logic, and exploring new technologies.",
      "My main focus is becoming a professional Full Stack Web Developer.",
    ],
  },
  {
    icon: <Terminal className="w-6 h-6 text-accent" />,
    title: "Linux Terminal Usage",
    highlight: "Bash, Zsh, CLI Tools",
    description: [
      "I enjoy working in Linux terminals and learning command-line tools for development.",
      "Managing files, automation, and running scripts improves my development workflow.",
    ],
  },
  {
    icon: <Shield className="w-6 h-6 text-accent" />,
    title: "Cybersecurity Exploration",
    highlight: "Kali Linux, Ethical Hacking Basics",
    description: [
      "I explore cybersecurity tools available in Kali Linux to understand system security.",
      "This hobby strengthens my knowledge in computer security and OS internals.",
    ],
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6 text-accent" />,
    title: "Exploring Operating Systems",
    highlight: "Windows, Linux Distros, OS Optimization",
    description: [
      "I test and explore different operating systems to understand their features and performance.",
      "This hobby helps me become a better developer with system-level understanding.",
    ],
  },
];

const Hobbies = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {hobbies.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ y: -4 }}
          className="p-6 transition-all duration-300 border group rounded-2xl bg-dark-100 border-dark-200 hover:border-accent/30"
        >
          <div className="flex items-center justify-center w-12 h-12 mb-4 transition-colors rounded-xl bg-accent/10 group-hover:bg-accent/20">
            {item.icon}
          </div>
          <h3 className="mb-1 text-lg font-bold text-white">{item.title}</h3>
          <p className="mb-3 text-xs font-medium text-accent">
            {item.highlight}
          </p>
          <ul className="space-y-2">
            {item.description.map((desc, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-gray-400"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/60 flex-shrink-0" />
                {desc}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
};

export default Hobbies;
