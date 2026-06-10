import { useCallback, useState } from 'react'

const STORAGE_KEY = 'salah-companion:favorites'

const load = (): Set<string> => {
    try {
        const raw = localStorage.getItem(STORAGE_KEY)
        if (raw) return new Set(JSON.parse(raw))
    } catch {
        // ignore
    }
    return new Set()
}

const save = (ids: Set<string>) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...ids]))
    } catch {
        // ignore
    }
}

export const useDuaFavorites = () => {
    const [favorites, setFavorites] = useState<Set<string>>(load)

    const toggle = useCallback((id: string) => {
        setFavorites((prev) => {
            const next = new Set(prev)
            if (next.has(id)) {
                next.delete(id)
            } else {
                next.add(id)
            }
            save(next)
            return next
        })
    }, [])

    const isFavorite = useCallback((id: string) => favorites.has(id), [favorites])

    return { favorites, toggle, isFavorite }
}
