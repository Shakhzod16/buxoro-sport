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

export default function OchiqByudjetPage() {
  const pathname = usePathname();

  return (
    <>
      <PageHero
        title="Byudjet"
        subtitle="Ochiq byudjet bo‘yicha ma’lumotlar joylashtiriladi"
        breadcrumb={[
          { label: "Ochiq ma'lumotlar", href: "/ochiq-malumotlar" },
          { label: "Byudjet", href: "/ochiq-malumotlar/byudjet" },
        ]}
      />
      <PageLayout sidebar={<SidebarNav title="Ochiq ma'lumotlar" items={SIDEBAR_ITEMS} currentPath={pathname} />}>
        <div style={{ background: "#fff", borderRadius: "12px", padding: "24px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", lineHeight: 1.7, color: "#475569" }}>
          <p style={{ margin: 0 }}>
            Viloyat sport boshqarmasining byudjet xarajatlari, davlat xaridlari va moliyaviy hisobotlari qonun hujjatlariga
            muvofiq tayyorlanadi va rasmiy manbalarda e’lon qilinadi. Batafsil jadval va fayllar tez orada shu bo‘limda
            joylashtiriladi.
          </p>
        </div>
      </PageLayout>
    </>
  );
}
