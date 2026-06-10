import { Moon, Sun } from 'lucide-react'
import { Button } from '#/components/ui/button'
import { PageWrap } from '#/components/page-wrap'
import { useTheme } from '#/hooks/use-theme'

export function SiteFooter() {
    const { theme, toggle } = useTheme()

    return (
        <footer className="mt-auto border-t border-border bg-background/80 py-6">
            <PageWrap className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                    Salah Companion — duas and remembrances for your prayer
                </p>
                <Button variant="outline" size="icon" onClick={toggle} aria-label="Toggle theme">
                    {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
                </Button>
            </PageWrap>
        </footer>
    )
}
