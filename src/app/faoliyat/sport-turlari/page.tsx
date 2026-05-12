"use client";

import { usePathname } from "next/navigation";

import PageHero from "@/components/sections/PageHero";
import PageLayout from "@/components/sections/PageLayout";
import SidebarNav from "@/components/sections/SidebarNav";

const SIDEBAR_ITEMS = [
  { label: "Faoliyat", href: "/faoliyat" },
  { label: "Musobaqalar", href: "/faoliyat/musobaqalar" },
  { label: "Sport natijalari", href: "/faoliyat/natijalar" },
  { label: "Sportchilar", href: "/faoliyat/sportchilar" },
  { label: "Sport turlari", href: "/faoliyat/sport-turlari" },
];

const SPORTS = [
  { icon: "⚽", name: "Futbol" },
  { icon: "🥊", name: "Boks" },
  { icon: "🤼", name: "Kurash" },
  { icon: "🥋", name: "Judo" },
  { icon: "🏊", name: "Suzish" },
  { icon: "🏋️", name: "Og‘ir atletika" },
  { icon: "🎾", name: "Tennis" },
  { icon: "🏐", name: "Voleybol" },
  { icon: "🏀", name: "Basketbol" },
  { icon: "🤸", name: "Gimnastika" },
  { icon: "🏇", name: "Otli sport" },
  { icon: "🏸", name: "Badminton" },
  { icon: "🎯", name: "Strelkadan otish" },
  { icon: "🚴", name: "Velosport" },
  { icon: "🤺", name: "Qilichbozlik" },
  { icon: "🏃", name: "Yengil atletika" },
];

export default function SportTurlariPage() {
  const pathname = usePathname();

  return (
    <>
      <PageHero
        title="Sport turlari"
        subtitle="Viloyatda rivojlantirilayotgan sport yo‘nalishlari"
        breadcrumb={[
          { label: "Faoliyat", href: "/faoliyat" },
          { label: "Sport turlari", href: "/faoliyat/sport-turlari" },
        ]}
      />
      <PageLayout sidebar={<SidebarNav title="Faoliyat" items={SIDEBAR_ITEMS} currentPath={pathname} />}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "14px",
            background: "#fff",
            borderRadius: "12px",
            padding: "24px",
            boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
          }}
        >
          {SPORTS.map((s) => (
            <div
              key={s.name}
              style={{
                border: "1px solid #E2E8F0",
                borderRadius: "12px",
                padding: "20px 12px",
                textAlign: "center",
                background: "#F8FAFC",
              }}
            >
              <div style={{ fontSize: "2.5rem", lineHeight: 1 }}>{s.icon}</div>
              <div style={{ marginTop: "10px", fontWeight: 700, fontSize: "0.9rem", color: "#0F2447" }}>{s.name}</div>
            </div>
          ))}
        </div>
      </PageLayout>
    </>
  );
}
