import type { THadithRef } from '#/types/salah-duas'

import { Badge } from '#/components/ui/badge'

export const HadithBadge = ({ ref }: { ref: THadithRef }) => {
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
