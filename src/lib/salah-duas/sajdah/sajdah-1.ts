import type { TSalahDua } from '#/types/salah-duas'

import placeholderAudio from '#/assets/audios/subhanaka.m4a'

export const sajdah1: TSalahDua = {
    id: 'sajdah-1',
    positionId: 'sajdah',
    variationIndex: 1,
    label: "Subhana Rabbi al-A'la",
    arabic: 'سُبْحَانَ رَبِّيَ الْأَعْلَى',
    languages: {
        en: {
            transliteration: "Subḥāna Rabbiy al-A'lā",
            translation: 'Glory be to my Lord, the Most High.',
        },
        fr: {
            transliteration: "Subḥāna Rabbiy al-A'lā",
            translation: 'Gloire à mon Seigneur, le Très Haut.',
        },
        ur: {
            transliteration: 'سُبحَانَ رَبِّیَ الاَعلٰی',
            translation: 'پاک ہے میرا رب، سب سے اعلیٰ۔',
        },
        tr: {
            transliteration: "Subḥāna Rabbiy al-A'lā",
            translation: 'En Yüce Rabbimi tesbih ederim.',
        },
        ms: {
            transliteration: "Subḥāna Rabbiy al-A'lā",
            translation: 'Maha Suci Tuhanku Yang Maha Tinggi.',
        },
        bn: {
            transliteration: 'সুবহানা রাব্বিয়াল আলা',
            translation: 'আমার সর্বোচ্চ রবের পবিত্রতা বর্ণনা করি।',
        },
        id: {
            transliteration: "Subḥāna Rabbiy al-A'lā",
            translation: 'Maha Suci Tuhanku Yang Maha Tinggi.',
        },
        sw: {
            transliteration: "Subḥāna Rabbiy al-A'lā",
            translation: 'Utukufu wa Mola wangu aliye Juu Zaidi.',
        },
        ha: {
            transliteration: "Subḥāna Rabbiy al-A'lā",
            translation: 'Tsarki ta tabbata ga Ubangijina Mafi daukaka.',
        },
        de: {
            transliteration: "Subḥāna Rabbiy al-A'lā",
            translation: 'Gepriesen sei mein Herr, der Höchste.',
        },
        hi: {
            transliteration: 'सुब्हान रब्बियल अला',
            translation: 'मेरे रब की पाकी बयान करता हूं, जो सबसे बुलंद हैं।',
        },
    },
    references: [
        {
            type: 'quran',
            surah: 87,
            ayah: 1,
            surahName: "Al-A'la",
            surahNameArabic: 'الأعلى',
            url: 'https://quran.com/87/1',
        },
        {
            type: 'hadith',
            source: 'Sunan Abu Dawud',
            number: '869',
            grade: 'Sahih',
            narrator: 'Uqbah ibn Amir',
            url: 'https://sunnah.com/abudawud:869',
        },
    ],
    notes: "The most obligatory dhikr in sujood. Corresponds to the Quranic command: 'Glorify the name of your Lord, the Most High' (Al-A'la 87:1). Minimum three repetitions; seven or more in voluntary prayers.",
    whenToRecite:
        "Recited quietly in every Sujood (prostration) of every rak'ah — both the first and second prostrations. Forehead, nose, both palms, both knees and both feet must be on the ground. Minimum three repetitions. The worshipper must be completely still while reciting.",
    audioUrl: placeholderAudio,
}
