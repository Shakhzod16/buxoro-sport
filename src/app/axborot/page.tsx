"use client";

import { useMemo, useState } from "react";

import PageHero from "@/components/sections/PageHero";
import { useData } from "@/context/DataContext";

type Tab = "all" | "Musobaqa" | "Tadbir" | "Yangilik" | "Press-reliz";

const TABS: { key: Tab; label: string }[] = [
  { key: "all", label: "Barchasi" },
  { key: "Musobaqa", label: "Musobaqa" },
  { key: "Tadbir", label: "Tadbir" },
  { key: "Yangilik", label: "Yangilik" },
  { key: "Press-reliz", label: "Press-reliz" },
];

export default function AxborotPage() {
  const { news } = useData();
  const [tab, setTab] = useState<Tab>("all");

  const list = useMemo(() => {
    const active = news.filter((n) => n.status === "active");
    if (tab === "all") return active;
    return active.filter((n) => n.category === tab);
  }, [news, tab]);

  const fallbackImage = "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80";

  return (
    <>
      <PageHero
        title="Axborot xizmatlari"
        subtitle="Yangiliklar, press-relizlar va rasmiy e’lonlar"
        breadcrumb={[{ label: "Axborot", href: "/axborot" }]}
      />
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "32px 24px 48px" }}>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "24px" }}>
          {TABS.map((t) => {
            const active = tab === t.key;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => setTab(t.key)}
                style={{
                  padding: "8px 16px",
                  borderRadius: "8px",
                  border: active ? "none" : "1px solid #E2E8F0",
                  background: active ? "#1A3C6B" : "#fff",
                  color: active ? "#fff" : "#475569",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  cursor: "pointer",
                }}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {list.length === 0 ? (
          <p style={{ textAlign: "center", color: "#64748B", padding: "40px", background: "#fff", borderRadius: "12px" }}>
            Yangiliklar topilmadi
          </p>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {list.map((item) => (
              <a
                key={item.id}
                href={`/axborot/${item.id}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  background: "#fff",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  border: "1px solid #EEF2F7",
                  display: "block",
                }}
              >
                <img
                  src={item.image || fallbackImage}
                  alt=""
                  style={{ width: "100%", height: "180px", objectFit: "cover", display: "block" }}
                />
                <div style={{ padding: "16px" }}>
                  <span
                    style={{
                      display: "inline-block",
                      background: "#EEF3FA",
                      color: "#1A3C6B",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      padding: "4px 10px",
                      borderRadius: "20px",
                    }}
                  >
                    {item.category}
                  </span>
                  <div style={{ marginTop: "10px", fontWeight: 800, fontSize: "0.95rem", color: "#0F2447", lineHeight: 1.35 }}>
                    {item.title}
                  </div>
                  <div style={{ marginTop: "10px", fontSize: "0.8rem", color: "#94A3B8", display: "flex", justifyContent: "space-between" }}>
                    <span>{item.date}</span>
                    <span>👁 {item.views}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
