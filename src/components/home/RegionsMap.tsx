'use client'

import { useState } from 'react'

const regions = [
  {
    id: 'qoraqalpogiston',
    name: "Qoraqalpog'iston Respublikasi",
    path: 'M 30,30 L 200,20 L 220,80 L 180,140 L 120,160 L 60,150 L 20,100 Z',
  },
  { id: 'xorazm', name: 'Xorazm', path: 'M 200,20 L 260,15 L 270,70 L 220,80 Z' },
  {
    id: 'navoiy',
    name: 'Navoiy',
    path: 'M 180,140 L 280,100 L 380,130 L 360,220 L 260,240 L 180,200 Z',
  },
  {
    id: 'buxoro',
    name: 'Buxoro',
    path: 'M 180,200 L 260,240 L 300,320 L 220,360 L 140,320 L 130,250 Z',
  },
  {
    id: 'qashqadaryo',
    name: 'Qashqadaryo',
    path: 'M 300,320 L 380,300 L 420,360 L 380,420 L 300,430 L 260,380 Z',
  },
  {
    id: 'surxondaryo',
    name: 'Surxondaryo',
    path: 'M 380,300 L 460,290 L 480,370 L 440,440 L 380,420 Z',
  },
  {
    id: 'samarqand',
    name: 'Samarqand',
    path: 'M 360,220 L 450,200 L 480,260 L 440,310 L 380,300 L 340,270 Z',
  },
  {
    id: 'jizzax',
    name: 'Jizzax',
    path: 'M 380,130 L 460,120 L 490,180 L 450,200 L 360,220 Z',
  },
  { id: 'sirdaryo', name: 'Sirdaryo', path: 'M 460,120 L 530,110 L 550,160 L 490,180 Z' },
  { id: 'toshkent', name: 'Toshkent', path: 'M 530,80 L 600,70 L 620,130 L 560,150 L 530,110 Z' },
  { id: 'toshkentcity', name: 'Toshkent City', path: 'M 565,108 L 585,105 L 590,120 L 568,122 Z' },
  { id: 'namangan', name: 'Namangan', path: 'M 560,50 L 640,40 L 660,90 L 600,100 L 560,80 Z' },
  { id: 'andijon', name: 'Andijon', path: 'M 640,40 L 720,50 L 730,100 L 670,110 L 640,80 Z' },
  { id: 'fargona', name: "Farg'ona", path: 'M 660,90 L 730,100 L 740,160 L 680,170 L 640,140 Z' },
]

export default function RegionsMap() {
  const [selected, setSelected] = useState<string | null>(null)
  const [hovered, setHovered] = useState<string | null>(null)

  const activeId = hovered ?? selected
  const listOrder = [
    'andijon',
    'fargona',
    'namangan',
    'qashqadaryo',
    'samarqand',
    'surxondaryo',
    'toshkent',
    'buxoro',
    'jizzax',
    'navoiy',
    'qoraqalpogiston',
    'sirdaryo',
    'toshkentcity',
    'xorazm',
  ]
  const listRegions = listOrder
    .map((id) => regions.find((r) => r.id === id))
    .filter((r): r is (typeof regions)[number] => Boolean(r))

  const handleSelect = (id: string) => {
    setSelected((prev) => (prev === id ? null : id))
  }

  return (
    <div>
      <h2
        style={{
          fontSize: '2rem',
          fontWeight: 900,
          letterSpacing: '0.3px',
          color: '#0A3C75',
          marginBottom: '18px',
          marginTop: 0,
        }}
      >
        BOSHQARMALAR
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '22px', alignItems: 'start' }}>
        {/* SVG Map */}
        <div
          style={{
            background: '#F3F4F6',
            borderRadius: '16px',
            border: '1px solid #DDE1E7',
            padding: '20px',
            minHeight: '312px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <svg viewBox="0 0 760 480" style={{ width: '96%', height: 'auto', margin: '0 auto', display: 'block' }}>
            {regions.map((r) => (
              <path
                key={r.id}
                d={r.path}
                fill={activeId === r.id ? '#0B4A91' : '#C8CCD2'}
                stroke="#fff"
                strokeWidth="1.4"
                style={{ cursor: 'pointer', transition: 'fill 0.2s' }}
                onClick={() => handleSelect(r.id)}
                onMouseEnter={() => setHovered(r.id)}
                onMouseLeave={() => setHovered(null)}
              />
            ))}
          </svg>
        </div>

        {/* Region List */}
        <div
          style={{
            background: '#F3F4F6',
            borderRadius: '16px',
            padding: '18px',
            border: '1px solid #DDE1E7',
            minHeight: '312px',
          }}
        >
          <div style={{ fontWeight: 900, fontSize: '1.1rem', color: '#101828', marginBottom: '12px' }}>HUDUDLAR</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {listRegions.map((r) => (
              <button
                key={r.id}
                onClick={() => handleSelect(r.id)}
                onMouseEnter={() => setHovered(r.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '8px 10px',
                  borderRadius: '8px',
                  border: '1px solid #D4DAE3',
                  background: activeId === r.id ? '#0B4A91' : '#fff',
                  color: activeId === r.id ? '#fff' : '#2D3748',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  textAlign: 'left',
                  transition: 'all 0.15s',
                  minHeight: '30px',
                }}
              >
                <span
                  style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    paddingRight: '8px',
                  }}
                >
                  🏢 {r.name}
                </span>
                <span>→</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
