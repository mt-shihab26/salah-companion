import type { TDuaLang, TDuaVariation, TSalahPositionId } from '#/data/duas/types'
import type { ReactNode } from 'react'

import { getDuasByPosition } from '#/data/duas/index'
import { useDuaLang } from '#/hooks/use-dua-lang'
import { createContext, useContext, useState } from 'react'

import { SALAH_POSITIONS } from '#/data/duas/positions'

type TDuasBrowserContext = {
    langs: TDuaLang[]
    toggleLang: (lang: TDuaLang) => void
    activePosition: TSalahPositionId
    setActivePosition: (id: TSalahPositionId) => void
    duas: TDuaVariation[]
    activeMeta: (typeof SALAH_POSITIONS)[number] | undefined
}

const DuasBrowserContext = createContext<TDuasBrowserContext | null>(null)

export const DuasBrowserProvider = ({ children }: { children: ReactNode }) => {
    const { langs, toggleLang } = useDuaLang()
    const [activePosition, setActivePosition] = useState<TSalahPositionId>(
        SALAH_POSITIONS[0].id as TSalahPositionId,
    )
    const duas = getDuasByPosition(activePosition)
    const activeMeta = SALAH_POSITIONS.find((p) => p.id === activePosition)

    return (
        <DuasBrowserContext
            value={{ langs, toggleLang, activePosition, setActivePosition, duas, activeMeta }}
        >
            {children}
        </DuasBrowserContext>
    )
}

export const useDuasBrowser = () => {
    const ctx = useContext(DuasBrowserContext)
    if (!ctx) throw new Error('useDuasBrowser must be used inside DuasBrowserProvider')
    return ctx
}
