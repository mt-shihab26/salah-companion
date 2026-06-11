import type { TSalahDua } from '#/types/salah-duas'

import placeholderAudio from '#/assets/audios/subhanaka.m4a'

export const sajdah4: TSalahDua = {
    id: 'sajdah-4',
    positionId: 'sajdah',
    variationIndex: 4,
    label: 'Subhanaka wa bihamdika la ilaha illa anta (Sajdah)',
    arabic: 'سُبْحَانَكَ وَبِحَمْدِكَ لَا إِلَهَ إِلَّا أَنْتَ',
    languages: {
        en: {
            transliteration: 'Subḥānaka wa biḥamdika lā ilāha illā ant',
            translation:
                'Glory be to You, and all praise. There is no god worthy of worship except You.',
        },
        ar: {
            transliteration: 'سُبْحَانَكَ وَبِحَمْدِكَ لَا إِلَهَ إِلَّا أَنْتَ',
            translation: 'سبحانك وبحمدك لا إله إلا أنت.',
        },
        fr: {
            transliteration: 'Subḥānaka wa biḥamdika lā ilāha illā ant',
            translation:
                "Gloire à Toi et toute louange. Il n'y a pas de dieu digne d'adoration excepté Toi.",
        },
        ur: {
            transliteration: 'سُبحَانَکَ وَبِحَمدِکَ لَا اِلٰہَ اِلَّا اَنت',
            translation: 'تو پاک ہے اور تیری حمد ہے، تیرے سوا کوئی معبود نہیں۔',
        },
        tr: {
            transliteration: 'Subḥānaka wa biḥamdika lā ilāha illā ant',
            translation: 'Seni tesbih eder ve hamd ederim. Senden başka ilah yoktur.',
        },
        ms: {
            transliteration: 'Subḥānaka wa biḥamdika lā ilāha illā ant',
            translation:
                'Maha Suci Engkau dan dengan memuji-Mu. Tiada tuhan yang berhak disembah melainkan Engkau.',
        },
        bn: {
            transliteration: 'সুবহানাকা ওয়া বিহামদিকা লা ইলাহা ইল্লা আনত',
            translation: 'তুমি পবিত্র এবং তোমার প্রশংসা করি। তুমি ছাড়া কোনো ইলাহ নেই।',
        },
        id: {
            transliteration: 'Subḥānaka wa biḥamdika lā ilāha illā ant',
            translation:
                'Maha Suci Engkau dan dengan memuji-Mu. Tiada tuhan yang berhak disembah melainkan Engkau.',
        },
        sw: {
            transliteration: 'Subḥānaka wa biḥamdika lā ilāha illā ant',
            translation:
                'Utukufu ni Wako na sifa ni Zako. Hapana mungu anayestahili kuabudiwa isipokuwa Wewe.',
        },
        ha: {
            transliteration: 'Subḥānaka wa biḥamdika lā ilāha illā ant',
            translation:
                'Tsarki ta tabbata a gare Ka da yabonka. Babu abin bautawa da ya dace sai Kai.',
        },
        de: {
            transliteration: 'Subḥānaka wa biḥamdika lā ilāha illā ant',
            translation:
                'Gepriesen seist Du und aller Lobpreis gehört Dir. Es gibt keinen Gott außer Dir.',
        },
        hi: {
            transliteration: 'सुब्हानक व बिहम्दिक ला इलाह इल्ला अन्त',
            translation: 'तू पवित्र है और तेरी प्रशंसा हो। तेरे सिवा कोई इबादत के लायक नहीं।',
        },
    },
    references: [
        {
            type: 'hadith',
            source: 'Sahih Muslim',
            number: '485',
            grade: 'Sahih',
            narrator: "A'ishah",
            url: 'https://sunnah.com/muslim:485',
        },
    ],
    notes: "Reported by A'ishah (رضي الله عنها) — the Prophet ﷺ said this in both ruku and sujood.",
    whenToRecite:
        "Recited during Sujood in every rak'ah. Combines glorification (tasbih), praise (tahmid) and testimony (Tawhid) in a single phrase. Identical wording to ruku-3 — the Prophet ﷺ used it in both positions.",
    audioUrl: placeholderAudio,
}
