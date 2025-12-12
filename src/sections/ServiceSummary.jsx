import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ServiceSummary = () => {
  useGSAP(() => {
    gsap.to("#title-service-1", {
      xPercent: 15,
      scrollTrigger: {
        trigger: "#title-service-1",
        scrub: 1,
      },
    });
    gsap.to("#title-service-2", {
      xPercent: -20,
      scrollTrigger: {
        trigger: "#title-service-2",
        scrub: 1,
      },
    });
    gsap.to("#title-service-3", {
      xPercent: 25,
      scrollTrigger: {
        trigger: "#title-service-3",
        scrub: 1,
      },
    });
    gsap.to("#title-service-4", {
      xPercent: -15,
      scrollTrigger: {
        trigger: "#title-service-4",
        scrub: 1,
      },
    });
  });

  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="font-light leading-tight text-center contact-text-responsive text-black/80">
        <div id="title-service-1">
          <p className="hover:text-black transition-colors duration-300">Architecture</p>
        </div>
        <div id="title-service-2" className="flex items-center justify-center gap-4 translate-x-12">
          <p className="font-medium text-black">Development</p>
          <div className="w-16 h-0.5 bg-black/30" />
          <p className="hover:text-black transition-colors duration-300">Deployment</p>
        </div>
        <div id="title-service-3" className="flex items-center justify-center gap-4 -translate-x-16">
          <p className="hover:text-black transition-colors duration-300">APIs</p>
          <div className="w-16 h-0.5 bg-black/30" />
          <p className="italic">Frontends</p>
          <div className="w-16 h-0.5 bg-black/30" />
          <p className="hover:text-black transition-colors duration-300">Scalability</p>
        </div>
        <div id="title-service-4" className="translate-x-20">
          <p className="hover:text-black transition-colors duration-300">Databases</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceSummary;
