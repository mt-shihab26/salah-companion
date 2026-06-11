import { getSalahDuasBySalahPosition } from '#/lib/salah-duas'
import { getSalahPosition } from '#/lib/salah-positions'
import { useDuasBrowserStore } from '#/stores/duas-browser-store'

import { ArabicText } from '#/components/elements/arabic-text'
import { Separator } from '#/components/ui/separator'
import { DuaCard } from './dua-card'

export const DuaGroupSection = () => {
    const languages = useDuasBrowserStore((s) => s.languages)
    const salahPositionId = useDuasBrowserStore((s) => s.salahPositionId)
    const salahDuas = getSalahDuasBySalahPosition(salahPositionId)

    const position = getSalahPosition(salahPositionId)

    if (!position || salahDuas.length === 0) return null

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
                    {salahDuas.length} {salahDuas.length === 1 ? 'dua' : 'duas'}
                </span>
            </div>

            <div className="space-y-4">
                {salahDuas.map((salahDua) => (
                    <DuaCard key={salahDua.id} salahDua={salahDua} languages={languages} />
                ))}
            </div>

            <Separator className="mt-10" />
        </section>
    )
}
