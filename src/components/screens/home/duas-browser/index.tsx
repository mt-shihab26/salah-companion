import { useDuasBrowser } from './duas-browser-context'

import { PageWrap } from '#/components/page-wrap'
import { DuaPositionNav } from './dua-position-nav'
import { DuaTranslationPicker } from './dua-translation-picker'
import { DuaGroupSection } from './DuaGroupSection'

export const DuasBrowser = () => {
    const { activeMeta } = useDuasBrowser()

    return (
        <PageWrap id="duas-browser" className="scroll-mt-6 space-y-6">
            <div className="space-y-2">
                <span className="text-primary text-xs font-semibold tracking-wider uppercase">
                    Browse
                </span>
                <h2 className="text-foreground font-serif text-3xl font-bold sm:text-4xl">
                    Duas in Salah
                </h2>
                <p className="text-muted-foreground text-sm">
                    Select a position in the prayer to read its supplications, with translations of
                    your choice rendered alongside the Arabic.
                </p>
            </div>
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
            <div className="flex gap-8">
                <aside className="hidden w-60 shrink-0 lg:block">
                    <div className="border-border/60 bg-card/40 sticky top-20 h-[calc(100vh-6rem)] rounded-2xl border p-2">
                        <DuaPositionNav />
                    </div>
                </aside>
                <div className="min-w-0 flex-1">
                    <DuaGroupSection />
                </div>
            </div>
        </PageWrap>
    )
}
