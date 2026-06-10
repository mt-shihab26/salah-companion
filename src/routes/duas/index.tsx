import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Separator } from '#/components/ui/separator'
import { DuaPositionNav } from '#/components/duas/DuaPositionNav'
import { DuaGroupSection } from '#/components/duas/DuaGroupSection'
import { DuaTranslationPicker } from '#/components/duas/DuaTranslationPicker'
import { getDuasByPosition } from '#/data/duas/index'
import { SALAH_POSITIONS } from '#/data/duas/positions'
import { useDuaLang } from '#/hooks/use-dua-lang'
import type { SalahPositionId } from '#/data/duas/types'

export const Route = createFileRoute('/duas/')({ component: DuasBrowse })

function DuasBrowse() {
  const { lang, setLang } = useDuaLang()
  const [activePosition, setActivePosition] = useState<SalahPositionId>(
    SALAH_POSITIONS[0].id as SalahPositionId,
  )

  const duas = getDuasByPosition(activePosition)

  return (
    <div className="page-wrap py-8">
      <div className="mb-6 space-y-2">
        <h1 className="display-title text-3xl font-bold text-[var(--sea-ink)]">Duas in Salah</h1>
        <p className="text-sm text-[var(--sea-ink-soft)]">
          Select a position to browse its supplications
        </p>
      </div>

      <div className="mb-6">
        <DuaTranslationPicker lang={lang} onChange={setLang} />
      </div>

      <Separator className="mb-8" />

      <div className="flex gap-8">
        {/* Sidebar nav */}
        <aside className="hidden w-56 shrink-0 lg:block">
          <div className="sticky top-20 h-[calc(100vh-6rem)]">
            <DuaPositionNav activeId={activePosition} onSelect={setActivePosition} />
          </div>
        </aside>

        {/* Main content */}
        <div className="min-w-0 flex-1 space-y-10">
          <DuaGroupSection positionId={activePosition} duas={duas} lang={lang} />
        </div>
      </div>
    </div>
  )
}
