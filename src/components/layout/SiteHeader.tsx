import { Link } from '@tanstack/react-router'
import { Moon, Sun } from 'lucide-react'
import { Button } from '#/components/ui/button'
import { PageWrap } from '#/components/page-wrap'
import { useTheme } from '#/hooks/use-theme'

export function SiteHeader() {
  const { theme, toggle } = useTheme()

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <PageWrap className="flex h-14 items-center gap-4">
        <Link to="/" className="flex flex-1 items-center no-underline">
          <span className="font-semibold text-foreground">Salah Companion</span>
        </Link>

        <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle theme">
          {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </Button>
      </PageWrap>
    </header>
  )
}
