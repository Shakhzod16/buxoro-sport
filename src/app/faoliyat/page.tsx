"use client";

import { usePathname } from "next/navigation";

import PageHero from "@/components/sections/PageHero";
import PageLayout from "@/components/sections/PageLayout";
import SidebarNav from "@/components/sections/SidebarNav";
import { useData } from "@/context/DataContext";

const SIDEBAR_ITEMS = [
  { label: "Faoliyat", href: "/faoliyat" },
  { label: "Musobaqalar", href: "/faoliyat/musobaqalar" },
  { label: "Sport natijalari", href: "/faoliyat/natijalar" },
  { label: "Sportchilar", href: "/faoliyat/sportchilar" },
  { label: "Sport turlari", href: "/faoliyat/sport-turlari" },
];

export default function FaoliyatPage() {
  const pathname = usePathname();
  const { news, competitions, athletes, documents } = useData();

  const latestCompetitions = [...competitions].slice(0, 3);
  const latestNews = [...news].filter((n) => n.status === "active").slice(0, 3);

  const statCards = [
    { label: "Yangiliklar", value: news.length },
    { label: "Musobaqalar", value: competitions.length },
    { label: "Sportchilar", value: athletes.length },
    { label: "Hujjatlar", value: documents.length },
  ];

  return (
    <>
      <PageHero
        title="Faoliyat"
        subtitle="Viloyat sport hayoti va boshqarma faoliyati ko‘rsatkichlari"
        breadcrumb={[{ label: "Faoliyat", href: "/faoliyat" }]}
      />
      <PageLayout sidebar={<SidebarNav title="Faoliyat" items={SIDEBAR_ITEMS} currentPath={pathname} />}>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
            {statCards.map((s) => (
              <div
                key={s.label}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "20px",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "#1A3C6B" }}>{s.value}</div>
                <div style={{ marginTop: "6px", fontSize: "0.875rem", color: "#64748B" }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div style={{ background: "#fff", borderRadius: "12px", padding: "24px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
            <h3 style={{ margin: "0 0 16px", fontSize: "1.1rem", fontWeight: 800, color: "#0F2447" }}>So‘nggi musobaqalar</h3>
            {latestCompetitions.length === 0 ? (
              <p style={{ color: "#64748B", margin: 0 }}>Musobaqalar hozircha mavjud emas.</p>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {latestCompetitions.map((c) => (
                  <div
                    key={c.id}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "14px 16px",
                      border: "1px solid #E2E8F0",
                      borderRadius: "10px",
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 700, color: "#0F2447" }}>{c.title}</div>
                      <div style={{ fontSize: "0.85rem", color: "#64748B", marginTop: "4px" }}>
                        {c.sport} · {c.location}
                      </div>
                    </div>
                    <div style={{ fontSize: "0.85rem", color: "#1A3C6B", fontWeight: 600 }}>{c.date}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div style={{ background: "#fff", borderRadius: "12px", padding: "24px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
            <h3 style={{ margin: "0 0 16px", fontSize: "1.1rem", fontWeight: 800, color: "#0F2447" }}>So‘nggi yangiliklar</h3>
            {latestNews.length === 0 ? (
              <p style={{ color: "#64748B", margin: 0 }}>Yangiliklar topilmadi.</p>
            ) : (
              <ul style={{ margin: 0, paddingLeft: "20px", color: "#475569", lineHeight: 1.8 }}>
                {latestNews.map((n) => (
                  <li key={n.id}>
                    <a href={`/axborot/${n.id}`} style={{ color: "#1A3C6B", fontWeight: 600, textDecoration: "none" }}>
                      {n.title}
                    </a>
                    <span style={{ color: "#94A3B8", fontSize: "0.85rem" }}> — {n.date}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </PageLayout>
    </>
  );
}
