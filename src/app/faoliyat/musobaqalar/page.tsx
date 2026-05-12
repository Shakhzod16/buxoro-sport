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

type FilterTab = "all" | "upcoming" | "ongoing" | "finished";

const TAB_LABELS: { key: FilterTab; label: string }[] = [
  { key: "all", label: "Barchasi" },
  { key: "upcoming", label: "Kutilmoqda" },
  { key: "ongoing", label: "O‘tkazilmoqda" },
  { key: "finished", label: "Yakunlangan" },
];

function statusLabel(s: string) {
  if (s === "upcoming") return "Kutilmoqda";
  if (s === "ongoing") return "O‘tkazilmoqda";
  if (s === "finished") return "Yakunlangan";
  return s;
}

function statusColor(s: string) {
  if (s === "upcoming") return { bg: "#DBEAFE", color: "#1D4ED8" };
  if (s === "ongoing") return { bg: "#D1FAE5", color: "#047857" };
  return { bg: "#F1F5F9", color: "#475569" };
}

export default function MusobaqalarPage() {
  const pathname = usePathname();
  const { competitions } = useData();
  const [tab, setTab] = useState<FilterTab>("all");

  const filtered = useMemo(() => {
    if (tab === "all") return competitions;
    return competitions.filter((c) => c.status === tab);
  }, [competitions, tab]);

  return (
    <>
      <PageHero
        title="Musobaqalar"
        subtitle="Viloyat musobaqalari ro‘yxati va holati"
        breadcrumb={[
          { label: "Faoliyat", href: "/faoliyat" },
          { label: "Musobaqalar", href: "/faoliyat/musobaqalar" },
        ]}
      />
      <PageLayout sidebar={<SidebarNav title="Faoliyat" items={SIDEBAR_ITEMS} currentPath={pathname} />}>
        <div style={{ background: "#fff", borderRadius: "12px", padding: "24px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "20px" }}>
            {TAB_LABELS.map((t) => {
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

          {filtered.length === 0 ? (
            <p style={{ margin: 0, color: "#64748B", textAlign: "center", padding: "32px" }}>Musobaqalar topilmadi</p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {filtered.map((c) => {
                const sc = statusColor(c.status);
                return (
                  <div
                    key={c.id}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "auto 1fr auto",
                      gap: "16px",
                      alignItems: "center",
                      padding: "16px",
                      border: "1px solid #E2E8F0",
                      borderRadius: "10px",
                    }}
                  >
                    <div
                      style={{
                        background: "#EEF3FA",
                        color: "#1A3C6B",
                        fontWeight: 700,
                        fontSize: "0.8rem",
                        padding: "8px 12px",
                        borderRadius: "8px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {c.date}
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: "0.8rem", color: "#64748B", marginBottom: "4px" }}>{c.sport}</div>
                      <div style={{ fontWeight: 700, color: "#0F2447" }}>{c.title}</div>
                      <div style={{ fontSize: "0.85rem", color: "#64748B", marginTop: "4px" }}>{c.location}</div>
                    </div>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        padding: "6px 12px",
                        borderRadius: "20px",
                        background: sc.bg,
                        color: sc.color,
                      }}
                    >
                      {statusLabel(c.status)}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </PageLayout>
    </>
  );
}
