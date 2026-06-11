import type { TSalahDua } from '#/types/salah-duas'
import placeholderAudio from '#/assets/audios/subhanaka.m4a'

export const ruku4: TSalahDua = {
    id: 'ruku-4',
    positionId: 'ruku',
    variationIndex: 4,
    label: 'Subhanaka Allahumma Rabbana (Ruku)',
    arabic: 'سُبْحَانَكَ اللَّهُمَّ رَبَّنَا وَبِحَمْدِكَ، اللَّهُمَّ اغْفِرْ لِي',
    languages: {
        en: {
            transliteration: 'Subḥānakallāhumma Rabbanā wa biḥamdika, Allāhummagh-fir lī',
            translation: 'Glory be to You, O Allah our Lord, and all praise. O Allah, forgive me.',
        },
        ar: {
            transliteration: 'سُبْحَانَكَ اللَّهُمَّ رَبَّنَا وَبِحَمْدِكَ، اللَّهُمَّ اغْفِرْ لِي',
            translation: 'سبحانك اللهم ربنا وبحمدك، اللهم اغفر لي.',
        },
        fr: {
            transliteration: 'Subḥānakallāhumma Rabbanā wa biḥamdika, Allāhummagh-fir lī',
            translation: 'Gloire à Toi, ô Allah notre Seigneur, et toute louange. Ô Allah, pardonne-moi.',
        },
        ur: {
            transliteration: 'سُبحَانَکَ اللّٰہُمَّ رَبَّنَا وَبِحَمدِک، اَللّٰہُمَّ اغفِر لِی',
            translation: 'اے اللہ! اے ہمارے رب! تو پاک ہے اور تیری حمد ہے، اے اللہ! مجھے معاف فرما۔',
        },
        tr: {
            transliteration: 'Subḥānakallāhumma Rabbanā wa biḥamdika, Allāhummagh-fir lī',
            translation: "Allah'ım Rabbimiz, Seni tesbih eder ve hamd ederim. Allah'ım, beni bağışla.",
        },
        ms: {
            transliteration: 'Subḥānakallāhumma Rabbanā wa biḥamdika, Allāhummagh-fir lī',
            translation: 'Maha Suci Engkau ya Allah Tuhan kami, dengan memuji-Mu. Ya Allah, ampunkanlah aku.',
        },
        bn: {
            transliteration: 'সুবহানাকাল্লাহুম্মা রাব্বানা ওয়াবিহামদিকা, আল্লাহুম্মাগফির লী',
            translation: 'হে আল্লাহ, হে আমাদের রব! তুমি পবিত্র এবং তোমার প্রশংসা। হে আল্লাহ! আমাকে ক্ষমা করো।',
        },
        id: {
            transliteration: 'Subḥānakallāhumma Rabbanā wa biḥamdika, Allāhummagh-fir lī',
            translation: 'Maha Suci Engkau ya Allah Tuhan kami, dengan memuji-Mu. Ya Allah, ampunilah aku.',
        },
        sw: {
            transliteration: 'Subḥānakallāhumma Rabbanā wa biḥamdika, Allāhummagh-fir lī',
            translation: 'Utukufu ni Wako Ee Mwenyezi Mungu Mola wetu, na sifa Zako. Ee Mwenyezi Mungu, nisamehe.',
        },
        ha: {
            transliteration: 'Subḥānakallāhumma Rabbanā wa biḥamdika, Allāhummagh-fir lī',
            translation: 'Tsarki ta tabbata a gare Ka ya Allah Ubangijinmu, tare da yabonka. Ya Allah, Ka gafarta mini.',
        },
        de: {
            transliteration: 'Subḥānakallāhumma Rabbanā wa biḥamdika, Allāhummagh-fir lī',
            translation: 'Gepriesen seist Du, o Allah unser Herr, und aller Lobpreis gehört Dir. O Allah, vergib mir.',
        },
        hi: {
            transliteration: 'सुब्हानकल्लाहुम्म रब्बना व बिहम्दिक, अल्लाहुम्मग्फ़िर ली',
            translation: 'ऐ अल्लाह! हमारे रब, तू पवित्र है और तेरी प्रशंसा हो। ऐ अल्लाह! मुझे माफ़ कर।',
        },
    },
    references: [
        {
            type: 'hadith',
            source: 'Sahih al-Bukhari',
            number: '817',
            grade: 'Sahih',
            narrator: "A'ishah",
            url: 'https://sunnah.com/bukhari:817',
        },
        {
            type: 'hadith',
            source: 'Sahih Muslim',
            number: '484',
            grade: 'Sahih',
            narrator: "A'ishah",
            url: 'https://sunnah.com/muslim:484',
        },
    ],
    notes: "A'ishah (رضي الله عنها) reported the Prophet ﷺ frequently recited this, implementing the Quranic command 'then glorify the praises of your Lord and ask His forgiveness' (An-Nasr 110:3).",
    whenToRecite: "Recited quietly during Ruku in every rak'ah, particularly in the final period of the Prophet's ﷺ life when Surah An-Nasr was revealed. Combines glorification with a request for forgiveness in one supplication.",
    audioUrl: placeholderAudio,
}
