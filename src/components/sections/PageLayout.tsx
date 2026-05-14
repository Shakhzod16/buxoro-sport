"use client";

import type { ReactNode } from "react";

import { useResponsive } from "@/hooks/useResponsive";

interface PageLayoutProps {
  sidebar: ReactNode;
  children: ReactNode;
}

export default function PageLayout({ sidebar, children }: PageLayoutProps) {
  const { isMobile, isTablet } = useResponsive();

  return (
    <div
      style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: isMobile ? "16px 16px" : isTablet ? "24px 20px" : "32px 24px",
        display: "grid",
        gridTemplateColumns: isMobile || isTablet ? "1fr" : "260px 1fr",
        gap: "32px",
        alignItems: "start",
      }}
    >
      <aside
        style={{
          background: "#fff",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
          position: isMobile || isTablet ? "relative" : "sticky",
          top: isMobile || isTablet ? "auto" : "90px",
        }}
      >
        {sidebar}
      </aside>
      <main style={{ minWidth: 0 }}>{children}</main>
    </div>
  );
}
