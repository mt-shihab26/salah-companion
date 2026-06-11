import { createFileRoute } from '@tanstack/react-router'

import { ClosingNote } from '#/components/screens/home/closing-note'
import { DuasBrowser } from '#/components/screens/home/duas-browser'
import { DuasBrowserProvider } from '#/components/screens/home/duas-browser/duas-browser-context'
import { Features } from '#/components/screens/home/features'
import { Hero } from '#/components/screens/home/hero'
import { Separator } from '#/components/ui/separator'

export const Route = createFileRoute('/')({
    component: Home,
})

function Home() {
    return (
        <div className="space-y-24 pb-24">
            <Hero />
            <Features />
            <Separator className="opacity-50" />
            <DuasBrowserProvider>
                <DuasBrowser />
            </DuasBrowserProvider>
            <Separator className="opacity-50" />
            <ClosingNote />
        </div>
    )
}
