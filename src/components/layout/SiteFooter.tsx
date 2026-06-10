import { PageWrap } from '#/components/page-wrap'

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-background/80 py-8">
      <PageWrap className="flex flex-col items-center gap-2 text-center">
        <p className="text-sm text-muted-foreground">
          Salah Companion — duas and remembrances for your prayer
        </p>
        <p className="text-xs text-muted-foreground/60">
          References sourced from Sunnah.com · Content reviewed against authentic hadith
        </p>
      </PageWrap>
    </footer>
  )
}
