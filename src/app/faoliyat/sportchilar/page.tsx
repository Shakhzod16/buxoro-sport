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

function medalStyle(m: string) {
  if (m === "Oltin") return { bg: "linear-gradient(135deg, #F59E0B, #D97706)", label: "Oltin" };
  if (m === "Kumush") return { bg: "linear-gradient(135deg, #94A3B8, #64748B)", label: "Kumush" };
  return { bg: "linear-gradient(135deg, #EA580C, #C2410C)", label: "Bronza" };
}

export default function SportchilarPage() {
  const pathname = usePathname();
  const { athletes } = useData();

  return (
    <>
      <PageHero
        title="Sportchilar"
        subtitle="Viloyat sportchilari va ularning yutuqlari"
        breadcrumb={[
          { label: "Faoliyat", href: "/faoliyat" },
          { label: "Sportchilar", href: "/faoliyat/sportchilar" },
        ]}
      />
      <PageLayout sidebar={<SidebarNav title="Faoliyat" items={SIDEBAR_ITEMS} currentPath={pathname} />}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
          {athletes.map((a) => {
            const ms = medalStyle(a.medal);
            return (
              <div
                key={a.id}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                  border: "1px solid #E2E8F0",
                }}
              >
                <div
                  style={{
                    background: ms.bg,
                    padding: "12px 16px",
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: "0.8rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>{ms.label}</span>
                  <span style={{ opacity: 0.95 }}>{a.year}</span>
                </div>
                <div style={{ padding: "16px" }}>
                  <div style={{ fontWeight: 800, fontSize: "1rem", color: "#0F2447" }}>{a.name}</div>
                  <div style={{ marginTop: "8px", fontSize: "0.875rem", color: "#64748B" }}>{a.sport}</div>
                </div>
              </div>
            );
          })}
        </div>
      </PageLayout>
    </>
  );
}
