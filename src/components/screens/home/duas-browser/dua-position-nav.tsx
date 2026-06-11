import type { TSalahPositionId } from '#/types/salah-positions'

import { cn } from '#/lib/utils'
import { useDuasBrowserStore } from '#/stores/duas-browser-store'

import { ArabicText } from '#/components/elements/arabic-text'
import { Button } from '#/components/ui/button'

import { SALAH_POSITIONS } from '#/lib/salah-positions'

export const DuaPositionNav = () => {
    const salahPositionId = useDuasBrowserStore((s) => s.salahPositionId)
    const setSalahPositionId = useDuasBrowserStore((s) => s.setSalahPositionId)

    return (
        <nav className="flex h-full flex-col gap-1 overflow-x-hidden overflow-y-auto p-1">
            {SALAH_POSITIONS.map((pos) => {
                const active = pos.id === salahPositionId
                return (
                    <Button
                        key={pos.id}
                        variant={active ? 'secondary' : 'ghost'}
                        size="sm"
                        className={cn(
                            'h-auto justify-start gap-3 py-2.5 text-left',
                            active && 'font-semibold',
                        )}
                        onClick={() => setSalahPositionId(pos.id as TSalahPositionId)}
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
    )
}
