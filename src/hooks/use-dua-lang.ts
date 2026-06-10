import type { TDuaLang } from '#/data/duas/types'

import { useState } from 'react'

import { DUA_LANGS } from '#/data/duas/types'

const STORAGE_KEY = 'dua-langs'
const DEFAULT_LANGS: TDuaLang[] = ['en']
const VALID_LANGS = new Set<TDuaLang>(DUA_LANGS.map((l) => l.code))

const isDuaLang = (value: string): value is TDuaLang => {
    return VALID_LANGS.has(value as TDuaLang)
}

const readStoredLangs = (): TDuaLang[] => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (!stored) return DEFAULT_LANGS
        const parsed = JSON.parse(stored)
        if (!Array.isArray(parsed)) return DEFAULT_LANGS
        const filtered = parsed.filter((v): v is TDuaLang => typeof v === 'string' && isDuaLang(v))
        return filtered.length > 0 ? filtered : DEFAULT_LANGS
    } catch {
        return DEFAULT_LANGS
    }
}

export const useDuaLang = () => {
    const [langs, setLangsState] = useState<TDuaLang[]>(readStoredLangs)

    const persist = (next: TDuaLang[]) => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
        } catch {
            // ignore
        }
        setLangsState(next)
    }

    const setLangs = (next: TDuaLang[]) => {
        const cleaned = next.length > 0 ? next : DEFAULT_LANGS
        persist(cleaned)
    }

    const toggleLang = (lang: TDuaLang) => {
        const next = langs.includes(lang) ? langs.filter((l) => l !== lang) : [...langs, lang]
        setLangs(next)
    }

    return { langs, setLangs, toggleLang }
}
