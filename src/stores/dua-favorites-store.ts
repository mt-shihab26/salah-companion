import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

type TDuaFavoritesStore = {
    favorites: string[]
    toggle: (id: string) => void
}

export const useDuaFavoritesStore = create<TDuaFavoritesStore>()(
    persist(
        immer<TDuaFavoritesStore>((set) => ({
            favorites: [],
            toggle: (id: string) => {
                set((state) => {
                    const index = state.favorites.indexOf(id)
                    if (index > -1) {
                        state.favorites.splice(index, 1)
                    } else {
                        state.favorites.push(id)
                    }
                })
            },
        })),
        {
            name: 'dua-favorites',
            partialize: (state) => ({
                favorites: state.favorites,
            }),
        },
    ),
)
