"use client";

import { useEffect, useState } from "react";

export function useResponsive() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return {
    isMobile: width < 640,
    isTablet: width >= 640 && width < 1024,
    isDesktop: width >= 1024,
    width,
    cols: (mobile: number, tablet: number, desktop: number) =>
      width < 640 ? mobile : width < 1024 ? tablet : desktop,
  };
}
