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

const TASKS: { title: string; desc: string }[] = [
  {
    title: "Sport siyosatini amalga oshirish",
    desc: "Viloyatda jismoniy tarbiya va sportni rivojlantirish bo‘yicha davlat dasturlari va normativ hujjatlarni bajarishni tashkil etish.",
  },
  {
    title: "Musobaqalarni tashkil etish",
    desc: "Viloyat, respublika va xalqaro darajadagi sport musobaqalari, turnirlar va sport bayramlarini rejalashtirish hamda o‘tkazish.",
  },
  {
    title: "Sport infratuzilmasini rivojlantirish",
    desc: "Sport inshootlari, stadionlar va mashg‘ulot zallaridan foydalanish tartibini yaxshilash va ularni zamonaviy talablarga moslashtirish.",
  },
  {
    title: "Kadr tayyorlash va malaka oshirish",
    desc: "Murabbiylar, trenerlar va sport mutaxassislarini tayyorlash, ularning malakasini oshirish tadbirlarini tashkil etish.",
  },
  {
    title: "Davlat xizmatlarini ko‘rsatish",
    desc: "Sport unvonlari, razryadlar va litsenziyalash bo‘yicha fuqarolarga davlat xizmatlarini qabul qilish va ko‘rsatish.",
  },
  {
    title: "Yoshlarni sportga jalb qilish",
    desc: "Maktab va sport muassasalarida sog‘lom turmush tarzini targ‘ib qilish, yoshlarni muntazim mashg‘ulotlarga jalb etish.",
  },
  {
    title: "Statistika va hisobotlilik",
    desc: "Viloyat bo‘yicha sport sohasidagi statistik ma’lumotlarni yig‘ish, tahlil qilish va ochiq ma’lumotlar portaliga joylashtirish.",
  },
  {
    title: "Xalqaro hamkorlik",
    desc: "Sport sohasida xorijiy hamkorlar bilan aloqani rivojlantirish va xalqaro loyihalarda ishtirok etishni muvofiqlashtirish.",
  },
];

export default function VazifalariPage() {
  const pathname = usePathname();

  return (
    <>
      <PageHero
        title="Asosiy vazifalari"
        subtitle="Boshqarma faoliyatining asosiy yo‘nalishlari"
        breadcrumb={[
          { label: "Tashkilot", href: "/tashkilot" },
          { label: "Vazifalar", href: "/tashkilot/vazifalari" },
        ]}
      />
      <PageLayout sidebar={<SidebarNav title="Tashkilot" items={SIDEBAR_ITEMS} currentPath={pathname} />}>
        <div style={{ background: "#fff", borderRadius: "12px", padding: "28px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {TASKS.map((t, i) => (
              <div
                key={t.title}
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                  padding: "16px",
                  border: "1px solid #E2E8F0",
                  borderRadius: "12px",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "#1A3C6B",
                    color: "#fff",
                    fontWeight: 800,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {i + 1}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "1rem", color: "#0F2447", marginBottom: "6px" }}>{t.title}</div>
                  <div style={{ fontSize: "0.9rem", color: "#64748B", lineHeight: 1.65 }}>{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageLayout>
    </>
  );
}
