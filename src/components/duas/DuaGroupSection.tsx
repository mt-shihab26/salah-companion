import { ArabicText } from '#/components/arabic-text'
import { Separator } from '#/components/ui/separator'
import { getPosition } from '#/data/duas/positions'
import type { TDuaLang, TDuaVariation, TSalahPositionId } from '#/data/duas/types'
import { DuaCard } from './DuaCard'

interface Props {
    positionId: TSalahPositionId
    duas: TDuaVariation[]
    langs: TDuaLang[]
}

export function DuaGroupSection({ positionId, duas, langs }: Props) {
    const position = getPosition(positionId)
    if (!position || duas.length === 0) return null

    return (
        <section>
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                <div className="space-y-1">
                    <div className="flex items-baseline gap-3">
                        <h2 className="text-foreground font-serif text-2xl font-semibold">
                            {position.name}
                        </h2>
                        <ArabicText as="span" size="md" className="text-muted-foreground">
                            {position.nameArabic}
                        </ArabicText>
                    </div>
                    <p className="text-muted-foreground text-sm">{position.description}</p>
                </div>
                <span className="border-border bg-muted/40 text-muted-foreground rounded-full border px-3 py-1 text-xs font-medium">
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
