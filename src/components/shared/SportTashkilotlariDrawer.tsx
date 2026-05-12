"use client";

import { useState } from "react";

const hududlar = [
  "QORAQALPOG'ISTON RESPUBLIKASI",
  "ANDIJON VILOYATI",
  "BUXORO VILOYATI",
  "JIZZAX VILOYATI",
  "QASHQADARYO VILOYATI",
  "NAVOIY VILOYATI",
  "NAMANGAN VILOYATI",
  "SAMARQAND VILOYATI",
  "SURXONDARYO VILOYATI",
  "SIRDARYO VILOYATI",
  "TOSHKENT VILOYATI",
  "TOSHKENT SHAHRI",
  "FARG'ONA VILOYATI",
  "XORAZM VILOYATI",
];

const respublikaOrgs = [
  {
    name: "SPORT AKADEMIYASI",
    phone: "+998996633255",
    website: "https://sportacademy.uz",
    email: "haydarovakbar640@gmail.com",
    social: { instagram: true, telegram: true, facebook: true, youtube: true },
    address: "Toshkent shahar, Yunusobod tumani",
  },
  {
    name: "SPORT YAKKA KURASHLARI BO'YICHA RESPUBLIKA OLIY SPORT MAHORATI MAKTABI",
    phone: "+998712345678",
    website: "#",
    email: "info@yakka-kurash.uz",
    social: { instagram: true, telegram: true, facebook: false, youtube: false },
    address: "Toshkent shahar",
  },
  {
    name: "O'ZBEKISTON DAVLAT SPORT AKADEMIYASI HUZURIDAGI JISMONIY TARBIYA VA SPORT ILMIY TADQIQOTLAR INSTITUTI",
    phone: "+998712223344",
    website: "#",
    email: "info@sportinstitut.uz",
    social: { instagram: false, telegram: true, facebook: true, youtube: false },
    address: "Toshkent shahar, Chilonzor tumani",
  },
  {
    name: "RAQAMLASHTIRISH VA SERTIFIKATLASH MARKAZI",
    phone: "+998711234567",
    website: "#",
    email: "info@raqamlashtirish.uz",
    social: { instagram: true, telegram: true, facebook: true, youtube: true },
    address: "Toshkent shahar",
  },
  {
    name: "RESPUBLIKA OLIMPIYA ZAXIRALARI TENNIS MAKTABI",
    phone: "+998712345000",
    website: "#",
    email: "tennis@olimpiya.uz",
    social: { instagram: true, telegram: false, facebook: true, youtube: false },
    address: "Toshkent shahar, Mirzo Ulugbek tumani",
  },
];

interface Org {
  name: string;
  phone: string;
  website: string;
  email: string;
  social: { instagram: boolean; telegram: boolean; facebook: boolean; youtube: boolean };
  address: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function SportTashkilotlariDrawer({ isOpen, onClose }: Props) {
  const [activeCategory, setActiveCategory] = useState<string>("respublika");
  const [selectedOrg, setSelectedOrg] = useState<Org | null>(null);
  const [search, setSearch] = useState("");
  const [showOrgPanel, setShowOrgPanel] = useState(false);

  if (!isOpen) return null;

  const filtered = respublikaOrgs.filter((o) => o.name.toLowerCase().includes(search.toLowerCase()));

  const handleCategoryClick = (id: string) => {
    setActiveCategory(id);
    setShowOrgPanel(id === "respublika");
    setSelectedOrg(null);
  };

  const handleOrgClick = (org: Org) => {
    setSelectedOrg(org);
  };

  return (
    <>
      <div
        role="presentation"
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.4)",
          zIndex: 998,
        }}
      />

      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          display: "flex",
          zIndex: 999,
          boxShadow: "4px 0 24px rgba(0,0,0,0.2)",
        }}
      >
        <div
          style={{
            width: "260px",
            background: "#1A3C6B",
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
          }}
        >
          <button
            type="button"
            onClick={onClose}
            style={{
              alignSelf: "flex-start",
              margin: "12px",
              width: "36px",
              height: "36px",
              background: "#E63946",
              border: "none",
              borderRadius: "4px",
              color: "#fff",
              fontSize: "1.1rem",
              cursor: "pointer",
              fontWeight: 700,
            }}
          >
            ✕
          </button>

          <button
            type="button"
            onClick={() => handleCategoryClick("respublika")}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "14px 20px",
              background: activeCategory === "respublika" ? "rgba(255,255,255,0.15)" : "transparent",
              border: "none",
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.8rem",
              cursor: "pointer",
              letterSpacing: "0.05em",
              textAlign: "left",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            RESPUBLIKA MUASSASALARI <span>›</span>
          </button>

          <button
            type="button"
            onClick={() => handleCategoryClick("hududlar")}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "14px 20px",
              background: activeCategory === "hududlar" ? "rgba(255,255,255,0.15)" : "transparent",
              border: "none",
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.8rem",
              cursor: "pointer",
              letterSpacing: "0.05em",
              textAlign: "left",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            HUDUDLAR{" "}
            <span style={{ color: activeCategory === "hududlar" ? "#fff" : "rgba(255,255,255,0.6)" }}>
              {activeCategory === "hududlar" ? "∧" : "∨"}
            </span>
          </button>

          {activeCategory === "hududlar" &&
            hududlar.map((h) => (
              <button
                key={h}
                type="button"
                onClick={() => {
                  setShowOrgPanel(true);
                  setSelectedOrg(null);
                }}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 20px 12px 32px",
                  background: "rgba(0,0,0,0.2)",
                  border: "none",
                  color: "rgba(255,255,255,0.85)",
                  fontSize: "0.78rem",
                  cursor: "pointer",
                  textAlign: "left",
                  letterSpacing: "0.03em",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {h} <span style={{ color: "rgba(255,255,255,0.5)" }}>›</span>
              </button>
            ))}
        </div>

        {showOrgPanel && (
          <div
            style={{
              width: "300px",
              background: "#fff",
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              borderLeft: "1px solid #E2E8F0",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px" }}>
              <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#1A3C6B" }}>TASHKILOTLAR</span>
              <button
                type="button"
                onClick={() => {
                  setShowOrgPanel(false);
                  setSelectedOrg(null);
                }}
                style={{
                  width: "32px",
                  height: "32px",
                  background: "#E63946",
                  border: "none",
                  borderRadius: "4px",
                  color: "#fff",
                  fontSize: "1rem",
                  cursor: "pointer",
                  fontWeight: 700,
                }}
              >
                ✕
              </button>
            </div>

            <div style={{ padding: "0 12px 12px", position: "relative" }}>
              <input
                type="text"
                placeholder="Qidiruv"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  width: "100%",
                  padding: "8px 32px 8px 12px",
                  border: "1px solid #E2E8F0",
                  borderRadius: "6px",
                  fontSize: "0.875rem",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
              {search ? (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  style={{
                    position: "absolute",
                    right: "20px",
                    top: "8px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "#718096",
                  }}
                >
                  ✕
                </button>
              ) : null}
            </div>

            {filtered.map((org) => (
              <button
                key={org.name}
                type="button"
                onClick={() => handleOrgClick(org)}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 16px",
                  border: "none",
                  borderBottom: "1px solid #F7FAFC",
                  background: selectedOrg?.name === org.name ? "#EEF3FA" : "#fff",
                  color: "#2D3748",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  textAlign: "left",
                  lineHeight: 1.4,
                }}
              >
                <span style={{ paddingRight: "8px" }}>{org.name}</span>
                <span style={{ color: "#CBD5E0", flexShrink: 0 }}>›</span>
              </button>
            ))}
          </div>
        )}

        {selectedOrg ? (
          <div
            style={{
              width: "340px",
              background: "#fff",
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              borderLeft: "1px solid #E2E8F0",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "16px" }}>
              <h3
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "#1A3C6B",
                  margin: 0,
                  lineHeight: 1.4,
                  paddingRight: "8px",
                }}
              >
                {selectedOrg.name}
              </h3>
              <button
                type="button"
                onClick={() => setSelectedOrg(null)}
                style={{
                  width: "32px",
                  height: "32px",
                  flexShrink: 0,
                  background: "#E63946",
                  border: "none",
                  borderRadius: "4px",
                  color: "#fff",
                  fontSize: "1rem",
                  cursor: "pointer",
                  fontWeight: 700,
                }}
              >
                ✕
              </button>
            </div>

            <div style={{ borderTop: "1px solid #E2E8F0" }}>
              {[
                { label: "Telefon", value: selectedOrg.phone },
                { label: "Elektron-pochta", value: selectedOrg.email },
                { label: "Manzil", value: selectedOrg.address || "—" },
              ].map((row, i) => (
                <div
                  key={row.label}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "140px 1fr",
                    padding: "12px 16px",
                    borderBottom: "1px solid #F7FAFC",
                    background: i % 2 === 0 ? "#FAFBFC" : "#fff",
                  }}
                >
                  <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#4A5568" }}>{row.label}</span>
                  <span style={{ fontSize: "0.8rem", color: "#2D3748" }}>{row.value}</span>
                </div>
              ))}

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "140px 1fr",
                  padding: "12px 16px",
                  borderBottom: "1px solid #F7FAFC",
                  background: "#FAFBFC",
                }}
              >
                <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#4A5568" }}>Veb-sayt</span>
                <a
                  href={selectedOrg.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "0.8rem",
                    color: "#1A3C6B",
                    fontWeight: 600,
                    border: "1px solid #1A3C6B",
                    padding: "3px 12px",
                    borderRadius: "4px",
                    textDecoration: "none",
                    display: "inline-block",
                  }}
                >
                  Veb saytga o&apos;tish
                </a>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "140px 1fr",
                  padding: "12px 16px",
                  borderBottom: "1px solid #F7FAFC",
                }}
              >
                <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#4A5568" }}>Ijtimoiy tarmoqlar</span>
                <div style={{ display: "flex", gap: "8px" }}>
                  {selectedOrg.social.instagram ? (
                    <a
                      href="#"
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        background: "#1A3C6B",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                      }}
                    >
                      📷
                    </a>
                  ) : null}
                  {selectedOrg.social.telegram ? (
                    <a
                      href="#"
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        background: "#1A3C6B",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                      }}
                    >
                      ✈️
                    </a>
                  ) : null}
                  {selectedOrg.social.facebook ? (
                    <a
                      href="#"
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        background: "#1A3C6B",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                      }}
                    >
                      📘
                    </a>
                  ) : null}
                  {selectedOrg.social.youtube ? (
                    <a
                      href="#"
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        background: "#1A3C6B",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                      }}
                    >
                      ▶️
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
