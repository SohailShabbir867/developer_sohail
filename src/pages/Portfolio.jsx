import { motion } from "framer-motion";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "../animations/MotionWrappers";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

import PortfolioImg from "../assets/imagep.jpg";
import FoodGardenImg from "../assets/Foodgarden.png";
import EcommerceImg from "../assets/Ecommerce.png";
import WeatherImg from "../assets/weatherapp.png";
import JobsImg from "../assets/image 1.jpg";
import PasswordImg from "../assets/Passwordgenerator.png";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Built with React.js and Tailwind CSS. Showcases skills, resume, and contact information with a fully responsive design.",
    tags: ["React.js", "Tailwind CSS", "EmailJS"],
    image: PortfolioImg,
    live: "https://sohailshabbir867.github.io/Hassan-Mahmood/",
    github: "https://github.com/sohailshabbir867/Hassan-Mahmood",
  },
  {
    title: "Food Garden",
    description:
      "A fast food menu and ordering system with smooth animations and hover effects. Fully responsive across all devices.",
    tags: ["React.js", "Tailwind CSS", "Vite"],
    image: FoodGardenImg,
    live: "https://sohailshabbir867.github.io/Food-Garden/",
    github: "https://github.com/sohailshabbir867/Food-Garden",
  },
  {
    title: "E-commerce UI",
    description:
      "Features a responsive layout with product cards, categories, and an interactive shopping cart optimized for all devices.",
    tags: ["React.js", "Vite", "Tailwind CSS"],
    image: EcommerceImg,
    live: "https://sohailshabbir867.github.io/eCommerce-website/",
    github: "https://github.com/sohailshabbir867/eCommerce-website",
  },
  {
    title: "Weather App",
    description:
      "Displays real-time weather data using OpenWeatherMap API with a simple, user-friendly interface.",
    tags: ["JavaScript", "API", "CSS"],
    image: WeatherImg,
    live: "https://sohailshabbir867.github.io/my-app/",
    github: "https://github.com/sohailshabbir867/my-app",
  },
  {
    title: "Jobs Board",
    description:
      "A platform where people can find and post jobs. Includes sign-in and register pages with smooth user experience.",
    tags: ["React.js", "Tailwind CSS", "Auth"],
    image: JobsImg,
    live: "https://sohailshabbir867.github.io/Hassan-Mahmood/",
    github: "https://github.com/sohailshabbir867/Hassan-Mahmood",
  },
  {
    title: "Password Generator",
    description:
      "A secure password generator that allows users to customize password length, character types, and includes a copy-to-clipboard feature.",
    tags: ["JavaScript", "HTML", "CSS"],
    image: PasswordImg,
    live: "https://sohailshabbir867.github.io/Password_Generator-/",
    github: "https://github.com/SohailShabbir867/Password_Generator-",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="w-full py-20 lg:py-28 bg-dark-100">
      <div className="container max-w-6xl px-6 mx-auto lg:px-8">
        {/* Header */}
        <FadeUp>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-extrabold md:text-5xl lg:text-6xl gradient-text">
              My Projects
            </h2>
            <p className="max-w-2xl mx-auto text-gray-400">
              A collection of MERN stack projects showcasing full stack
              development skills
            </p>
            <div className="w-20 h-1 mx-auto mt-4 rounded-full bg-accent" />
          </div>
        </FadeUp>

        {/* Projects Grid */}
        <StaggerContainer
          staggerDelay={0.15}
          className="grid gap-8 md:grid-cols-2"
        >
          {projects.map((project, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -8 }}
                className="relative overflow-hidden transition-all duration-500 border group rounded-2xl bg-dark border-dark-200 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10"
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 transition-all duration-500 origin-left scale-x-0 bg-gradient-to-r from-accent via-accent-light to-accent group-hover:scale-x-100" />

                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-dark-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                  />
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-dark via-dark/60 to-transparent group-hover:opacity-100" />

                  {/* Project number badge */}
                  <div className="absolute flex items-center justify-center w-10 h-10 text-sm font-bold border rounded-full top-4 left-4 text-accent bg-dark/80 backdrop-blur-sm border-accent/30">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Overlay buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 transition-all duration-300 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 rounded-lg bg-dark-100/90 backdrop-blur-sm hover:bg-accent hover:scale-105 border border-white/10 hover:border-accent"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 rounded-lg bg-accent/90 backdrop-blur-sm hover:bg-accent hover:scale-105 border border-accent"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white transition-colors group-hover:text-accent">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      size={18}
                      className="transition-all duration-300 text-dark-300 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                  <p className="mb-5 text-sm leading-relaxed text-gray-400">
                    {project.description}
                  </p>

                  {/* Tags with improved styling */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-dark-200">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-xs font-semibold tracking-wide rounded-lg text-accent bg-accent/10 border border-accent/20 group-hover:border-accent/40 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export { Portfolio };
