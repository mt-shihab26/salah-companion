import type { TSalahPositionId } from '#/types/salah-positions'

import { getSalahPosition } from '#/lib/salah-positions'
import { cn } from '#/lib/utils'

import { Badge } from '#/components/ui/badge'

export const PositionBadge = ({
    positionId,
    className,
}: {
    positionId: TSalahPositionId
    className?: string
}) => {
    const position = getSalahPosition(positionId)

    if (!position) return null

    return (
        <Badge
            variant="outline"
            className={cn('border-primary/30 bg-primary/5 text-primary gap-1.5', className)}
        >
            {position.name}
            <span
                dir="rtl"
                className="text-[0.7rem] leading-none"
                style={{ fontFamily: "'Amiri', Georgia, serif" }}
            >
                {position.nameArabic}
            </span>
        </Badge>
    )
}
