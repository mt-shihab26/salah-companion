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
            <Badge variant="outline" asChild className="border-[var(--palm)] text-[var(--palm)] bg-[color-mix(in_oklab,var(--palm)_8%,transparent)] gap-1">
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

  const badge = (
    <Badge variant="outline" className="border-[var(--lagoon)] text-[var(--lagoon-deep)] bg-[color-mix(in_oklab,var(--lagoon)_8%,transparent)] gap-1.5">
      📜 {label}
      {ref.grade && (
        <span className="rounded bg-[color-mix(in_oklab,var(--lagoon)_18%,transparent)] px-1 py-px text-[10px] font-semibold">
          {ref.grade}
        </span>
      )}
    </Badge>
  )

  return ref.url ? (
    <Badge variant="outline" asChild className="border-[var(--lagoon)] text-[var(--lagoon-deep)] bg-[color-mix(in_oklab,var(--lagoon)_8%,transparent)] gap-1.5">
      <a href={ref.url} target="_blank" rel="noopener noreferrer">
        📜 {label}
        {ref.grade && (
          <span className="rounded bg-[color-mix(in_oklab,var(--lagoon)_18%,transparent)] px-1 py-px text-[10px] font-semibold">
            {ref.grade}
          </span>
        )}
      </a>
    </Badge>
  ) : badge
}
