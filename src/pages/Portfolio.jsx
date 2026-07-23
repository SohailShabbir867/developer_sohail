import { motion } from "framer-motion";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
  HoverCard,
} from "../animations/MotionWrappers";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

import PortfolioImg from "../assets/imagep.webp";
import FoodGardenImg from "../assets/Foodgarden.webp";
import EcommerceImg from "../assets/Ecommerce.webp";
import WeatherImg from "../assets/weatherapp.webp";
import JobsImg from "../assets/image 1.webp";
import PasswordImg from "../assets/Passwordgenerator.webp";
import Dailyblogs from "../assets/dailyblogs.png";
import RoomBridge from "../assets/roombridge.png";

const projects = [
  {
    title: "MERN Stack Blogging Website",
    description:
      "Build in the MERN Stack with the authentication and validations control with the chating feature integrated and add the TypeScript MCP Server to post the blogs using the ai agent.",
    tags: ["React.js", "Tailwind CSS", "EmailJS", "MCP Server"],
    image: Dailyblogs,
    live: "https://dailyblogs.website/",
    github: "https://github.com/SohailShabbir867/",
  },
  {
    title: "RoomBridge Rooms Finder Website",
    description:
      "Build in the MERN Stack with the authentication and validations control through which the students and the professionals can find the rooms and the hostels in the city with the chat feature integrated.",
    tags: ["React.js", "Tailwind CSS", "EmailJS", "Socket.io", "MongoDB"],
    image: RoomBridge,
    live: "https://roombridgefrontend.vercel.app/",
    github: "https://github.com/SohailShabbir867/",
  },
  {
    title: "Portfolio Website",
    description:
      "Built with React.js and Tailwind CSS. Showcases skills, resume, and contact information with a fully responsive design.",
    tags: ["React.js", "Tailwind CSS", "EmailJS"],
    image: PortfolioImg,
    live: "https://SohailShabbir867.github.io/Hassan-Mahmood/",
    github: "https://github.com/SohailShabbir867/Hassan-Mahmood",
  },
  {
    title: "Food Garden",
    description:
      "A fast food menu and ordering system with smooth animations and hover effects. Fully responsive across all devices.",
    tags: ["React.js", "Tailwind CSS", "Vite"],
    image: FoodGardenImg,
    live: "https://SohailShabbir867.github.io/Food-Garden/",
    github: "https://github.com/SohailShabbir867/Food-Garden",
  },
  {
    title: "E-commerce UI",
    description:
      "Features a responsive layout with product cards, categories, and an interactive shopping cart optimized for all devices.",
    tags: ["React.js", "Vite", "Tailwind CSS"],
    image: EcommerceImg,
    live: "https://SohailShabbir867.github.io/eCommerce-website/",
    github: "https://github.com/SohailShabbir867/eCommerce-website",
  },
  {
    title: "Weather App",
    description:
      "Displays real-time weather data using OpenWeatherMap API with a simple, user-friendly interface.",
    tags: ["JavaScript", "API", "CSS"],
    image: WeatherImg,
    live: "https://SohailShabbir867.github.io/my-app/",
    github: "https://github.com/SohailShabbir867/my-app",
  },
  {
    title: "Jobs Board",
    description:
      "A platform where people can find and post jobs. Includes sign-in and register pages with smooth user experience.",
    tags: ["React.js", "Tailwind CSS", "Auth"],
    image: JobsImg,
    live: "https://SohailShabbir867.github.io/Hassan-Mahmood/",
    github: "https://github.com/SohailShabbir867/Hassan-Mahmood",
  },
  {
    title: "Password Generator",
    description:
      "A secure password generator that allows users to customize password length, character types, and includes a copy-to-clipboard feature.",
    tags: ["JavaScript", "HTML", "CSS"],
    image: PasswordImg,
    live: "https://SohailShabbir867.github.io/Password_Generator-/",
    github: "https://github.com/SohailShabbir867/Password_Generator-",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="w-full py-14 lg:py-20 bg-dark-100 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-accent/4 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-accent/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="container max-w-7xl px-6 mx-auto lg:px-8">
        {/* Header */}
        <FadeUp>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-extrabold md:text-4xl lg:text-5xl gradient-text">
              My Projects
            </h2>
            <p className="max-w-2xl mx-auto text-gray-400">
              A collection of MERN stack projects showcasing full stack development skills
            </p>
            <motion.div
              className="h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-accent via-accent-light to-accent"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
        </FadeUp>

        {/* Projects Grid */}
        <StaggerContainer staggerDelay={0.12} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <StaggerItem key={index}>
              <HoverCard intensity={8} className="h-full">
                <motion.div
                  className="shimmer-card relative overflow-hidden transition-all duration-500 border group rounded-2xl bg-dark border-dark-200 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/15 h-full flex flex-col"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Glowing top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-500 origin-left scale-x-0 group-hover:scale-x-100 z-20"
                    style={{ background: "linear-gradient(90deg, #FF6600, #FF8533, #FF6600)", boxShadow: "0 0 12px rgba(255,102,0,0.6)" }}
                  />

                  {/* Image */}
                  <div className="relative h-44 overflow-hidden bg-dark-200 flex-shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={224}
                      loading="lazy"
                      decoding="async"
                      className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110 group-hover:brightness-60"
                    />
                    <div className="absolute inset-0 transition-opacity duration-400 opacity-0 bg-gradient-to-t from-dark via-dark/70 to-transparent group-hover:opacity-100" />

                    {/* Project number badge */}
                    <motion.div
                      className="absolute flex items-center justify-center w-10 h-10 text-sm font-bold border rounded-full top-4 left-4 text-accent bg-dark/90 backdrop-blur-sm border-accent/40"
                      whileInView={{ scale: [0, 1.2, 1] }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 + 0.3, type: "spring", stiffness: 300 }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </motion.div>

                    {/* Overlay buttons */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 transition-all duration-300 translate-y-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.08, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 rounded-lg bg-dark-100/90 backdrop-blur-sm hover:bg-accent border border-white/10 hover:border-accent"
                      >
                        <Github size={16} />
                        Code
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.08, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 rounded-lg bg-accent/90 backdrop-blur-sm hover:bg-accent border border-accent"
                        style={{ boxShadow: "0 0 20px rgba(255,102,0,0.3)" }}
                      >
                        <ExternalLink size={16} />
                        Live
                      </motion.a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-white transition-colors group-hover:text-accent">
                        {project.title}
                      </h3>
                      <motion.div
                        className="transition-all duration-300 text-dark-300 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      >
                        <ArrowUpRight size={18} />
                      </motion.div>
                    </div>
                    <p className="mb-5 text-sm leading-relaxed text-gray-400 flex-1">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-dark-200">
                      {project.tags.map((tag, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.06 + index * 0.04 }}
                          whileHover={{ scale: 1.08, y: -1 }}
                          className="px-3 py-1.5 text-xs font-semibold tracking-wide rounded-lg text-accent bg-accent/10 border border-accent/20 group-hover:border-accent/40 transition-colors cursor-default"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export { Portfolio };
