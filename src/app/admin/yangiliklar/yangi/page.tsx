'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useData } from '@/context/DataContext'

export default function AddNews() {
  const { addNews } = useData()
  const router = useRouter()
  const [form, setForm] = useState({ title: '', category: 'Yangilik', content: '', date: '' })

  const handleSubmit = () => {
    addNews({
      title: form.title,
      category: form.category,
      content: form.content,
      date: new Date().toLocaleDateString('uz-UZ'),
      image: '',
      status: 'active'
    })
    router.push('/admin/yangiliklar')
  }

  const inputStyle = {
    width: '100%', padding: '10px 14px', border: '1px solid #E2E8F0',
    borderRadius: 8, fontSize: '0.95rem', outline: 'none',
    boxSizing: 'border-box' as const, marginTop: 6
  }
  const labelStyle = {
    display: 'block' as const, fontSize: '0.875rem',
    fontWeight: 600 as const, color: '#2D3748'
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
        <button onClick={() => router.back()} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }}>←</button>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F2447', margin: 0 }}>Yangi yangilik qo'shish</h1>
      </div>

      <div style={{ background: '#fff', borderRadius: 12, padding: 32, boxShadow: '0 1px 4px rgba(0,0,0,0.06)', maxWidth: 800 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
          <div>
            <label style={labelStyle}>Sarlavha *</label>
            <input style={inputStyle} placeholder="Yangilik sarlavhasi" value={form.title}
              onChange={e => setForm({...form, title: e.target.value})} />
          </div>
          <div>
            <label style={labelStyle}>Kategoriya</label>
            <select style={inputStyle} value={form.category} onChange={e => setForm({...form, category: e.target.value})}>
              <option>Yangilik</option>
              <option>Musobaqa</option>
              <option>Tadbir</option>
              <option>Press-reliz</option>
            </select>
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <label style={labelStyle}>Rasm yuklash</label>
          <div style={{
            border: '2px dashed #E2E8F0', borderRadius: 8, padding: '32px',
            textAlign: 'center', marginTop: 6, cursor: 'pointer', color: '#718096'
          }}>
            📷 Rasm tanlash uchun bosing yoki sudrab tashlang
          </div>
        </div>

        <div style={{ marginBottom: 24 }}>
          <label style={labelStyle}>Matn *</label>
          <textarea
            style={{ ...inputStyle, height: 200, resize: 'vertical' }}
            placeholder="Yangilik matni..."
            value={form.content}
            onChange={e => setForm({...form, content: e.target.value})}
          />
        </div>

        <div style={{ display: 'flex', gap: 12 }}>
          <button onClick={handleSubmit} style={{
            background: '#1A3C6B', color: '#fff', padding: '12px 32px',
            border: 'none', borderRadius: 8, fontWeight: 700, cursor: 'pointer', fontSize: '0.95rem'
          }}>
            ✅ Chop etish
          </button>
          <button style={{
            background: '#F7FAFC', color: '#718096', padding: '12px 32px',
            border: '1px solid #E2E8F0', borderRadius: 8, cursor: 'pointer', fontSize: '0.95rem'
          }}>
            💾 Qoralama
          </button>
          <button onClick={() => router.back()} style={{
            background: 'none', color: '#E63946', padding: '12px 24px',
            border: '1px solid #E63946', borderRadius: 8, cursor: 'pointer', fontSize: '0.95rem'
          }}>
            ❌ Bekor
          </button>
        </div>
      </div>
    </div>
  )
}
