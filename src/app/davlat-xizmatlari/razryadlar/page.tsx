"use client";

import PageHero from "@/components/sections/PageHero";

export default function RazryadlarPage() {
  return (
    <>
      <PageHero
        title="Sport razryadlari"
        subtitle="Musobaqa natijalari asosida razryad berish"
        breadcrumb={[
          { label: "Davlat xizmatlari", href: "/davlat-xizmatlari" },
          { label: "Razryadlar", href: "/davlat-xizmatlari/razryadlar" },
        ]}
      />
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "32px 24px 48px" }}>
        <div style={{ background: "#fff", borderRadius: "12px", padding: "24px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", lineHeight: 1.75, color: "#475569" }}>
          <p style={{ margin: "0 0 12px" }}>
            III, II, I sport razryadlari va nomdor unvonlar sport musobaqalari protokollari asosida beriladi. Ariza
            topshirish tartibi va kerakli hujjatlar ro‘yxati viloyat sport boshqarmasi tomonidan belgilanadi.
          </p>
          <p style={{ margin: 0 }}>Onlayn murojaat va holatini kuzatish funksiyasi tez orada faollashtiriladi.</p>
        </div>
      </div>
    </>
  );
}
