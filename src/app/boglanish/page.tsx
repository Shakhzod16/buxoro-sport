"use client";

import { useState, type FormEvent } from "react";

import PageHero from "@/components/sections/PageHero";

export default function BoglanishPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero title="Bog'lanish" subtitle="Manzil, aloqa va murojaat formasi" breadcrumb={[{ label: "Bog'lanish", href: "/boglanish" }]} />
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "32px 24px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "55% 45%", gap: "32px", alignItems: "start" }}>
          <div>
            <div
              style={{
                height: "400px",
                background: "#EEF3FA",
                borderRadius: "14px",
                border: "1px solid #D9E2EC",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "#64748B",
              }}
            >
              📍 Xarita
            </div>
            <div style={{ marginTop: "20px", padding: "18px", background: "#fff", borderRadius: "12px", border: "1px solid #E2E8F0" }}>
              <div style={{ fontWeight: 800, color: "#0F2447", marginBottom: "8px" }}>Manzil</div>
              <p style={{ margin: 0, color: "#475569", lineHeight: 1.6 }}>Buxoro viloyati, Buxoro shahri, sport boshqarmasi binosi.</p>
            </div>
          </div>

          <div>
            <form onSubmit={submit} style={{ background: "#fff", borderRadius: "12px", padding: "24px", border: "1px solid #E2E8F0" }}>
              <label style={{ display: "block", fontWeight: 600, fontSize: "0.875rem", color: "#334155", marginBottom: "6px" }}>Ism</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  marginBottom: "14px",
                  borderRadius: "8px",
                  border: "1px solid #E2E8F0",
                  boxSizing: "border-box",
                }}
              />
              <label style={{ display: "block", fontWeight: 600, fontSize: "0.875rem", color: "#334155", marginBottom: "6px" }}>Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  marginBottom: "14px",
                  borderRadius: "8px",
                  border: "1px solid #E2E8F0",
                  boxSizing: "border-box",
                }}
              />
              <label style={{ display: "block", fontWeight: 600, fontSize: "0.875rem", color: "#334155", marginBottom: "6px" }}>Telefon</label>
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  marginBottom: "14px",
                  borderRadius: "8px",
                  border: "1px solid #E2E8F0",
                  boxSizing: "border-box",
                }}
              />
              <label style={{ display: "block", fontWeight: 600, fontSize: "0.875rem", color: "#334155", marginBottom: "6px" }}>Xabar</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  marginBottom: "16px",
                  borderRadius: "8px",
                  border: "1px solid #E2E8F0",
                  resize: "vertical",
                  boxSizing: "border-box",
                }}
              />
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "12px",
                  background: "#1A3C6B",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  fontWeight: 800,
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
              >
                Yuborish
              </button>
              {sent && (
                <p style={{ marginTop: "14px", color: "#047857", fontWeight: 700, textAlign: "center", marginBottom: 0 }}>
                  Xabaringiz qabul qilindi!
                </p>
              )}
            </form>

            <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                "📍 Buxoro viloyati, Buxoro shahri",
                "📞 +998 55 520 90 07",
                "✉️ info@buxoro-sport.uz",
                "🕐 Dushanba–Juma: 9:00–18:00",
              ].map((t) => (
                <div key={t} style={{ background: "#F8FAFC", padding: "12px 14px", borderRadius: "10px", fontSize: "0.9rem", color: "#334155" }}>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
