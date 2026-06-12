import type { TLanguage } from '#/types/languages'
import type { TSalahDua } from '#/types/salah-duas'

import { ArabicText } from '#/components/elements/arabic-text'
import { Button } from '#/components/ui/button'
import { Kbd } from '#/components/ui/kbd'
import { ScrollArea } from '#/components/ui/scroll-area'
import { Sheet, SheetClose, SheetContent, SheetTitle } from '#/components/ui/sheet'
import { useDuasBrowserStore } from '#/stores/duas-browser-store'
import { X } from 'lucide-react'
import { LanguagesDisplay } from './languages-display'
import { ReferenceList } from './reference-list'

export const ZenView = ({ salahDua, languages }: { salahDua: TSalahDua; languages: TLanguage[] }) => {
    const setZenDua = useDuasBrowserStore((s) => s.setZenDua)

    return (
        <Sheet open onOpenChange={(open) => !open && setZenDua(null)}>
            <SheetContent
                side="bottom"
                showCloseButton={false}
                className="inset-0 h-dvh w-full max-w-none rounded-none border-0 p-0"
            >
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
                        <ArabicText size="lg" className="text-center text-foreground leading-loose">
                            {salahDua.arabic}
                        </ArabicText>

                        <LanguagesDisplay salahDua={salahDua} languages={languages} />

                        {salahDua.references.length > 0 && (
                            <ReferenceList references={salahDua.references} />
                        )}
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
