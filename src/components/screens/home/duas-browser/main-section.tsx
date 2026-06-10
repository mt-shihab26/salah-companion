import { DuaGroupSection } from '#/components/duas/DuaGroupSection'
import { DuaPositionNav } from '#/components/duas/DuaPositionNav'
import { getDuasByPosition } from '#/data/duas/index'
import { SALAH_POSITIONS } from '#/data/duas/positions'
import type { SalahPositionId } from '#/data/duas/types'
import { useDuaLang } from '#/hooks/use-dua-lang'
import { useState } from 'react'

export const MainSection = () => {
    const { langs, toggleLang } = useDuaLang()
    const [activePosition, setActivePosition] = useState<SalahPositionId>(
        SALAH_POSITIONS[0].id as SalahPositionId,
    )
    const duas = getDuasByPosition(activePosition)
    const activeMeta = SALAH_POSITIONS.find((p) => p.id === activePosition)

    return (
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
    )
}
