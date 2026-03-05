import { useState, useEffect } from "react";

/**
 * Hook to detect device capabilities for performance tiering.
 * Returns { isMobile, isLowEnd, isTouchDevice, dpr }
 * 
 * - isMobile: screen width <= 853px
 * - isLowEnd: mobile + low device memory or low core count
 * - isTouchDevice: has touch capability
 * - dpr: recommended device pixel ratio cap
 */
export function useDeviceCapabilities() {
  const [caps, setCaps] = useState({
    isMobile: false,
    isLowEnd: false,
    isTouchDevice: false,
    dpr: [1, 2],
  });

  useEffect(() => {
    const isMobile = window.innerWidth <= 853;
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    // Detect low-end devices
    const deviceMemory = navigator.deviceMemory || 8; // GB, defaults to 8 if not available
    const hardwareConcurrency = navigator.hardwareConcurrency || 4;
    const isLowEnd = isMobile && (deviceMemory <= 4 || hardwareConcurrency <= 4);

    // Recommended DPR cap
    const dpr = isLowEnd ? [1, 1] : isMobile ? [1, 1.5] : [1, 2];

    setCaps({ isMobile, isLowEnd, isTouchDevice, dpr });

    const handleResize = () => {
      const mobile = window.innerWidth <= 853;
      if (mobile !== caps.isMobile) {
        setCaps((prev) => ({
          ...prev,
          isMobile: mobile,
          dpr: mobile ? (prev.isLowEnd ? [1, 1] : [1, 1.5]) : [1, 2],
        }));
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return caps;
}
