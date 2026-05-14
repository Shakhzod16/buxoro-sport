"use client";

import { useState, type FormEvent } from "react";

import PageHero from "@/components/sections/PageHero";
import { useResponsive } from "@/hooks/useResponsive";

export default function BoglanishPage() {
  const { isMobile } = useResponsive();
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
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "55% 45%", gap: "32px", alignItems: "start" }}>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47967.123!2d64.3791!3d39.7747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d1b68ef7b3b31%3A0x6a5e8b45a4e3b0d!2sBuxoro%2C%20O%27zbekiston!5e0!3m2!1suz!2suz!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "12px", display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Buxoro viloyati sport boshqarmasi manzili"
            />
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

            <div style={{ marginTop: "16px" }}>
              <div style={{ fontWeight: 700, fontSize: "0.8rem", color: "#334155", marginBottom: "10px" }}>Ijtimoiy tarmoqlar</div>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <a
                  href="https://t.me/buxoro_sport"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "#1A3C6B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "1rem",
                  }}
                >
                  ✈️
                </a>
                <a
                  href="https://instagram.com/buxoro_sport"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "#1A3C6B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "1rem",
                  }}
                >
                  📷
                </a>
                <a
                  href="https://facebook.com/buxorosport"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "#1A3C6B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "1rem",
                  }}
                >
                  📘
                </a>
                <a
                  href="https://youtube.com/@buxorosport"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "#1A3C6B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "1rem",
                  }}
                >
                  ▶️
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
