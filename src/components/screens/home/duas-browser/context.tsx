import { getDuasByPosition } from '#/data/duas/index'
import { SALAH_POSITIONS } from '#/data/duas/positions'
import type { DuaLang, DuaVariation, SalahPositionId } from '#/data/duas/types'
import { useDuaLang } from '#/hooks/use-dua-lang'
import { createContext, useContext, useState } from 'react'

interface DuasBrowserContextValue {
    langs: DuaLang[]
    toggleLang: (lang: DuaLang) => void
    activePosition: SalahPositionId
    setActivePosition: (id: SalahPositionId) => void
    duas: DuaVariation[]
    activeMeta: (typeof SALAH_POSITIONS)[number] | undefined
}

const DuasBrowserContext = createContext<DuasBrowserContextValue | null>(null)

export function DuasBrowserProvider({ children }: { children: React.ReactNode }) {
    const { langs, toggleLang } = useDuaLang()
    const [activePosition, setActivePosition] = useState<SalahPositionId>(
        SALAH_POSITIONS[0].id as SalahPositionId,
    )
    const duas = getDuasByPosition(activePosition)
    const activeMeta = SALAH_POSITIONS.find((p) => p.id === activePosition)

    return (
        <DuasBrowserContext value={{ langs, toggleLang, activePosition, setActivePosition, duas, activeMeta }}>
            {children}
        </DuasBrowserContext>
    )
}

export function useDuasBrowser() {
    const ctx = useContext(DuasBrowserContext)
    if (!ctx) throw new Error('useDuasBrowser must be used inside DuasBrowserProvider')
    return ctx
}
