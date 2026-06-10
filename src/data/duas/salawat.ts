import type { DuaVariation } from './types'

export const salawatDuas: DuaVariation[] = [
    {
        id: 'salawat-1',
        positionId: 'salawat',
        variationIndex: 1,
        label: 'Salawat Ibrahimiyyah',
        arabic: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ، اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ',
        transliteration:
            "Allāhumma ṣalli 'alā Muḥammadin wa 'alā āli Muḥammad, kamā ṣallayta 'alā Ibrāhīma wa 'alā āli Ibrāhīm, innaka Ḥamīdun Majīd. Allāhumma bārik 'alā Muḥammadin wa 'alā āli Muḥammad, kamā bārakta 'alā Ibrāhīma wa 'alā āli Ibrāhīm, innaka Ḥamīdun Majīd",
        translations: {
            en: 'O Allah, send Your mercy upon Muhammad and upon the family of Muhammad, just as You sent Your mercy upon Ibrahim and upon the family of Ibrahim. Verily, You are full of praise, full of glory. O Allah, send Your blessings upon Muhammad and upon the family of Muhammad, just as You sent Your blessings upon Ibrahim and upon the family of Ibrahim. Verily, You are full of praise, full of glory.',
            ar: 'اللهم صل على محمد وعلى آل محمد، كما صليت على إبراهيم وعلى آل إبراهيم، إنك حميد مجيد...',
            fr: "O Allah, envoie Ta miséricorde sur Muhammad et sur la famille de Muhammad, comme Tu l'as envoyée sur Ibrahim et sur la famille d'Ibrahim. Certes, Tu es digne de louange, plein de gloire...",
            ur: 'اے اللہ! محمد ﷺ اور آل محمد پر رحمت نازل فرما، جیسے تو نے ابراہیم اور آل ابراہیم پر رحمت نازل فرمائی، بے شک تو قابل تعریف بزرگ ہے...',
            tr: "Allah'ım, İbrahim'e ve İbrahim ailesine salat ettiğin gibi Muhammed'e ve Muhammed ailesine de salat et. Şüphesiz Sen övülmeye layıksın, Yüce'sin...",
            ms: 'Ya Allah, cucurilah rahmat ke atas Muhammad dan keluarga Muhammad, seperti Engkau mencurahkan rahmat ke atas Ibrahim dan keluarga Ibrahim. Sesungguhnya Engkau Maha Terpuji lagi Maha Agung...',
        },
        references: [
            {
                type: 'quran',
                surah: 33,
                ayah: 56,
                surahName: 'Al-Ahzab',
                surahNameArabic: 'الأحزاب',
                url: 'https://quran.com/33/56',
            },
            {
                type: 'hadith',
                source: 'Sahih al-Bukhari',
                number: '3370',
                grade: 'Sahih',
                narrator: "Ka'b ibn Ujrah",
                url: 'https://sunnah.com/bukhari:3370',
            },
            {
                type: 'hadith',
                source: 'Sahih Muslim',
                number: '406',
                grade: 'Sahih',
                narrator: 'Abu Humayd al-Saidi',
                url: 'https://sunnah.com/muslim:406',
            },
        ],
        notes: "The Salawat Ibrahimiyyah is commanded by the Quran (Al-Ahzab 33:56). The Companions asked the Prophet ﷺ how to send blessings on him, and he taught them this formula. It is obligatory (fard) in the final tashahhud according to the Shafi'i and Hanbali madhabs, and sunnah mu'akkadah in others. The comparison to Ibrahim (عليه السلام) is the highest benchmark since Ibrahim is the most praised prophet in the Quran after Muhammad ﷺ.",
    },
]
