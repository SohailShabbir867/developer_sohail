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
    <section id="experience" className="w-full py-20 lg:py-28 bg-dark relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-accent/4 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-accent/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="container max-w-6xl px-6 mx-auto lg:px-8">
        {/* Header */}
        <FadeUp>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-extrabold md:text-5xl lg:text-6xl gradient-text">
              My Experience
            </h2>
            <p className="text-gray-400">Professional roles and contributions</p>
            <motion.div
              className="h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-accent via-accent-light to-accent"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
        </FadeUp>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — draws in from top */}
          <div className="absolute hidden w-px transform -translate-x-1/2 lg:block left-1/2 top-0 bg-dark-200 overflow-hidden"
            style={{ height: "100%" }}
          >
            <motion.div
              className="w-full bg-gradient-to-b from-accent via-accent-light to-transparent"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            />
          </div>

          <div className="space-y-16">
            {experienceData.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.7, type: "spring", stiffness: 120, damping: 18 }}
                className={`relative flex flex-col lg:flex-row ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-8`}
              >
                {/* Sonar ping dot */}
                <div className="absolute z-10 hidden transform -translate-x-1/2 lg:block left-1/2">
                  <motion.div
                    className="w-4 h-4 rounded-full bg-accent border-4 border-dark relative"
                    style={{ boxShadow: "0 0 10px rgba(255,102,0,0.6)" }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.4, type: "spring", stiffness: 300 }}
                  >
                    {/* Sonar ring 1 */}
                    <motion.div
                      className="absolute inset-0 rounded-full border border-accent/50"
                      animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: index * 0.5 }}
                    />
                    {/* Sonar ring 2 */}
                    <motion.div
                      className="absolute inset-0 rounded-full border border-accent/30"
                      animate={{ scale: [1, 2.8], opacity: [0.4, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: index * 0.5 + 0.4 }}
                    />
                  </motion.div>
                </div>

                {/* Card */}
                <div className="w-full lg:w-[calc(50%-2rem)]">
                  <motion.div
                    whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(255,102,0,0.08)" }}
                    transition={{ type: "spring", stiffness: 280, damping: 22 }}
                    className="p-6 transition-all duration-300 border group rounded-2xl bg-dark-100 border-dark-200 hover:border-accent/40 lg:p-8 relative overflow-hidden"
                  >
                    {/* Inner shimmer */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-accent/4 via-transparent to-transparent rounded-2xl" />

                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.4 }}
                        className="flex items-center justify-center flex-shrink-0 w-12 h-12 transition-colors rounded-xl bg-accent/10 group-hover:bg-accent/20 group-hover:shadow-lg group-hover:shadow-accent/10"
                      >
                        <Briefcase className="w-6 h-6 text-accent" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="mb-1 text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                          {job.title}
                        </h3>
                        <p className="text-sm font-semibold text-accent mb-0.5">{job.company}</p>
                        <p className="mb-4 text-xs text-gray-500">{job.date}</p>
                        <ul className="space-y-2.5">
                          {job.description.map((desc, i) => (
                            <motion.li
                              key={i}
                              className="flex items-start gap-2 text-sm text-gray-400"
                              initial={{ opacity: 0, x: -15 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.07 + index * 0.1 + 0.3, type: "spring", stiffness: 260, damping: 22 }}
                            >
                              <motion.span
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                                className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0"
                              />
                              {desc}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Spacer */}
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
