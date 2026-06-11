import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type DuaFavoritesStore = {
    favorites: Set<string>
    toggle: (id: string) => void
    isFavorite: (id: string) => boolean
}

const useDuaFavoritesStore = create<DuaFavoritesStore>()(
    persist(
        (set, get) => ({
            favorites: new Set(),
            toggle: (id: string) => {
                const { favorites } = get()
                const next = new Set(favorites)
                if (next.has(id)) {
                    next.delete(id)
                } else {
                    next.add(id)
                }
                set({ favorites: next })
            },
            isFavorite: (id: string) => get().favorites.has(id),
        }),
        {
            name: 'salah-companion:favorites',
            storage: {
                getItem: (name) => {
                    const stored = localStorage.getItem(name)
                    if (stored) {
                        try {
                            const parsed = JSON.parse(stored)
                            return {
                                state: {
                                    ...parsed.state,
                                    favorites: new Set(parsed.state.favorites || []),
                                },
                            }
                        } catch {
                            return null
                        }
                    }
                    return null
                },
                setItem: (name, value) => {
                    try {
                        const toStore = {
                            ...value,
                            state: {
                                ...value.state,
                                favorites: Array.from(value.state.favorites || []),
                            },
                        }
                        localStorage.setItem(name, JSON.stringify(toStore))
                    } catch {
                        // ignore
                    }
                },
                removeItem: (name) => localStorage.removeItem(name),
            },
        },
    ),
)

export const useDuaFavorites = () => {
    return useDuaFavoritesStore()
}
