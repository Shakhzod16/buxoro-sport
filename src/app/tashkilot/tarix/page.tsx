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

const MILESTONES = [
  { year: "1991", text: "Buxoro viloyati sport qo‘mitasi tashkil etildi" },
  { year: "2001", text: "Sport boshqarmasiga aylantirildi" },
  { year: "2010", text: "Yangi sport inshootlari qurilishi boshlandi" },
  { year: "2018", text: "Raqamlashtirish jarayoni boshlandi" },
  { year: "2024", text: "Yangi bino va zamonaviy infratuzilma" },
];

export default function TarixPage() {
  const pathname = usePathname();

  return (
    <>
      <PageHero
        title="Tashkilot tarixi"
        subtitle="Muhim bosqichlar va rivojlanish yo‘li"
        breadcrumb={[
          { label: "Tashkilot", href: "/tashkilot" },
          { label: "Tarix", href: "/tashkilot/tarix" },
        ]}
      />
      <PageLayout sidebar={<SidebarNav title="Tashkilot" items={SIDEBAR_ITEMS} currentPath={pathname} />}>
        <div style={{ background: "#fff", borderRadius: "12px", padding: "28px 28px 28px 40px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
          <div style={{ position: "relative", borderLeft: "3px solid #1A3C6B", paddingLeft: "24px" }}>
            {MILESTONES.map((m, i) => (
              <div key={m.year} style={{ position: "relative", paddingBottom: i === MILESTONES.length - 1 ? 0 : "28px" }}>
                <div
                  style={{
                    position: "absolute",
                    left: "-35px",
                    top: "2px",
                    width: "14px",
                    height: "14px",
                    borderRadius: "50%",
                    background: "#F4A419",
                    border: "3px solid #fff",
                    boxShadow: "0 0 0 2px #1A3C6B",
                  }}
                />
                <div style={{ fontWeight: 800, color: "#1A3C6B", fontSize: "1.1rem" }}>{m.year}</div>
                <div style={{ marginTop: "6px", color: "#475569", fontSize: "0.95rem", lineHeight: 1.6 }}>{m.text}</div>
              </div>
            ))}
          </div>
        </div>
      </PageLayout>
    </>
  );
}
