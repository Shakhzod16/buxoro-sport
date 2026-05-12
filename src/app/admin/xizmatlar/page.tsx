"use client";

import { useState } from "react";

const SERVICES = [
  {
    icon: "📋",
    title: "Sport unvonlari berish",
    desc: "Xalq sporti ustasi, sport ustasi unvonlarini berish",
  },
  {
    icon: "🎖️",
    title: "Sport razryadlari",
    desc: "Musobaqa natijalari asosida razryad tayinlash",
  },
  {
    icon: "📄",
    title: "Litsenziyalash",
    desc: "Sport muassasalarini litsenziyalash",
  },
  {
    icon: "📊",
    title: "Statistik ma'lumotlar",
    desc: "Sport sohasidagi statistik hisobotlar",
  },
  {
    icon: "🏟️",
    title: "Inshoot ijarasi",
    desc: "Sport inshootlaridan foydalanish tartibi",
  },
  {
    icon: "📝",
    title: "Murojaat yuborish",
    desc: "Fuqarolarga elektron murojaat xizmati",
  },
];

export default function AdminServicesPage() {
  const [msg, setMsg] = useState<string | null>(null);

  return (
    <div>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0F2447", margin: "0 0 12px" }}>Davlat Xizmatlari Boshqaruvi</h1>
      <p style={{ margin: "0 0 24px", color: "#64748B", fontSize: "0.95rem", lineHeight: 1.6 }}>
        Xizmatlar ma&apos;lumotlari tez orada tahrirlash imkoniyati qo&apos;shiladi
      </p>
      {msg && (
        <div
          style={{
            marginBottom: 16,
            padding: "12px 16px",
            background: "#FEF3C7",
            border: "1px solid #F59E0B",
            borderRadius: 8,
            color: "#92400E",
            fontWeight: 600,
          }}
        >
          {msg}
        </div>
      )}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
        {SERVICES.map((s) => (
          <div
            key={s.title}
            style={{
              background: "#fff",
              borderRadius: 14,
              padding: "24px 20px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
              border: "1px solid #E8ECF2",
            }}
          >
            <div style={{ fontSize: "3.5rem", lineHeight: 1 }}>{s.icon}</div>
            <div style={{ marginTop: "10px", fontWeight: 800, fontSize: "1rem", color: "#0F2447" }}>{s.title}</div>
            <p style={{ margin: "10px 0 0", fontSize: "0.9rem", color: "#64748B", lineHeight: 1.55 }}>{s.desc}</p>
            <button
              type="button"
              onClick={() => {
                setMsg("Tez orada...");
                window.setTimeout(() => setMsg(null), 2500);
              }}
              style={{
                marginTop: "16px",
                padding: "8px 16px",
                background: "#1A3C6B",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                fontWeight: 600,
                cursor: "pointer",
                fontSize: "0.875rem",
              }}
            >
              Tahrirlash
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
