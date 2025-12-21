import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ProjectJourney = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Initial state
        gsap.set(".reveal-text", { y: 100, opacity: 0 });
        gsap.set(".line-reveal", { scaleX: 0, transformOrigin: "left" });

        // Animation sequence
        tl.to(".line-reveal", {
            scaleX: 1,
            duration: 1.5,
            ease: "expo.out",
        })
            .to(
                ".reveal-text",
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power4.out",
                },
                "-=1.0"
            )
            .from(
                ".back-button",
                {
                    opacity: 0,
                    y: 20,
                    duration: 0.8,
                    ease: "power2.out",
                },
                "-=0.5"
            );
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-[80px] animate-pulse delay-1000" />
            </div>

            <div className="max-w-4xl w-full relative z-10 text-center">
                {/* Main Heading */}
                <div className="overflow-hidden mb-8 relative">
                    <h1 className="reveal-text text-6xl md:text-8xl lg:text-9xl font-light tracking-tight uppercase leading-none">
                        Coming
                        <span className="block italic font-normal text-white/50">Soon</span>
                    </h1>
                </div>

                {/* Decorative Line */}
                <div className="w-full h-px bg-white/20 mb-8 overflow-hidden">
                    <div className="line-reveal w-full h-full bg-white" />
                </div>

                {/* Description */}
                <div className="overflow-hidden mb-12">
                    <p className="reveal-text text-xl md:text-2xl font-light text-white/60 tracking-wide max-w-2xl mx-auto leading-relaxed">
                        The detailed documentation and journey of this project is currently being crafted.
                        Prepare for a deep dive into the architecture, challenges, and solutions.
                    </p>
                </div>

                {/* Back Button */}
                <button
                    onClick={() => navigate(`/project/${id}`)}
                    className="back-button group relative inline-flex items-center gap-4 px-8 py-4 overflow-hidden rounded-full hover:bg-white transition-colors duration-500"
                >
                    <span className="absolute inset-0 border border-white/30 rounded-full" />
                    <Icon
                        icon="lucide:arrow-left"
                        className="text-xl text-white group-hover:text-black transition-colors duration-500"
                    />
                    <span className="text-sm uppercase tracking-[0.2em] text-white group-hover:text-black transition-colors duration-500 font-light">
                        Return to Project
                    </span>
                </button>
            </div>
        </div>
    );
};

export default ProjectJourney;
