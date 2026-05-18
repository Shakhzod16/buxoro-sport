'use client'

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'

const regions = [
  { id: 'qoraqalpogiston', name: "Qoraqalpog'iston Respublikasi" },
  { id: 'xorazm', name: 'Xorazm' },
  { id: 'buxoro', name: 'Buxoro' },
  { id: 'navoiy', name: 'Navoiy' },
  { id: 'samarqand', name: 'Samarqand' },
  { id: 'qashqadaryo', name: 'Qashqadaryo' },
  { id: 'surxondaryo', name: 'Surxondaryo' },
  { id: 'jizzax', name: 'Jizzax' },
  { id: 'sirdaryo', name: 'Sirdaryo' },
  { id: 'toshkent', name: 'Toshkent' },
  { id: 'toshkentcity', name: 'Toshkent City' },
  { id: 'namangan', name: 'Namangan' },
  { id: 'andijon', name: 'Andijon' },
  { id: 'fargona', name: "Farg'ona" },
]

/** `id` on `<path>` in `public/map.svg` → internal region key */
const SVG_PATH_ID_TO_REGION: Record<string, string> = {
  '7': 'qoraqalpogiston',
  '15': 'xorazm',
  '5': 'buxoro',
  '9': 'navoiy',
  '11': 'samarqand',
  '8': 'qashqadaryo',
  '12': 'surxondaryo',
  '6': 'jizzax',
  '13': 'sirdaryo',
  '3': 'toshkent',
  '2': 'toshkentcity',
  '10': 'namangan',
  '4': 'andijon',
  '14': 'fargona',
}

function regionKeyFromElement(el: Element | null | undefined): string | null {
  if (!el) return null
  const path = el.closest('path[id]')
  if (!path) return null
  const rawId = path.getAttribute('id')
  return rawId ? SVG_PATH_ID_TO_REGION[rawId] ?? null : null
}

function normalizeMapSvg(svg: string) {
  return svg.replace(/\s*style="width:\s*519px;\s*height:\s*auto;"/i, ' style="width:100%;height:auto;display:block;"')
}

export default function RegionsMap({ compact = false }: { compact?: boolean }) {
  const [selected, setSelected] = useState<string | null>(null)
  const [hovered, setHovered] = useState<string | null>(null)
  const [svgHtml, setSvgHtml] = useState<string | null>(null)
  const mapWrapRef = useRef<HTMLDivElement>(null)

  const handleSelect = useCallback((id: string) => {
    setSelected((prev) => (prev === id ? null : id))
  }, [])

  useEffect(() => {
    let cancelled = false
    fetch('/map.svg')
      .then((r) => r.text())
      .then((t) => {
        if (!cancelled) setSvgHtml(normalizeMapSvg(t))
      })
      .catch(() => {
        if (!cancelled) setSvgHtml(null)
      })
    return () => {
      cancelled = true
    }
  }, [])

  const getFill = useCallback(
    (regionKey: string) => {
      if (selected === regionKey) return '#1A3C6B'
      if (hovered === regionKey) return '#4A7BB5'
      return '#CBD5E0'
    },
    [selected, hovered],
  )

  /** Xarita: kursor → viloyat; root divga ulanadi (SVG ichidagi target ishonchli bubble qiladi) */
  useLayoutEffect(() => {
    const root = mapWrapRef.current
    if (!root || !svgHtml) return

    const svg = root.querySelector('svg')
    if (!svg) return

    root.style.touchAction = 'none'
    svg.style.touchAction = 'none'

    const resolveHoverKey = (e: PointerEvent): string | null => {
      const t = e.target instanceof Element ? e.target : null
      let key = regionKeyFromElement(t)
      if (!key) {
        const top = document.elementFromPoint(e.clientX, e.clientY)
        if (top && root.contains(top)) key = regionKeyFromElement(top)
      }
      return key
    }

    const onPointerEnter = (e: PointerEvent) => {
      const key = resolveHoverKey(e)
      setHovered((prev) => (prev === key ? prev : key))
    }

    const onPointerMove = (e: PointerEvent) => {
      const key = resolveHoverKey(e)
      setHovered((prev) => (prev === key ? prev : key))
    }

    const onPointerLeave = () => {
      setHovered(null)
    }

    const onClick = (e: MouseEvent) => {
      let key = regionKeyFromElement(e.target instanceof Element ? e.target : null)
      if (!key) {
        const top = document.elementFromPoint(e.clientX, e.clientY)
        if (top && root.contains(top)) key = regionKeyFromElement(top)
      }
      if (key) handleSelect(key)
    }

    root.addEventListener('pointerenter', onPointerEnter)
    root.addEventListener('pointermove', onPointerMove)
    root.addEventListener('pointerleave', onPointerLeave)
    root.addEventListener('pointercancel', onPointerLeave)
    root.addEventListener('click', onClick)

    const water = svg.querySelector<SVGPathElement>('path#UZ-AS')
    if (water) water.style.pointerEvents = 'none'

    return () => {
      root.removeEventListener('pointerenter', onPointerEnter)
      root.removeEventListener('pointermove', onPointerMove)
      root.removeEventListener('pointerleave', onPointerLeave)
      root.removeEventListener('pointercancel', onPointerLeave)
      root.removeEventListener('click', onClick)
    }
  }, [svgHtml, handleSelect])

  useEffect(() => {
    const root = mapWrapRef.current
    if (!root || !svgHtml) return

    const paths = root.querySelectorAll<SVGPathElement>('svg path[id]')
    paths.forEach((path) => {
      const rawId = path.getAttribute('id')
      const regionKey = rawId ? SVG_PATH_ID_TO_REGION[rawId] : undefined
      if (!regionKey) return
      path.style.cursor = 'pointer'
      path.style.transition = 'fill 0.2s ease'
      path.style.setProperty('fill', getFill(regionKey))
    })
  }, [svgHtml, selected, hovered, getFill])

  return (
    <div>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1A3C6B', marginBottom: '24px' }}>
        BOSHQARMALAR
      </h2>
      <div
        className="regions-grid"
        style={{
          gap: '24px',
          alignItems: 'start',
        }}
      >
        <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '16px' }}>
          {svgHtml ? (
            <div ref={mapWrapRef} dangerouslySetInnerHTML={{ __html: svgHtml }} />
          ) : (
            <div
              style={{
                width: '100%',
                minHeight: '280px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#94A3B8',
                fontSize: '0.875rem',
              }}
            >
              Xarita yuklanmoqda…
            </div>
          )}
        </div>

        <div
          style={{ background: '#F3F4F6', borderRadius: '16px', padding: '20px' }}
          onMouseLeave={() => setHovered(null)}
        >
          <div style={{ fontWeight: 800, fontSize: '1rem', color: '#111827', marginBottom: '16px', letterSpacing: '0.05em' }}>
            HUDUDLAR
          </div>
          <div className="hududlar-grid" style={{ display: 'grid', gap: '8px' }}>
            {regions.map((r) => {
              const isSelected = selected === r.id
              const isHovered = hovered === r.id && !isSelected
              return (
              <button
                key={r.id}
                type="button"
                onClick={() => handleSelect(r.id)}
                onMouseEnter={() => setHovered(r.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: compact ? '8px 10px' : '10px 14px',
                  borderRadius: '8px',
                  border: isSelected
                    ? '1px solid #1A3C6B'
                    : isHovered
                      ? '1px solid #4A7BB5'
                      : '1px solid #E2E8F0',
                  background: isSelected ? '#1A3C6B' : isHovered ? '#EEF3FA' : '#fff',
                  color: isSelected ? '#fff' : isHovered ? '#1A3C6B' : '#374151',
                  cursor: 'pointer',
                  fontWeight: isHovered ? 600 : 500,
                  fontSize: compact ? '0.78rem' : '0.82rem',
                  textAlign: 'left',
                  transition: 'background-color 0.12s ease, color 0.12s ease, border-color 0.12s ease',
                  boxShadow: isHovered ? '0 0 0 1px rgba(26, 60, 107, 0.12)' : 'none',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '1rem' }}>🏢</span>
                  <span
                    style={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      maxWidth: '110px',
                    }}
                  >
                    {r.name}
                  </span>
                </span>
                <span style={{ flexShrink: 0, marginLeft: '4px' }}>→</span>
              </button>
              )
            })}
          </div>
        </div>
      </div>

      {selected && (
        <div
          style={{
            marginTop: '16px',
            padding: '14px 20px',
            background: '#EEF3FA',
            borderRadius: '10px',
            borderLeft: '4px solid #1A3C6B',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span style={{ color: '#1A3C6B', fontWeight: 600, fontSize: '0.9rem' }}>
            📍 {regions.find((r) => r.id === selected)?.name} tanlandi
          </span>
          <button
            type="button"
            onClick={() => setSelected(null)}
            style={{
              background: 'none',
              border: 'none',
              color: '#718096',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  )
}
