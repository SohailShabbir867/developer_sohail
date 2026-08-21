import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
  HoverCard,
} from "../animations/MotionWrappers";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  Terminal,
  Layers,
  Bot,
  Sparkles,
  Globe,
  FileCode2,
  Check,
  Copy,
  Server,
  Zap,
  Code,
} from "lucide-react";

import PortfolioImg from "../assets/imagep.webp";
import FoodGardenImg from "../assets/Foodgarden.webp";
import EcommerceImg from "../assets/Ecommerce.webp";
import WeatherImg from "../assets/weatherapp.webp";
import JobsImg from "../assets/image 1.webp";
import PasswordImg from "../assets/Passwordgenerator.webp";
import Dailyblogs from "../assets/dailyblogs.png";
import RoomBridge from "../assets/roombridge.png";
import ResearchImg from "../assets/researchflow.jpg";

// ── Full Stack Web Applications ──
const webProjects = [
  {
    id: "mern-dailyblogs",
    title: "MERN Stack Blogging Website",
    category: "web",
    description:
      "Full-stack MERN blogging platform featuring JWT authentication, rich text publishing, real-time chat interactions, and an integrated TypeScript MCP Server for autonomous AI blog posting.",
    tags: ["React.js", "Node.js", "MongoDB", "Express", "Tailwind CSS", "MCP Server"],
    image: Dailyblogs,
    live: "https://dailyblogs.website/",
    github: "https://github.com/SohailShabbir867/",
    featured: true,
  },
  {
    id: "mern-roombridge",
    title: "RoomBridge - Room & Hostel Finder",
    category: "web",
    description:
      "Comprehensive room and accommodation discovery web application built on the MERN stack with Socket.io real-time chat, geo-filtering, and verified property listing management.",
    tags: ["React.js", "Tailwind CSS", "Socket.io", "MongoDB", "Express.js"],
    image: RoomBridge,
    live: "https://roombridge.site",
    github: "https://github.com/SohailShabbir867/RoomBridge",
    featured: true,
  },
  {
    id: "ai-researchflow",
    title: "AI ResearchFlow - Autonomous Deep Research",
    category: "web",
    description:
      "Autonomous AI deep-research engine powered by Google Gemini and arXiv APIs. Orchestrates parallel search, synthesizes academic literature, and generates structured research reports.",
    tags: ["React.js", "Gemini 2.5", "Tailwind CSS", "arXiv API", "AI Agents"],
    image: ResearchImg,
    live: "https://sohailshabbir867.github.io/ai-researchflow/",
    github: "https://github.com/SohailShabbir867/ai-researchflow",
    featured: true,
  },
  {
    id: "food-garden",
    title: "FoodGarden - Full-Stack Food Ordering Platform",
    category: "web",
    description:
      "Full-featured food delivery web platform with dynamic menu filtering, interactive cart management, real-time order tracking, and responsive mobile-first architecture.",
    tags: ["React.js", "Node.js", "Tailwind CSS", "Express", "Stripe"],
    image: FoodGardenImg,
    live: "https://sohailshabbir867.github.io/Food-Garden-Website/",
    github: "https://github.com/SohailShabbir867/Food-Garden-Website",
    featured: true,
  },
  {
    id: "ecommerce-platform",
    title: "Modern E-Commerce Storefront",
    category: "web",
    description:
      "High-performance e-commerce frontend with category filtering, product search, cart state management, and optimized checkout flow.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    image: EcommerceImg,
    live: "https://SohailShabbir867.github.io/eCommerce-website/",
    github: "https://github.com/SohailShabbir867/eCommerce-website",
  },
  {
    id: "weather-app",
    title: "Real-Time Weather Intelligence",
    category: "web",
    description:
      "Live weather reporting application leveraging OpenWeatherMap API with location-based forecasts, weather radar, and intuitive interface.",
    tags: ["JavaScript", "OpenWeather API", "CSS3", "Async/Await"],
    image: WeatherImg,
    live: "https://SohailShabbir867.github.io/my-app/",
    github: "https://github.com/SohailShabbir867/my-app",
  },
  {
    id: "jobs-board",
    title: "Tech Jobs Board Platform",
    category: "web",
    description:
      "Platform connecting developers and employers with job listing feeds, application tracking, and authentication workflows.",
    tags: ["React.js", "Tailwind CSS", "Authentication", "CRUD"],
    image: JobsImg,
    live: "https://SohailShabbir867.github.io/Hassan-Mahmood/",
    github: "https://github.com/SohailShabbir867/Hassan-Mahmood",
  },
  {
    id: "password-generator",
    title: "Cryptographic Password Generator",
    category: "web",
    description:
      "Customizable entropy password creator with character-set toggles, strength evaluation algorithms, and instant clipboard copy.",
    tags: ["JavaScript", "HTML5", "CSS3", "Security"],
    image: PasswordImg,
    live: "https://SohailShabbir867.github.io/Password_Generator-/",
    github: "https://github.com/SohailShabbir867/Password_Generator-",
  },
  {
    id: "portfolio-website",
    title: "Developer Portfolio Website",
    category: "web",
    description:
      "Interactive developer portfolio showcasing MERN stack expertise, MCP servers, and modern web background animations.",
    tags: ["React.js", "Tailwind CSS", "HTML5 Canvas", "EmailJS"],
    image: PortfolioImg,
    live: "https://deveolpersohail.online",
    github: "https://github.com/SohailShabbir867/",
  },
];

// ── Model Context Protocol (MCP) Servers (3 Core Servers) ──
const mcpServers = [
  {
    id: "chrome-devtools-mcp",
    title: "Chrome DevTools MCP Server",
    badge: "Browser Automation",
    category: "mcp",
    description:
      "Comprehensive Chrome DevTools Protocol (CDP) MCP server allowing AI agents to control browser sessions, navigate pages, extract full DOM trees, evaluate JavaScript, inspect network waterfalls, test accessibility, and capture high-resolution screenshots.",
    tags: ["TypeScript", "Chrome DevTools", "Puppeteer", "DOM Inspector", "Web Automation"],
    tools: ["navigate_page", "take_screenshot", "evaluate_script", "inspect_network"],
    github: "https://github.com/SohailShabbir867/chrome-mcp-server",
    featured: true,
  },
  {
    id: "n8n-mcp-server",
    title: "n8n Automation MCP Server",
    badge: "Workflow Automation",
    category: "mcp",
    description:
      "Empowers LLMs and autonomous AI agents to interact directly with the n8n workflow automation engine. Trigger automated pipelines, inspect active node configurations, query execution logs in real-time, and dispatch dynamic webhook payloads.",
    tags: ["TypeScript", "n8n Engine", "MCP Protocol", "REST API", "Automation", "JSON-RPC"],
    tools: ["trigger_workflow", "list_workflows", "get_execution_data", "webhook_dispatch"],
    github: "https://github.com/SohailShabbir867/n8n_mcp",
    featured: true,
  },
  {
    id: "leads-generation-mcp",
    title: "Leads Generation MCP Server",
    badge: "B2B Sales Intelligence",
    category: "mcp",
    description:
      "Automated end-to-end B2B lead discovery and outreach pipeline server. Enables AI assistants to search local business places, analyze contact intelligence, export enriched records to Google Sheets, and generate personalized Gmail outreach drafts.",
    tags: ["TypeScript", "Lead Discovery", "Google Sheets API", "Gmail API", "B2B Pipeline"],
    tools: ["leads_search", "places_search", "leads_analyze", "add_to_sheet", "draft_gmail"],
    github: "https://github.com/SohailShabbir867/leads_generation_mcp-",
    featured: true,
  },
];

const ProjectCard = ({ project, index, isMcp, onCopyGithub, copiedId }) => {
  return (
    <StaggerItem>
      <HoverCard intensity={8} className="h-full">
        <article
          className={`shimmer-card relative overflow-hidden transition-all duration-500 border group rounded-2xl bg-dark border-dark-200 h-full flex flex-col ${
            isMcp
              ? "hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/20"
              : "hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10"
          }`}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Glowing top accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-500 origin-left scale-x-0 group-hover:scale-x-100 z-20"
            style={{
              background: "linear-gradient(90deg, #FF6600, #FF8533, #FF6600)",
              boxShadow: "0 0 12px rgba(255,102,0,0.7)",
            }}
          />

          {!isMcp && project.image ? (
            /* Image Preview Container (for Web Apps only) */
            <div className="relative h-48 overflow-hidden bg-dark-200 flex-shrink-0">
              <img
                src={project.image}
                alt={`${project.title} - Web Application`}
                width={600}
                height={224}
                loading="lazy"
                decoding="async"
                className="object-cover w-full h-full transition-all duration-700 group-hover:scale-108 group-hover:brightness-75"
              />
              <div className="absolute inset-0 transition-opacity duration-400 opacity-0 bg-gradient-to-t from-dark via-dark/75 to-transparent group-hover:opacity-100" />

              {/* Top Badges */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                <span className="px-3 py-1 text-xs font-semibold tracking-wide rounded-full text-gray-200 bg-dark/90 backdrop-blur-md border border-dark-200">
                  Web App
                </span>
              </div>

              {/* Hover Overlay Buttons */}
              <div className="absolute inset-0 flex items-center justify-center gap-3 transition-all duration-300 translate-y-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 z-10">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.06, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white transition-all duration-300 rounded-xl bg-dark-100/95 backdrop-blur-md hover:bg-accent border border-white/15 hover:border-accent shadow-lg"
                    aria-label={`View GitHub repository for ${project.title}`}
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </motion.a>
                )}

                {project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.06, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white transition-all duration-300 rounded-xl bg-accent backdrop-blur-md hover:bg-accent-light border border-accent shadow-lg shadow-accent/30"
                    aria-label={`View live application for ${project.title}`}
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </motion.a>
                )}
              </div>
            </div>
          ) : (
            /* High-Tech Terminal Header for MCP Servers (Without Images) */
            <div className="relative px-6 pt-5 pb-4 bg-gradient-to-b from-dark-200/80 to-transparent border-b border-dark-200/60 flex flex-col gap-3">
              {/* Terminal Window Header Bar */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-[11px] font-mono text-gray-400">mcp-server://v1.0</span>
                </div>

                {project.badge && (
                  <span className="px-2.5 py-0.5 text-[11px] font-medium rounded-full text-accent-light bg-accent/10 border border-accent/25">
                    {project.badge}
                  </span>
                )}
              </div>

              {/* Server Icon & Protocol Identity */}
              <div className="flex items-center justify-between mt-1">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-accent/15 border border-accent/30 text-accent shadow-lg shadow-accent/10 group-hover:scale-110 transition-transform duration-300">
                    <Server size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-accent uppercase tracking-wider block">TypeScript Protocol</span>
                    <span className="text-xs text-gray-400 font-medium">Model Context Protocol</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 rounded-lg bg-dark-100 hover:bg-accent border border-dark-200 hover:border-accent text-gray-300 hover:text-white transition-all shadow-md"
                      title="View GitHub Repository"
                      aria-label="View on GitHub"
                    >
                      <Github size={15} />
                    </motion.a>
                  )}
                  <motion.button
                    onClick={() => onCopyGithub(project.id, `git clone ${project.github}.git`)}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg bg-dark-100 hover:bg-dark-200 border border-dark-200 text-gray-300 hover:text-accent transition-all shadow-md"
                    title="Copy Git Clone Command"
                    aria-label="Copy Git Clone"
                  >
                    {copiedId === project.id ? (
                      <Check size={15} className="text-green-400" />
                    ) : (
                      <Copy size={15} />
                    )}
                  </motion.button>
                </div>
              </div>
            </div>
          )}

          {/* Content Area */}
          <div className="p-6 flex flex-col flex-1">
            {/* Header / Title */}
            <div className="flex items-start justify-between gap-2 mb-3">
              <h3 className="text-lg sm:text-xl font-bold text-white transition-colors duration-300 group-hover:text-accent">
                {project.title}
              </h3>
              <a
                href={project.github || project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open link for ${project.title}`}
                className="text-dark-300 hover:text-accent transition-colors duration-300 p-1"
              >
                <ArrowUpRight size={18} />
              </a>
            </div>

            {/* Description */}
            <p className="mb-4 text-xs sm:text-sm leading-relaxed text-gray-400 flex-1">
              {project.description}
            </p>

            {/* Specific Tools pills for MCP servers */}
            {isMcp && project.tools && (
              <div className="mb-4 p-2.5 rounded-xl bg-dark-100/90 border border-dark-200">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                  <Terminal size={12} className="text-accent" />
                  <span>Agent Tools Exposed:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((t, i) => (
                    <code
                      key={i}
                      className="px-2 py-0.5 text-[11px] font-mono text-accent-light bg-dark rounded border border-accent/20"
                    >
                      {t}()
                    </code>
                  ))}
                </div>
              </div>
            )}

            {/* Tags & Badges */}
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-dark-200">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-[11px] font-semibold tracking-wide rounded-md text-accent bg-accent/10 border border-accent/20 transition-colors duration-300 group-hover:border-accent/40"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* MCP Direct GitHub Clone Action */}
            {isMcp && (
              <div className="mt-4 pt-3 border-t border-dark-200/50 flex items-center justify-between">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-light transition-colors"
                >
                  <FileCode2 size={14} />
                  <span>Get on GitHub</span>
                  <ArrowUpRight size={13} />
                </a>

                <button
                  onClick={() => onCopyGithub(project.id, `git clone ${project.github}.git`)}
                  className="text-[11px] text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                  title="Copy git clone command"
                >
                  {copiedId === project.id ? (
                    <span className="text-green-400 flex items-center gap-1">
                      <Check size={12} /> Cloned URL
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <Copy size={12} /> git clone
                    </span>
                  )}
                </button>
              </div>
            )}
          </div>
        </article>
      </HoverCard>
    </StaggerItem>
  );
};

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [copiedId, setCopiedId] = useState(null);

  const handleCopyGithub = (id, url) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section
      id="portfolio"
      aria-label="Portfolio & Projects Section"
      className="w-full py-16 lg:py-24 bg-dark-100 relative overflow-hidden"
    >
      {/* Ambient background glow orbs */}
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-[420px] h-[420px] bg-accent/4 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[380px] h-[380px] bg-accent/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="container max-w-7xl px-6 mx-auto lg:px-8 relative z-10">
        {/* Section Header */}
        <FadeUp>
          <header className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full text-accent bg-accent/10 border border-accent/20">
              <Sparkles size={14} className="animate-pulse" />
              <span>Full-Stack Engineering & AI Systems</span>
            </div>

            <h2 className="mb-4 text-3xl font-extrabold md:text-4xl lg:text-5xl gradient-text">
              Featured Projects & MCP Servers
            </h2>

            <p className="max-w-3xl mx-auto text-sm sm:text-base leading-relaxed text-gray-400">
              Explore my production-ready <strong className="text-gray-200">MERN Stack web applications</strong>, intelligent{" "}
              <strong className="text-gray-200">RAG AI pipelines</strong>, and high-performance{" "}
              <strong className="text-accent">TypeScript Model Context Protocol (MCP) Servers</strong> built for Claude, Cursor, and autonomous AI agents.
            </p>

            <motion.div
              className="h-1 mx-auto mt-5 rounded-full bg-gradient-to-r from-accent via-accent-light to-accent"
              initial={{ width: 0 }}
              whileInView={{ width: 90 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </header>
        </FadeUp>

        {/* Category Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap items-center justify-center p-1.5 rounded-2xl bg-dark/80 backdrop-blur-md border border-dark-200 shadow-xl">
            <button
              onClick={() => setActiveTab("all")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeTab === "all"
                  ? "bg-accent text-white shadow-lg shadow-accent/25"
                  : "text-gray-400 hover:text-white hover:bg-dark-200/50"
              }`}
            >
              <Layers size={16} />
              <span>All Projects</span>
              <span className="px-2 py-0.5 text-xs rounded-full bg-white/20">
                {webProjects.length + mcpServers.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("web")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeTab === "web"
                  ? "bg-accent text-white shadow-lg shadow-accent/25"
                  : "text-gray-400 hover:text-white hover:bg-dark-200/50"
              }`}
            >
              <Globe size={16} />
              <span>Web Applications</span>
              <span className="px-2 py-0.5 text-xs rounded-full bg-white/20">
                {webProjects.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("mcp")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeTab === "mcp"
                  ? "bg-accent text-white shadow-lg shadow-accent/25"
                  : "text-gray-400 hover:text-white hover:bg-dark-200/50"
              }`}
            >
              <Zap size={16} className={activeTab === "mcp" ? "animate-bounce" : ""} />
              <span>MCP Servers (TypeScript)</span>
              <span className="px-2 py-0.5 text-xs rounded-full bg-accent/30 text-white font-semibold">
                {mcpServers.length}
              </span>
            </button>
          </div>
        </div>

        {/* ── Main Content with AnimatePresence ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-16"
          >
            {/* ────────────────────────────────────────────────
                SECTION 1: WEB APPLICATIONS (Always First)
               ──────────────────────────────────────────────── */}
            {(activeTab === "all" || activeTab === "web") && (
              <div>
                {activeTab === "all" && (
                  <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-dark-200">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-accent/10 border border-accent/20 text-accent">
                        <Globe size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                          Full-Stack &amp; Web Applications
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-400">
                          Production-grade MERN stack systems, RAG pipelines, and responsive web apps
                        </p>
                      </div>
                    </div>
                    <span className="hidden sm:inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-dark-200 text-gray-300 border border-dark-300">
                      {webProjects.length} Projects
                    </span>
                  </div>
                )}

                <StaggerContainer
                  staggerDelay={0.08}
                  className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                  {webProjects.map((project, index) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={index}
                      isMcp={false}
                      onCopyGithub={handleCopyGithub}
                      copiedId={copiedId}
                    />
                  ))}
                </StaggerContainer>
              </div>
            )}

            {/* ────────────────────────────────────────────────
                SECTION 2: MCP SERVERS (Appears Second in All)
               ──────────────────────────────────────────────── */}
            {(activeTab === "all" || activeTab === "mcp") && (
              <div>
                {/* Highlighted MCP Server Showcase Banner */}
                <FadeUp>
                  <div className="mb-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-dark-200/90 via-dark/95 to-dark-100 border border-accent/30 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
                      <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-semibold uppercase tracking-wider rounded-lg text-accent bg-accent/15 border border-accent/30">
                          <Bot size={14} />
                          <span>Model Context Protocol (MCP) Standard</span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                          TypeScript MCP Servers for AI Agents
                        </h3>
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                          Connecting LLMs (Claude AI, Cursor IDE, Antigravity, AutoGen) directly with real-world developer tools, remote VPS instances, n8n workflows, Chrome browser automation, and B2B lead generation engines via standard JSON-RPC.
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <a
                          href="https://github.com/SohailShabbir867"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 rounded-xl bg-accent hover:bg-accent-light shadow-lg shadow-accent/25 hover:shadow-accent/40"
                        >
                          <Github size={18} />
                          <span>View MCP Repos on GitHub</span>
                          <ArrowUpRight size={16} />
                        </a>
                      </div>
                    </div>

                    {/* Protocol Feature Pills */}
                    <div className="flex flex-wrap gap-2.5 mt-6 pt-6 border-t border-dark-200">
                      {[
                        "⚡ TypeScript Native",
                        "🔒 Secure Sandboxing",
                        "🔄 JSON-RPC 2.0 Protocol",
                        "🐳 Dockerized Ready",
                        "🤖 Claude & Cursor Compatible",
                        "📊 Real-time Telemetry",
                      ].map((feat, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-medium text-gray-300 bg-dark-100/90 rounded-lg border border-dark-200"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeUp>

                {/* MCP Section Title */}
                <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-dark-200">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-accent/10 border border-accent/20 text-accent">
                      <Server size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        Open-Source TypeScript MCP Servers
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400">
                        Modular tools and protocol servers extending AI capabilities
                      </p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-accent/15 text-accent-light border border-accent/30">
                    {mcpServers.length} MCP Servers
                  </span>
                </div>

                {/* MCP Grid */}
                <StaggerContainer
                  staggerDelay={0.08}
                  className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                  {mcpServers.map((project, index) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={index}
                      isMcp={true}
                      onCopyGithub={handleCopyGithub}
                      copiedId={copiedId}
                    />
                  ))}
                </StaggerContainer>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export { Portfolio };
