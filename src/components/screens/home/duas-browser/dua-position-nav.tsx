import type { TSalahPositionId } from '#/data/duas/types'

import { cn } from '#/lib/utils'
import { useDuasBrowser } from './duas-browser-context'

import { ArabicText } from '#/components/arabic-text'
import { Button } from '#/components/ui/button'
import { ScrollArea } from '#/components/ui/scroll-area'

import { SALAH_POSITIONS } from '#/data/duas/positions'

export const DuaPositionNav = () => {
    const { activePosition, setActivePosition } = useDuasBrowser()

    return (
        <ScrollArea className="h-full">
            <nav className="flex flex-col gap-1 p-1">
                {SALAH_POSITIONS.map((pos) => {
                    const active = pos.id === activePosition
                    return (
                        <Button
                            key={pos.id}
                            variant={active ? 'secondary' : 'ghost'}
                            size="sm"
                            className={cn(
                                'h-auto justify-start gap-3 py-2.5 text-left',
                                active && 'font-semibold',
                            )}
                            onClick={() => setActivePosition(pos.id as TSalahPositionId)}
                        >
                            <span className="bg-primary text-primary-foreground flex size-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold">
                                {pos.order}
                            </span>
                            <span className="flex flex-col items-start">
                                <span className="text-xs leading-tight">{pos.name}</span>
                                <ArabicText
                                    as="span"
                                    size="sm"
                                    className="text-muted-foreground text-[0.7rem]"
                                >
                                    {pos.nameArabic}
                                </ArabicText>
                            </span>
                        </Button>
                    )
                })}
            </nav>
        </ScrollArea>
    )
}
