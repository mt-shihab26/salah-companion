import { Separator } from '#/components/ui/separator'
import { ArabicText } from '#/components/arabic-text'
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
          <h2 className="text-xl font-semibold text-foreground">{position.name}</h2>
          <ArabicText as="span" size="md" className="text-muted-foreground">
            {position.nameArabic}
          </ArabicText>
        </div>
        <p className="text-sm text-muted-foreground">{position.description}</p>
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
