import { useDuasBrowser } from './duas-browser-context'

import { DuaTranslationPicker } from './dua-translation-picker'

export const StickyToolbar = () => {
    const { activeMeta } = useDuasBrowser()

    return (
        <div className="border-border/60 bg-background/80 sticky top-0 z-20 -mx-4 w-full justify-between border-y px-4 py-3 backdrop-blur-md">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="hidden items-center gap-2 lg:flex">
                    <div className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
                        Now reading
                    </div>
                    <div className="text-foreground font-serif text-sm font-semibold">
                        {activeMeta?.name}
                    </div>
                </div>
                <DuaTranslationPicker />
            </div>
        </div>
    )
}
