import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '#/components/ui/select'

import type { TSalahPositionId } from '#/data/duas/types'

import { useDuasBrowser } from './duas-browser-context'

import { DuaTranslationPicker } from './dua-translation-picker'

import { SALAH_POSITIONS } from '#/data/duas/positions'

export const StickyToolbar = () => {
    const { langs, toggleLang, activePosition, setActivePosition, activeMeta } = useDuasBrowser()

    return (
        <div className="border-border/60 bg-background/80 sticky top-0 z-20 -mx-4 border-y px-4 py-3 backdrop-blur-md">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 lg:hidden">
                    <Select
                        value={activePosition}
                        onValueChange={(v) => setActivePosition(v as TSalahPositionId)}
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
                    <div className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
                        Now reading
                    </div>
                    <div className="text-foreground font-serif text-sm font-semibold">
                        {activeMeta?.name}
                    </div>
                </div>
                <DuaTranslationPicker langs={langs} onToggle={toggleLang} />
            </div>
        </div>
    )
}
