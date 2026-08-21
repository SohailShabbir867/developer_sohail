import { motion } from "framer-motion";
import Profile from "../assets/profile.webp";
import { FadeLeft, FadeRight } from "../animations/MotionWrappers";

const infoItems = [
  { label: "Name",    value: "Sohail Shabbir" },
  { label: "Email",   value: "sohailshabbir2005@gmail.com" },
  { label: "Phone",   value: "+92 329 1729925" },
  { label: "Country", value: "Pakistan" },
  { label: "City",    value: "Rahim Yar Khan" },
];

const Intro = () => {
  return (
    <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
      {/* Profile Image */}
      <FadeLeft className="flex justify-center">
        <div className="relative group">
          {/* Pulsing glow */}
          <motion.div
            animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.95, 1.02, 0.95] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-accent/15 via-transparent to-accent/10 blur-2xl pointer-events-none"
          />

          {/* Image frame */}
          <div className="w-[220px] h-[290px] md:w-[240px] md:h-[320px] lg:w-[260px] lg:h-[360px] rounded-2xl overflow-hidden border border-dark-300 group-hover:border-accent/40 transition-all duration-500 shadow-2xl shadow-black/50 relative">
            <img
              src={Profile}
              alt="Sohail Shabbir - MERN Developer and TypeScript Model Context Protocol Engineer"
              title="Sohail Shabbir Profile"
              width={300}
              height={420}
              loading="lazy"
              className="object-cover w-full h-full brightness-105 contrast-110 saturate-[0.9] transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent" />
          </div>

          {/* Decorative corner brackets — draw on hover */}
          {/* Top-left */}
          <div className="absolute -top-3 -left-3 overflow-hidden">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "3.5rem" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="block h-0.5 bg-accent rounded-full"
            />
            <motion.span
              initial={{ height: 0 }}
              whileInView={{ height: "3.5rem" }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="block w-0.5 bg-accent rounded-full mt-0"
            />
          </div>
          {/* Bottom-right */}
          <div className="absolute -bottom-3 -right-3 flex flex-col items-end overflow-hidden">
            <motion.span
              initial={{ height: 0 }}
              whileInView={{ height: "3.5rem" }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="block w-0.5 bg-accent rounded-full ml-auto"
            />
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "3.5rem" }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="block h-0.5 bg-accent rounded-full"
            />
          </div>

          {/* Hover badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 18 }}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-accent text-white text-xs font-bold tracking-wider shadow-lg shadow-accent/30 whitespace-nowrap"
          >
            Full Stack MERN Developer
          </motion.div>
        </div>
      </FadeLeft>

      {/* Info */}
      <FadeRight>
        <motion.h3
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 20 }}
          className="mb-2 text-3xl font-bold text-white"
        >
          Who am I?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mb-6 text-sm leading-relaxed text-gray-400"
        >
          A passionate Full Stack MERN Developer specializing in building scalable web applications with MongoDB, Express.js, React.js, and Node.js, integrating AI into modern web applications alongside high-performance TypeScript Model Context Protocol (MCP) servers.
        </motion.p>

        <div className="space-y-1">
          {infoItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 260, damping: 22 }}
              whileHover={{ x: 4, transition: { type: "spring", stiffness: 400 } }}
              className="flex items-center gap-4 py-3 border-b border-dark-200 last:border-0 group cursor-default"
            >
              {/* Accent pulse dot */}
              <motion.span
                animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"
              />
              <span className="text-sm font-semibold text-accent min-w-[80px]">
                {item.label}
              </span>
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-200">
                {item.value}
              </span>
            </motion.div>
          ))}
        </div>
      </FadeRight>
    </div>
  );
};

export default Intro;
