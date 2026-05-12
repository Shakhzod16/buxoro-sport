"use client";

import type { ReactNode } from "react";
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

function Box({ children, small }: { children: ReactNode; small?: boolean }) {
  return (
    <div
      style={{
        border: "2px solid #1A3C6B",
        borderRadius: "8px",
        padding: small ? "10px 12px" : "14px 16px",
        textAlign: "center",
        fontSize: small ? "0.8rem" : "0.9rem",
        fontWeight: small ? 500 : 700,
        color: "#0F2447",
        background: "#fff",
      }}
    >
      {children}
    </div>
  );
}

export default function TuzilmaPage() {
  const pathname = usePathname();

  return (
    <>
      <PageHero
        title="Tashkiliy tuzilma"
        subtitle="Boshqarma bo‘linmalari va tuzilmasi sxemasi"
        breadcrumb={[
          { label: "Tashkilot", href: "/tashkilot" },
          { label: "Tuzilma", href: "/tashkilot/tuzilma" },
        ]}
      />
      <PageLayout sidebar={<SidebarNav title="Tashkilot" items={SIDEBAR_ITEMS} currentPath={pathname} />}>
        <div style={{ background: "#fff", borderRadius: "12px", padding: "28px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
            <Box>Boshqarma boshlig‘i</Box>
            <div style={{ width: "2px", height: "16px", background: "#1A3C6B" }} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", width: "100%", maxWidth: "720px" }}>
              <Box>Bo‘limlar boshlig‘i</Box>
              <Box>Moliya bo‘limi</Box>
              <Box>Axborot xizmati</Box>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", width: "100%", maxWidth: "720px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <Box small>Monitoring bo‘limi</Box>
                <Box small>Hisobotlar guruhi</Box>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <Box small>Buxgalteriya</Box>
                <Box small>Moliya nazorati</Box>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <Box small>Matbuot kotibi</Box>
                <Box small>Vebsayt va ijtimoiy tarmoqlar</Box>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
}
