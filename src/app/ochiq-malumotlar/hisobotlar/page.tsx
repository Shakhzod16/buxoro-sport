"use client";

import { usePathname } from "next/navigation";

import PageHero from "@/components/sections/PageHero";
import PageLayout from "@/components/sections/PageLayout";
import SidebarNav from "@/components/sections/SidebarNav";

const SIDEBAR_ITEMS = [
  { label: "Statistika", href: "/ochiq-malumotlar" },
  { label: "Byudjet", href: "/ochiq-malumotlar/byudjet" },
  { label: "Yillik hisobotlar", href: "/ochiq-malumotlar/hisobotlar" },
];

export default function OchiqHisobotlarPage() {
  const pathname = usePathname();

  return (
    <>
      <PageHero
        title="Yillik hisobotlar"
        subtitle="Faoliyat va natijalar bo‘yicha yillik hisobotlar"
        breadcrumb={[
          { label: "Ochiq ma'lumotlar", href: "/ochiq-malumotlar" },
          { label: "Hisobotlar", href: "/ochiq-malumotlar/hisobotlar" },
        ]}
      />
      <PageLayout sidebar={<SidebarNav title="Ochiq ma'lumotlar" items={SIDEBAR_ITEMS} currentPath={pathname} />}>
        <div style={{ background: "#fff", borderRadius: "12px", padding: "24px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
          <p style={{ margin: "0 0 16px", lineHeight: 1.7, color: "#475569" }}>
            Yillik hisobotlar sport turlari bo‘yicha faollik, musobaqalar, infratuzilma ishlari va ijtimoiy natijalarni
            qamrab oladi. PDF formatidagi hisobotlar rasmiy tasdiqlangach shu sahifada ro‘yxat ko‘rinishida beriladi.
          </p>
          <div style={{ padding: "16px", background: "#F8FAFC", borderRadius: "10px", fontSize: "0.9rem", color: "#64748B" }}>
            Hozircha yuklangan fayllar mavjud emas.
          </div>
        </div>
      </PageLayout>
    </>
  );
}
