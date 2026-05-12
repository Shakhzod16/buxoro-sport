"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { SITE_CONFIG } from "@/lib/constants";

export default function AdminSettingsPage() {
  const [siteName, setSiteName] = useState("Buxoro Viloyati Sport Boshqarmasi");
  const [phone, setPhone] = useState(SITE_CONFIG.phone);
  const [email, setEmail] = useState(SITE_CONFIG.email);
  const [address, setAddress] = useState(SITE_CONFIG.address);
  const [saveMsg, setSaveMsg] = useState<string | null>(null);

  const [currentPw, setCurrentPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [pwMsg, setPwMsg] = useState<string | null>(null);

  useEffect(() => {
    if (!saveMsg) return;
    const t = window.setTimeout(() => setSaveMsg(null), 3000);
    return () => window.clearTimeout(t);
  }, [saveMsg]);

  const handleSaveSite = () => {
    setSaveMsg("Sozlamalar saqlandi ✓");
  };

  const handlePassword = () => {
    setPwMsg(null);
    if (!newPw || newPw !== confirmPw) {
      setPwMsg("Yangi parol va tasdiqlash mos kelmaydi.");
      return;
    }
    if (currentPw !== "admin123") {
      setPwMsg("Joriy parol noto'g'ri (demo: admin123).");
      return;
    }
    setPwMsg("Parol yangilandi (faqat demo sessiya).");
    setCurrentPw("");
    setNewPw("");
    setConfirmPw("");
  };

  const handleClearStorage = () => {
    if (!confirm("Barcha localStorage ma'lumotlari o'chiriladi. Davom etasizmi?")) return;
    localStorage.clear();
    window.location.reload();
  };

  const card: CSSProperties = {
    background: "#fff",
    borderRadius: 12,
    padding: 24,
    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
    marginBottom: 24,
    border: "1px solid #E8ECF2",
  };

  const label: CSSProperties = { display: "block", fontWeight: 600, fontSize: "0.875rem", marginBottom: 6, color: "#334155" };
  const input: CSSProperties = {
    width: "100%",
    padding: "10px 12px",
    marginBottom: 14,
    borderRadius: 8,
    border: "1px solid #E2E8F0",
    boxSizing: "border-box",
  };

  return (
    <div>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0F2447", marginBottom: 24 }}>Sozlamalar</h1>

      <div style={card}>
        <h2 style={{ margin: "0 0 16px", fontSize: "1.05rem", fontWeight: 800, color: "#0F2447" }}>Sayt ma&apos;lumotlari</h2>
        <label style={label}>Sayt nomi</label>
        <input value={siteName} onChange={(e) => setSiteName(e.target.value)} style={input} />
        <label style={label}>Telefon</label>
        <input value={phone} onChange={(e) => setPhone(e.target.value)} style={input} />
        <label style={label}>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={input} />
        <label style={label}>Manzil</label>
        <input value={address} onChange={(e) => setAddress(e.target.value)} style={{ ...input, marginBottom: 16 }} />
        <button
          type="button"
          onClick={handleSaveSite}
          style={{
            padding: "10px 24px",
            background: "#1A3C6B",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Saqlash
        </button>
        {saveMsg && (
          <p style={{ marginTop: 12, marginBottom: 0, color: "#047857", fontWeight: 700 }}>{saveMsg}</p>
        )}
      </div>

      <div style={card}>
        <h2 style={{ margin: "0 0 16px", fontSize: "1.05rem", fontWeight: 800, color: "#0F2447" }}>Parolni o&apos;zgartirish</h2>
        <label style={label}>Joriy parol</label>
        <input type="password" value={currentPw} onChange={(e) => setCurrentPw(e.target.value)} style={input} autoComplete="off" />
        <label style={label}>Yangi parol</label>
        <input type="password" value={newPw} onChange={(e) => setNewPw(e.target.value)} style={input} autoComplete="new-password" />
        <label style={label}>Tasdiqlash</label>
        <input type="password" value={confirmPw} onChange={(e) => setConfirmPw(e.target.value)} style={{ ...input, marginBottom: 16 }} />
        <button
          type="button"
          onClick={handlePassword}
          style={{
            padding: "10px 24px",
            background: "#0F2447",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          O&apos;zgartirish
        </button>
        {pwMsg && (
          <p style={{ marginTop: 12, marginBottom: 0, color: pwMsg.includes("noto'g'ri") || pwMsg.includes("mos kelmaydi") ? "#dc2626" : "#047857", fontWeight: 600 }}>
            {pwMsg}
          </p>
        )}
      </div>

      <div style={card}>
        <h2 style={{ margin: "0 0 16px", fontSize: "1.05rem", fontWeight: 800, color: "#0F2447" }}>Ma&apos;lumotlarni tozalash</h2>
        <div
          style={{
            padding: 16,
            background: "#FEF2F2",
            border: "1px solid #FECACA",
            borderRadius: 10,
            color: "#991B1B",
            fontSize: "0.9rem",
            marginBottom: 16,
            lineHeight: 1.6,
          }}
        >
          Bu amal barcha localStorage ma&apos;lumotlarini o&apos;chiradi (yangiliklar, musobaqalar va boshqalar).
        </div>
        <button
          type="button"
          onClick={handleClearStorage}
          style={{
            padding: "10px 24px",
            background: "#dc2626",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Tozalash
        </button>
      </div>
    </div>
  );
}
