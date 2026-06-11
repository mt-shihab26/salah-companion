import type { TSalahDua } from '#/types/salah-duas'
import placeholderAudio from '#/assets/audio/subhanaka.m4a'

export const ruku6: TSalahDua = {
    id: 'ruku-6',
    positionId: 'ruku',
    variationIndex: 6,
    label: 'Subhana dhil-Jabarut (Ruku)',
    arabic: 'سُبْحَانَ ذِي الْجَبَرُوتِ وَالْمَلَكُوتِ وَالْكِبْرِيَاءِ وَالْعَظَمَةِ',
    languages: {
        en: {
            transliteration: "Subḥāna dhil-jabarūti wal-malakūti wal-kibriyā'i wal-'aẓamah",
            translation: 'Glory be to the One Who possesses all power, all sovereignty, all greatness and all magnificence.',
        },
        ar: {
            transliteration: 'سُبْحَانَ ذِي الْجَبَرُوتِ وَالْمَلَكُوتِ وَالْكِبْرِيَاءِ وَالْعَظَمَةِ',
            translation: 'سبحان ذي الجبروت والملكوت والكبرياء والعظمة.',
        },
        fr: {
            transliteration: "Subḥāna dhil-jabarūti wal-malakūti wal-kibriyā'i wal-'aẓamah",
            translation: 'Gloire à Celui qui possède toute puissance, toute souveraineté, toute grandeur et toute magnificence.',
        },
        ur: {
            transliteration: 'سُبحَانَ ذِی الجَبَرُوتِ وَالمَلَکُوتِ وَالکِبرِیَاءِ وَالعَظَمَہ',
            translation: 'پاک ہے وہ جو قدرت، بادشاہت، بڑائی اور عظمت والا ہے۔',
        },
        tr: {
            transliteration: "Subḥāna dhil-jabarūti wal-malakūti wal-kibriyā'i wal-'aẓamah",
            translation: "Tüm güce, tüm egemenliğe, tüm büyüklüğe ve tüm azamete sahip Olan'ı tesbih ederim.",
        },
        ms: {
            transliteration: "Subḥāna dhil-jabarūti wal-malakūti wal-kibriyā'i wal-'aẓamah",
            translation: 'Maha Suci Tuhan yang memiliki segala kekuasaan, pemerintahan, keagungan dan kebesaran.',
        },
        bn: {
            transliteration: 'সুবহানা যিল জাবারূতি ওয়াল মালাকূতি ওয়াল কিবরিয়াই ওয়াল আযামাহ',
            translation: 'তিনি পবিত্র যিনি সর্বশক্তি, সর্বকর্তৃত্ব, সর্বশ্রেষ্ঠতা ও সর্বমহিমার অধিকারী।',
        },
        id: {
            transliteration: "Subḥāna dhil-jabarūti wal-malakūti wal-kibriyā'i wal-'aẓamah",
            translation: 'Maha Suci Tuhan yang memiliki segala kekuasaan, pemerintahan, keagungan dan kebesaran.',
        },
        sw: {
            transliteration: "Subḥāna dhil-jabarūti wal-malakūti wal-kibriyā'i wal-'aẓamah",
            translation: 'Utukufu wa Mwenye nguvu zote, ufalme wote, ukuu wote na utukufu wote.',
        },
        ha: {
            transliteration: "Subḥāna dhil-jabarūti wal-malakūti wal-kibriyā'i wal-'aẓamah",
            translation: 'Tsarki ta tabbata ga Mai ikon gaske da mulki da girma da azama.',
        },
        de: {
            transliteration: "Subḥāna dhil-jabarūti wal-malakūti wal-kibriyā'i wal-'aẓamah",
            translation: 'Gepriesen sei Der, dem alle Macht, alle Herrschaft, alle Erhabenheit und alle Größe gehört.',
        },
        hi: {
            transliteration: 'सुब्हान ज़िल जबरूति वलमलकूति वलकिब्रियाइ वलअज़मह',
            translation: 'उसकी पाकी बयान करता हूं जो सर्वशक्तिमान, सर्वसत्ताधारी, सर्वमहान और सर्वमहिमावान है।',
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
        {
            type: 'hadith',
            source: 'Sunan al-Nasai',
            number: '1130',
            grade: 'Sahih',
            narrator: "A'ishah",
            url: 'https://sunnah.com/nasai:1130',
        },
    ],
    notes: "This dhikr is reported to have been recited during the night prayer (Tahajjud) ruku. The four divine attributes mentioned — jabarut (absolute power), malakut (sovereignty), kibriya' (magnificence), and azamah (greatness) — together emphasise the complete supremacy of Allah.",
    whenToRecite: 'Recited quietly during Ruku in night prayers (Tahajjud, Witr, Tarawih). Not typically used in short obligatory prayers. The worshipper should be in the correct bowing position — back flat, hands on knees — for the full duration.',
    audioUrl: placeholderAudio,
}
