export default function Footer() {
  return (
    <footer style={{ background: '#0F2447', color: '#fff', padding: '48px 0 0 0', marginTop: '48px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
        
        {/* Col 1 */}
        <div>
          <div style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '12px', color: '#fff' }}>
            BUXORO SPORT
          </div>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', lineHeight: 1.6 }}>
            Buxoro viloyatida sport sohasini rivojlantirish, musobaqalarni tashkil etish va aholiga sifatli xizmat ko&apos;rsatishga qaratilgan rasmiy portal.
          </p>
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
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', marginBottom: '8px' }}>📍 Buxoro viloyati, Buxoro shahri</p>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', marginBottom: '8px' }}>📞 +998 55 520 90 07</p>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', marginBottom: '8px' }}>✉️ info@buxoro-sport.uz</p>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>🕐 Dushanba–Juma: 9:00–18:00</p>
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
