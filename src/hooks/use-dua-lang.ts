import type { DuaLang } from '#/data/duas/types'
import { DUA_LANGS } from '#/data/duas/types'
import { useState } from 'react'

const STORAGE_KEY = 'dua-langs'
const DEFAULT_LANGS: DuaLang[] = ['en']
const VALID_LANGS = new Set<DuaLang>(DUA_LANGS.map((l) => l.code))

function isDuaLang(value: string): value is DuaLang {
    return VALID_LANGS.has(value as DuaLang)
}

function readStoredLangs(): DuaLang[] {
    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (!stored) return DEFAULT_LANGS
        const parsed = JSON.parse(stored)
        if (!Array.isArray(parsed)) return DEFAULT_LANGS
        const filtered = parsed.filter((v): v is DuaLang => typeof v === 'string' && isDuaLang(v))
        return filtered.length > 0 ? filtered : DEFAULT_LANGS
    } catch {
        return DEFAULT_LANGS
    }
}

export function useDuaLang() {
    const [langs, setLangsState] = useState<DuaLang[]>(readStoredLangs)

    function persist(next: DuaLang[]) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
        } catch {
            // ignore
        }
        setLangsState(next)
    }

    function setLangs(next: DuaLang[]) {
        const cleaned = next.length > 0 ? next : DEFAULT_LANGS
        persist(cleaned)
    }

    function toggleLang(lang: DuaLang) {
        const next = langs.includes(lang) ? langs.filter((l) => l !== lang) : [...langs, lang]
        setLangs(next)
    }

    return { langs, setLangs, toggleLang }
}
