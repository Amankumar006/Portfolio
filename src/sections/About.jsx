import { useRef, useState } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import EducationTimeline from "../components/EducationTimeline";
import SkillMatrix from "../components/SkillMatrix";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Icon } from "@iconify/react/dist/iconify.js";
import { stats } from "../constants";
import portfolioData from "../../portfolio-data.json";

const About = () => {
    const text = `B.E. in AI & Machine Learning student
    Building intelligent solutions that make
    a real-world impact`;

    const aboutText = `Currently pursuing AI & ML Engineering at Visvesvaraya Technological University. Passionate about creating AI-powered applications that solve real problems—from healthcare assistants to student productivity tools.`;

    const imgRef = useRef(null);
    const statsRef = useRef(null);
    const [hoveredStat, setHoveredStat] = useState(null);

    const statsData = [
        { number: stats.yearsExperience || "2", label: "Years Experience", icon: "lucide:calendar" },
        { number: stats.projectsCompleted || "25", label: "Projects Built", icon: "lucide:folder" },
        { number: stats.technologiesUsed || "10", label: "Technologies", icon: "lucide:code" },
        { number: stats.hackathonsOrganized || "3", label: "Hackathons Led", icon: "lucide:trophy" },
    ];

    const interests = [
        "Building AI-powered applications",
        "Organizing hackathons & leading tech communities",
        "Exploring cutting-edge ML and NLP",
        "Gaming & discovering new technologies",
    ];

    useGSAP(() => {
        // Image reveal with clip path
        gsap.set(imgRef.current, {
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
        });
        gsap.to(imgRef.current, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 1.5,
            ease: "power4.out",
            scrollTrigger: { trigger: imgRef.current, start: "top 80%" },
        });

        // Stats counter animation
        gsap.from(".stat-number", {
            textContent: 0,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: { trigger: statsRef.current, start: "top 80%" },
        });

        // Staggered content reveal
        gsap.from(".about-reveal", {
            y: 60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: ".about-content", start: "top 75%" },
        });

        // Interest items
        gsap.from(".interest-item", {
            x: -30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: { trigger: ".interests-container", start: "top 80%" },
        });

        // Languages Scramble Effect
        const langs = gsap.utils.toArray(".lang-item");
        langs.forEach((lang) => {
            gsap.from(lang, {
                opacity: 0,
                y: 20,
                duration: 0.8,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: ".languages-container",
                    start: "top 80%",
                },
            });
        });
    });

    return (
        <section id="about" className="min-h-screen bg-black rounded-b-4xl">
            <AnimatedHeaderSection
                subTitle={"Innovating with code, Growing through technology"}
                title={"About"}
                text={text}
                textColor={"text-white"}
                withScrollTrigger={true}
            />

            {/* Stats Bar */}
            <div ref={statsRef} className="px-1 sm:px-1 md:px-3 lg:px-6 mb-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x divide-white/10">
                    {statsData.map((stat, index) => (
                        <div
                            key={index}
                            className="relative py-8 md:px-8 first:pl-0 group cursor-default"
                            onMouseEnter={() => setHoveredStat(index)}
                            onMouseLeave={() => setHoveredStat(null)}
                        >
                            <div className="flex flex-col items-center md:items-start">
                                <div className="flex items-end gap-2 mb-2">
                                    <span className="stat-number text-5xl md:text-6xl lg:text-7xl font-light text-white">
                                        {stat.number}
                                    </span>
                                    <span className="text-3xl md:text-4xl text-white/40 font-light mb-1">+</span>
                                </div>
                                <p className="text-sm uppercase tracking-[0.2rem] text-white/40 font-light">
                                    {stat.label}
                                </p>
                            </div>
                            {/* Hover indicator */}
                            <div
                                className={`absolute bottom-0 left-0 right-0 h-0.5 bg-white transition-transform duration-500 origin-left ${hoveredStat === index ? "scale-x-100" : "scale-x-0"
                                    }`}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="about-content px-1 sm:px-1 md:px-3 lg:px-6 pb-24">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    {/* Image with overlay */}
                    <div className="lg:w-2/5 relative">
                        <div className="relative overflow-hidden rounded-3xl sticky top-24">
                            <img
                                ref={imgRef}
                                src="/images/Aman.png"
                                alt="Aman Kumar"
                                className="w-full"
                            />
                            {/* Subtle gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                            {/* Floating label */}
                            <div className="about-reveal absolute -bottom-4 left-8 bg-white text-black px-6 py-3 rounded-full z-10">
                                <span className="text-sm uppercase tracking-wider font-light">
                                    AI & ML Engineer
                                </span>
                            </div>
                        </div>

                    </div>

                    {/* Content */}
                    <div className="lg:w-3/5 flex flex-col justify-center">
                        {/* Bio */}
                        <div className="about-reveal mb-16">
                            <AnimatedTextLines
                                text={aboutText}
                                className="text-xl md:text-2xl lg:text-3xl font-light text-white/60 leading-relaxed"
                            />
                        </div>

                        {/* When I'm not coding */}
                        <div className="interests-container mb-24">
                            <p className="about-reveal text-sm uppercase tracking-[0.3rem] text-white/40 font-light mb-8">
                                When I'm not coding
                            </p>

                            <div className="space-y-4">
                                {interests.map((item, index) => (
                                    <div
                                        key={index}
                                        className="interest-item group flex items-center gap-6 py-4 border-b border-white/10 hover:border-white/30 transition-colors duration-300"
                                    >
                                        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                                            <span className="text-xs font-light">0{index + 1}</span>
                                        </div>
                                        <span className="text-lg md:text-xl font-light text-white/70 group-hover:text-white transition-colors duration-300">
                                            {item}
                                        </span>
                                        <Icon
                                            icon="lucide:arrow-right"
                                            className="ml-auto text-white/0 group-hover:text-white/50 transition-all duration-300 transform group-hover:translate-x-1"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Education Section - Redesigned */}
                        <div className="education-container mb-24">
                            <p className="about-reveal text-sm uppercase tracking-[0.3rem] text-white/40 font-light mb-12">
                                Education Journey
                            </p>
                            <EducationTimeline education={portfolioData.education} />
                        </div>

                        {/* Skills Section - Redesigned */}
                        <div className="skills-container mb-24">
                            <p className="about-reveal text-sm uppercase tracking-[0.3rem] text-white/40 font-light mb-12">
                                Technical Matrix
                            </p>
                            <SkillMatrix skills={portfolioData.skills} />
                        </div>

                        {/* Languages Section - Redesigned */}
                        <div className="languages-container mb-24">
                            <p className="about-reveal text-sm uppercase tracking-[0.3rem] text-white/40 font-light mb-12">
                                Global Reach
                            </p>
                            <div className="flex flex-wrap gap-x-12 gap-y-8">
                                {portfolioData.languages.map((lang, index) => (
                                    <div key={index} className="lang-item flex flex-col gap-2 group cursor-default">
                                        <span className="text-4xl md:text-5xl lg:text-6xl font-thin text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all duration-500">
                                            {lang.name}
                                        </span>
                                        <span className="text-sm text-white/40 uppercase tracking-[0.2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                                            {lang.level}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>


                        {/* CTA */}
                        <div className="about-reveal mt-8">
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300 group"
                            >
                                <span className="text-sm uppercase tracking-wider font-light">
                                    Let's work together
                                </span>
                                <Icon
                                    icon="lucide:arrow-right"
                                    className="group-hover:translate-x-2 transition-transform duration-300"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
