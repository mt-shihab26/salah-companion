import type { TSalahDua } from '#/types/salah-duas'
import placeholderAudio from '#/assets/audios/subhanaka.m4a'

export const ruku3: TSalahDua = {
    id: 'ruku-3',
    positionId: 'ruku',
    variationIndex: 3,
    label: 'Subhanaka wa bihamdika (Ruku)',
    arabic: 'سُبْحَانَكَ وَبِحَمْدِكَ لَا إِلَهَ إِلَّا أَنْتَ',
    languages: {
        en: {
            transliteration: 'Subḥānaka wa biḥamdika lā ilāha illā ant',
            translation: 'Glory be to You and all praise. There is no god worthy of worship except You.',
        },
        ar: {
            transliteration: 'سُبْحَانَكَ وَبِحَمْدِكَ لَا إِلَهَ إِلَّا أَنْتَ',
            translation: 'سبحانك وبحمدك لا إله إلا أنت.',
        },
        fr: {
            transliteration: 'Subḥānaka wa biḥamdika lā ilāha illā ant',
            translation: "Gloire à Toi et toute louange T'appartient. Il n'y a pas de dieu digne d'adoration excepté Toi.",
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
            translation: 'Maha Suci Engkau dan dengan memuji-Mu. Tiada tuhan yang berhak disembah melainkan Engkau.',
        },
        bn: {
            transliteration: 'সুবহানাকা ওয়া বিহামদিকা লা ইলাহা ইল্লা আনত',
            translation: 'তুমি পবিত্র এবং তোমার প্রশংসা করি। তুমি ছাড়া কোনো ইলাহ নেই।',
        },
        id: {
            transliteration: 'Subḥānaka wa biḥamdika lā ilāha illā ant',
            translation: 'Maha Suci Engkau dan dengan memuji-Mu. Tiada tuhan yang berhak disembah melainkan Engkau.',
        },
        sw: {
            transliteration: 'Subḥānaka wa biḥamdika lā ilāha illā ant',
            translation: 'Utukufu ni Wako na sifa ni Zako. Hapana mungu anayestahili kuabudiwa isipokuwa Wewe.',
        },
        ha: {
            transliteration: 'Subḥānaka wa biḥamdika lā ilāha illā ant',
            translation: 'Tsarki ta tabbata a gare Ka da yabonka. Babu abin bautawa da ya dace sai Kai.',
        },
        de: {
            transliteration: 'Subḥānaka wa biḥamdika lā ilāha illā ant',
            translation: 'Gepriesen seist Du und aller Lobpreis gehört Dir. Es gibt keinen Gott außer Dir.',
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
    notes: "A'ishah (رضي الله عنها) reported that the Prophet ﷺ recited this frequently in his ruku and sujood, implementing the Quranic command to glorify (Al-Nasr 110:3).",
    whenToRecite: "Recited quietly during Ruku in every rak'ah. Can be used as the sole tasbih or added after ruku-1. Also recited during Sujood (sajdah-4 uses identical wording).",
    audioUrl: placeholderAudio,
}
