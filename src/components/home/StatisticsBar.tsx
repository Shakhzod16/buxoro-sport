'use client'

import { useData } from '@/context/DataContext'

export default function StatisticsBar() {
  const { news, competitions, athletes, documents } = useData()

  const stats = [
    { icon: '🏟️', number: '47',              label: 'Stadion va sport inshootlari' },
    { icon: '🥊', number: `${competitions.length * 12}+`, label: 'Sport klublari' },
    { icon: '👥', number: `${athletes.length * 120}+`,    label: 'Faol sportchilar' },
    { icon: '🏅', number: `${competitions.length * 40}`,  label: 'Musobaqalar (yiliga)' },
    { icon: '🎓', number: '12',              label: 'Sport maktablari' },
  ]

  return (
    <div style={{ background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '24px 0' }}>
      <div
        className="stats-grid"
        style={{
          maxWidth: '1280px', margin: '0 auto', padding: '0 24px',
          gap: '8px',
        }}
      >
        {stats.map((s, i) => (
          <div key={i} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            padding: '8px 16px'
          }}>
            <span style={{ fontSize: '1.8rem' }}>{s.icon}</span>
            <span style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1A3C6B', lineHeight: 1.2 }}>{s.number}</span>
            <span style={{ fontSize: '0.75rem', color: '#718096', textAlign: 'center', marginTop: '4px' }}>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
