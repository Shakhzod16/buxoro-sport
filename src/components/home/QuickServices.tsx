'use client'

const services = [
  { icon: '📋', title: 'Sport unvonlari berish',  href: '/davlat-xizmatlari/sport-unvonlari' },
  { icon: '🎖️', title: 'Sport razryadlari',       href: '/davlat-xizmatlari/razryadlar' },
  { icon: '📄', title: 'Litsenziyalash',           href: '/davlat-xizmatlari/litsenziya' },
  { icon: '📊', title: "Statistik ma'lumotlar",    href: '/ochiq-malumotlar' },
]

export default function QuickServices() {
  return (
    <div style={{ background: '#EEF3FA', padding: '48px 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0F2447', marginBottom: '24px' }}>
          Davlat xizmatlari
        </h2>
        <div
          className="services-grid"
          style={{
            gap: '16px',
          }}
        >
          {services.map((s, i) => (
            <a key={i} href={s.href} style={{
              background: '#fff', borderRadius: '12px', padding: '28px 16px',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px',
              textDecoration: 'none', color: '#1A3C6B', fontWeight: 600, fontSize: '0.95rem',
              textAlign: 'center', boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
              transition: 'all 0.2s'
            }}>
              <span style={{ fontSize: '2rem' }}>{s.icon}</span>
              {s.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
