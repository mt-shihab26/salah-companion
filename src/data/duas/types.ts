export type SalahPositionId =
    | 'opening'
    | 'taawwudh'
    | 'ruku'
    | 'qawmah'
    | 'sajdah'
    | 'jalsah'
    | 'tashahhud'
    | 'salawat'
    | 'before-tasleem'

export type DuaLang = 'en' | 'ar' | 'fr' | 'ur' | 'tr' | 'ms'

export const DUA_LANGS: { code: DuaLang; label: string; dir: 'ltr' | 'rtl' }[] = [
    { code: 'en', label: 'English', dir: 'ltr' },
    { code: 'ar', label: 'العربية', dir: 'rtl' },
    { code: 'fr', label: 'Français', dir: 'ltr' },
    { code: 'ur', label: 'اردو', dir: 'rtl' },
    { code: 'tr', label: 'Türkçe', dir: 'ltr' },
    { code: 'ms', label: 'Melayu', dir: 'ltr' },
]

export interface SalahPosition {
    id: SalahPositionId
    order: number
    name: string
    nameArabic: string
    description: string
    icon: string
    color: string
}

export interface QuranRef {
    type: 'quran'
    surah: number
    ayah: number
    ayahEnd?: number
    surahName: string
    surahNameArabic: string
    url: string
}

export interface HadithRef {
    type: 'hadith'
    source: string
    number?: string
    grade?: string
    narrator?: string
    url?: string
}

export type DuaReference = QuranRef | HadithRef

export interface DuaVariation {
    id: string
    positionId: SalahPositionId
    variationIndex: number
    label?: string
    arabic: string
    transliteration: string
    translations: Record<DuaLang, string>
    references: DuaReference[]
    audioUrl?: string
    notes?: string
}
