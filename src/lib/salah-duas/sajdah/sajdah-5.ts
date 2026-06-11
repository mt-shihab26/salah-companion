import type { TSalahDua } from '#/types/salah-duas'

import placeholderAudio from '#/assets/audios/subhanaka.m4a'

export const sajdah5: TSalahDua = {
    id: 'sajdah-5',
    positionId: 'sajdah',
    variationIndex: 5,
    label: 'Subhanaka Allahumma Rabbana wa bihamdika (Sajdah)',
    arabic: 'سُبْحَانَكَ اللَّهُمَّ رَبَّنَا وَبِحَمْدِكَ، اللَّهُمَّ اغْفِرْ لِي',
    languages: {
        en: {
            transliteration: 'Subḥānakallāhumma Rabbanā wa biḥamdika, Allāhummagh-fir lī',
            translation: 'Glory be to You, O Allah our Lord, and all praise. O Allah, forgive me.',
        },
        fr: {
            transliteration: 'Subḥānakallāhumma Rabbanā wa biḥamdika, Allāhummagh-fir lī',
            translation:
                'Gloire à Toi, ô Allah notre Seigneur, et toute louange. Ô Allah, pardonne-moi.',
        },
        ur: {
            transliteration: 'سُبحَانَکَ اللّٰہُمَّ رَبَّنَا وَبِحَمدِک، اَللّٰہُمَّ اغفِر لِی',
            translation: 'اے اللہ! اے ہمارے رب! تو پاک ہے اور تیری حمد ہے، اے اللہ! مجھے بخش دے۔',
        },
        tr: {
            transliteration: 'Subḥānakallāhumma Rabbanā wa biḥamdika, Allāhummagh-fir lī',
            translation:
                "Allah'ım Rabbimiz, Seni tesbih eder ve hamd ederim. Allah'ım, beni bağışla.",
        },
        ms: {
            transliteration: 'Subḥānakallāhumma Rabbanā wa biḥamdika, Allāhummagh-fir lī',
            translation:
                'Maha Suci Engkau ya Allah Tuhan kami, dengan memuji-Mu. Ya Allah, ampunkanlah aku.',
        },
        bn: {
            transliteration: 'সুবহানাকাল্লাহুম্মা রাব্বানা ওয়াবিহামদিকা, আল্লাহুম্মাগফির লী',
            translation:
                'হে আল্লাহ, হে আমাদের রব! তুমি পবিত্র এবং তোমার প্রশংসা। হে আল্লাহ! আমাকে ক্ষমা করো।',
        },
        id: {
            transliteration: 'Subḥānakallāhumma Rabbanā wa biḥamdika, Allāhummagh-fir lī',
            translation:
                'Maha Suci Engkau ya Allah Tuhan kami, dengan memuji-Mu. Ya Allah, ampunilah aku.',
        },
        sw: {
            transliteration: 'Subḥānakallāhumma Rabbanā wa biḥamdika, Allāhummagh-fir lī',
            translation:
                'Utukufu ni Wako Ee Mwenyezi Mungu Mola wetu, na sifa Zako. Ee Mwenyezi Mungu, nisamehe.',
        },
        ha: {
            transliteration: 'Subḥānakallāhumma Rabbanā wa biḥamdika, Allāhummagh-fir lī',
            translation:
                'Tsarki ta tabbata a gare Ka ya Allah Ubangijinmu, tare da yabonka. Ya Allah, Ka gafarta mini.',
        },
        de: {
            transliteration: 'Subḥānakallāhumma Rabbanā wa biḥamdika, Allāhummagh-fir lī',
            translation:
                'Gepriesen seist Du, o Allah unser Herr, und aller Lobpreis gehört Dir. O Allah, vergib mir.',
        },
        hi: {
            transliteration: 'सुब्हानकल्लाहुम्म रब्बना व बिहम्दिक, अल्लाहुम्मग्फ़िर ली',
            translation:
                'ऐ अल्लाह! हमारे रब, तू पवित्र है और तेरी प्रशंसा हो। ऐ अल्लाह! मुझे माफ़ कर।',
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
    ],
    notes: "Reported in both Bukhari and Muslim from A'ishah (رضي الله عنها), said in both ruku and sujood.",
    whenToRecite:
        "Recited during Sujood in every rak'ah. This supplication implements the command of Surah An-Nasr, combining glorification of Allah with a request for forgiveness. It is especially recommended in the later part of one's life.",
    audioUrl: placeholderAudio,
}
