import { DuaGroupSection } from '#/components/duas/DuaGroupSection'
import { DuaPositionNav } from '#/components/duas/DuaPositionNav'
import { useDuasBrowser } from './duas-browser-context'

export const MainSection = () => {
    const { langs, activePosition, setActivePosition, duas } = useDuasBrowser()

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
