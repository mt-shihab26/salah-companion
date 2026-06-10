import { useState } from 'react'
import type { DuaLang } from '#/data/duas/types'

const STORAGE_KEY = 'dua-lang'
const DEFAULT_LANG: DuaLang = 'en'

function readStoredLang(): DuaLang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'en' || stored === 'ar' || stored === 'fr' || stored === 'ur' || stored === 'tr' || stored === 'ms') {
      return stored
    }
  } catch {
    // localStorage unavailable (SSR / privacy mode)
  }
  return DEFAULT_LANG
}

export function useDuaLang() {
  const [lang, setLangState] = useState<DuaLang>(readStoredLang)

  function setLang(next: DuaLang) {
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // ignore
    }
    setLangState(next)
  }

  return { lang, setLang }
}
