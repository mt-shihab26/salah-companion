import { getSalahDuaById } from '#/lib/salah-duas'
import { useDuasBrowserStore } from '#/stores/duas-browser-store'

import { Button } from '#/components/ui/button'
import { Kbd } from '#/components/ui/kbd'
import { ScrollArea } from '#/components/ui/scroll-area'
import { Sheet, SheetClose, SheetContent, SheetTitle } from '#/components/ui/sheet'
import { Route } from '#/routes/index'
import { Link } from '@tanstack/react-router'
import { BookOpen, X } from 'lucide-react'
import { DuaCard } from './dua-card'

export const ZenView = () => {
    const search = Route.useSearch()
    const navigate = Route.useNavigate()

    const languages = useDuasBrowserStore((s) => s.languages)

    const zenDua = search.dua ? getSalahDuaById(search.dua) : undefined

    if (!zenDua) return null

    const close = () =>
        navigate({ search: (prev) => ({ ...prev, dua: undefined }), resetScroll: false })

    return (
        <Sheet open onOpenChange={(open) => !open && close()}>
            <SheetContent
                side="bottom"
                showCloseButton={false}
                noAnimation
                className="inset-0 h-dvh w-full max-w-none rounded-none border-0 p-0"
            >
                <SheetTitle className="sr-only">{zenDua.label}</SheetTitle>
                <Link
                    to="/"
                    search={(prev) => ({ ...prev, dua: undefined })}
                    className="absolute top-4 left-4 z-10 flex items-center gap-2"
                >
                    <div className="from-primary to-primary/70 flex size-7 items-center justify-center rounded-lg bg-linear-to-br shadow-sm">
                        <BookOpen className="text-primary-foreground size-3.5" />
                    </div>
                    <span className="text-foreground/60 font-serif text-sm font-semibold tracking-tight">
                        Salah Companion
                    </span>
                </Link>
                <SheetClose asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-muted-foreground absolute top-4 right-4 z-10"
                    >
                        <X className="size-4" />
                        <span className="sr-only">Exit zen mode</span>
                    </Button>
                </SheetClose>
                <ScrollArea className="h-full">
                    <div className="mx-auto w-full max-w-4xl px-6 py-16">
                        <DuaCard salahDua={zenDua} languages={languages} zenView />
                    </div>
                    <div className="flex items-center justify-center gap-1.5 pb-6">
                        <span className="text-muted-foreground/40 text-xs">Press</span>
                        <Kbd>Esc</Kbd>
                        <span className="text-muted-foreground/40 text-xs">to exit</span>
                    </div>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    )
}
