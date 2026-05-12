export default function HeroBanner() {
  return (
    <div
      style={{
        backgroundImage: 'linear-gradient(to bottom, rgba(15,36,71,0.5) 0%, rgba(26,60,107,0.75) 60%, rgba(15,36,71,0.95) 100%), url(https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1600&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '500px',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        padding: '0 0 48px 48px',
      }}
    >
      <div style={{ maxWidth: '800px' }}>
        <h1 style={{ color: '#fff', fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.2, textAlign: 'left' }}>
          BUXORO VILOYATI SPORT BOSHQARMASI
        </h1>
      </div>
    </div>
  )
}
