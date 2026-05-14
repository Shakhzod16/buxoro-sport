'use client'

import { useEffect, useState } from 'react'

import { BXS_SITE_CONFIG_KEY, SITE_CONFIG } from '@/lib/constants'
import { useResponsive } from '@/hooks/useResponsive'

export default function Footer() {
  const { isMobile } = useResponsive()
  const [address, setAddress] = useState(SITE_CONFIG.address)
  const [phone, setPhone] = useState(SITE_CONFIG.phone)
  const [email, setEmail] = useState(SITE_CONFIG.email)

  useEffect(() => {
    const saved = localStorage.getItem(BXS_SITE_CONFIG_KEY)
    if (saved) {
      try {
        const config = JSON.parse(saved) as { address?: string; phone?: string; email?: string }
        if (config.address) setAddress(config.address)
        if (config.phone) setPhone(config.phone)
        if (config.email) setEmail(config.email)
      } catch {
        /* ignore */
      }
    }
  }, [])

  return (
    <footer style={{ background: '#0F2447', color: '#fff', padding: '48px 0 0 0', marginTop: '48px' }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
        gap: isMobile ? '24px' : '40px',
      }}>

        {/* Col 1 */}
        <div>
          <div style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '12px', color: '#fff' }}>
            BUXORO SPORT
          </div>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', lineHeight: 1.6 }}>
            Buxoro viloyatida sport sohasini rivojlantirish, musobaqalarni tashkil etish va aholiga sifatli xizmat ko&apos;rsatishga qaratilgan rasmiy portal.
          </p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '18px', flexWrap: 'wrap', alignItems: 'center' }}>
            <a
              href="https://t.me/buxoro_sport"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.35rem', textDecoration: 'none', lineHeight: 1 }}
            >
              ✈️
            </a>
            <a
              href="https://instagram.com/buxoro_sport"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.35rem', textDecoration: 'none', lineHeight: 1 }}
            >
              📷
            </a>
            <a
              href="https://facebook.com/buxorosport"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.35rem', textDecoration: 'none', lineHeight: 1 }}
            >
              📘
            </a>
            <a
              href="https://youtube.com/@buxorosport"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.35rem', textDecoration: 'none', lineHeight: 1 }}
            >
              ▶️
            </a>
          </div>
        </div>

        {/* Col 2 */}
        <div>
          <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '16px', color: '#fff' }}>
            Tezkor havolalar
          </div>
          {[
            { label: 'Tashkilot haqida', href: '/tashkilot' },
            { label: 'Faoliyat', href: '/faoliyat' },
            { label: 'Davlat xizmatlari', href: '/davlat-xizmatlari' },
            { label: 'Hujjatlar', href: '/hujjatlar' },
          ].map((item) => (
            <a key={item.href} href={item.href} style={{ display: 'block', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', marginBottom: '8px', fontSize: '0.875rem' }}>
              → {item.label}
            </a>
          ))}
        </div>

        {/* Col 3 */}
        <div>
          <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '16px', color: '#fff' }}>
            Bog&apos;lanish
          </div>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', marginBottom: '8px' }}>📍 {address}</p>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', marginBottom: '8px' }}>📞 {phone}</p>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', marginBottom: '8px' }}>✉️ {email}</p>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>🕐 {SITE_CONFIG.workHours}</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '40px', padding: '16px 24px', textAlign: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', margin: 0 }}>
          © 2025 Buxoro Viloyati Sport Boshqarmasi. Barcha huquqlar himoyalangan.
        </p>
      </div>
    </footer>
  )
}
