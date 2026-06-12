import type { TLanguage } from '#/types/languages'
import type { TSalahPositionId } from '#/types/salah-positions'

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
    number: string
    grade: string
    narrator: string
    url: string
}

export type TReference = TQuranRef | THadithRef

export type TSalahDua = {
    id: string
    positionId: TSalahPositionId
    variationIndex: number
    label: string
    arabic: string
    languages: Record<
        TLanguage,
        {
            transliteration: string
            translation: string
        }
    >
    references: TReference[]
    audioUrl: string
    notes: string
    whenToRecite: string
}
