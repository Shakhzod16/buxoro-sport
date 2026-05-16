'use client'

import { useData } from '@/context/DataContext'

export default function StatisticsBar() {
  const { competitions } = useData()

  const stats = [
    { icon: '🏟️', number: '47',     label: 'Stadion va sport inshootlari' },
    { icon: '🥊', number: '280+',   label: 'Sport klublari' },
    { icon: '👥', number: '15 000', label: 'Faol sportchilar' },
    { icon: '🏅', number: `${competitions.length > 3 ? competitions.length * 15 : 120}`, label: 'Musobaqalar (yiliga)' },
    { icon: '🎓', number: '12',     label: 'Sport maktablari' },
  ]

  return (
    <div className="stats-bar">
      <div className="stats-grid">
        {stats.map((s, i) => (
          <div
            key={i}
            className="stats-item"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '8px 16px',
            }}
          >
            <span style={{ fontSize: '1.8rem' }}>{s.icon}</span>
            <span className="stats-number" style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1A3C6B', lineHeight: 1.2 }}>
              {s.number}
            </span>
            <span className="stats-label" style={{ fontSize: '0.75rem', color: '#718096', textAlign: 'center', marginTop: '4px' }}>
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
