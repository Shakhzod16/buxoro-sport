"use client";

import { usePathname } from "next/navigation";

import PageHero from "@/components/sections/PageHero";
import PageLayout from "@/components/sections/PageLayout";
import SidebarNav from "@/components/sections/SidebarNav";

const SIDEBAR_ITEMS = [
  { label: "Tashkilot haqida", href: "/tashkilot" },
  { label: "Rahbariyat", href: "/tashkilot/rahbariyat" },
  { label: "Tashkiliy tuzilma", href: "/tashkilot/tuzilma" },
  { label: "Asosiy vazifalari", href: "/tashkilot/vazifalari" },
  { label: "Tashkilot tarixi", href: "/tashkilot/tarix" },
];

const LEADERS = [
  {
    initials: "NO",
    name: "Najimiddinov O‘tkir",
    role: "Boshqarma boshlig‘i",
    phone: "+998 55 520 90 07",
    email: "boshliq@buxoro-sport.uz",
  },
  {
    initials: "RS",
    name: "Rahimov Sardor",
    role: "Boshqarma boshlig‘i o‘rinbosari",
    phone: "+998 55 224 10 05",
    email: "orinbosar@buxoro-sport.uz",
  },
  {
    initials: "TD",
    name: "Toshmatova Dilnoza",
    role: "Bosh mutaxassis",
    phone: "+998 55 224 10 06",
    email: "mutaxassis@buxoro-sport.uz",
  },
];

export default function RahbariyatPage() {
  const pathname = usePathname();

  return (
    <>
      <PageHero
        title="Rahbariyat"
        subtitle="Boshqarma rahbariyati va aloqa ma’lumotlari"
        breadcrumb={[
          { label: "Tashkilot", href: "/tashkilot" },
          { label: "Rahbariyat", href: "/tashkilot/rahbariyat" },
        ]}
      />
      <PageLayout sidebar={<SidebarNav title="Tashkilot" items={SIDEBAR_ITEMS} currentPath={pathname} />}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
          {LEADERS.map((l) => (
            <div
              key={l.email}
              style={{
                background: "#fff",
                borderRadius: "12px",
                padding: "24px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                display: "flex",
                gap: "16px",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: "#1A3C6B",
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {l.initials}
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontWeight: 800, fontSize: "1.05rem", color: "#0F2447" }}>{l.name}</div>
                <div style={{ marginTop: "6px", fontSize: "0.875rem", color: "#64748B" }}>{l.role}</div>
                <div style={{ marginTop: "10px", fontSize: "0.875rem", color: "#1A3C6B" }}>📞 {l.phone}</div>
                <a href={`mailto:${l.email}`} style={{ display: "block", marginTop: "6px", fontSize: "0.875rem", color: "#2563EB" }}>
                  ✉️ {l.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </PageLayout>
    </>
  );
}
