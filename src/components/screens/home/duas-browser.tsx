import { DuaGroupSection } from '#/components/duas/DuaGroupSection'
import { DuaPositionNav } from '#/components/duas/DuaPositionNav'
import { DuaTranslationPicker } from '#/components/duas/DuaTranslationPicker'
import { PageWrap } from '#/components/page-wrap'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '#/components/ui/select'
import { getDuasByPosition } from '#/data/duas/index'
import { SALAH_POSITIONS } from '#/data/duas/positions'
import type { SalahPositionId } from '#/data/duas/types'
import { useDuaLang } from '#/hooks/use-dua-lang'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export const DuasBrowser = () => {
    const { langs, toggleLang } = useDuaLang()
    const [activePosition, setActivePosition] = useState<SalahPositionId>(
        SALAH_POSITIONS[0].id as SalahPositionId,
    )
    const duas = getDuasByPosition(activePosition)
    const activeMeta = SALAH_POSITIONS.find((p) => p.id === activePosition)

    return (
        <PageWrap id="duas-browser" className="scroll-mt-6 space-y-6">
            <div className="space-y-2">
                <span className="text-primary text-xs font-semibold tracking-wider uppercase">
                    Browse
                </span>
                <h2 className="text-foreground font-serif text-3xl font-bold sm:text-4xl">
                    Duas in Salah
                </h2>
                <p className="text-muted-foreground max-w-2xl text-sm">
                    Select a position in the prayer to read its supplications, with translations of
                    your choice rendered alongside the Arabic.
                </p>
            </div>

            {/* Sticky toolbar */}
            <div className="border-border/60 bg-background/80 sticky top-0 z-20 -mx-4 border-y px-4 py-3 backdrop-blur-md">
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2 lg:hidden">
                        <Select
                            value={activePosition}
                            onValueChange={(v) => setActivePosition(v as SalahPositionId)}
                        >
                            <SelectTrigger className="h-9 min-w-55 rounded-full">
                                <SelectValue placeholder="Pick a position" />
                            </SelectTrigger>
                            <SelectContent>
                                {SALAH_POSITIONS.map((pos) => (
                                    <SelectItem key={pos.id} value={pos.id}>
                                        {pos.order}. {pos.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="hidden items-center gap-2 lg:flex">
                        <span className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
                            Now reading
                        </span>
                        <span className="text-foreground font-serif text-sm font-semibold">
                            {activeMeta?.name}
                        </span>
                        <ChevronDown className="text-muted-foreground size-3.5" />
                    </div>
                    <DuaTranslationPicker langs={langs} onToggle={toggleLang} />
                </div>
            </div>

            <div className="flex gap-8">
                <aside className="hidden w-60 shrink-0 lg:block">
                    <div className="border-border/60 bg-card/40 sticky top-20 h-[calc(100vh-6rem)] rounded-2xl border p-2">
                        <DuaPositionNav activeId={activePosition} onSelect={setActivePosition} />
                    </div>
                </aside>

                <div className="min-w-0 flex-1">
                    <DuaGroupSection positionId={activePosition} duas={duas} langs={langs} />
                </div>
            </div>
        </PageWrap>
    )
}
