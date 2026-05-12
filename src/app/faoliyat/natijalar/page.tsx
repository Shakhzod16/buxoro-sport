"use client";

import { useMemo, useState } from "react";
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

const YEARS = [2024, 2025, 2026] as const;

export default function NatijalarPage() {
  const pathname = usePathname();
  const { athletes } = useData();
  const [year, setYear] = useState<(typeof YEARS)[number]>(2026);

  const byMedal = useMemo(() => {
    const list = athletes.filter((a) => a.year === year);
    return {
      Oltin: list.filter((a) => a.medal === "Oltin"),
      Kumush: list.filter((a) => a.medal === "Kumush"),
      Bronza: list.filter((a) => a.medal === "Bronza"),
    };
  }, [athletes, year]);

  return (
    <>
      <PageHero
        title="Sport natijalari"
        subtitle="Medal sohiblari va yutuqlar"
        breadcrumb={[
          { label: "Faoliyat", href: "/faoliyat" },
          { label: "Natijalar", href: "/faoliyat/natijalar" },
        ]}
      />
      <PageLayout sidebar={<SidebarNav title="Faoliyat" items={SIDEBAR_ITEMS} currentPath={pathname} />}>
        <div style={{ background: "#fff", borderRadius: "12px", padding: "24px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
          <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
            {YEARS.map((y) => (
              <button
                key={y}
                type="button"
                onClick={() => setYear(y)}
                style={{
                  padding: "8px 18px",
                  borderRadius: "8px",
                  border: year === y ? "none" : "1px solid #E2E8F0",
                  background: year === y ? "#1A3C6B" : "#fff",
                  color: year === y ? "#fff" : "#475569",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                {y}
              </button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            {(
              [
                { key: "Oltin" as const, label: "Oltin", color: "#B45309", bg: "#FEF3C7" },
                { key: "Kumush" as const, label: "Kumush", color: "#475569", bg: "#F1F5F9" },
                { key: "Bronza" as const, label: "Bronza", color: "#9A3412", bg: "#FFEDD5" },
              ] as const
            ).map((col) => (
              <div key={col.key} style={{ border: "1px solid #E2E8F0", borderRadius: "12px", overflow: "hidden" }}>
                <div style={{ background: col.bg, padding: "12px", textAlign: "center", fontWeight: 800, color: col.color }}>
                  {col.label}
                </div>
                <div style={{ padding: "12px", minHeight: "120px" }}>
                  {byMedal[col.key].length === 0 ? (
                    <p style={{ margin: 0, fontSize: "0.85rem", color: "#94A3B8", textAlign: "center" }}>Ma’lumot yo‘q</p>
                  ) : (
                    <ul style={{ margin: 0, paddingLeft: "18px", color: "#334155", fontSize: "0.9rem", lineHeight: 1.7 }}>
                      {byMedal[col.key].map((a) => (
                        <li key={a.id}>
                          {a.name} <span style={{ color: "#94A3B8" }}>({a.sport})</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageLayout>
    </>
  );
}
