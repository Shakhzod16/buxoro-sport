"use client";

import PageHero from "@/components/sections/PageHero";

const SERVICES = [
  {
    icon: "📋",
    title: "Sport unvonlari berish",
    desc: "Xalq sporti ustasi, sport ustasi unvonlarini berish",
    href: "/davlat-xizmatlari/sport-unvonlari",
  },
  {
    icon: "🎖️",
    title: "Sport razryadlari",
    desc: "Musobaqa natijalari asosida razryad tayinlash",
    href: "/davlat-xizmatlari/razryadlar",
  },
  {
    icon: "📄",
    title: "Litsenziyalash",
    desc: "Sport muassasalarini litsenziyalash",
    href: "/davlat-xizmatlari/litsenziya",
  },
  {
    icon: "📊",
    title: "Statistik ma'lumotlar",
    desc: "Sport sohasidagi statistik hisobotlar",
    href: "/ochiq-malumotlar",
  },
  {
    icon: "🏟️",
    title: "Inshoot ijarasi",
    desc: "Sport inshootlaridan foydalanish tartibi",
    href: "#",
  },
  {
    icon: "📝",
    title: "Murojaat yuborish",
    desc: "Fuqarolarga elektron murojaat xizmati",
    href: "/boglanish",
  },
];

export default function DavlatXizmatlariPage() {

  return (
    <>
      <PageHero
        title="Davlat xizmatlari"
        subtitle="Fuqarolar va tashkilotlar uchun sport sohasidagi davlat xizmatlari"
        breadcrumb={[{ label: "Davlat xizmatlari", href: "/davlat-xizmatlari" }]}
      />
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "32px 24px 48px" }}>
        <p style={{ margin: "0 0 28px", fontSize: "1rem", lineHeight: 1.75, color: "#475569", maxWidth: "900px" }}>
          Buxoro viloyati sport boshqarmasi tomonidan jismoniy tarbiya va sport sohasida davlat xizmatlari qonuniy
          asosda, shaffof va qulay tarzda ko‘rsatiladi. Quyidagi bo‘limlar orqali unvon va razryadlar, litsenziyalash,
          statistik ma’lumotlar va murojaatlar bo‘yicha yo‘riqnomalarga kirishingiz mumkin.
        </p>
        <div
          className="davlat-services-grid"
          style={{
            display: "grid",
          }}
        >
          {SERVICES.map((s) => (
            <div
              key={s.title}
              style={{
                background: "#fff",
                borderRadius: "14px",
                padding: "28px 22px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                border: "1px solid #E8ECF2",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <div style={{ fontSize: "4rem", lineHeight: 1 }}>{s.icon}</div>
              <div style={{ marginTop: "12px", fontWeight: 800, fontSize: "1.05rem", color: "#0F2447" }}>{s.title}</div>
              <p style={{ margin: "10px 0 0", fontSize: "0.9rem", color: "#64748B", lineHeight: 1.55 }}>{s.desc}</p>
              <a
                href={s.href}
                style={{
                  marginTop: "auto",
                  paddingTop: "18px",
                  fontWeight: 700,
                  color: "#1A3C6B",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                }}
              >
                Batafsil →
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
