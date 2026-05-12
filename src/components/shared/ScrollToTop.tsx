"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed",
        bottom: "32px",
        right: "32px",
        zIndex: 999,
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        background: "#1A3C6B",
        color: "#fff",
        border: "none",
        fontSize: "1.2rem",
        cursor: "pointer",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      aria-label="Tepaga qaytish"
    >
      ↑
    </button>
  );
}
