import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "BS in Software Engineering",
    institution: "The Islamia University of Bahawalpur",
    date: "2025 – Present",
    description: [
      "Specializing in Full Stack MERN Development — MongoDB, Express.js, React.js, Node.js.",
      "Building real-world projects using the MERN stack with REST APIs and database management.",
      "Actively participating in coding competitions, hackathons, and developer workshops.",
    ],
  },
  {
    degree: "Intermediate in ICS",
    institution: "Punjab College of Science Zahir Peer",
    date: "2023 – 2025",
    description: [
      "Studied Mathematics and Physics for engineering preparation.",
      "Achieved high grades and actively engaged in science clubs.",
    ],
  },
  {
    degree: "Matriculation in Science",
    institution: "Government High School Jajjah Abbasina",
    date: "2019 – 2021",
    description: [
      "Focused on Computer Science and general sciences.",
      "Participated in technology fairs and inter-school competitions.",
    ],
  },
];

const Education = () => {
  return (
    <div className="space-y-8">
      {educationData.map((edu, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15, duration: 0.5 }}
          className="relative p-6 transition-all duration-300 border group rounded-2xl bg-dark-100 border-dark-200 hover:border-accent/30 lg:p-8"
        >
          {/* Timeline dot */}
          <div className="absolute w-3 h-3 rounded-full -left-1.5 top-8 bg-accent hidden lg:block" />

          <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
            {/* Icon */}
            <div className="flex items-center justify-center flex-shrink-0 w-14 h-14 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
              <GraduationCap className="w-7 h-7 text-accent" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="mb-1 text-xl font-bold text-white">
                {edu.degree}
              </h3>
              <p className="mb-1 text-sm font-medium text-accent">
                {edu.institution}
              </p>
              <p className="mb-4 text-xs font-medium text-gray-500">
                {edu.date}
              </p>
              <ul className="space-y-2">
                {edu.description.map((desc, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-gray-400"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/60 flex-shrink-0" />
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Education;
