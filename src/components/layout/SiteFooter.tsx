export function SiteFooter() {
  return (
    <footer className="site-footer mt-auto py-8">
      <div className="page-wrap flex flex-col items-center gap-2 text-center">
        <p className="text-sm" style={{ color: 'var(--sea-ink-soft)' }}>
          Salah Companion — duas and remembrances for your prayer
        </p>
        <p className="text-xs" style={{ color: 'var(--sea-ink-soft)', opacity: 0.7 }}>
          References sourced from Sunnah.com · Content reviewed against authentic hadith
        </p>
      </div>
    </footer>
  )
}
