import type { TSalahDua } from '#/types/salah-duas'

import placeholderAudio from '#/assets/audios/subhanaka.m4a'

export const sajdah3: TSalahDua = {
    id: 'sajdah-3',
    positionId: 'sajdah',
    variationIndex: 3,
    label: 'Subbuhun Quddus (Sajdah)',
    arabic: 'سُبُّوحٌ قُدُّوسٌ رَبُّ الْمَلَائِكَةِ وَالرُّوحِ',
    languages: {
        en: {
            transliteration: "Subbūḥun Quddūs, Rabbul-malā'ikati war-rūḥ",
            translation: 'Most Glorified, Most Holy, Lord of the angels and the Spirit (Jibreel).',
        },
        fr: {
            transliteration: "Subbūḥun Quddūs, Rabbul-malā'ikati war-rūḥ",
            translation: "Très Glorifié, Très Saint, Seigneur des anges et de l'Esprit.",
        },
        ur: {
            transliteration: 'سُبُّوحٌ قُدُّوسٌ رَبُّ المَلَائِکَۃِ وَالرُّوح',
            translation: 'نہایت پاک، نہایت مقدس، فرشتوں اور روح (جبریل) کا رب۔',
        },
        tr: {
            transliteration: "Subbūḥun Quddūs, Rabbul-malā'ikati war-rūḥ",
            translation: "Çok Yüce, Çok Kutsal, meleklerin ve Ruh'un Rabbi.",
        },
        ms: {
            transliteration: "Subbūḥun Quddūs, Rabbul-malā'ikati war-rūḥ",
            translation: 'Maha Suci, Maha Kudus, Tuhan para malaikat dan Roh.',
        },
        bn: {
            transliteration: 'সুব্বুহুন কুদ্দুস, রাব্বুল মালাইকাতি ওয়াররূহ',
            translation: 'সর্বমহিমান্বিত, সর্বপবিত্র, ফেরেশতাগণ ও রুহের রব।',
        },
        id: {
            transliteration: "Subbūḥun Quddūs, Rabbul-malā'ikati war-rūḥ",
            translation: 'Maha Suci, Maha Kudus, Tuhan para malaikat dan Roh.',
        },
        sw: {
            transliteration: "Subbūḥun Quddūs, Rabbul-malā'ikati war-rūḥ",
            translation: 'Mwenye Utukufu, Mwenye Utakatifu, Mola wa malaika na Roho.',
        },
        ha: {
            transliteration: "Subbūḥun Quddūs, Rabbul-malā'ikati war-rūḥ",
            translation: "Tsarkakakke sosai, Mai tsarki sosai, Ubangijin mala'iku da Ruhu.",
        },
        de: {
            transliteration: "Subbūḥun Quddūs, Rabbul-malā'ikati war-rūḥ",
            translation: 'Höchst Glorreich, Höchst Heilig, Herr der Engel und des Geistes.',
        },
        hi: {
            transliteration: 'सुब्बूहुन क़ुद्दूस, रब्बुल मलाइकति वर्रूह',
            translation: 'सर्वमहिमावान, सर्वपवित्र, फ़रिश्तों और रूह के रब।',
        },
    },
    references: [
        {
            type: 'hadith',
            source: 'Sahih Muslim',
            number: '487',
            grade: 'Sahih',
            narrator: "A'ishah",
            url: 'https://sunnah.com/muslim:487',
        },
    ],
    notes: "Same as ruku-2. A'ishah (رضي الله عنها) reported the Prophet ﷺ said this in both ruku and sujood.",
    whenToRecite:
        "Recited during Sujood in every rak'ah. Used interchangeably with or alongside the primary tasbih (sajdah-1). A'ishah (رضي الله عنها) reported the Prophet ﷺ said this frequently in both bowing and prostration.",
    audioUrl: placeholderAudio,
}
