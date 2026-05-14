"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { BrandBar } from "@/components/layout/BrandBar";
import { TopBar } from "@/components/layout/TopBar";
import { NAV_ITEMS } from "@/data/navigation";

const DesktopNavBar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        borderTop: "1px solid #E2E8F0",
        borderBottom: "2px solid #1A3C6B",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          height: "48px",
          gap: "4px",
        }}
      >
        {NAV_ITEMS.map((item, i) => (
          <div
            key={`nav-${i}-${item.href}`}
            style={{ position: "relative" }}
            onMouseEnter={() => setOpenMenu(item.href)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <Link
              href={item.href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                padding: "0 12px",
                height: "48px",
                textDecoration: "none",
                fontSize: "0.8rem",
                fontWeight: 600,
                whiteSpace: "nowrap",
                letterSpacing: "0.02em",
                borderBottom: openMenu === item.href ? "2px solid #1A3C6B" : "2px solid transparent",
                color: openMenu === item.href ? "#1A3C6B" : "#2D3748",
              }}
            >
              {item.label.toUpperCase()} <span style={{ fontSize: "0.6rem" }}>▾</span>
            </Link>
            {openMenu === item.href && item.children && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  zIndex: 200,
                  background: "#fff",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                  border: "1px solid #E2E8F0",
                  borderTop: "2px solid #1A3C6B",
                  borderRadius: "0 0 8px 8px",
                  minWidth: "220px",
                  padding: "4px 0",
                }}
              >
                {item.children.map((child, j) => (
                  <Link
                    key={`child-${i}-${j}-${child.href}`}
                    href={child.href}
                    style={{
                      display: "block",
                      padding: "10px 20px",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      color: "#2D3748",
                      borderBottom: "1px solid #F7FAFC",
                      background: "#fff",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#EEF3FA";
                      e.currentTarget.style.color = "#1A3C6B";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#fff";
                      e.currentTarget.style.color = "#2D3748";
                    }}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

const MobileNavBar = ({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
}) => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "#fff",
        borderTop: "1px solid #E2E8F0",
      }}
    >
      <button
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          width: "100%",
          padding: "12px 16px",
          background: "#1A3C6B",
          border: "none",
          color: "#fff",
          fontSize: "0.875rem",
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
          gap: "8px",
          cursor: "pointer",
        }}
      >
        ☰ MENYU
      </button>
      {menuOpen && (
        <div style={{ background: "#fff", borderBottom: "2px solid #1A3C6B" }}>
          {NAV_ITEMS.map((item, i) => (
            <div key={`mob-${i}`}>
              <button
                type="button"
                onClick={() => setOpenSection(openSection === item.href ? null : item.href)}
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  background: "none",
                  border: "none",
                  borderBottom: "1px solid #F7FAFC",
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "#1A3C6B",
                  cursor: "pointer",
                }}
              >
                {item.label} <span>{openSection === item.href ? "▲" : "▼"}</span>
              </button>
              {openSection === item.href &&
                item.children?.map((child, j) => (
                  <Link
                    key={`mob-child-${i}-${j}`}
                    href={child.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      display: "block",
                      padding: "10px 32px",
                      textDecoration: "none",
                      fontSize: "0.85rem",
                      color: "#4A5568",
                      borderBottom: "1px solid #F7FAFC",
                      background: "#F7FAFC",
                    }}
                  >
                    › {child.label}
                  </Link>
                ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <header
      style={{
        position: "relative",
        zIndex: 1,
        background: "#fff",
      }}
    >
      <TopBar />
      <div style={{ background: "#fff", borderBottom: "1px solid #fecaca", padding: "5px 0", textAlign: "center" }}>
        <p style={{ color: "#dc2626", fontWeight: 700, fontSize: "0.85rem", margin: 0 }}>
          Sayt test rejimida ishlamoqda
        </p>
      </div>
      <BrandBar />
      {isMobile ? <MobileNavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> : <DesktopNavBar />}
    </header>
  );
}
