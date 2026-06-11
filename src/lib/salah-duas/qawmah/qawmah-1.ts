import type { TSalahDua } from '#/types/salah-duas'

import placeholderAudio from '#/assets/audio/subhanaka.m4a'

export const qawmah1: TSalahDua = {
    id: 'qawmah-1',
    positionId: 'qawmah',
    variationIndex: 1,
    label: "Sami'allahu liman hamidah (Short)",
    arabic: 'سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ، رَبَّنَا وَلَكَ الْحَمْدُ',
    languages: {
        en: {
            transliteration: "Sami'allāhu liman ḥamidah, Rabbanā wa lakal-ḥamd",
            translation:
                'Allah hears the one who praises Him. Our Lord, and to You is all praise.',
        },
        ar: {
            transliteration: 'سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ، رَبَّنَا وَلَكَ الْحَمْدُ',
            translation: 'سمع الله لمن حمده، ربنا ولك الحمد.',
        },
        fr: {
            transliteration: "Sami'allāhu liman ḥamidah, Rabbanā wa lakal-ḥamd",
            translation:
                'Allah entend celui qui Le loue. Notre Seigneur, et à Toi est toute louange.',
        },
        ur: {
            transliteration: 'سَمِعَ اللّٰہُ لِمَن حَمِدَہ، رَبَّنَا وَلَکَ الحَمد',
            translation:
                'اللہ نے اس کی بات سنی جس نے اس کی تعریف کی۔ اے ہمارے رب! اور تیرے لیے ہی تعریف ہے۔',
        },
        tr: {
            transliteration: "Sami'allāhu liman ḥamidah, Rabbanā wa lakal-ḥamd",
            translation: "Allah, O'nu öveni duyar. Rabbimiz, hamd Sanadır.",
        },
        ms: {
            transliteration: "Sami'allāhu liman ḥamidah, Rabbanā wa lakal-ḥamd",
            translation:
                'Allah mendengar orang yang memuji-Nya. Tuhan kami, bagi-Mu lah segala puji.',
        },
        bn: {
            transliteration: 'সামিআল্লাহু লিমান হামিদাহ, রাব্বানা ওয়া লাকাল হামদ',
            translation: 'আল্লাহ তাঁর প্রশংসাকারীর কথা শোনেন। হে আমাদের রব! সকল প্রশংসা তোমার।',
        },
        id: {
            transliteration: "Sami'allāhu liman ḥamidah, Rabbanā wa lakal-ḥamd",
            translation:
                'Allah mendengar orang yang memuji-Nya. Tuhan kami, bagi-Mu lah segala puji.',
        },
        sw: {
            transliteration: "Sami'allāhu liman ḥamidah, Rabbanā wa lakal-ḥamd",
            translation: 'Mwenyezi Mungu husikia anayemsifu. Mola wetu, kwako ni sifa zote.',
        },
        ha: {
            transliteration: "Sami'allāhu liman ḥamidah, Rabbanā wa lakal-ḥamd",
            translation: 'Allah ya ji wanda ya yabe Shi. Ubangijinmu, gare Ka yabo ya tabbata.',
        },
        de: {
            transliteration: "Sami'allāhu liman ḥamidah, Rabbanā wa lakal-ḥamd",
            translation: 'Allah hört den, der Ihn lobt. Unser Herr, Dir gehört aller Lobpreis.',
        },
        hi: {
            transliteration: 'समिअल्लाहु लिमन हमिदह, रब्बना व लकल हम्द',
            translation:
                'अल्लाह उसे सुनता है जो उसकी तारीफ़ करे। ऐ हमारे रब! सारी तारीफ़ तेरे लिए है।',
        },
    },
    references: [
        {
            type: 'hadith',
            source: 'Sahih al-Bukhari',
            number: '795',
            grade: 'Sahih',
            narrator: 'Abu Hurayrah',
            url: 'https://sunnah.com/bukhari:795',
        },
        {
            type: 'hadith',
            source: 'Sahih Muslim',
            number: '392',
            grade: 'Sahih',
            narrator: 'Abu Hurayrah',
            url: 'https://sunnah.com/muslim:392',
        },
    ],
    notes: "The phrase 'Sami'allahu liman hamidah' is said by the imam and the one praying alone while rising from ruku. 'Rabbana wa lakal-hamd' is said by both the imam and the congregation upon completing the rise.",
    whenToRecite:
        "The first part ('Sami'allahu liman hamidah') is said while rising from Ruku in every rak'ah — by the imam and the one praying alone. The second part ('Rabbana wa lakal-hamd') is said upon standing fully upright. A follower (ma'moom) says only the second part.",
    audioUrl: placeholderAudio,
}
