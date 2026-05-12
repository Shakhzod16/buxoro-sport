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

export default function TashkilotPage() {
  const pathname = usePathname();

  return (
    <>
      <PageHero
        title="Tashkilot haqida"
        subtitle="Buxoro viloyati sport sohasini rivojlantirish va davlat siyosatini amalga oshirish"
        breadcrumb={[{ label: "Tashkilot", href: "/tashkilot" }]}
      />
      <PageLayout sidebar={<SidebarNav title="Tashkilot" items={SIDEBAR_ITEMS} currentPath={pathname} />}>
        <div style={{ background: "#fff", borderRadius: "12px", padding: "28px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
          <h2 style={{ margin: "0 0 16px", fontSize: "1.25rem", fontWeight: 800, color: "#0F2447" }}>
            Buxoro Viloyati Sport Boshqarmasi haqida
          </h2>
          <p style={{ margin: "0 0 14px", lineHeight: 1.7, color: "#475569", fontSize: "0.95rem" }}>
            Buxoro viloyati sport boshqarmasi viloyat hokimligi tarkibidagi davlat boshqaruvi organi bo‘lib, jismoniy
            tarbiya va sport sohasida yagona davlat siyosatini amalga oshirish, sport infratuzilmasidan samarali
            foydalanishni tashkil etish hamda aholi salomatligini mustahkamlashga xizmat qiladi.
          </p>
          <p style={{ margin: "0 0 14px", lineHeight: 1.7, color: "#475569", fontSize: "0.95rem" }}>
            Boshqarma o‘z faoliyatida O‘zbekiston Respublikasining qonun hujjatlari, Prezident farmonlari va qarorlari,
            viloyat hokimining normativ-huquqiy aktlariga amal qiladi va sport tadbirlari, musobaqalar, davlat xizmatlari
            hamda ochiq ma’lumotlarni joylashtirish bo‘yicha tashkiliy-huquqiy asoslarni shakllantiradi.
          </p>
          <p style={{ margin: "0 0 28px", lineHeight: 1.7, color: "#475569", fontSize: "0.95rem" }}>
            Viloyat sport maktablari, klublar va jamoat tashkilotlari bilan hamkorlikda yoshlarni sportga jalb qilish,
            professional sportni rivojlantirish va xalqaro musobaqalarda viloyat sharafini himoya qilish ustuvor
            vazifalar qatorida turadi.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            {[
              { label: "Tashkil etilgan yil", value: "1991" },
              { label: "Xodimlar soni", value: "45+" },
              { label: "Viloyat tumanlari", value: "11" },
            ].map((c) => (
              <div
                key={c.label}
                style={{
                  background: "#fff",
                  border: "1px solid #E2E8F0",
                  borderRadius: "12px",
                  padding: "20px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "#1A3C6B" }}>{c.value}</div>
                <div style={{ marginTop: "8px", fontSize: "0.875rem", color: "#64748B" }}>{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </PageLayout>
    </>
  );
}
