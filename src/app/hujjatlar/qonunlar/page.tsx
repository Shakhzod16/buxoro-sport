"use client";

import { usePathname } from "next/navigation";

import PageHero from "@/components/sections/PageHero";
import PageLayout from "@/components/sections/PageLayout";
import SidebarNav from "@/components/sections/SidebarNav";

const SIDEBAR_ITEMS = [
  { label: "Hujjatlar", href: "/hujjatlar" },
  { label: "Qonunlar", href: "/hujjatlar/qonunlar" },
  { label: "Buyruqlar", href: "/hujjatlar/buyruqlar" },
  { label: "Reglamentlar", href: "/hujjatlar/reglamentlar" },
];

const LAWS = [
  { title: "“Jismoniy tarbiya va sport to‘g‘risida”gi Qonun", year: "2015" },
  { title: "“Olimpiya harakati to‘g‘risida”gi Qonun", year: "2017" },
  { title: "“Yoshlar siyosati to‘g‘risida”gi Qonun", year: "2016" },
  { title: "“Davlat xizmatlari to‘g‘risida”gi Qonun", year: "2017" },
];

export default function QonunlarPage() {
  const pathname = usePathname();

  return (
    <>
      <PageHero
        title="Qonunlar"
        subtitle="O‘zbekiston Respublikasining sport sohasidagi asosiy qonunlari"
        breadcrumb={[
          { label: "Hujjatlar", href: "/hujjatlar" },
          { label: "Qonunlar", href: "/hujjatlar/qonunlar" },
        ]}
      />
      <PageLayout sidebar={<SidebarNav title="Hujjatlar" items={SIDEBAR_ITEMS} currentPath={pathname} />}>
        <div style={{ background: "#fff", borderRadius: "12px", padding: "24px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {LAWS.map((d, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "14px 16px",
                  border: "1px solid #E2E8F0",
                  borderRadius: "10px",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>📄</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 700, color: "#0F2447" }}>{d.title}</div>
                  <div style={{ marginTop: "6px", display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        padding: "4px 10px",
                        borderRadius: "20px",
                        background: "#EEF3FA",
                        color: "#1A3C6B",
                      }}
                    >
                      Qonun
                    </span>
                    <span style={{ fontSize: "0.8rem", color: "#94A3B8" }}>{d.year}</span>
                  </div>
                </div>
                <button
                  type="button"
                  style={{
                    padding: "8px 16px",
                    background: "#1A3C6B",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                >
                  Yuklab olish
                </button>
              </div>
            ))}
          </div>
        </div>
      </PageLayout>
    </>
  );
}
