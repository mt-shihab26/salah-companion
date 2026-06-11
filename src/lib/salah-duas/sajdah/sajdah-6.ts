import type { TSalahDua } from '#/types/salah-duas'

import placeholderAudio from '#/assets/audio/subhanaka.m4a'

export const sajdah6: TSalahDua = {
    id: 'sajdah-6',
    positionId: 'sajdah',
    variationIndex: 6,
    label: 'Subhana dhil-Jabarut (Sajdah)',
    arabic: 'سُبْحَانَ ذِي الْجَبَرُوتِ وَالْمَلَكُوتِ وَالْكِبْرِيَاءِ وَالْعَظَمَةِ',
    languages: {
        en: {
            transliteration: "Subḥāna dhil-jabarūti wal-malakūti wal-kibriyā'i wal-'aẓamah",
            translation:
                'Glory be to the One Who possesses all power, all sovereignty, all greatness and all magnificence.',
        },
        ar: {
            transliteration:
                'سُبْحَانَ ذِي الْجَبَرُوتِ وَالْمَلَكُوتِ وَالْكِبْرِيَاءِ وَالْعَظَمَةِ',
            translation: 'سبحان ذي الجبروت والملكوت والكبرياء والعظمة.',
        },
        fr: {
            transliteration: "Subḥāna dhil-jabarūti wal-malakūti wal-kibriyā'i wal-'aẓamah",
            translation:
                'Gloire à Celui qui possède toute puissance, toute souveraineté, toute grandeur et toute magnificence.',
        },
        ur: {
            transliteration:
                'سُبحَانَ ذِی الجَبَرُوتِ وَالمَلَکُوتِ وَالکِبرِیَاءِ وَالعَظَمَہ',
            translation: 'پاک ہے وہ جو قدرت، بادشاہت، بڑائی اور عظمت والا ہے۔',
        },
        tr: {
            transliteration: "Subḥāna dhil-jabarūti wal-malakūti wal-kibriyā'i wal-'aẓamah",
            translation:
                "Tüm güce, egemenliğe, büyüklüğe ve azamete sahip Olan'ı tesbih ederim.",
        },
        ms: {
            transliteration: "Subḥāna dhil-jabarūti wal-malakūti wal-kibriyā'i wal-'aẓamah",
            translation:
                'Maha Suci Tuhan yang memiliki kekuasaan, pemerintahan, keagungan dan kebesaran.',
        },
        bn: {
            transliteration: 'সুবহানা যিল জাবারূতি ওয়াল মালাকূতি ওয়াল কিবরিয়াই ওয়াল আযামাহ',
            translation:
                'তিনি পবিত্র যিনি সকল শক্তি, সকল কর্তৃত্ব, সকল শ্রেষ্ঠত্ব ও সকল মহিমার অধিকারী।',
        },
        id: {
            transliteration: "Subḥāna dhil-jabarūti wal-malakūti wal-kibriyā'i wal-'aẓamah",
            translation:
                'Maha Suci Tuhan yang memiliki kekuasaan, pemerintahan, keagungan dan kebesaran.',
        },
        sw: {
            transliteration: "Subḥāna dhil-jabarūti wal-malakūti wal-kibriyā'i wal-'aẓamah",
            translation:
                'Utukufu wa Mwenye nguvu zote, ufalme wote, ukuu wote na utukufu wote.',
        },
        ha: {
            transliteration: "Subḥāna dhil-jabarūti wal-malakūti wal-kibriyā'i wal-'aẓamah",
            translation: 'Tsarki ta tabbata ga Mai ikon gaske da mulki da girma da azama.',
        },
        de: {
            transliteration: "Subḥāna dhil-jabarūti wal-malakūti wal-kibriyā'i wal-'aẓamah",
            translation:
                'Gepriesen sei Der, dem alle Macht, alle Herrschaft, alle Erhabenheit und alle Größe gehört.',
        },
        hi: {
            transliteration: 'सुब्हान ज़िल जबरूति वलमलकूति वलकिब्रियाइ वलअज़मह',
            translation:
                'उसकी पाकी बयान करता हूं जो सर्वशक्तिमान, सर्वसत्ताधारी, सर्वमहान और सर्वमहिमावान है।',
        },
    },
    references: [
        {
            type: 'hadith',
            source: 'Sunan Abu Dawud',
            number: '873',
            grade: 'Sahih',
            narrator: "A'ishah",
            url: 'https://sunnah.com/abudawud:873',
        },
    ],
    notes: "Reported by A'ishah (رضي الله عنها) as a night prayer dhikr in both ruku and sujood.",
    whenToRecite:
        'Recited during Sujood in night prayers (Tahajjud, Witr, Tarawih). Particularly suited for voluntary prayers where the worshipper lingers in prostration. Can be said after the primary tasbih (sajdah-1).',
    audioUrl: placeholderAudio,
}
