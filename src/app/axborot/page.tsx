'use client'

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

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
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const displayed = useMemo(() => {
    const filtered = news.filter(
      (n) => n.status === "active" || n.status === undefined || !n.status
    );
    if (tab === "all") return filtered;
    return filtered.filter((n) => n.category === tab);
  }, [news, tab]);

  const fallbackImage = "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80";

  return (
    <>
      <PageHero
        title="Axborot xizmatlari"
        subtitle="Yangiliklar, press-relizlar va rasmiy e'lonlar"
        breadcrumb={[{ label: "Axborot", href: "/axborot" }]}
      />
      <div className="section-wrap" style={{ maxWidth: "1280px", margin: "0 auto", padding: "32px 24px 48px" }}>
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

        {!mounted ? (
          <div style={{ textAlign: "center", padding: "48px", color: "#718096" }}>
            <p>Yuklanmoqda...</p>
          </div>
        ) : displayed.length === 0 ? (
          <div style={{ textAlign: "center", padding: "48px", color: "#718096" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "12px" }}>📰</div>
            <p style={{ fontWeight: 600, color: "#2D3748" }}>Yangiliklar topilmadi</p>
            <p style={{ marginTop: "8px", fontSize: "0.875rem" }}>Tez orada yangiliklar qo&apos;shiladi</p>
          </div>
        ) : (
          <div className="news-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {displayed.map((item) => (
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
                <div className="news-card-img" style={{ position: "relative", width: "100%", height: "180px" }}>
                  <Image
                    src={item.image || fallbackImage}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
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
