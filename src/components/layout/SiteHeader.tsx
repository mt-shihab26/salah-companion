import { Link } from '@tanstack/react-router'
import { Moon, Sun } from 'lucide-react'
import { Button } from '#/components/ui/button'
import { Separator } from '#/components/ui/separator'
import { useTheme } from '#/hooks/use-theme'

export function SiteHeader() {
  const { theme, toggle } = useTheme()

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--line)] bg-[var(--header-bg)] backdrop-blur-md">
      <div className="page-wrap flex h-14 items-center gap-4">
        <Link to="/" className="flex items-center no-underline">
          <span className="font-bold text-[var(--sea-ink)]">Salah Companion</span>
        </Link>

        <Separator orientation="vertical" className="h-5" />

        <nav className="flex flex-1 items-center gap-1">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/" activeProps={{ className: 'bg-accent text-accent-foreground' }}>
              Home
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/duas" activeProps={{ className: 'bg-accent text-accent-foreground' }}>
              Duas
            </Link>
          </Button>
        </nav>

        <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle theme">
          {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </Button>
      </div>
    </header>
  )
}
