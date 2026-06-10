import type { TDuaVariation } from './types'

export const taawwudhDuas: TDuaVariation[] = [
    {
        id: 'taawwudh-1',
        positionId: 'taawwudh',
        variationIndex: 1,
        label: "Seeking Refuge (Ta'awwudh)",
        arabic: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ مِنْ هَمْزِهِ وَنَفْخِهِ وَنَفْثِهِ',
        languages: {
            en: {
                transliteration:
                    "A'ūdhu billāhi minash-shayṭānir-rajīm, min hamzihi wa nafkhihi wa nafthih",
                translation:
                    'I seek refuge in Allah from the accursed devil — from his incitement to madness (hamz), his puffing up with pride (nafkh), and his blowing of evil poetry (nafth).',
            },
            ar: {
                transliteration:
                    'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ مِنْ هَمْزِهِ وَنَفْخِهِ وَنَفْثِهِ',
                translation: 'أعوذ بالله من الشيطان الرجيم، من همزه ونفخه ونفثه.',
            },
            fr: {
                transliteration:
                    "A'ūdhu billāhi minash-shayṭānir-rajīm, min hamzihi wa nafkhihi wa nafthih",
                translation:
                    "Je cherche refuge auprès d'Allah contre le diable maudit — contre ses provocations à la folie, son orgueil et sa poésie maléfique.",
            },
            ur: {
                transliteration:
                    'اَعُوذُ بِاللّٰہِ مِنَ الشَّیطَانِ الرَّجِیم، مِن ہَمزِہِ وَنَفخِہِ وَنَفثِہ',
                translation:
                    'میں شیطان مردود سے اللہ کی پناہ مانگتا ہوں — اس کے وسوسوں، تکبر اور بری شاعری سے۔',
            },
            tr: {
                transliteration:
                    "A'ūdhu billāhi minash-shayṭānir-rajīm, min hamzihi wa nafkhihi wa nafthih",
                translation:
                    "Kovulmuş şeytanın vesvesesinden, kibrinden ve kötü şiirinden Allah'a sığınırım.",
            },
            ms: {
                transliteration:
                    "A'ūdhu billāhi minash-shayṭānir-rajīm, min hamzihi wa nafkhihi wa nafthih",
                translation:
                    'Aku berlindung dengan Allah daripada syaitan yang direjam — daripada godaannya, kesombongannya dan tiupan jahatnya.',
            },
            bn: {
                transliteration:
                    'আউযু বিল্লাহি মিনাশ শাইতানির রাজীম, মিন হামযিহি ওয়া নাফখিহি ওয়া নাফসিহ',
                translation:
                    'আমি বিতাড়িত শয়তান থেকে আল্লাহর আশ্রয় চাই — তার কুমন্ত্রণা, অহংকার এবং মন্দ অনুপ্রেরণা থেকে।',
            },
        },
        references: [
            {
                type: 'quran',
                surah: 16,
                ayah: 98,
                surahName: 'An-Nahl',
                surahNameArabic: 'النحل',
                url: 'https://quran.com/16/98',
            },
            {
                type: 'hadith',
                source: 'Musnad Ahmad',
                number: '22179',
                grade: 'Hasan',
                narrator: 'Jubayr ibn Mutim',
                url: 'https://sunnah.com/ahmad:22179',
            },
            {
                type: 'hadith',
                source: 'Sunan Abu Dawud',
                number: '764',
                grade: 'Hasan Sahih',
                narrator: "Abu Sa'id al-Khudri",
                url: 'https://sunnah.com/abudawud:764',
            },
        ],
        notes: "The Ta'awwudh is recited silently before Al-Fatihah in every rak'ah according to most scholars, or only in the first rak'ah according to others. The Quran commands it: 'When you recite the Quran, seek refuge with Allah from the accursed Shaytan' (An-Nahl 16:98). The three words 'hamz', 'nafkh', and 'nafth' describe Shaytan's three modes of attack: inducing madness, inspiring arrogance, and inspiring evil poetry.",
        whenToRecite:
            "Recited silently immediately after the Istiftah dua and before Al-Fatihah. Most scholars say it is recited in the first rak'ah only; others say every rak'ah. It is always said silently, even when Fatihah is recited aloud by the imam.",
    },
]
