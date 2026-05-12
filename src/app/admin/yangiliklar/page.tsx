"use client";

import { useState } from "react";
import Link from "next/link";
import { useData } from "@/context/DataContext";
import type { NewsItem } from "@/types/models";

export default function NewsAdmin() {
  const { news, deleteNews, updateNews } = useData();
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [editStatus, setEditStatus] = useState<NewsItem["status"]>("active");

  const filtered = news.filter((n) => n.title.toLowerCase().includes(search.toLowerCase()));

  const deleteItem = (id: number) => {
    if (confirm("O'chirishni tasdiqlaysizmi?")) {
      deleteNews(id);
      if (editingId === id) setEditingId(null);
    }
  };

  const startEdit = (n: NewsItem) => {
    setEditingId(n.id);
    setEditTitle(n.title);
    setEditCategory(n.category);
    setEditStatus(n.status);
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  const saveEdit = (id: number) => {
    if (!editTitle.trim()) return;
    updateNews(id, {
      title: editTitle.trim(),
      category: editCategory,
      status: editStatus,
    });
    setEditingId(null);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0F2447", margin: 0 }}>Yangiliklar</h1>
        <Link
          href="/admin/yangiliklar/yangi"
          style={{
            background: "#1A3C6B",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "0.875rem",
          }}
        >
          + Yangi qo&apos;shish
        </Link>
      </div>

      <div style={{ background: "#fff", borderRadius: 12, padding: 24, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
        <input
          placeholder="🔍 Qidirish..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "10px 14px",
            border: "1px solid #E2E8F0",
            borderRadius: 8,
            marginBottom: 16,
            fontSize: "0.875rem",
            boxSizing: "border-box",
            outline: "none",
          }}
        />
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#F7FAFC", borderRadius: 8 }}>
              {["#", "Sarlavha", "Kategoriya", "Sana", "Holat", "Amallar"].map((h) => (
                <th key={h} style={{ textAlign: "left", padding: "10px 12px", fontSize: "0.8rem", color: "#718096", fontWeight: 600 }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((n, i) =>
              editingId === n.id ? (
                <tr key={n.id} style={{ borderBottom: "1px solid #F7FAFC", background: "#F8FAFC" }}>
                  <td style={{ padding: "12px", color: "#718096", fontSize: "0.8rem", verticalAlign: "middle" }}>{i + 1}</td>
                  <td style={{ padding: "12px", verticalAlign: "middle" }}>
                    <input
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      style={{
                        width: "100%",
                        minWidth: "200px",
                        padding: "8px 10px",
                        borderRadius: 6,
                        border: "1px solid #E2E8F0",
                        boxSizing: "border-box",
                      }}
                    />
                  </td>
                  <td style={{ padding: "12px", verticalAlign: "middle" }}>
                    <select
                      value={editCategory}
                      onChange={(e) => setEditCategory(e.target.value)}
                      style={{ padding: "8px 10px", borderRadius: 6, border: "1px solid #E2E8F0", width: "100%" }}
                    >
                      <option>Yangilik</option>
                      <option>Musobaqa</option>
                      <option>Tadbir</option>
                      <option>Press-reliz</option>
                    </select>
                  </td>
                  <td style={{ padding: "12px", fontSize: "0.8rem", color: "#718096", verticalAlign: "middle" }}>{n.date}</td>
                  <td style={{ padding: "12px", verticalAlign: "middle" }}>
                    <select
                      value={editStatus}
                      onChange={(e) => setEditStatus(e.target.value as NewsItem["status"])}
                      style={{ padding: "8px 10px", borderRadius: 6, border: "1px solid #E2E8F0" }}
                    >
                      <option value="active">Faol</option>
                      <option value="draft">Qoralama</option>
                    </select>
                  </td>
                  <td style={{ padding: "12px", verticalAlign: "middle" }}>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                      <button
                        type="button"
                        onClick={() => saveEdit(n.id)}
                        style={{
                          fontSize: "0.8rem",
                          color: "#fff",
                          background: "#1A3C6B",
                          border: "none",
                          padding: "6px 12px",
                          borderRadius: 6,
                          cursor: "pointer",
                          fontWeight: 600,
                        }}
                      >
                        Saqlash
                      </button>
                      <button
                        type="button"
                        onClick={cancelEdit}
                        style={{
                          fontSize: "0.8rem",
                          color: "#64748B",
                          background: "#fff",
                          border: "1px solid #E2E8F0",
                          padding: "6px 12px",
                          borderRadius: 6,
                          cursor: "pointer",
                        }}
                      >
                        Bekor
                      </button>
                    </div>
                  </td>
                </tr>
              ) : (
                <tr key={n.id} style={{ borderBottom: "1px solid #F7FAFC" }}>
                  <td style={{ padding: "12px", color: "#718096", fontSize: "0.8rem" }}>{i + 1}</td>
                  <td style={{ padding: "12px", fontSize: "0.875rem", color: "#2D3748", fontWeight: 500 }}>{n.title}</td>
                  <td style={{ padding: "12px" }}>
                    <span style={{ background: "#EEF3FA", color: "#1A3C6B", fontSize: "0.75rem", padding: "2px 10px", borderRadius: 20 }}>
                      {n.category}
                    </span>
                  </td>
                  <td style={{ padding: "12px", fontSize: "0.8rem", color: "#718096" }}>{n.date}</td>
                  <td style={{ padding: "12px" }}>
                    <span style={{ background: "#D1FAE5", color: "#065F46", fontSize: "0.75rem", padding: "2px 10px", borderRadius: 20 }}>
                      {n.status === "active" ? "Faol" : "Qoralama"}
                    </span>
                  </td>
                  <td style={{ padding: "12px" }}>
                    <div style={{ display: "flex", gap: 8 }}>
                      <button
                        type="button"
                        onClick={() => startEdit(n)}
                        style={{
                          fontSize: "0.8rem",
                          color: "#1A3C6B",
                          background: "none",
                          border: "1px solid #1A3C6B",
                          padding: "4px 12px",
                          borderRadius: 6,
                          cursor: "pointer",
                        }}
                      >
                        ✏️ Tahrir
                      </button>
                      <button
                        type="button"
                        onClick={() => deleteItem(n.id)}
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
                        🗑️ O&apos;chir
                      </button>
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
