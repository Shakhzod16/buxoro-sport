'use client'
import { useState } from 'react'

import { useResponsive } from '@/hooks/useResponsive'

const regions = [
  { id: 'qoraqalpogiston', name: "Qoraqalpog'iston Respublikasi" },
  { id: 'xorazm',          name: 'Xorazm' },
  { id: 'buxoro',          name: 'Buxoro' },
  { id: 'navoiy',          name: 'Navoiy' },
  { id: 'samarqand',       name: 'Samarqand' },
  { id: 'qashqadaryo',     name: 'Qashqadaryo' },
  { id: 'surxondaryo',     name: 'Surxondaryo' },
  { id: 'jizzax',          name: 'Jizzax' },
  { id: 'sirdaryo',        name: 'Sirdaryo' },
  { id: 'toshkent',        name: 'Toshkent' },
  { id: 'toshkentcity',    name: 'Toshkent City' },
  { id: 'namangan',        name: 'Namangan' },
  { id: 'andijon',         name: 'Andijon' },
  { id: 'fargona',         name: "Farg'ona" },
]

const paths: Record<string, string> = {
  qoraqalpogiston: `M 18,18 L 95,10 L 155,14 L 182,22 L 198,18 
    L 215,25 L 222,48 L 218,75 L 228,98 L 235,118 
    L 228,138 L 215,150 L 200,158 L 188,172 
    L 175,178 L 158,175 L 140,182 L 122,178 
    L 105,188 L 88,182 L 72,188 L 55,178 
    L 40,165 L 28,148 L 18,128 L 12,105 
    L 8,82 L 10,58 L 14,38 Z`,

  xorazm: `M 155,14 L 198,18 L 215,25 L 218,48 
    L 210,68 L 198,78 L 182,82 L 168,75 
    L 158,62 L 152,48 L 148,32 Z`,

  navoiy: `M 188,172 L 215,150 L 235,118 L 258,108 
    L 282,112 L 305,122 L 318,138 L 325,158 
    L 318,178 L 305,192 L 288,202 L 270,208 
    L 252,212 L 235,208 L 218,198 
    L 205,188 Z`,

  buxoro: `M 55,178 L 88,182 L 105,188 L 122,178 
    L 140,182 L 158,175 L 175,178 L 188,172 
    L 205,188 L 218,198 L 228,215 L 235,235 
    L 228,258 L 215,272 L 198,282 L 178,285 
    L 155,282 L 135,272 L 118,258 L 105,242 
    L 92,228 L 78,218 L 62,212 L 48,205 
    L 38,192 L 40,178 Z`,

  samarqand: `M 318,138 L 342,128 L 365,122 L 388,128 
    L 408,138 L 418,155 L 415,175 L 405,192 
    L 388,202 L 370,208 L 352,205 L 335,195 
    L 322,180 L 318,162 Z`,

  qashqadaryo: `M 305,192 L 318,178 L 335,195 L 352,205 
    L 370,208 L 385,218 L 395,235 L 392,255 
    L 380,268 L 362,275 L 342,278 L 322,272 
    L 308,258 L 298,242 L 295,225 L 298,208 Z`,

  surxondaryo: `M 362,275 L 380,268 L 392,255 L 408,262 
    L 422,272 L 432,288 L 428,308 L 415,322 
    L 398,330 L 378,332 L 360,325 L 348,312 
    L 342,295 Z`,

  jizzax: `M 388,128 L 412,118 L 435,122 L 455,132 
    L 465,148 L 462,168 L 450,180 L 435,188 
    L 418,190 L 405,182 L 395,168 L 392,150 Z`,

  sirdaryo: `M 435,122 L 458,112 L 482,108 L 502,115 
    L 515,128 L 518,145 L 510,160 L 498,168 
    L 482,172 L 465,168 L 452,158 L 445,142 Z`,

  toshkent: `M 482,108 L 505,98 L 528,92 L 552,95 
    L 572,105 L 582,122 L 578,142 L 565,155 
    L 548,162 L 530,162 L 515,155 L 505,142 
    L 498,128 Z`,

  toshkentcity: `M 530,128 L 542,122 L 552,128 L 552,138 
    L 542,142 L 532,138 Z`,

  namangan: `M 552,95 L 575,88 L 598,85 L 620,90 
    L 635,102 L 638,118 L 628,132 L 612,138 
    L 595,138 L 578,132 L 565,120 Z`,

  andijon: `M 620,90 L 645,88 L 668,92 L 682,105 
    L 680,122 L 668,132 L 650,138 L 632,135 
    L 618,122 L 618,105 Z`,

  fargona: `M 595,138 L 612,138 L 628,132 L 645,135 
    L 658,145 L 658,162 L 645,172 L 628,175 
    L 610,170 L 598,158 L 592,145 Z`,
}

export default function RegionsMap() {
  const { isMobile } = useResponsive()
  const [selected, setSelected] = useState<string | null>(null)
  const [hovered, setHovered] = useState<string | null>(null)

  const handleSelect = (id: string) => {
    setSelected(prev => prev === id ? null : id)
  }

  const getFill = (id: string) => {
    if (selected === id) return '#1A3C6B'
    if (hovered === id) return '#4A7BB5'
    return '#CBD5E0'
  }

  return (
    <div>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1A3C6B', marginBottom: '24px' }}>
        BOSHQARMALAR
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '55% 45%',
        gap: '24px',
        alignItems: 'start',
      }}>

        {/* SVG Map */}
        <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '16px' }}>
          <svg
            viewBox="0 0 700 355"
            style={{ width: '100%', height: 'auto' }}
          >
            {regions.map(r => (
              <path
                key={r.id}
                d={paths[r.id]}
                fill={getFill(r.id)}
                stroke="#fff"
                strokeWidth="2"
                strokeLinejoin="round"
                style={{ cursor: 'pointer', transition: 'fill 0.2s' }}
                onClick={() => handleSelect(r.id)}
                onMouseEnter={() => setHovered(r.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <title>{r.name}</title>
              </path>
            ))}
          </svg>
        </div>

        {/* Region List */}
        <div style={{ background: '#F3F4F6', borderRadius: '16px', padding: '20px' }}>
          <div style={{ fontWeight: 800, fontSize: '1rem', color: '#111827', marginBottom: '16px', letterSpacing: '0.05em' }}>
            HUDUDLAR
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {regions.map(r => (
              <button
                key={r.id}
                onClick={() => handleSelect(r.id)}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '10px 14px', borderRadius: '8px',
                  border: selected === r.id ? '1px solid #1A3C6B' : '1px solid #E2E8F0',
                  background: selected === r.id ? '#1A3C6B' : '#fff',
                  color: selected === r.id ? '#fff' : '#374151',
                  cursor: 'pointer', fontWeight: 500, fontSize: '0.82rem',
                  textAlign: 'left', transition: 'all 0.15s',
                }}
                onMouseEnter={e => {
                  if (selected !== r.id) {
                    e.currentTarget.style.background = '#EEF3FA'
                    e.currentTarget.style.color = '#1A3C6B'
                  }
                }}
                onMouseLeave={e => {
                  if (selected !== r.id) {
                    e.currentTarget.style.background = '#fff'
                    e.currentTarget.style.color = '#374151'
                  }
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '1rem' }}>🏢</span>
                  <span style={{ 
                    overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '110px'
                  }}>{r.name}</span>
                </span>
                <span style={{ flexShrink: 0, marginLeft: '4px' }}>→</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Selected region info */}
      {selected && (
        <div style={{
          marginTop: '16px', padding: '14px 20px',
          background: '#EEF3FA', borderRadius: '10px',
          borderLeft: '4px solid #1A3C6B',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center'
        }}>
          <span style={{ color: '#1A3C6B', fontWeight: 600, fontSize: '0.9rem' }}>
            📍 {regions.find(r => r.id === selected)?.name} tanlandi
          </span>
          <button onClick={() => setSelected(null)} style={{
            background: 'none', border: 'none', color: '#718096', cursor: 'pointer', fontSize: '1rem'
          }}>✕</button>
        </div>
      )}
    </div>
  )
}
