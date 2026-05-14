"use client";

import Link from "next/link";

import { useResponsive } from "@/hooks/useResponsive";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href: string }[];
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  const { isMobile } = useResponsive();

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0F2447 0%, #1A3C6B 100%)",
        padding: isMobile ? "24px 0 20px" : "40px 0 32px",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        {breadcrumb && (
          <div style={{ display: "flex", gap: "8px", marginBottom: "12px", fontSize: "0.8rem", flexWrap: "wrap" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
              Bosh sahifa
            </Link>
            {breadcrumb.map((b, i) => (
              <span key={`${b.href}-${i}`}>
                <span style={{ color: "rgba(255,255,255,0.4)", margin: "0 4px" }}>›</span>
                <Link
                  href={b.href}
                  style={{
                    color: i === breadcrumb.length - 1 ? "#fff" : "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                  }}
                >
                  {b.label}
                </Link>
              </span>
            ))}
          </div>
        )}
        <h1 style={{ color: "#fff", fontSize: isMobile ? "1.3rem" : "1.75rem", fontWeight: 800, margin: 0 }}>{title}</h1>
        {subtitle && (
          <p style={{ color: "rgba(255,255,255,0.75)", marginTop: "8px", fontSize: "0.95rem", marginBottom: 0 }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
