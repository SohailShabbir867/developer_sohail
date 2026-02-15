import { useState, lazy, Suspense } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

// Lazy load below-the-fold sections
const About = lazy(() => import("./about/About"));
const Experience = lazy(() => import("./pages/Experience"));
const Portfolio = lazy(() =>
  import("./pages/Portfolio").then((m) => ({ default: m.Portfolio })),
);
const Contact = lazy(() => import("./pages/Contact"));
const Footer = lazy(() => import("./components/Footer"));

// Minimal fallback that doesn't cause layout shift
const SectionFallback = () => (
  <div className="flex items-center justify-center w-full py-20">
    <div className="w-8 h-8 border-2 rounded-full border-accent border-t-transparent animate-spin" />
  </div>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-dark">
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <main>
          <Home />
          <Suspense fallback={<SectionFallback />}>
            <About />
            <Portfolio />
            <Experience />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </LazyMotion>
  );
}

export default App;
