import { Link } from '@tanstack/react-router'
import { Moon, Sun, BookOpen } from 'lucide-react'
import { Button } from '#/components/ui/button'
import { Separator } from '#/components/ui/separator'
import { PageWrap } from '#/components/page-wrap'
import { useTheme } from '#/hooks/use-theme'

function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function SiteHeader() {
    const { theme, toggle } = useTheme()

    return (
        <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md">
            <PageWrap className="flex h-14 items-center gap-4">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 no-underline">
                    <div className="flex size-7 items-center justify-center rounded-md bg-primary">
                        <BookOpen className="size-4 text-primary-foreground" />
                    </div>
                    <span className="font-semibold text-foreground">Salah Companion</span>
                </Link>

                <Separator orientation="vertical" className="h-5" />

                {/* Nav */}
                <nav className="flex flex-1 items-center gap-1">
                    <Button variant="ghost" size="sm" onClick={() => scrollTo('hero')}>
                        Home
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => scrollTo('duas-browser')}>
                        Duas
                    </Button>
                </nav>

                {/* Theme toggle */}
                <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle theme">
                    {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
                </Button>
            </PageWrap>
        </header>
    )
}
