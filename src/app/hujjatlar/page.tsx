"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";

import PageHero from "@/components/sections/PageHero";
import PageLayout from "@/components/sections/PageLayout";
import SidebarNav from "@/components/sections/SidebarNav";
import { useData } from "@/context/DataContext";

const SIDEBAR_ITEMS = [
  { label: "Hujjatlar", href: "/hujjatlar" },
  { label: "Qonunlar", href: "/hujjatlar/qonunlar" },
  { label: "Buyruqlar", href: "/hujjatlar/buyruqlar" },
  { label: "Reglamentlar", href: "/hujjatlar/reglamentlar" },
];

export default function HujjatlarPage() {
  const pathname = usePathname();
  const { documents } = useData();
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return documents;
    return documents.filter((d) => d.title.toLowerCase().includes(s) || d.category.toLowerCase().includes(s));
  }, [documents, q]);

  return (
    <>
      <PageHero
        title="Hujjatlar"
        subtitle="Normativ-huquqiy hujjatlar va rasmiy materiallar"
        breadcrumb={[{ label: "Hujjatlar", href: "/hujjatlar" }]}
      />
      <PageLayout sidebar={<SidebarNav title="Hujjatlar" items={SIDEBAR_ITEMS} currentPath={pathname} />}>
        <div style={{ background: "#fff", borderRadius: "12px", padding: "24px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
          <input
            type="search"
            placeholder="Hujjat bo‘yicha qidirish..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 14px",
              borderRadius: "10px",
              border: "1px solid #E2E8F0",
              fontSize: "0.95rem",
              marginBottom: "20px",
              boxSizing: "border-box",
            }}
          />
          {filtered.length === 0 ? (
            <p style={{ margin: 0, color: "#64748B", textAlign: "center", padding: "24px" }}>
              Hujjatlar topilmadi yoki ro‘yxat bo‘sh.
            </p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {filtered.map((d) => (
                <div
                  key={d.id}
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
                        {d.category}
                      </span>
                      <span style={{ fontSize: "0.8rem", color: "#94A3B8" }}>{d.date}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => (d.fileUrl && d.fileUrl !== "#" ? window.open(d.fileUrl, "_blank") : undefined)}
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
          )}
        </div>
      </PageLayout>
    </>
  );
}
