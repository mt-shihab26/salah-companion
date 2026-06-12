import type { TQuranRef } from '#/types/salah-duas'

import { Badge } from '#/components/ui/badge'

export const QuranBadge = ({ ref }: { ref: TQuranRef }) => (
    <Badge asChild className="cursor-pointer gap-1 bg-[#2ca4ab] text-white [a&]:hover:bg-[#259098]">
        <a href={ref.url} target="_blank" rel="noopener noreferrer">
            📖 {ref.surahName} {ref.surah}:{ref.ayah}
            {ref.ayahEnd ? `–${ref.ayahEnd}` : ''}
        </a>
    </Badge>
)
