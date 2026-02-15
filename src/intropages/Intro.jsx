import { motion } from "framer-motion";
import Profile from "../assets/profile.webp";
import { FadeLeft, FadeRight } from "../animations/MotionWrappers";

const infoItems = [
  { label: "Name", value: "Sohail Shabbir" },
  { label: "Email", value: "sohailshabbir2005@gmail.com" },
  { label: "Phone", value: "+92 329 1729925" },
  { label: "Country", value: "Pakistan" },
  { label: "City", value: "Rahim Yar Khan" },
];

const Intro = () => {
  return (
    <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
      {/* Profile Image */}
      <FadeLeft className="flex justify-center">
        <div className="relative group">
          {/* Background glow */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/15 via-transparent to-accent/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="w-[260px] h-[340px] md:w-[280px] md:h-[380px] lg:w-[300px] lg:h-[420px] rounded-2xl overflow-hidden border border-dark-300 group-hover:border-accent/30 transition-all duration-500 shadow-2xl shadow-black/40">
            <img
              src={Profile}
              alt="Sohail Shabbir"
              width={300}
              height={420}
              loading="lazy"
              className="object-cover w-full h-full brightness-105 contrast-110 saturate-[0.9] transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
            />
            {/* Bottom gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent" />
          </div>

          {/* Decorative corners */}
          <div className="absolute w-16 h-16 border-t-2 border-l-2 -top-3 -left-3 border-accent rounded-tl-xl opacity-70 group-hover:opacity-100 transition-opacity" />
          <div className="absolute w-16 h-16 border-b-2 border-r-2 -bottom-3 -right-3 border-accent rounded-br-xl opacity-70 group-hover:opacity-100 transition-opacity" />
        </div>
      </FadeLeft>

      {/* Info */}
      <FadeRight>
        <h3 className="mb-2 text-3xl font-bold text-white">Who am I?</h3>
        <p className="mb-6 text-sm leading-relaxed text-gray-400">
          A passionate Full Stack MERN Developer specializing in building
          scalable web applications with MongoDB, Express.js, React.js, and
          Node.js. I turn ideas into high-performance, responsive digital
          experiences.
        </p>

        <div className="space-y-4">
          {infoItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 py-3 border-b border-dark-200 last:border-0"
            >
              <span className="text-sm font-semibold text-accent min-w-[80px]">
                {item.label}
              </span>
              <span className="text-sm text-gray-300">{item.value}</span>
            </motion.div>
          ))}
        </div>
      </FadeRight>
    </div>
  );
};

export default Intro;
