import type { TReference } from '#/types/salah-duas'

import { HadithBadge } from './hadith-badge'
import { QuranBadge } from './quran-badge'

export const ReferenceList = ({ references }: { references: TReference[] }) => {
    if (references.length === 0) return null

    return (
        <ul className="flex flex-wrap gap-2">
            {references.map((ref, i) => (
                <li key={i}>
                    {ref.type === 'quran' ? <QuranBadge ref={ref} /> : <HadithBadge ref={ref} />}
                </li>
            ))}
        </ul>
    )
}
