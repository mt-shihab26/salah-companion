import { Badge } from '#/components/ui/badge'
import { getPosition } from '#/data/duas/positions'
import type { SalahPositionId } from '#/data/duas/types'
import { cn } from '#/lib/utils'

interface Props {
  positionId: SalahPositionId
  className?: string
}

const COLOR_CLASS: Record<string, string> = {
  lagoon: 'border-[var(--lagoon)] text-[var(--lagoon-deep)] bg-[color-mix(in_oklab,var(--lagoon)_12%,transparent)]',
  'lagoon-deep': 'border-[var(--lagoon-deep)] text-[var(--lagoon-deep)] bg-[color-mix(in_oklab,var(--lagoon-deep)_10%,transparent)]',
  palm: 'border-[var(--palm)] text-[var(--palm)] bg-[color-mix(in_oklab,var(--palm)_10%,transparent)]',
}

export function DuaPositionBadge({ positionId, className }: Props) {
  const position = getPosition(positionId)
  if (!position) return null

  const colorClass = COLOR_CLASS[position.color] ?? COLOR_CLASS['lagoon']

  return (
    <Badge variant="outline" className={cn(colorClass, 'gap-1.5', className)}>
      {position.name}
      <span className="arabic-text" style={{ fontSize: '0.7rem', lineHeight: 1 }}>
        {position.nameArabic}
      </span>
    </Badge>
  )
}
