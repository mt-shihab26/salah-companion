import { PageWrap } from '#/components/page-wrap'
import { Button } from '#/components/ui/button'
import { useTheme } from '#/hooks/use-theme'
import { Moon, Sun } from 'lucide-react'

export function SiteFooter() {
    const { theme, toggle } = useTheme()

    return (
        <footer className="border-border bg-background/80 mt-auto border-t py-6">
            <PageWrap className="flex items-center justify-between">
                <p className="text-muted-foreground text-sm">
                    Salah Companion — duas and remembrances for your prayer
                </p>
                <Button variant="outline" size="icon" onClick={toggle} aria-label="Toggle theme">
                    {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
                </Button>
            </PageWrap>
        </footer>
    )
}
