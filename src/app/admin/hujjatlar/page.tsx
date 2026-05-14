"use client";

import { useState } from "react";
import { useData } from "@/context/DataContext";
import type { Document } from "@/types/models";

export default function AdminDocumentsPage() {
  const { documents, addDocument, deleteDocument } = useData();
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<Document["category"]>("Qonun");
  const [date, setDate] = useState("");
  const [fileUrl, setFileUrl] = useState("");

  const resetForm = () => {
    setTitle("");
    setCategory("Qonun");
    setDate("");
    setFileUrl("");
    setShowForm(false);
  };

  const handleAdd = () => {
    if (!title.trim()) return;
    addDocument({
      title: title.trim(),
      category,
      date: date.trim() || "—",
      fileUrl: fileUrl.trim() || "#",
    });
    resetForm();
  };

  const handleDelete = (id: number) => {
    if (confirm("O'chirishni tasdiqlaysizmi?")) deleteDocument(id);
  };

  const catStyle = (c: Document["category"]) => {
    if (c === "Qonun") return { bg: "#DBEAFE", color: "#1e40af" };
    if (c === "Buyruq") return { bg: "#FFEDD5", color: "#c2410c" };
    return { bg: "#D1FAE5", color: "#047857" };
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0F2447", margin: 0 }}>Hujjatlar</h1>
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
          <label style={{ display: "block", fontWeight: 600, fontSize: "0.875rem", marginBottom: 6 }}>Sarlavha</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 12px",
              marginBottom: 14,
              borderRadius: 8,
              border: "1px solid #E2E8F0",
              boxSizing: "border-box",
            }}
          />
          <label style={{ display: "block", fontWeight: 600, fontSize: "0.875rem", marginBottom: 6 }}>Kategoriya</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as Document["category"])}
            style={{
              width: "100%",
              padding: "10px 12px",
              marginBottom: 14,
              borderRadius: 8,
              border: "1px solid #E2E8F0",
              boxSizing: "border-box",
            }}
          >
            <option value="Qonun">Qonun</option>
            <option value="Buyruq">Buyruq</option>
            <option value="Reglament">Reglament</option>
          </select>
          <label style={{ display: "block", fontWeight: 600, fontSize: "0.875rem", marginBottom: 6 }}>Sana</label>
          <input
            type="text"
            placeholder="2024"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 12px",
              marginBottom: 14,
              borderRadius: 8,
              border: "1px solid #E2E8F0",
              boxSizing: "border-box",
            }}
          />
          <label style={{ display: "block", fontWeight: 600, fontSize: "0.875rem", marginBottom: 6 }}>Fayl URL</label>
          <input
            type="text"
            placeholder="https://... yoki #"
            value={fileUrl}
            onChange={(e) => setFileUrl(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 12px",
              marginBottom: 16,
              borderRadius: 8,
              border: "1px solid #E2E8F0",
              boxSizing: "border-box",
            }}
          />
          <div style={{ display: "flex", gap: 10 }}>
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
        <div className="table-scroll">
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#F7FAFC" }}>
              {["#", "Sarlavha", "Kategoriya", "Sana", "Amallar"].map((h) => (
                <th key={h} style={{ textAlign: "left", padding: "10px 12px", fontSize: "0.8rem", color: "#718096", fontWeight: 600 }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {documents.length === 0 ? (
              <tr>
                <td colSpan={5} style={{ padding: 20, color: "#718096" }}>
                  Hujjatlar yo&apos;q.
                </td>
              </tr>
            ) : (
              documents.map((d, i) => {
                const cs = catStyle(d.category);
                return (
                  <tr key={d.id} style={{ borderBottom: "1px solid #F7FAFC" }}>
                    <td style={{ padding: "12px", color: "#718096", fontSize: "0.8rem" }}>{i + 1}</td>
                    <td style={{ padding: "12px", fontWeight: 600, color: "#2D3748" }}>{d.title}</td>
                    <td style={{ padding: "12px" }}>
                      <span
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          padding: "4px 10px",
                          borderRadius: 20,
                          background: cs.bg,
                          color: cs.color,
                        }}
                      >
                        {d.category}
                      </span>
                    </td>
                    <td style={{ padding: "12px", fontSize: "0.85rem", color: "#718096" }}>{d.date}</td>
                    <td style={{ padding: "12px" }}>
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                        <a
                          href={d.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ fontSize: "0.85rem", color: "#1A3C6B", fontWeight: 600, textDecoration: "none" }}
                        >
                          📥 Ko&apos;rish
                        </a>
                        <button
                          type="button"
                          onClick={() => handleDelete(d.id)}
                          style={{
                            fontSize: "0.8rem",
                            color: "#E63946",
                            background: "none",
                            border: "1px solid #E63946",
                            padding: "4px 12px",
                            borderRadius: 6,
                            cursor: "pointer",
                          }}
                        >
                          O&apos;chirish
                        </button>
                      </div>
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
