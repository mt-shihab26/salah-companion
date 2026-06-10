import { Badge } from '#/components/ui/badge'
import { getPosition } from '#/data/duas/positions'
import type { SalahPositionId } from '#/data/duas/types'
import { cn } from '#/lib/utils'

interface Props {
  positionId: SalahPositionId
  className?: string
}

export function DuaPositionBadge({ positionId, className }: Props) {
  const position = getPosition(positionId)
  if (!position) return null

  return (
    <Badge variant="outline" className={cn('gap-1.5 border-primary/30 bg-primary/5 text-primary', className)}>
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
