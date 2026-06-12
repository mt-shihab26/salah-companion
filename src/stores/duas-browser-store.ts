import type { TLanguage } from '#/types/languages'
import type { TSalahPositionId } from '#/types/salah-positions'
import type { TSalahDua } from '#/types/salah-duas'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

const DEFAULT_LANGUAGES: TLanguage[] = ['en']
const DEFAULT_SALAH_POSITION_ID: TSalahPositionId = 'opening'

type TDuasBrowserStore = {
    languages: TLanguage[]
    toggleLanguage: (lang: TLanguage) => void

    salahPositionId: TSalahPositionId
    setSalahPositionId: (id: TSalahPositionId) => void
}

export const useDuasBrowserStore = create<TDuasBrowserStore>()(
    persist(
        immer((set) => ({
            languages: DEFAULT_LANGUAGES,

            toggleLanguage: (lang) => {
                set((state) => {
                    const next = state.languages.includes(lang)
                        ? state.languages.filter((l) => l !== lang)
                        : [...state.languages, lang]
                    state.languages = next.length > 0 ? next : DEFAULT_LANGUAGES
                })
            },

            salahPositionId: DEFAULT_SALAH_POSITION_ID,

            setSalahPositionId: (id) => {
                set((state) => {
                    state.salahPositionId = id
                })
            },
        })),
        {
            name: 'duas-browser',
            partialize: (state) => ({
                languages: state.languages,
                salahPositionId: state.salahPositionId,
            }),
        },
    ),
)
