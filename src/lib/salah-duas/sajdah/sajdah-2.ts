import type { TSalahDua } from '#/types/salah-duas'

import placeholderAudio from '#/assets/audio/subhanaka.m4a'

export const sajdah2: TSalahDua = {
    id: 'sajdah-2',
    positionId: 'sajdah',
    variationIndex: 2,
    label: 'Allahumma ighfir li ma asrart (Sajdah)',
    arabic: 'اللَّهُمَّ اغْفِرْ لِي مَا أَسْرَرْتُ وَمَا أَعْلَنْتُ',
    languages: {
        en: {
            transliteration: "Allāhummaghfir lī mā asrartu wa mā a'lant",
            translation:
                'O Allah, forgive me for what I have done in secret and what I have done openly.',
        },
        ar: {
            transliteration: 'اللَّهُمَّ اغْفِرْ لِي مَا أَسْرَرْتُ وَمَا أَعْلَنْتُ',
            translation: 'اللهم اغفر لي ما أسررت وما أعلنت.',
        },
        fr: {
            transliteration: "Allāhummaghfir lī mā asrartu wa mā a'lant",
            translation:
                "O Allah, pardonne-moi pour ce que j'ai fait en secret et pour ce que j'ai fait ouvertement.",
        },
        ur: {
            transliteration: 'اَللّٰہُمَّ اغفِر لِی مَا اَسرَرتُ وَمَا اَعلَنت',
            translation:
                'اے اللہ! مجھے معاف فرما جو میں نے چھپ کر کیا اور جو میں نے علانیہ کیا۔',
        },
        tr: {
            transliteration: "Allāhummaghfir lī mā asrartu wa mā a'lant",
            translation: "Allah'ım, gizli yaptıklarımı ve açıkça yaptıklarımı bağışla.",
        },
        ms: {
            transliteration: "Allāhummaghfir lī mā asrartu wa mā a'lant",
            translation:
                'Ya Allah, ampunkanlah aku atas apa yang aku lakukan secara tersembunyi dan secara terang-terangan.',
        },
        bn: {
            transliteration: 'আল্লাহুম্মাগফির লী মা আসরারতু ওয়া মা আলান্ত',
            translation: 'হে আল্লাহ! আমি গোপনে যা করেছি এবং প্রকাশ্যে যা করেছি তা ক্ষমা করো।',
        },
        id: {
            transliteration: "Allāhummaghfir lī mā asrartu wa mā a'lant",
            translation:
                'Ya Allah, ampunilah aku atas apa yang aku lakukan secara tersembunyi dan secara terang-terangan.',
        },
        sw: {
            transliteration: "Allāhummaghfir lī mā asrartu wa mā a'lant",
            translation:
                'Ee Mwenyezi Mungu, nisamehe niliyofanya kwa siri na niliyofanya hadharani.',
        },
        ha: {
            transliteration: "Allāhummaghfir lī mā asrartu wa mā a'lant",
            translation:
                'Ya Allah, Ka gafarta mini abin da na yi a asirce da abin da na yi a fili.',
        },
        de: {
            transliteration: "Allāhummaghfir lī mā asrartu wa mā a'lant",
            translation:
                'O Allah, vergib mir, was ich im Verborgenen und was ich offen getan habe.',
        },
        hi: {
            transliteration: 'अल्लाहुम्मग्फ़िर ली मा असरर्तु व मा अलन्त',
            translation:
                'ऐ अल्लाह! मुझे उन सब बातों के लिए माफ़ कर जो मैंने छुपकर और खुलकर किया।',
        },
    },
    references: [
        {
            type: 'hadith',
            source: 'Sunan al-Nasai',
            number: '1124',
            grade: 'Sahih',
            narrator: "A'ishah",
            url: 'https://sunnah.com/nasai:1124',
        },
    ],
    notes: 'Sujood is the closest position to Allah. The Prophet ﷺ said: "The closest a servant is to his Lord is when he is in sujood, so make many duas." This dua seeks forgiveness for all hidden and open sins.',
    whenToRecite:
        "Recited during Sujood in every rak'ah, particularly in voluntary prayers. The sujood is the optimal moment for personal supplications — the Prophet ﷺ encouraged making many duas in this position.",
    audioUrl: placeholderAudio,
}
