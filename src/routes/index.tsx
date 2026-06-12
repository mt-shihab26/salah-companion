import type { TSalahPositionId } from '#/types/salah-positions'

import { createFileRoute } from '@tanstack/react-router'

import { DuasBrowser } from '#/components/screens/duas-browser'
import { ClosingNote } from '#/components/screens/home/closing-note'
import { Features } from '#/components/screens/home/features'
import { Hero } from '#/components/screens/home/hero'
import { Separator } from '#/components/ui/separator'

import { SALAH_POSITIONS } from '#/lib/salah-positions'

const positionIds: string[] = SALAH_POSITIONS.map((p) => p.id)

export const Route = createFileRoute('/')({
    validateSearch: (search): { position?: TSalahPositionId; dua?: string } => ({
        position:
            typeof search.position === 'string' && positionIds.includes(search.position)
                ? (search.position as TSalahPositionId)
                : undefined,
        dua: typeof search.dua === 'string' ? search.dua : undefined,
    }),
    component: () => (
        <div className="space-y-24 pb-24">
            <Hero />
            <Features />
            <Separator className="opacity-50" />
            <DuasBrowser />
            <Separator className="opacity-50" />
            <ClosingNote />
        </div>
    ),
})
