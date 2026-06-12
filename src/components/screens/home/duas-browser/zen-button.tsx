import type { TSalahDua } from '#/types/salah-duas'

import { useDuasBrowserStore } from '#/stores/duas-browser-store'

import { Button } from '#/components/ui/button'
import { Maximize2 } from 'lucide-react'

export const ZenButton = ({ salahDua }: { salahDua: TSalahDua }) => {
    const setZenDua = useDuasBrowserStore((s) => s.setZenDua)

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setZenDua(salahDua)}
            className="text-muted-foreground ml-auto size-6 shrink-0"
        >
            <Maximize2 className="size-3.5" />
            <span className="sr-only">Zen mode</span>
        </Button>
    )
}
