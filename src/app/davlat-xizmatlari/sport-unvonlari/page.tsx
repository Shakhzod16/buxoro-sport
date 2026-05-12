"use client";

import PageHero from "@/components/sections/PageHero";

export default function SportUnvonlariPage() {
  return (
    <>
      <PageHero
        title="Sport unvonlari berish"
        subtitle="Xalq sporti ustasi va sport ustasi unvonlari"
        breadcrumb={[
          { label: "Davlat xizmatlari", href: "/davlat-xizmatlari" },
          { label: "Sport unvonlari", href: "/davlat-xizmatlari/sport-unvonlari" },
        ]}
      />
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "32px 24px 48px" }}>
        <div style={{ background: "#fff", borderRadius: "12px", padding: "24px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", lineHeight: 1.75, color: "#475569" }}>
          <p style={{ margin: "0 0 12px" }}>
            Sport unvonlari davlat dasturi va sport federatsiyalari bilan kelishilgan tartibda beriladi. Ariza hujjatlari
            ro‘yxati, ko‘rib chiqish muddatlari va natijalar bo‘yicha ma’lumotlar ushbu bo‘limda yangilanadi.
          </p>
          <p style={{ margin: 0 }}>
            Batafsil yo‘riqnoma va onlayn ariza uchun tez orada qo‘shimcha havolalar joylashtiriladi.
          </p>
        </div>
      </div>
    </>
  );
}
