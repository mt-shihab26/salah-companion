import type { TDuaLang } from '#/data/duas/types'
import type { TSalahPositionId } from '#/types/salah-positions'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import { DUA_LANGS } from '#/data/duas/types'
import { SALAH_POSITIONS } from '#/lib/salah-positions'

const DEFAULT_LANGS: TDuaLang[] = ['en']
const VALID_LANGS = new Set<TDuaLang>(DUA_LANGS.map((l) => l.code))

type TDuasBrowserStore = {
    langs: TDuaLang[]
    activePosition: TSalahPositionId
    toggleLang: (lang: TDuaLang) => void
    setActivePosition: (id: TSalahPositionId) => void
}

export const useDuasBrowserStore = create<TDuasBrowserStore>()(
    persist(
        immer((set) => ({
            langs: DEFAULT_LANGS,
            activePosition: SALAH_POSITIONS[0].id as TSalahPositionId,

            toggleLang: (lang) =>
                set((state) => {
                    const next = state.langs.includes(lang)
                        ? state.langs.filter((l) => l !== lang)
                        : [...state.langs, lang]
                    const valid = next.filter((l): l is TDuaLang => VALID_LANGS.has(l))
                    state.langs = valid.length > 0 ? valid : DEFAULT_LANGS
                }),

            setActivePosition: (id) =>
                set((state) => {
                    state.activePosition = id
                }),
        })),
        {
            name: 'duas-browser',
            partialize: (state) => ({
                langs: state.langs,
                activePosition: state.activePosition,
            }),
        },
    ),
)
