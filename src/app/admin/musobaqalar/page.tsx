"use client";

import { useState } from "react";
import { useData } from "@/context/DataContext";
import type { Competition } from "@/types/models";

export default function AdminCompetitionsPage() {
  const { competitions, addCompetition, deleteCompetition } = useData();
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [sport, setSport] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState<Competition["status"]>("upcoming");

  const resetForm = () => {
    setTitle("");
    setSport("");
    setDate("");
    setLocation("");
    setStatus("upcoming");
    setShowForm(false);
  };

  const handleAdd = () => {
    if (!title.trim() || !date) return;
    addCompetition({
      title: title.trim(),
      sport: sport.trim() || "—",
      date,
      location: location.trim() || "—",
      status,
    });
    resetForm();
  };

  const handleDelete = (id: number) => {
    if (confirm("O'chirishni tasdiqlaysizmi?")) deleteCompetition(id);
  };

  const statusStyle = (s: Competition["status"]) => {
    if (s === "upcoming") return { bg: "#DBEAFE", color: "#1e40af", label: "Kutilmoqda" };
    if (s === "ongoing") return { bg: "#D1FAE5", color: "#065f46", label: "O'tkazilmoqda" };
    return { bg: "#F3F4F6", color: "#374151", label: "Yakunlangan" };
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0F2447", margin: 0 }}>Musobaqalar</h1>
        <button
          type="button"
          onClick={() => setShowForm(!showForm)}
          style={{
            background: "#1A3C6B",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: 8,
            border: "none",
            fontWeight: 600,
            fontSize: "0.875rem",
            cursor: "pointer",
          }}
        >
          + Yangi qo&apos;shish
        </button>
      </div>

      {showForm && (
        <div
          style={{
            background: "#fff",
            borderRadius: 12,
            padding: 24,
            marginBottom: 24,
            boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
            border: "1px solid #E2E8F0",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <div>
              <label style={{ display: "block", fontWeight: 600, fontSize: "0.85rem", marginBottom: 6 }}>Nomi</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid #E2E8F0", boxSizing: "border-box" }}
              />
            </div>
            <div>
              <label style={{ display: "block", fontWeight: 600, fontSize: "0.85rem", marginBottom: 6 }}>Sport</label>
              <input
                value={sport}
                onChange={(e) => setSport(e.target.value)}
                style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid #E2E8F0", boxSizing: "border-box" }}
              />
            </div>
            <div>
              <label style={{ display: "block", fontWeight: 600, fontSize: "0.85rem", marginBottom: 6 }}>Sana</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid #E2E8F0", boxSizing: "border-box" }}
              />
            </div>
            <div>
              <label style={{ display: "block", fontWeight: 600, fontSize: "0.85rem", marginBottom: 6 }}>Joyi</label>
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid #E2E8F0", boxSizing: "border-box" }}
              />
            </div>
            <div style={{ gridColumn: "1 / -1" }}>
              <label style={{ display: "block", fontWeight: 600, fontSize: "0.85rem", marginBottom: 6 }}>Holat</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as Competition["status"])}
                style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid #E2E8F0", boxSizing: "border-box" }}
              >
                <option value="upcoming">Kutilmoqda</option>
                <option value="ongoing">O&apos;tkazilmoqda</option>
                <option value="finished">Yakunlangan</option>
              </select>
            </div>
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
            <button
              type="button"
              onClick={handleAdd}
              style={{
                background: "#1A3C6B",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: 8,
                border: "none",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Qo&apos;shish
            </button>
            <button
              type="button"
              onClick={resetForm}
              style={{
                background: "#fff",
                color: "#64748B",
                padding: "10px 20px",
                borderRadius: 8,
                border: "1px solid #E2E8F0",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Bekor
            </button>
          </div>
        </div>
      )}

      <div style={{ background: "#fff", borderRadius: 12, padding: 24, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
        <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#F7FAFC" }}>
              {["#", "Nomi", "Sport", "Sana", "Joyi", "Holat", "Amallar"].map((h) => (
                <th key={h} style={{ textAlign: "left", padding: "10px 8px", fontSize: "0.75rem", color: "#718096", fontWeight: 600 }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {competitions.length === 0 ? (
              <tr>
                <td colSpan={7} style={{ padding: 20, color: "#718096" }}>
                  Musobaqalar yo&apos;q.
                </td>
              </tr>
            ) : (
              competitions.map((c, i) => {
                const st = statusStyle(c.status);
                return (
                  <tr key={c.id} style={{ borderBottom: "1px solid #F7FAFC" }}>
                    <td style={{ padding: "10px 8px", color: "#718096", fontSize: "0.8rem" }}>{i + 1}</td>
                    <td style={{ padding: "10px 8px", fontWeight: 600, color: "#2D3748", fontSize: "0.85rem" }}>{c.title}</td>
                    <td style={{ padding: "10px 8px", fontSize: "0.85rem" }}>{c.sport}</td>
                    <td style={{ padding: "10px 8px", fontSize: "0.8rem", color: "#718096" }}>{c.date}</td>
                    <td style={{ padding: "10px 8px", fontSize: "0.8rem" }}>{c.location}</td>
                    <td style={{ padding: "10px 8px" }}>
                      <span
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          padding: "4px 10px",
                          borderRadius: 20,
                          background: st.bg,
                          color: st.color,
                        }}
                      >
                        {st.label}
                      </span>
                    </td>
                    <td style={{ padding: "10px 8px" }}>
                      <button
                        type="button"
                        onClick={() => handleDelete(c.id)}
                        style={{
                          fontSize: "0.75rem",
                          color: "#E63946",
                          background: "none",
                          border: "1px solid #E63946",
                          padding: "4px 10px",
                          borderRadius: 6,
                          cursor: "pointer",
                        }}
                      >
                        O&apos;chirish
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}
