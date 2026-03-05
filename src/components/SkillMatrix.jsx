import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SkillMatrix = ({ skills }) => {
    const containerRef = useRef(null);
    const isTouchDevice = typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0);

    useGSAP(() => {
        ScrollTrigger.matchMedia({
            // Desktop: full 3D cascading shelf effect
            "(min-width: 768px)": function () {
                gsap.from(".skill-category-group", {
                    y: 100,
                    opacity: 0,
                    rotateX: -20,
                    scale: 0.9,
                    duration: 1,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 85%",
                        end: "bottom 80%",
                        scrub: 1,
                    },
                });
            },

            // Mobile: simpler opacity + translateY (no 3D, no GPU layer per card)
            "(max-width: 767px)": function () {
                gsap.from(".skill-category-group", {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.08,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 90%",
                        end: "bottom 85%",
                        scrub: 0.5,
                    },
                });
            },
        });
    }, { scope: containerRef });

    const handleMouseMove = (e) => {
        if (isTouchDevice) return; // No tilt on touch — it's a hover effect
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10; // Max -10 to 10 deg
        const rotateY = ((x - centerX) / centerX) * 10;   // Max -10 to 10 deg

        gsap.to(card, {
            rotateX: rotateX,
            rotateY: rotateY,
            transformPerspective: 1000,
            scale: 1.05,
            duration: 0.1,
            ease: "power1.out"
        });

        // Move internal content slightly for parallax
        gsap.to(card.querySelector('.card-content'), {
            x: (x - centerX) * 0.1,
            y: (y - centerY) * 0.1,
            duration: 0.1
        });
    };

    const handleMouseLeave = (e) => {
        if (isTouchDevice) return;
        const card = e.currentTarget;
        gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            duration: 0.5,
            ease: "elastic.out(1, 0.5)"
        });

        gsap.to(card.querySelector('.card-content'), {
            x: 0,
            y: 0,
            duration: 0.5
        });
    };

    return (
        <div ref={containerRef} className="space-y-16">
            {Object.entries(skills).map(([category, items], index) => (
                <div key={index} className="skill-category-group">
                    <h4 className="text-sm uppercase tracking-[0.3rem] text-white/40 font-light mb-8 ml-1">
                        {category === 'aiml' ? 'AI & Machine Learning' : category}
                    </h4>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 perspective-1000">
                        {items.map((skill, idx) => (
                            <div
                                key={idx}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                                className="skill-card relative rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-colors duration-300"
                                style={!isTouchDevice ? { transformStyle: 'preserve-3d' } : undefined}
                            >
                                <div className="card-content relative h-full p-4 flex flex-col items-center justify-center gap-2 text-center z-10">
                                    <div className="text-white/80 font-light text-sm md:text-base group-hover:text-white transition-colors duration-300">
                                        {skill.name}
                                    </div>

                                    {/* Level bar revealed on hover */}
                                    <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#cfa355] to-[#8b8b73] transition-all duration-500 w-0 group-hover:w-full opacity-0 group-hover:opacity-100" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkillMatrix;
