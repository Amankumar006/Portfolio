import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SkillMatrix = ({ skills }) => {
    const containerRef = useRef(null);

    useGSAP(() => {
        // Reveal animation
        gsap.from(".skill-category-group", {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            },
        });
    }, { scope: containerRef });

    const handleMouseMove = (e, idx) => {
        const btn = e.currentTarget;
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(btn, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: "power2.out",
        });
    };

    const handleMouseLeave = (e) => {
        gsap.to(e.currentTarget, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.3)",
        });
    };

    return (
        <div ref={containerRef} className="space-y-16">
            {Object.entries(skills).map(([category, items], index) => (
                <div key={index} className="skill-category-group">
                    <h4 className="text-sm uppercase tracking-[0.3rem] text-white/40 font-light mb-8 ml-1">
                        {category === 'aiml' ? 'AI & Machine Learning' : category}
                    </h4>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {items.map((skill, idx) => (
                            <div
                                key={idx}
                                onMouseMove={(e) => handleMouseMove(e, idx)}
                                onMouseLeave={handleMouseLeave}
                                className="skill-btn relative group p-px rounded-xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 hover:from-white/30 hover:to-white/10 transition-colors duration-300"
                            >
                                <div className="relative h-full bg-black/80 backdrop-blur-xl rounded-xl p-4 flex flex-col items-center justify-center gap-2 text-center transition-colors duration-300 group-hover:bg-black/60">
                                    <div className="text-white font-light text-sm md:text-base z-10 relative">
                                        {skill.name}
                                    </div>

                                    {/* Level bar revealed on hover */}
                                    <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#cfa355] to-[#8b8b73] transition-all duration-500 w-0 group-hover:w-full opacity-0 group-hover:opacity-100" />

                                    {/* Glow effect */}
                                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 bg-white blur-xl transition-all duration-500 scale-50 group-hover:scale-100" />
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
