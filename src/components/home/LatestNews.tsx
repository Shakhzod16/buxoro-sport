'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useData } from '@/context/DataContext'

export default function LatestNews() {
  const { news } = useData()
  const activeNews = news.filter(n => n.status === 'active').slice(0, 3)
  const fallbackImage = 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&q=80'

  return (
    <div className="section-wrap">
      <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h2 className="section-title" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0F2447', margin: 0 }}>
          So&apos;nggi yangiliklar
        </h2>
        <Link href="/axborot" style={{ color: '#1A3C6B', fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem' }}>
          Barchasi →
        </Link>
      </div>
      <div className="news-grid" style={{ gap: '24px' }}>
        {activeNews.map((item) => (
          <Link
            key={item.id}
            href={`/axborot/${item.id}`}
            className="news-card"
            style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
          >
            <div style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', transition: 'box-shadow 0.2s' }}>
              <div style={{ position: 'relative', width: '100%', height: '180px' }}>
                <Image
                  className="news-card-img"
                  src={item.image || fallbackImage}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="news-card-body" style={{ padding: '16px' }}>
                <span
                  className="news-card-badge"
                  style={{ background: '#EEF3FA', color: '#1A3C6B', fontSize: '0.75rem', fontWeight: 600, padding: '3px 10px', borderRadius: '20px' }}
                >
                  {item.category}
                </span>
                <p className="news-card-title" style={{ fontWeight: 700, color: '#2D3748', margin: '10px 0 8px', fontSize: '0.95rem', lineHeight: 1.4 }}>
                  {item.title}
                </p>
                <p className="news-card-date" style={{ color: '#718096', fontSize: '0.8rem', margin: 0 }}>
                  {item.date}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
