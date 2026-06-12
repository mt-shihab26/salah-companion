import type { TLanguage } from '#/types/languages'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

const DEFAULT_LANGUAGES: TLanguage[] = ['en']

type TDuasBrowserStore = {
    languages: TLanguage[]
    toggleLanguage: (lang: TLanguage) => void
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
        })),
        {
            name: 'duas-browser',
            partialize: (state) => ({
                languages: state.languages,
            }),
        },
    ),
)
