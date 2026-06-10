import { Badge } from '#/components/ui/badge'
import type { DuaReference } from '#/data/duas/types'

interface Props {
    references: DuaReference[]
}

export function DuaReferenceList({ references }: Props) {
    if (references.length === 0) return null

    return (
        <ul className="flex flex-wrap gap-2">
            {references.map((ref, i) => (
                <li key={i}>
                    {ref.type === 'quran' ? (
                        <Badge variant="secondary" asChild className="gap-1 cursor-pointer">
                            <a href={ref.url} target="_blank" rel="noopener noreferrer">
                                📖 {ref.surahName} {ref.surah}:{ref.ayah}
                                {ref.ayahEnd ? `–${ref.ayahEnd}` : ''}
                            </a>
                        </Badge>
                    ) : (
                        <HadithBadge ref={ref} />
                    )}
                </li>
            ))}
        </ul>
    )
}

function HadithBadge({ ref }: { ref: Extract<DuaReference, { type: 'hadith' }> }) {
    const label = [ref.source, ref.number].filter(Boolean).join(' ')

    const content = (
        <>
            📜 {label}
            {ref.grade && (
                <span className="rounded bg-primary/15 px-1 py-px text-[10px] font-semibold text-primary">
                    {ref.grade}
                </span>
            )}
        </>
    )

    return ref.url ? (
        <Badge
            variant="outline"
            asChild
            className="gap-1.5 cursor-pointer border-primary/20 text-primary"
        >
            <a href={ref.url} target="_blank" rel="noopener noreferrer">
                {content}
            </a>
        </Badge>
    ) : (
        <Badge variant="outline" className="gap-1.5 border-primary/20 text-primary">
            {content}
        </Badge>
    )
}
