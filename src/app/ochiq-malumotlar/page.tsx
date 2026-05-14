"use client";

import { usePathname } from "next/navigation";

import PageHero from "@/components/sections/PageHero";
import PageLayout from "@/components/sections/PageLayout";
import SidebarNav from "@/components/sections/SidebarNav";
import { useData } from "@/context/DataContext";

const SIDEBAR_ITEMS = [
  { label: "Statistika", href: "/ochiq-malumotlar" },
  { label: "Byudjet", href: "/ochiq-malumotlar/byudjet" },
  { label: "Yillik hisobotlar", href: "/ochiq-malumotlar/hisobotlar" },
];

const BAR_DATA = [
  { label: "Futbol", value: 42 },
  { label: "Kurash", value: 36 },
  { label: "Judo", value: 28 },
  { label: "Boks", value: 24 },
  { label: "Yengil atletika", value: 31 },
  { label: "Suzish", value: 18 },
];

const maxBar = Math.max(...BAR_DATA.map((b) => b.value));

export default function OchiqMalumotlarPage() {
  const pathname = usePathname();
  const { news, competitions, athletes, documents } = useData();

  const cards = [
    { label: "Yangiliklar", value: news.length },
    { label: "Musobaqalar", value: competitions.length },
    { label: "Sportchilar", value: athletes.length },
    { label: "Hujjatlar", value: documents.length },
  ];

  return (
    <>
      <PageHero
        title="Ochiq ma'lumotlar"
        subtitle="Statistik ko‘rsatkichlar va hisobotlar uchun umumiy ma’lumot"
        breadcrumb={[{ label: "Ochiq ma'lumotlar", href: "/ochiq-malumotlar" }]}
      />
      <PageLayout sidebar={<SidebarNav title="Ochiq ma'lumotlar" items={SIDEBAR_ITEMS} currentPath={pathname} />}>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div className="stat-cards-grid" style={{ display: "grid", gap: "14px" }}>
            {cards.map((c) => (
              <div
                key={c.label}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "18px",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                  textAlign: "center",
                  border: "1px solid #E8ECF2",
                }}
              >
                <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "#1A3C6B" }}>{c.value}</div>
                <div style={{ marginTop: "6px", fontSize: "0.85rem", color: "#64748B" }}>{c.label}</div>
              </div>
            ))}
          </div>

          <div style={{ background: "#fff", borderRadius: "12px", padding: "24px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
            <h3 style={{ margin: "0 0 18px", fontSize: "1.05rem", fontWeight: 800, color: "#0F2447" }}>
              Sport turlari bo‘yicha faollik (shartli diagramma)
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {BAR_DATA.map((row) => {
                const pct = Math.round((row.value / maxBar) * 100);
                return (
                  <div key={row.label} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ width: "140px", fontSize: "0.85rem", fontWeight: 600, color: "#334155", flexShrink: 0 }}>{row.label}</div>
                    <div style={{ flex: 1, height: "22px", background: "#EEF3FA", borderRadius: "6px", overflow: "hidden" }}>
                      <div style={{ width: `${pct}%`, height: "100%", background: "#1A3C6B", borderRadius: "6px" }} />
                    </div>
                    <div style={{ width: "36px", textAlign: "right", fontWeight: 700, fontSize: "0.85rem", color: "#1A3C6B" }}>{row.value}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
}
