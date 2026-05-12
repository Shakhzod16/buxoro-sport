"use client";

import PageHero from "@/components/sections/PageHero";

export default function LitsenziyaPage() {
  return (
    <>
      <PageHero
        title="Litsenziyalash"
        subtitle="Sport muassasalari va faoliyat turlarini litsenziyalash"
        breadcrumb={[
          { label: "Davlat xizmatlari", href: "/davlat-xizmatlari" },
          { label: "Litsenziya", href: "/davlat-xizmatlari/litsenziya" },
        ]}
      />
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "32px 24px 48px" }}>
        <div style={{ background: "#fff", borderRadius: "12px", padding: "24px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", lineHeight: 1.75, color: "#475569" }}>
          <p style={{ margin: "0 0 12px" }}>
            Sport klublari, sport maktablari va maxsus sport faoliyatini yurituvchi yuridik shaxslarning litsenziya
            olishi qonun hujjatlariga muvofiq amalga oshiriladi. Tekshiruv komissiyasi xulosasi va davlat boji to‘lovi
            tartibi alohida belgilanadi.
          </p>
          <p style={{ margin: 0 }}>Ariza shakllari va namunaviy hujjatlar tez orada joylashtiriladi.</p>
        </div>
      </div>
    </>
  );
}
