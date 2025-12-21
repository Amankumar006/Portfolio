import React, { useEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { projects } from "../constants";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Marquee from "../components/Marquee";

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find((p) => p.id === parseInt(id));
    const containerRef = useRef(null);
    const titleRef = useRef(null);

    // Get other projects for "More Projects" section (exclude current)
    const otherProjects = projects
        .filter((p) => p.id !== parseInt(id))
        .slice(0, 3);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    useGSAP(
        () => {
            const tl = gsap.timeline();

            tl.from(titleRef.current, {
                y: "100%",
                duration: 1.2,
                ease: "power4.out",
            });

            tl.from(
                ".animate-in",
                {
                    y: 80,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out",
                },
                "-=0.5"
            );
        },
        { dependencies: [id], revertOnUpdate: true }
    );

    if (!project) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-primary text-black font-amiamie">
                <h1 className="text-6xl mb-8">404</h1>
                <p className="text-2xl mb-8 text-black/60">Project Not Found</p>
                <button
                    onClick={() => navigate("/")}
                    className="flex items-center gap-3 px-8 py-4 border-2 border-black rounded-full hover:bg-black hover:text-white transition-all duration-300"
                >
                    <Icon icon="lucide:arrow-left" />
                    Back to Home
                </button>
            </div>
        );
    }

    const marqueeItems = project.frameworks.map((f) => f.name);

    // Project details as numbered list items
    const projectDetails = [
        { label: "Role", value: project.role || "Full Stack Developer" },
        { label: "Duration", value: project.duration || "Ongoing Project" },
        { label: "Status", value: project.status || "Active Development" },
    ];

    return (
        <div ref={containerRef} className="min-h-screen bg-primary font-amiamie">
            {/* Fixed Back Button */}
            <div className="fixed top-6 left-6 z-50">
                <button
                    onClick={() => navigate("/")}
                    className="flex items-center gap-2 px-5 py-3 bg-black text-white rounded-full hover:scale-105 transition-all duration-300 shadow-lg"
                >
                    <Icon icon="lucide:arrow-left" className="text-lg" />
                    <span className="text-sm tracking-wider uppercase font-light">Back</span>
                </button>
            </div>

            {/* Hero Section */}
            <section className="min-h-screen flex flex-col justify-end pb-16 relative overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(${project.bgImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />


                <div className="relative z-10">
                    <div className="animate-in px-1 sm:px-1 md:px-3 lg:px-6 pt-32 mb-8">
                        <p className="text-sm font-light tracking-[0.5rem] uppercase text-black/60">
                            {project.frameworks.map((f) => f.name).join(" • ")}
                        </p>
                    </div>

                    <div className="px-1 sm:px-1 md:px-3 lg:px-6 overflow-hidden">
                        <h1
                            ref={titleRef}
                            className="text-[36px] sm:text-[48px] md:text-[68px] lg:text-[90px] xl:text-[110px] 2xl:text-[130px] uppercase leading-tight tracking-tight text-black break-words"
                        >
                            {project.name}
                        </h1>
                    </div>

                    <div className="relative px-1 sm:px-1 md:px-3 lg:px-6 mt-16">
                        <div className="absolute inset-x-0 border-t-2 border-black/20" />
                        <div className="py-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                            <p className="animate-in font-light uppercase value-text-responsive text-black/80 max-w-3xl">
                                {project.description}
                            </p>

                            {/* Hero Link Button */}
                            {(project.liveDemo || project.github) && (
                                <a
                                    href={project.liveDemo || project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="animate-in flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full hover:scale-105 transition-all duration-300 group flex-shrink-0"
                                >
                                    <Icon
                                        icon={project.liveDemo ? "lucide:globe" : "mdi:github"}
                                        className="text-xl"
                                    />
                                    <span className="text-sm tracking-wider uppercase font-light">
                                        {project.liveDemo ? "View Live" : "View Code"}
                                    </span>
                                    <Icon
                                        icon="lucide:arrow-up-right"
                                        className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                    />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack Marquee */}
            <Marquee items={marqueeItems} className="text-white bg-black" icon="mdi:star-four-points" />

            {/* Overview Section - Clean minimal style */}
            <section className="bg-black text-white py-24 rounded-t-4xl">
                <div className="px-1 sm:px-1 md:px-3 lg:px-6">
                    <div className="animate-in mb-16">
                        <p className="text-sm font-light tracking-[0.5rem] uppercase text-white/50 mb-4">
                            About This Project
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light">Overview</h2>
                    </div>

                    <div className="animate-in max-w-4xl">
                        <p className="text-xl md:text-2xl lg:text-3xl font-light text-white/70 leading-relaxed">
                            {project.longDescription || project.description}
                        </p>
                    </div>

                    {/* Project Details - Numbered list like Services */}
                    <div className="mt-16 pt-8 border-t border-white/20">
                        {projectDetails.map((detail, index) => (
                            <div key={index} className="animate-in">
                                <div className="flex items-center py-6">
                                    <span className="text-lg text-white/30 font-light mr-12 w-8">
                                        0{index + 1}
                                    </span>
                                    <span className="text-white/50 uppercase tracking-wider text-sm mr-8 w-24">
                                        {detail.label}
                                    </span>
                                    <span className="text-2xl md:text-3xl font-light text-white/80 flex-1">
                                        {detail.value}
                                    </span>
                                </div>
                                {index < projectDetails.length - 1 && (
                                    <div className="w-full h-px bg-white/10" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack - Clean numbered list */}
            <section className="bg-black text-white py-16">
                <div className="px-1 sm:px-1 md:px-3 lg:px-6">
                    <div className="animate-in mb-12">
                        <p className="text-sm font-light tracking-[0.5rem] uppercase text-white/50 mb-4">
                            Built With
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light">Tech Stack</h2>
                    </div>

                    <div className="border-t border-white/20">
                        {project.frameworks.map((framework, index) => (
                            <div key={framework.id} className="animate-in">
                                <div className="flex items-center py-6">
                                    <span className="text-lg text-white/30 font-light mr-12">
                                        0{index + 1}
                                    </span>
                                    <span className="text-2xl md:text-3xl lg:text-4xl font-light text-white/80">
                                        {framework.name}
                                    </span>
                                </div>
                                {index < project.frameworks.length - 1 && (
                                    <div className="w-full h-px bg-white/10" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section - Clean numbered list */}
            {project.features && project.features.length > 0 && (
                <section className="bg-black text-white py-16">
                    <div className="px-1 sm:px-1 md:px-3 lg:px-6">
                        <div className="animate-in mb-12">
                            <p className="text-sm font-light tracking-[0.5rem] uppercase text-white/50 mb-4">
                                What Makes It Special
                            </p>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light">Key Features</h2>
                        </div>

                        <div className="border-t border-white/20">
                            {project.features.map((feature, index) => (
                                <div key={index} className="animate-in">
                                    <div className="flex items-start py-6 gap-8">
                                        <span className="text-lg text-white/30 font-light flex-shrink-0">
                                            0{index + 1}
                                        </span>
                                        <p className="text-2xl md:text-3xl font-light text-white/80">
                                            {feature}
                                        </p>
                                    </div>
                                    {index < project.features.length - 1 && (
                                        <div className="w-full h-px bg-white/10" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Challenges Section */}
            {project.challenges && (
                <section className="bg-black text-white py-24">
                    <div className="px-1 sm:px-1 md:px-3 lg:px-6">
                        <div className="animate-in mb-16">
                            <p className="text-sm font-light tracking-[0.5rem] uppercase text-white/50 mb-4">
                                The Journey
                            </p>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light">
                                Challenges & Solutions
                            </h2>
                        </div>

                        <div className="animate-in max-w-4xl mb-12">
                            <p className="text-xl md:text-2xl font-light text-white/70 leading-relaxed">
                                {project.challenges}
                            </p>
                        </div>

                        <div className="animate-in flex justify-end">
                            <Link
                                to={`/project/${project.id}/journey`}
                                className="group flex items-center gap-4 px-10 py-5 border border-white/30 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                            >
                                <Icon icon="lucide:book-open" className="text-2xl" />
                                <span className="text-lg tracking-wider uppercase font-light">Read Full Journey</span>
                                <Icon icon="lucide:arrow-right" className="text-2xl transition-transform duration-300 group-hover:translate-x-2" />
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            {/* Links Section */}
            {(project.github || project.liveDemo) && (
                <section className="bg-primary py-24 rounded-t-4xl -mt-8">
                    <div className="px-1 sm:px-1 md:px-3 lg:px-6">
                        <div className="animate-in mb-16">
                            <p className="text-sm font-light tracking-[0.5rem] uppercase text-black/50 mb-4">
                                Explore More
                            </p>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-black">
                                Links
                            </h2>
                        </div>

                        <div className="animate-in flex flex-wrap gap-6">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 px-8 py-5 border-2 border-black rounded-full hover:bg-black hover:text-white transition-all duration-300 group"
                                >
                                    <Icon icon="mdi:github" className="text-2xl" />
                                    <span className="text-lg tracking-wider uppercase font-light">View Code</span>
                                    <Icon icon="lucide:arrow-up-right" className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </a>
                            )}
                            {project.liveDemo && (
                                <a
                                    href={project.liveDemo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 px-8 py-5 bg-black text-white rounded-full hover:bg-gold hover:text-black transition-all duration-300 group"
                                >
                                    <Icon icon="lucide:globe" className="text-2xl" />
                                    <span className="text-lg tracking-wider uppercase font-light">Live Demo</span>
                                    <Icon icon="lucide:arrow-up-right" className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </a>
                            )}
                        </div>
                    </div>
                </section>
            )}

            {/* More Projects Section - Works style list */}
            <section className={`bg-primary py-24 ${!(project.github || project.liveDemo) ? 'rounded-t-4xl -mt-8' : ''}`}>
                <div className="px-1 sm:px-1 md:px-3 lg:px-6">
                    <div className="animate-in mb-16">
                        <p className="text-sm font-light tracking-[0.5rem] uppercase text-black/50 mb-4">
                            Continue Exploring
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-black">
                            More Projects
                        </h2>
                    </div>

                    {/* Clean list like Works section */}
                    <div className="animate-in">
                        {otherProjects.map((proj, index) => (
                            <Link
                                key={proj.id}
                                to={`/project/${proj.id}`}
                                className="block group"
                            >
                                <div className="flex justify-between items-center py-5 transition-all duration-300 group-hover:px-6">
                                    <h3 className="text-[26px] lg:text-[32px] leading-none text-black">
                                        {proj.name}
                                    </h3>
                                    <Icon icon="lucide:arrow-up-right" className="size-5 md:size-6" />
                                </div>
                                <div className="w-full h-0.5 bg-black/80" />
                                <div className="flex py-2 text-xs leading-loose uppercase md:text-sm gap-x-5 transition-all duration-300 group-hover:px-6">
                                    {proj.frameworks.slice(0, 4).map((framework) => (
                                        <p key={framework.id} className="text-black/70">
                                            {framework.name}
                                        </p>
                                    ))}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Navigation Footer */}
            <section className="bg-primary pb-24">
                <div className="px-1 sm:px-1 md:px-3 lg:px-6">
                    <div className="border-t-2 border-black/20 pt-12">
                        <div className="flex flex-wrap justify-between items-center gap-8">
                            <button
                                onClick={() => navigate("/")}
                                className="animate-in flex items-center gap-4 text-xl md:text-2xl font-light text-black/70 hover:text-black transition-colors group"
                            >
                                <Icon icon="lucide:arrow-left" className="transition-transform duration-300 group-hover:-translate-x-2" />
                                <span>Back to All Projects</span>
                            </button>

                            <a
                                href="https://github.com/Amankumar006"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="animate-in flex items-center gap-4 text-xl md:text-2xl font-light text-black/70 hover:text-black transition-colors group"
                            >
                                <span>View All on GitHub</span>
                                <Icon icon="lucide:arrow-up-right" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Marquee */}
            <Marquee
                items={["Say Hello", "Start A Project", "Let's Collaborate", "Get In Touch"]}
                className="text-white bg-black"
                reverse={true}
            />
        </div>
    );
};

export default ProjectDetail;
