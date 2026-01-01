import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EducationTimeline = ({ education }) => {
    const containerRef = useRef(null);
    const lineRef = useRef(null);

    useGSAP(() => {
        const items = gsap.utils.toArray(".timeline-item");
        const container = containerRef.current;

        // Animate the vertical line drawing downwards
        gsap.fromTo(
            lineRef.current,
            { scaleY: 0, transformOrigin: "top" },
            {
                scaleY: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    start: "top 70%",
                    end: "bottom 80%",
                    scrub: 1,
                },
            }
        );

        // Animate each item as it comes into view
        items.forEach((item, i) => {
            gsap.fromTo(
                item,
                { opacity: 0, x: -50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="relative pl-8 md:pl-0" role="list" aria-label="Education Timeline">
            {/* Vertical Timeline Line */}
            <div
                ref={lineRef}
                className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white/80 via-white/20 to-transparent -translate-x-1/2"
                aria-hidden="true"
            />

            <div className="space-y-12">
                {education.map((edu, index) => (
                    <div
                        key={index}
                        className={`timeline-item relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-black border-2 border-white rounded-full -translate-x-1/2 md:-translate-x-1/2 mt-1.5 z-10 shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-transform duration-300 hover:scale-150" />

                        {/* Content Space (Empty for one side on desktop) */}
                        <div className="hidden md:block flex-1" />

                        {/* Content Card */}
                        <div className="flex-1 md:w-1/2">
                            <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-white/5">
                                <div className="flex flex-col gap-2 mb-3">
                                    <div className="flex items-center justify-between flex-wrap gap-2">
                                        <h3 className="text-xl font-medium text-white group-hover:text-blue-200 transition-colors">
                                            {edu.school}
                                        </h3>
                                        <span className="text-xs font-mono py-1 px-2 rounded-full border border-white/20 text-white/60 bg-white/5">
                                            {edu.year}
                                        </span>
                                    </div>
                                    <p className="text-lg text-white/80 font-light">{edu.degree}</p>
                                </div>

                                <p className="text-sm text-white/50 mb-3 font-light flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                                    {edu.location}
                                </p>

                                {edu.description && (
                                    <p className="text-sm text-white/60 leading-relaxed font-light border-t border-white/10 pt-3 mt-1">
                                        {edu.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EducationTimeline;
