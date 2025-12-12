import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, useNavigate } from "react-router-dom";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { projects } from "../constants";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Works = () => {
  const overlayRefs = useRef([]);
  const previewRef = useRef(null);
  const navigate = useNavigate();
  const [activeProject, setActiveProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Save scroll position before navigating
  const handleProjectClick = (e, projectId) => {
    e.preventDefault();
    sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    navigate(`/project/${projectId}`);
  };

  const text = `Featured projects that have been meticulously
    crafted with passion to drive
    results and impact.`;

  useGSAP(() => {
    gsap.from("#project", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: "#project",
      },
    });
  }, []);

  const handleMouseEnter = (index) => {
    if (!isDesktop) return;

    setActiveProject(projects[index]);

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.fromTo(
      el,
      {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        duration: 0.15,
        ease: "power2.out",
      }
    );

    // Animate preview in
    if (previewRef.current) {
      gsap.to(previewRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = (index) => {
    if (!isDesktop) return;

    setActiveProject(null);

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.to(el, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      duration: 0.2,
      ease: "power2.in",
    });

    // Animate preview out
    if (previewRef.current) {
      gsap.to(previewRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.2,
        ease: "power2.in",
      });
    }
  };

  const handleMouseMove = (e) => {
    if (!isDesktop) return;
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <section
      id="works"
      className="flex flex-col min-h-screen relative"
      onMouseMove={handleMouseMove}
    >
      <AnimatedHeaderSection
        subTitle={"Logic meets Aesthetics, Seamlessly"}
        title={"Works"}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={true}
      />

      {/* Floating Preview Image - Desktop only */}
      {isDesktop && (
        <div
          ref={previewRef}
          className="fixed pointer-events-none z-50 opacity-0 scale-95"
          style={{
            left: `${mousePosition.x + 20}px`,
            top: `${mousePosition.y - 150}px`,
            transform: "translate(0, 0)",
          }}
        >
          {activeProject && (
            <div className="w-[600px] h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-black/10">
              <div className="relative w-full h-full">
                {/* Project Screenshot */}
                <img
                  src={activeProject.image}
                  alt={activeProject.name}
                  className="absolute inset-0 w-full h-full object-contain bg-white"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Project Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white/60 text-xs uppercase tracking-[0.2rem] mb-2">
                    {activeProject.frameworks.slice(0, 3).map(f => f.name).join(" • ")}
                  </p>
                  <h3 className="text-white text-xl font-light uppercase tracking-wider">
                    {activeProject.name}
                  </h3>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="relative flex flex-col font-light">
        {projects.map((project, index) => (
          <Link
            to={`/project/${project.id}`}
            key={project.id}
            id="project"
            className="relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0"
            onClick={(e) => handleProjectClick(e, project.id)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            {/* overlay */}
            <div
              ref={(el) => {
                overlayRefs.current[index] = el;
              }}
              className="absolute inset-0 hidden md:block duration-200 bg-black -z-10 clip-path"
            />

            {/* title */}
            <div className="flex justify-between px-1 sm:px-1 md:px-3 lg:px-6 text-black transition-all duration-500 md:group-hover:px-12 md:group-hover:text-white ultra-small-screen">
              <h2 className="lg:text-[32px] text-[26px] leading-none">
                {project.name}
              </h2>
              <Icon icon="lucide:arrow-up-right" className="md:size-6 size-5" />
            </div>
            {/* divider */}
            <div className="w-full h-0.5 bg-black/80" />
            {/* framework */}
            <div className="flex px-1 sm:px-1 md:px-3 lg:px-6 text-xs leading-loose uppercase transtion-all duration-500 md:text-sm gap-x-5 md:group-hover:px-12 ultra-small-screen">
              {project.frameworks.map((framework) => (
                <p
                  key={framework.id}
                  className="text-black transition-colors duration-500 md:group-hover:text-white"
                >
                  {framework.name}
                </p>
              ))}
            </div>
            {/* mobile preview image */}
            <div className="relative flex items-center justify-center px-1 sm:px-1 md:px-3 lg:px-6 md:hidden h-[400px] ultra-small-screen">
              <img
                src={project.bgImage}
                alt={`${project.name}-bg-image`}
                className="object-cover w-full h-full rounded-md brightness-50"
              />
              <img
                src={project.image}
                alt={`${project.name}-image`}
                className="absolute bg-center px-14 rounded-xl"
              />
            </div>
          </Link>
        ))}
      </div>
      {/* GitHub Link */}
      <div className="flex justify-center py-12">
        <a
          href="https://github.com/Amankumar006"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-8 py-4 text-lg font-light tracking-wider uppercase transition-all duration-300 border-2 border-black rounded-full hover:bg-black hover:text-white group"
        >
          <span>Explore All Projects</span>
          <Icon
            icon="lucide:arrow-up-right"
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </a>
      </div>
    </section>
  );
};

export default Works;
