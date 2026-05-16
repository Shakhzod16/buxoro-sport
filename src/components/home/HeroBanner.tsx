'use client'

export default function HeroBanner() {
  return (
    <div
      className="hero-banner"
      style={{
        backgroundImage: 'linear-gradient(to bottom, rgba(15,36,71,0.5) 0%, rgba(26,60,107,0.75) 60%, rgba(15,36,71,0.95) 100%), url(https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1600&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <div className="hero-content" style={{ maxWidth: '800px' }}>
        <h1 className="hero-title" style={{ color: '#fff', fontWeight: 800, lineHeight: 1.2, textAlign: 'left' }}>
          BUXORO VILOYATI SPORT BOSHQARMASI
        </h1>
      </div>
    </div>
  )
}
