import placeholderAudio from '#/assets/audios/subhanaka.m4a'
import type { TSalahDua } from '#/types/salah-duas'

export const ruku2: TSalahDua = {
    id: 'ruku-2',
    positionId: 'ruku',
    variationIndex: 2,
    label: 'Subbuhun Quddus (Ruku)',
    arabic: 'سُبُّوحٌ قُدُّوسٌ رَبُّ الْمَلَائِكَةِ وَالرُّوحِ',
    languages: {
        en: {
            transliteration: "Subbūḥun Quddūs, Rabbul-malā'ikati war-rūḥ",
            translation: 'Most Glorified, Most Holy, Lord of the angels and the Spirit (Jibreel).',
        },
        fr: {
            transliteration: "Subbūḥun Quddūs, Rabbul-malā'ikati war-rūḥ",
            translation: "Très Glorifié, Très Saint, Seigneur des anges et de l'Esprit (Jibreel).",
        },
        ur: {
            transliteration: 'سُبُّوحٌ قُدُّوسٌ رَبُّ المَلَائِکَۃِ وَالرُّوح',
            translation: 'نہایت پاک، نہایت مقدس، فرشتوں اور روح (جبریل) کا رب۔',
        },
        tr: {
            transliteration: "Subbūḥun Quddūs, Rabbul-malā'ikati war-rūḥ",
            translation: "Çok Yüce, Çok Kutsal, meleklerin ve Ruh'un (Cebrail'in) Rabbi.",
        },
        ms: {
            transliteration: "Subbūḥun Quddūs, Rabbul-malā'ikati war-rūḥ",
            translation: 'Maha Suci, Maha Kudus, Tuhan para malaikat dan Roh (Jibril).',
        },
        bn: {
            transliteration: 'সুব্বুহুন কুদ্দুস, রাব্বুল মালাইকাতি ওয়াররূহ',
            translation: 'সর্বমহিমান্বিত, সর্বপবিত্র, ফেরেশতাগণ ও রুহ (জিবরাঈল)-এর রব।',
        },
        id: {
            transliteration: "Subbūḥun Quddūs, Rabbul-malā'ikati war-rūḥ",
            translation: 'Maha Suci, Maha Kudus, Tuhan para malaikat dan Roh (Jibril).',
        },
        sw: {
            transliteration: "Subbūḥun Quddūs, Rabbul-malā'ikati war-rūḥ",
            translation: 'Mwenye Utukufu, Mwenye Utakatifu, Mola wa malaika na Roho (Jibril).',
        },
        ha: {
            transliteration: "Subbūḥun Quddūs, Rabbul-malā'ikati war-rūḥ",
            translation:
                "Tsarkakakke sosai, Mai tsarki sosai, Ubangijin mala'iku da Ruhu (Jibrilu).",
        },
        de: {
            transliteration: "Subbūḥun Quddūs, Rabbul-malā'ikati war-rūḥ",
            translation:
                'Höchst Glorreich, Höchst Heilig, Herr der Engel und des Geistes (Jibreel).',
        },
        hi: {
            transliteration: 'सुब्बूहुन क़ुद्दूस, रब्बुल मलाइकति वर्रूह',
            translation: 'सर्वमहिमावान, सर्वपवित्र, फ़रिश्तों और रूह (जिब्रील) के रब।',
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
    notes: "A'ishah (رضي الله عنها) reported that the Prophet ﷺ frequently said this in his ruku and sujood. The word 'Subbuh' is an intensive form meaning one who is glorified to the utmost degree. 'Quddus' means utterly pure and free from all defects.",
    whenToRecite:
        "Recited quietly during Ruku in every rak'ah, as an alternative to or alongside ruku-1. Can be combined with the primary tasbih. Particularly used in the night prayer (Tahajjud) where more duas are recited.",
    audioUrl: placeholderAudio,
}
