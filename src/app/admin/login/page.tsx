'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [form, setForm] = useState({ username: '', password: '' })
  const [error, setError] = useState('')

  const handleLogin = () => {
    if (form.username === 'admin' && form.password === 'admin123') {
      localStorage.setItem('bxs_admin_auth', 'true')
      router.push('/admin')
    } else {
      setError("Login yoki parol noto'g'ri")
    }
  }

  return (
    <div style={{
      minHeight: '100vh', background: 'linear-gradient(135deg, #0F2447, #1A3C6B)',
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      <div style={{
        background: '#fff', borderRadius: 16, padding: '40px',
        width: '100%', maxWidth: 400, boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontSize: '3rem' }}>🏟️</div>
          <h1 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F2447', margin: '8px 0 4px' }}>
            Admin Panel
          </h1>
          <p style={{ color: '#718096', fontSize: '0.875rem' }}>
            Buxoro Viloyati Sport Boshqarmasi
          </p>
        </div>

        <div style={{ marginBottom: 16 }}>
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#2D3748', marginBottom: 6 }}>
            Foydalanuvchi nomi
          </label>
          <input
            type="text"
            placeholder="admin"
            value={form.username}
            onChange={e => setForm({...form, username: e.target.value})}
            style={{
              width: '100%', padding: '10px 14px', border: '1px solid #E2E8F0',
              borderRadius: 8, fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box'
            }}
          />
        </div>

        <div style={{ marginBottom: 24 }}>
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#2D3748', marginBottom: 6 }}>
            Parol
          </label>
          <input
            type="password"
            placeholder="••••••••"
            value={form.password}
            onChange={e => setForm({...form, password: e.target.value})}
            onKeyDown={e => e.key === 'Enter' && handleLogin()}
            style={{
              width: '100%', padding: '10px 14px', border: '1px solid #E2E8F0',
              borderRadius: 8, fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box'
            }}
          />
        </div>

        {error && (
          <p style={{ color: '#E63946', fontSize: '0.875rem', marginBottom: 16, textAlign: 'center' }}>{error}</p>
        )}

        <button onClick={handleLogin} style={{
          width: '100%', padding: '12px', background: '#1A3C6B',
          color: '#fff', border: 'none', borderRadius: 8,
          fontSize: '1rem', fontWeight: 700, cursor: 'pointer'
        }}>
          Kirish →
        </button>

        <p style={{ textAlign: 'center', marginTop: 16, fontSize: '0.75rem', color: '#718096' }}>
          Demo: admin / admin123
        </p>
      </div>
    </div>
  )
}
