import { Separator } from '#/components/ui/separator'
import { ArabicText } from '#/components/arabic-text'
import { DuaCard } from './DuaCard'
import { getPosition } from '#/data/duas/positions'
import type { DuaVariation, DuaLang, SalahPositionId } from '#/data/duas/types'

interface Props {
    positionId: SalahPositionId
    duas: DuaVariation[]
    langs: DuaLang[]
}

export function DuaGroupSection({ positionId, duas, langs }: Props) {
    const position = getPosition(positionId)
    if (!position || duas.length === 0) return null

    return (
        <section>
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                <div className="space-y-1">
                    <div className="flex items-baseline gap-3">
                        <h2 className="font-serif text-2xl font-semibold text-foreground">
                            {position.name}
                        </h2>
                        <ArabicText as="span" size="md" className="text-muted-foreground">
                            {position.nameArabic}
                        </ArabicText>
                    </div>
                    <p className="text-sm text-muted-foreground">{position.description}</p>
                </div>
                <span className="rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground">
                    {duas.length} {duas.length === 1 ? 'dua' : 'duas'}
                </span>
            </div>

            <div className="space-y-4">
                {duas.map((dua) => (
                    <DuaCard key={dua.id} dua={dua} langs={langs} />
                ))}
            </div>

            <Separator className="mt-10" />
        </section>
    )
}
