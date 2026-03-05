import React, { useEffect, useState, useMemo, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ReactLenis from "lenis/react";
import About from "./sections/About";
import Works from "./sections/Works";
import ContactSummary from "./sections/ContactSummary";
import Contact from "./sections/Contact";
import { useProgress } from "@react-three/drei";

// Lazy-load pages that aren't on the home route
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const ProjectJourney = lazy(() => import("./pages/ProjectJourney"));

// Home page component with all sections
const HomePage = () => {
  useEffect(() => {
    // Restore scroll position if coming back from project page
    const savedPosition = sessionStorage.getItem("scrollPosition");
    if (savedPosition) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedPosition));
        sessionStorage.removeItem("scrollPosition");
      }, 100);
    }
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Works />
        <ContactSummary />
        <Contact />
      </main>
    </>
  );
};

const App = () => {
  const { progress } = useProgress();
  const [isReady, setIsReady] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (progress === 100 && !isReady) {
      setIsReady(true);
      // Keep the loader mounted for the fade-out animation
      const timer = setTimeout(() => setShowLoader(false), 800);
      return () => clearTimeout(timer);
    }
  }, [progress, isReady]);

  // Lenis options: lighter lerp on mobile for less GPU work
  const lenisOptions = useMemo(() => {
    const isMobile = window.innerWidth < 768;
    return {
      lerp: isMobile ? 0.08 : 0.1,
      touchMultiplier: 1.5,
      smoothWheel: true,
      syncTouch: false, // native touch scroll on mobile for better perf
    };
  }, []);

  return (
    <BrowserRouter>
      <ReactLenis root options={lenisOptions} className="relative w-screen min-h-screen overflow-x-hidden">
        {showLoader && (
          <div
            className={`fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black text-white transition-opacity duration-700 font-light ${isReady ? "opacity-0 pointer-events-none" : "opacity-100"}`}
            role="progressbar"
            aria-valuenow={Math.floor(progress)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Loading portfolio"
          >
            <p className="mb-4 text-xl tracking-widest animate-pulse">
              Loading {Math.floor(progress)}%
            </p>
            <div className="relative h-1 overflow-hidden rounded w-60 bg-white/20">
              <div
                className="absolute top-0 left-0 h-full transition-all duration-300 bg-white"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        )}
        <div
          className={`${isReady ? "opacity-100" : "opacity-0"
            } transition-opacity duration-1000`}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:id" element={
              <Suspense fallback={<div className="min-h-screen bg-primary" />}>
                <ProjectDetail />
              </Suspense>
            } />
            <Route path="/project/:id/journey" element={
              <Suspense fallback={<div className="min-h-screen bg-primary" />}>
                <ProjectJourney />
              </Suspense>
            } />
          </Routes>
        </div>
      </ReactLenis>
    </BrowserRouter>
  );
};

export default App;
