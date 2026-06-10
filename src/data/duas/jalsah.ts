import type { TDuaVariation } from './types'

export const jalsahDuas: TDuaVariation[] = [
    {
        id: 'jalsah-1',
        positionId: 'jalsah',
        variationIndex: 1,
        label: 'Rabbi ighfir li',
        arabic: 'رَبِّ اغْفِرْ لِي، رَبِّ اغْفِرْ لِي',
        languages: {
            en: {
                transliteration: 'Rabbigh-fir lī, Rabbigh-fir lī',
                translation: 'My Lord, forgive me. My Lord, forgive me.',
            },
            ar: {
                transliteration: 'رَبِّ اغْفِرْ لِي، رَبِّ اغْفِرْ لِي',
                translation: 'رب اغفر لي، رب اغفر لي.',
            },
            fr: {
                transliteration: 'Rabbigh-fir lī, Rabbigh-fir lī',
                translation: 'Mon Seigneur, pardonne-moi. Mon Seigneur, pardonne-moi.',
            },
            ur: {
                transliteration: 'رَبِّ اغفِر لِی، رَبِّ اغفِر لِی',
                translation: 'اے میرے رب! مجھے بخش دے۔ اے میرے رب! مجھے بخش دے۔',
            },
            tr: {
                transliteration: 'Rabbigh-fir lī, Rabbigh-fir lī',
                translation: 'Rabbim, beni bağışla. Rabbim, beni bağışla.',
            },
            ms: {
                transliteration: 'Rabbigh-fir lī, Rabbigh-fir lī',
                translation: 'Tuhanku, ampunkanlah aku. Tuhanku, ampunkanlah aku.',
            },
            bn: {
                transliteration: 'রাব্বিগফির লী, রাব্বিগফির লী',
                translation: 'হে আমার রব! আমাকে ক্ষমা করো। হে আমার রব! আমাকে ক্ষমা করো।',
            },
        },
        references: [
            {
                type: 'hadith',
                source: 'Sunan Ibn Majah',
                number: '897',
                grade: 'Sahih',
                narrator: 'Hudhayfah',
                url: 'https://sunnah.com/ibnmajah:897',
            },
            {
                type: 'hadith',
                source: 'Sunan Abu Dawud',
                number: '874',
                grade: 'Sahih',
                narrator: 'Ibn Abbas',
                url: 'https://sunnah.com/abudawud:874',
            },
        ],
        notes: "Recited in the brief sitting position between the two prostrations (Jalsah). The repetition of 'My Lord, forgive me' twice emphasises urgency and sincerity. The Prophet ﷺ would linger in this position long enough to recite it, and the sitting should not be hurried.",
        whenToRecite:
            "Recited while sitting briefly between the first and second Sajdah (prostration) in every rak'ah. The Jalsah (sitting) is short but should not be rushed — the Prophet ﷺ would sit upright and recite this at least once before going into the second Sujood.",
    },
]
