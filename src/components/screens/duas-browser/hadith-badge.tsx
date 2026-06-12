import type { THadithRef } from '#/types/salah-duas'

import { Badge } from '#/components/ui/badge'

export const HadithBadge = ({ ref }: { ref: THadithRef }) => {
    return (
        <Badge
            variant="outline"
            asChild
            className="border-primary/20 text-primary cursor-pointer gap-1.5"
        >
            <a href={ref.url} target="_blank" rel="noopener noreferrer">
                📜 {ref.source} {ref.number}
                <span className="bg-primary/15 text-primary rounded px-1 py-px text-[10px] font-semibold">
                    {ref.grade}
                </span>
            </a>
        </Badge>
    )
}
