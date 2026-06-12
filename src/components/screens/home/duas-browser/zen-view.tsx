import type { TLanguage } from '#/types/languages'

import { useDuasBrowserStore } from '#/stores/duas-browser-store'

import { Button } from '#/components/ui/button'
import { Kbd } from '#/components/ui/kbd'
import { ScrollArea } from '#/components/ui/scroll-area'
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from '#/components/ui/sheet'
import { Maximize2, X } from 'lucide-react'
import { DuaCard } from './dua-card'

export const ZenView = ({ languages }: { languages: TLanguage[] }) => {
    const salahDua = useDuasBrowserStore((s) => s.zenDua)
    const setZenDua = useDuasBrowserStore((s) => s.setZenDua)

    return (
        <Sheet open onOpenChange={(open) => (!open ? setZenDua(null) : setZenDua(salahDua))}>
            <SheetContent
                side="bottom"
                showCloseButton={false}
                className="inset-0 h-dvh w-full max-w-none rounded-none border-0 p-0"
            >
                <SheetTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-muted-foreground ml-auto size-6 shrink-0"
                    >
                        <Maximize2 className="size-3.5" />
                        <span className="sr-only">Zen mode</span>
                    </Button>
                </SheetTrigger>
                <SheetTitle className="sr-only">{salahDua.label}</SheetTitle>
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
                    <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-10 px-8 py-20">
                        <DuaCard salahDua={salahDua} languages={languages} zenView />
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
