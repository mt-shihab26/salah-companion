import type { TSalahPositionId } from '#/types/salah-positions'

import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'

import { SALAH_POSITIONS } from '#/lib/salah-positions'

import { ClosingNote } from '#/components/screens/home/closing-note'
import { DuasBrowser } from '#/components/screens/home/duas-browser'
import { Features } from '#/components/screens/home/features'
import { Hero } from '#/components/screens/home/hero'
import { Separator } from '#/components/ui/separator'

const positionIds: string[] = SALAH_POSITIONS.map((p) => p.id)

const searchSchema = z.object({
    position: z
        .string()
        .optional()
        .transform((v) => (v && positionIds.includes(v) ? v : 'opening') as TSalahPositionId),
    dua: z.string().optional(),
})

export const Route = createFileRoute('/')({
    validateSearch: (search) => searchSchema.parse(search),
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
