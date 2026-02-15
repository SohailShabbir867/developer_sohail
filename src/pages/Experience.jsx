import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { FadeUp } from "../animations/MotionWrappers";

const experienceData = [
  {
    title: "Full Stack MERN Developer",
    company: "Freelancing",
    date: "October 2023 – Present",
    description: [
      "Developed full stack web applications using MongoDB, Express.js, React.js, and Node.js (MERN stack).",
      "Built RESTful APIs, authentication systems, and real-time features for multiple client projects.",
      "Designed responsive front-end interfaces with React.js, Tailwind CSS, and Framer Motion.",
      "Managed MongoDB databases, implemented CRUD operations, and optimized query performance.",
    ],
  },
  {
    title: "MERN Stack Developer – Intern",
    company: "Revona Tech",
    date: "October 2025 – Present",
    description: [
      "Developing the E-Mechanics project using the full MERN stack architecture.",
      "Building reusable React.js components and integrating them with Node.js/Express.js backend.",
      "Implementing MongoDB schemas, API endpoints, and improving UI/UX and site performance.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="w-full py-20 lg:py-28 bg-dark">
      <div className="container max-w-6xl px-6 mx-auto lg:px-8">
        {/* Header */}
        <FadeUp>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-extrabold md:text-5xl lg:text-6xl gradient-text">
              My Experience
            </h2>
            <p className="text-gray-400">
              Professional roles and contributions
            </p>
            <div className="w-20 h-1 mx-auto mt-4 rounded-full bg-accent" />
          </div>
        </FadeUp>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute hidden w-px h-full transform -translate-x-1/2 lg:block left-1/2 bg-dark-200" />

          <div className="space-y-12">
            {experienceData.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`relative flex flex-col lg:flex-row ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-8`}
              >
                {/* Timeline dot */}
                <div className="absolute z-10 hidden w-4 h-4 transform -translate-x-1/2 border-4 rounded-full lg:block left-1/2 bg-accent border-dark" />

                {/* Card */}
                <div className="w-full lg:w-[calc(50%-2rem)]">
                  <div className="p-6 transition-all duration-300 border group rounded-2xl bg-dark-100 border-dark-200 hover:border-accent/30 lg:p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 transition-colors rounded-xl bg-accent/10 group-hover:bg-accent/20">
                        <Briefcase className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="mb-1 text-xl font-bold text-white">
                          {job.title}
                        </h3>
                        <p className="text-sm font-medium text-accent">
                          {job.company}
                        </p>
                        <p className="mb-4 text-xs text-gray-500">{job.date}</p>
                        <ul className="space-y-2">
                          {job.description.map((desc, i) => (
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
                  </div>
                </div>

                {/* Spacer for other side */}
                <div className="hidden w-full lg:block lg:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
