"use client";

import { useEffect, useState } from "react";
import { Eye, X } from "lucide-react";

import SportTashkilotlariDrawer from "@/components/shared/SportTashkilotlariDrawer";
import { useResponsive } from "@/hooks/useResponsive";

export function TopBar() {
  const { isMobile } = useResponsive();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [zoom, setZoom] = useState(100);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  useEffect(() => {
    document.body.style.zoom = `${zoom}%`;
  }, [zoom]);

  const resetAccessibility = () => {
    setFontSize(100);
    setZoom(100);
  };

  return (
    <>
      <div className="border-b border-neutral-border bg-white">
        <div
          className="mx-auto flex max-w-[1280px] items-center justify-between px-3"
          style={{ height: isMobile ? "48px" : "72px" }}
        >
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            style={{
              width: 206,
              height: 36,
              borderRadius: 999,
              border: "none",
              background: "#0B4A91",
              color: "#fff",
              fontSize: "0.95rem",
              fontWeight: 500,
              cursor: "pointer",
              textAlign: "left",
              padding: "0 14px",
            }}
          >
            Sport tashkilotlari →
          </button>

          <div style={{ display: "flex", gap: "26px", alignItems: "center", marginRight: "auto", marginLeft: "26px" }}>
            <a
              href="/sport-portali"
              style={{ textDecoration: "none", display: "flex", gap: "12px", alignItems: "center", color: "inherit" }}
            >
              <div
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: "50%",
                  background: "radial-gradient(circle at 30% 30%, #6FD34A, #1C9C49 45%, #0B4A91)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "21px",
                }}
              >
                🏅
              </div>
              {!isMobile ? (
              <div style={{ lineHeight: 1.25 }}>
                <div style={{ fontWeight: 500, fontSize: "0.7rem", color: "#222A37", letterSpacing: "0.2px" }}>O&apos;ZBEKISTON</div>
                <div style={{ fontWeight: 500, fontSize: "0.7rem", color: "#222A37", letterSpacing: "0.2px" }}>RESPUBLIKASI</div>
                <div style={{ fontWeight: 500, fontSize: "0.7rem", color: "#222A37", letterSpacing: "0.2px" }}>SPORT PORTALI</div>
              </div>
              ) : null}
            </a>

            <a
              href="/prezident-olimpiadasi"
              style={{ textDecoration: "none", display: "flex", gap: "12px", alignItems: "center", color: "inherit" }}
            >
              <div
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: "50%",
                  background: "radial-gradient(circle at 30% 30%, #F2E8BD, #C8B87A 60%, #A99248)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "19px",
                }}
              >
                🏛️
              </div>
              {!isMobile ? (
              <div style={{ lineHeight: 1.15 }}>
                <div style={{ fontWeight: 700, fontSize: "0.75rem", color: "#1E5C8E", letterSpacing: "0.4px" }}>PREZIDENT</div>
                <div style={{ fontWeight: 700, fontSize: "0.75rem", color: "#1E5C8E", letterSpacing: "0.4px" }}>OLIMPIADASI</div>
              </div>
              ) : null}
            </a>
          </div>

          <button
            type="button"
            aria-label="Maxsus imkoniyatlar"
            onClick={() => setIsOpen(true)}
            style={{
              border: "none",
              background: "transparent",
              color: "#111",
              padding: 0,
              width: 22,
              height: 22,
              cursor: "pointer",
              marginRight: "6px",
            }}
          >
            <Eye className="h-[18px] w-[18px]" />
          </button>
        </div>
      </div>

      {isOpen ? (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "430px",
            maxWidth: "100vw",
            height: "100vh",
            background: "#F3F4F6",
            borderLeft: "1px solid #D5D9E0",
            zIndex: 9999,
            padding: "22px 22px 20px",
            overflowY: "auto",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 26 }}>
            <h3 style={{ margin: 0, color: "#A3A9B1", letterSpacing: "1px", fontWeight: 800, fontSize: "1.9rem" }}>
              MAXSUS IMKONIYATLAR
            </h3>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              style={{
                background: "#0B4A91",
                color: "#fff",
                border: "none",
                width: 46,
                height: 46,
                borderRadius: 2,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <X size={26} />
            </button>
          </div>

          <div style={{ borderTop: "1px solid #DFE3E8", paddingTop: 22 }}>
            <div style={{ color: "#A8AEB8", fontWeight: 700, fontSize: "1.75rem", marginBottom: 18 }}>SHRIFT O&apos;LCHAMI</div>
            <input
              type="range"
              min={85}
              max={120}
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              style={{ width: "100%", accentColor: "#0B4A91" }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", color: "#B0B6C0", fontWeight: 600, marginTop: 10 }}>
              <span>85%</span>
              <span style={{ background: "#E6E8EB", padding: "5px 10px", borderRadius: 10, color: "#41464D" }}>{fontSize}%</span>
              <span>120%</span>
            </div>
          </div>

          <div style={{ marginTop: 30 }}>
            <div style={{ color: "#A8AEB8", fontWeight: 700, fontSize: "1.75rem", marginBottom: 18 }}>MASSHTAB</div>
            <input
              type="range"
              min={80}
              max={130}
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
              style={{ width: "100%", accentColor: "#0B4A91" }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", color: "#B0B6C0", fontWeight: 600, marginTop: 10 }}>
              <span>80%</span>
              <span style={{ background: "#E6E8EB", padding: "5px 10px", borderRadius: 10, color: "#41464D" }}>{zoom}%</span>
              <span>130%</span>
            </div>
          </div>

          <div style={{ marginTop: "auto", paddingTop: 40 }}>
            <button
              type="button"
              onClick={resetAccessibility}
              style={{
                width: "100%",
                border: "none",
                background: "#0B4A91",
                color: "#fff",
                borderRadius: 12,
                padding: "12px 14px",
                fontSize: "2rem",
                fontWeight: 400,
                cursor: "pointer",
              }}
            >
              Boshlang&apos;ich holatga qaytarish
            </button>
          </div>
        </div>
      ) : null}

      <SportTashkilotlariDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
