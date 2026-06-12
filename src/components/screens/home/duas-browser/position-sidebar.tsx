import { cn } from '#/lib/utils'

import { ArabicText } from '#/components/elements/arabic-text'
import { Button } from '#/components/ui/button'
import { Route } from '#/routes/index'

import { SALAH_POSITIONS } from '#/lib/salah-positions'

export const PositionSidebar = () => {
    const search = Route.useSearch()
    const navigate = Route.useNavigate()

    return (
        <nav className="flex h-full flex-col gap-1 overflow-x-hidden overflow-y-auto p-1">
            {SALAH_POSITIONS.map((p) => {
                const active = p.id === search.position
                return (
                    <Button
                        key={p.id}
                        variant={active ? 'secondary' : 'ghost'}
                        size="sm"
                        className={cn(
                            'h-auto justify-start gap-3 py-2.5 text-left',
                            active && 'font-semibold',
                        )}
                        onClick={() => navigate({ search: (v) => ({ ...v, position: p.id }) })}
                    >
                        <span className="bg-primary text-primary-foreground flex size-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold">
                            {p.order}
                        </span>
                        <span className="flex flex-col items-start">
                            <span className="text-xs leading-tight">{p.name}</span>
                            <ArabicText
                                as="span"
                                size="sm"
                                className="text-muted-foreground text-[0.7rem]"
                            >
                                {p.nameArabic}
                            </ArabicText>
                        </span>
                    </Button>
                )
            })}
        </nav>
    )
}
