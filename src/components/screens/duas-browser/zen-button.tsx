import type { TSalahDua } from '#/types/salah-duas'

import { useNavigate } from '@tanstack/react-router'

import { Button } from '#/components/ui/button'
import { Maximize2 } from 'lucide-react'

export const ZenButton = ({ salahDua }: { salahDua: TSalahDua }) => {
    const navigate = useNavigate({ from: '/' })

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() =>
                navigate({ search: (v) => ({ ...v, dua: salahDua.id }), resetScroll: false })
            }
            className="text-muted-foreground ml-auto size-6 shrink-0"
        >
            <Maximize2 className="size-3.5" />
            <span className="sr-only">Zen mode</span>
        </Button>
    )
}
