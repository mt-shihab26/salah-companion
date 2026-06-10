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
                        <Badge variant="secondary" asChild className="cursor-pointer gap-1">
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
                <span className="bg-primary/15 text-primary rounded px-1 py-px text-[10px] font-semibold">
                    {ref.grade}
                </span>
            )}
        </>
    )

    return ref.url ? (
        <Badge
            variant="outline"
            asChild
            className="border-primary/20 text-primary cursor-pointer gap-1.5"
        >
            <a href={ref.url} target="_blank" rel="noopener noreferrer">
                {content}
            </a>
        </Badge>
    ) : (
        <Badge variant="outline" className="border-primary/20 text-primary gap-1.5">
            {content}
        </Badge>
    )
}
