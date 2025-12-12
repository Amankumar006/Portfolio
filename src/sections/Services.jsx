import { useRef, useState } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { servicesData } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Icon } from "@iconify/react/dist/iconify.js";

const Services = () => {
  const text = `From AI-powered applications to full-stack development. 
    Here's what I bring to the table:`;
  const containerRef = useRef(null);
  const [activeService, setActiveService] = useState(0);

  // Service icons
  const serviceIcons = {
    "AI & Machine Learning": "lucide:brain",
    "Web Development": "lucide:globe",
    "Backend & APIs": "lucide:server",
    "Technical Consulting": "lucide:lightbulb",
  };

  useGSAP(() => {
    // Left side tabs animation
    gsap.from(".service-tab", {
      x: -40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: { trigger: containerRef.current, start: "top 75%" },
    });

    // Right side content animation
    gsap.from(".service-content", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: containerRef.current, start: "top 75%" },
    });
  }, []);

  return (
    <section id="services" className="min-h-screen bg-black rounded-t-4xl">
      <AnimatedHeaderSection
        subTitle={"Behind the scene, Beyond the screen"}
        title={"Services"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />

      {/* Main Content - Split Layout like About */}
      <div ref={containerRef} className="px-1 sm:px-1 md:px-3 lg:px-6 pb-24">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left - Service Tabs */}
          <div className="lg:w-2/5">
            <div className="lg:sticky lg:top-32 space-y-2">
              {servicesData.map((service, index) => (
                <div
                  key={index}
                  className={`service-tab group cursor-pointer p-6 rounded-2xl border transition-all duration-500 ${activeService === index
                      ? "bg-white text-black border-white"
                      : "bg-transparent text-white border-white/10 hover:border-white/30"
                    }`}
                  onClick={() => setActiveService(index)}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${activeService === index
                          ? "bg-black text-white"
                          : "bg-white/10 text-white group-hover:bg-white/20"
                        }`}
                    >
                      <Icon
                        icon={serviceIcons[service.title] || "lucide:code"}
                        className="text-xl"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-light">{service.title}</h3>
                        <span
                          className={`text-sm font-light ${activeService === index
                              ? "text-black/40"
                              : "text-white/30"
                            }`}
                        >
                          0{index + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* CTA under tabs */}
              <div className="pt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300 group"
                >
                  <span className="text-sm uppercase tracking-wider font-light">
                    Start a project
                  </span>
                  <Icon
                    icon="lucide:arrow-right"
                    className="group-hover:translate-x-2 transition-transform duration-300"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right - Service Details */}
          <div className="lg:w-3/5">
            <div className="service-content">
              {/* Active Service Header */}
              <div className="mb-8">
                <p className="text-sm uppercase tracking-[0.3rem] text-white/40 font-light mb-4">
                  What I offer
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4">
                  {servicesData[activeService].title}
                </h2>
                <p className="text-xl md:text-2xl font-light text-white/50 leading-relaxed">
                  {servicesData[activeService].description}
                </p>
              </div>

              {/* Service Items */}
              <div className="space-y-4 mt-12">
                {servicesData[activeService].items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="group flex items-center gap-6 py-4 border-b border-white/10 hover:border-white/30 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                      <span className="text-xs font-light">0{itemIndex + 1}</span>
                    </div>
                    <span className="text-xl md:text-2xl font-light text-white/70 group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </span>
                    <Icon
                      icon="lucide:arrow-right"
                      className="ml-auto text-white/0 group-hover:text-white/50 transition-all duration-300 transform group-hover:translate-x-1"
                    />
                  </div>
                ))}
              </div>

              {/* Bottom Stats */}
              <div className="mt-16 pt-8 border-t border-white/10">
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <p className="text-4xl md:text-5xl font-light text-white mb-2">100%</p>
                    <p className="text-sm text-white/40 uppercase tracking-wider font-light">
                      Dedication
                    </p>
                  </div>
                  <div>
                    <p className="text-4xl md:text-5xl font-light text-white mb-2">24/7</p>
                    <p className="text-sm text-white/40 uppercase tracking-wider font-light">
                      Support
                    </p>
                  </div>
                  <div>
                    <p className="text-4xl md:text-5xl font-light text-white mb-2">Fast</p>
                    <p className="text-sm text-white/40 uppercase tracking-wider font-light">
                      Delivery
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
