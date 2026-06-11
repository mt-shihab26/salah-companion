export type TSalahPositionId =
    | 'opening'
    | 'taawwudh'
    | 'ruku'
    | 'qawmah'
    | 'sajdah'
    | 'jalsah'
    | 'tashahhud'
    | 'salawat'
    | 'before-tasleem'

export type TDuaLang = 'en' | 'ar' | 'fr' | 'ur' | 'tr' | 'ms' | 'bn' | 'id' | 'sw' | 'ha' | 'de' | 'hi'

export const DUA_LANGS: { code: TDuaLang; label: string; dir: 'ltr' | 'rtl' }[] = [
    { code: 'en', label: 'English', dir: 'ltr' },
    { code: 'ar', label: 'العربية', dir: 'rtl' },
    { code: 'fr', label: 'Français', dir: 'ltr' },
    { code: 'ur', label: 'اردو', dir: 'rtl' },
    { code: 'tr', label: 'Türkçe', dir: 'ltr' },
    { code: 'ms', label: 'Melayu', dir: 'ltr' },
    { code: 'bn', label: 'বাংলা', dir: 'ltr' },
    { code: 'id', label: 'Indonesia', dir: 'ltr' },
    { code: 'sw', label: 'Kiswahili', dir: 'ltr' },
    { code: 'ha', label: 'Hausa', dir: 'ltr' },
    { code: 'de', label: 'Deutsch', dir: 'ltr' },
    { code: 'hi', label: 'हिन्दी', dir: 'ltr' },
]

export type TSalahPosition = {
    id: TSalahPositionId
    order: number
    name: string
    nameArabic: string
    description: string
    icon: string
    color: string
}

export type TQuranRef = {
    type: 'quran'
    surah: number
    ayah: number
    ayahEnd?: number
    surahName: string
    surahNameArabic: string
    url: string
}

export type THadithRef = {
    type: 'hadith'
    source: string
    number?: string
    grade?: string
    narrator?: string
    url?: string
}

export type TDuaReference = TQuranRef | THadithRef

export type TDuaVariation = {
    id: string
    positionId: TSalahPositionId
    variationIndex: number
    label: string
    arabic: string
    languages: Record<
        TDuaLang,
        {
            transliteration: string
            translation: string
        }
    >
    references: TDuaReference[]
    audioUrl: string
    notes: string
    whenToRecite: string
}
