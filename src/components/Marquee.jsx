import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "./ui/scroll-based-velocity";

const Marquee = ({
  items,
  className = "text-white bg-black",
  icon = "mdi:star-four-points",
  iconClassName = "",
  reverse = false,
}) => {
  return (
    <ScrollVelocityContainer className={`overflow-hidden w-full h-20 md:h-[100px] flex items-center marquee-text-responsive font-light uppercase whitespace-nowrap ${className}`}>
      <ScrollVelocityRow 
        baseVelocity={5} 
        direction={reverse ? -1 : 1}
        className="flex items-center"
      >
        {items.map((text, index) => (
          <span
            key={index}
            className="flex items-center px-0 sm:px-1 md:px-4 lg:px-12 gap-x-0 sm:gap-x-3 md:gap-x-10 lg:gap-x-24 ultra-small-screen"
          >
            {text} <Icon icon={icon} className={iconClassName} />
          </span>
        ))}
      </ScrollVelocityRow>
    </ScrollVelocityContainer>
  );
};

export default Marquee;