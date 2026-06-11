import type { TSalahDua } from '#/types/salah-duas'

import placeholderAudio from '#/assets/audios/subhanaka.m4a'

export const ruku1: TSalahDua = {
    id: 'ruku-1',
    positionId: 'ruku',
    variationIndex: 1,
    label: 'Subhana Rabbi al-Azim',
    arabic: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ',
    languages: {
        en: {
            transliteration: "Subḥāna Rabbiy al-'Aẓīm",
            translation: 'Glory be to my Lord, the Most Great.',
        },
        fr: {
            transliteration: "Subḥāna Rabbiy al-'Aẓīm",
            translation: 'Gloire à mon Seigneur, le Plus Grand.',
        },
        ur: {
            transliteration: 'سُبحَانَ رَبِّیَ العَظِیم',
            translation: 'پاک ہے میرا رب، سب سے بڑا۔',
        },
        tr: {
            transliteration: "Subḥāna Rabbiy al-'Aẓīm",
            translation: 'Büyük Rabbimi tesbih ederim.',
        },
        ms: {
            transliteration: "Subḥāna Rabbiy al-'Aẓīm",
            translation: 'Maha Suci Tuhanku Yang Maha Agung.',
        },
        bn: {
            transliteration: 'সুবহানা রাব্বিয়াল আযীম',
            translation: 'আমার রব সর্বমহান, তাঁর পবিত্রতা বর্ণনা করি।',
        },
        id: {
            transliteration: "Subḥāna Rabbiy al-'Aẓīm",
            translation: 'Maha Suci Tuhanku Yang Maha Agung.',
        },
        sw: {
            transliteration: "Subḥāna Rabbiy al-'Aẓīm",
            translation: 'Utukufu wa Mola wangu aliye Mtukufu Zaidi.',
        },
        ha: {
            transliteration: "Subḥāna Rabbiy al-'Aẓīm",
            translation: 'Tsarki ta tabbata ga Ubangijina Mai Girma.',
        },
        de: {
            transliteration: "Subḥāna Rabbiy al-'Aẓīm",
            translation: 'Gepriesen sei mein Herr, der Erhabenste.',
        },
        hi: {
            transliteration: 'सुब्हान रब्बियल अज़ीम',
            translation: 'मेरे रब की पाकी बयान करता हूं, जो सबसे महान हैं।',
        },
    },
    references: [
        {
            type: 'hadith',
            source: 'Sunan Abu Dawud',
            number: '869',
            grade: 'Sahih',
            narrator: 'Uqbah ibn Amir',
            url: 'https://sunnah.com/abudawud:869',
        },
        {
            type: 'hadith',
            source: 'Sunan Ibn Majah',
            number: '888',
            grade: 'Sahih',
            narrator: 'Hudhayfah',
            url: 'https://sunnah.com/ibnmajah:888',
        },
    ],
    notes: "The most widely agreed-upon dhikr for ruku. The minimum is three repetitions, and more is recommended. It corresponds to the verse 'So glorify the name of your Lord, the Most Great' (Al-Waqi'ah 56:96 / Al-Haqqah 69:52).",
    whenToRecite:
        "Recited quietly in every rak'ah during Ruku (bowing), with hands gripping the knees and back flat. Minimum three repetitions; seven or more are recommended in voluntary prayers. Said while completely still — movement before finishing is discouraged.",
    audioUrl: placeholderAudio,
}
