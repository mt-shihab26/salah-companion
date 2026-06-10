import { Separator } from '#/components/ui/separator'
import { DuaCard } from './DuaCard'
import { getPosition } from '#/data/duas/positions'
import type { DuaVariation, DuaLang, SalahPositionId } from '#/data/duas/types'

interface Props {
  positionId: SalahPositionId
  duas: DuaVariation[]
  lang: DuaLang
}

export function DuaGroupSection({ positionId, duas, lang }: Props) {
  const position = getPosition(positionId)
  if (!position || duas.length === 0) return null

  return (
    <section>
      <div className="mb-6 space-y-1">
        <div className="flex items-baseline gap-3">
          <h2 className="text-xl font-semibold text-[var(--sea-ink)]">{position.name}</h2>
          <span className="arabic-text text-lg text-[var(--sea-ink-soft)]" style={{ lineHeight: 1.6 }}>
            {position.nameArabic}
          </span>
        </div>
        <p className="text-sm text-[var(--sea-ink-soft)]">{position.description}</p>
      </div>

      <div className="space-y-4">
        {duas.map((dua) => (
          <DuaCard key={dua.id} dua={dua} lang={lang} />
        ))}
      </div>

      <Separator className="mt-10" />
    </section>
  )
}
