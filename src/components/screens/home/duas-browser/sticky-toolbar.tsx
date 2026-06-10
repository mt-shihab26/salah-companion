import { DuaTranslationPicker } from '#/components/duas/DuaTranslationPicker'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '#/components/ui/select'
import { SALAH_POSITIONS } from '#/data/duas/positions'
import type { SalahPositionId } from '#/data/duas/types'
import { useDuaLang } from '#/hooks/use-dua-lang'
import { useState } from 'react'

export const StickyToolbar = () => {
    const { langs, toggleLang } = useDuaLang()
    const [activePosition, setActivePosition] = useState<SalahPositionId>(
        SALAH_POSITIONS[0].id as SalahPositionId,
    )
    const activeMeta = SALAH_POSITIONS.find((p) => p.id === activePosition)

    return (
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
                </div>
                <DuaTranslationPicker langs={langs} onToggle={toggleLang} />
            </div>
        </div>
    )
}
