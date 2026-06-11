import type { TSalahDua } from '#/types/salah-duas'

import placeholderAudio from '#/assets/audios/subhanaka.m4a'

export const takbeer: TSalahDua = {
    id: 'takbeer',
    positionId: 'opening',
    variationIndex: 1,
    label: 'Takbeeratul Ihram',
    arabic: 'ٱللَّهُ أَكْبَرُ',
    languages: {
        en: {
            transliteration: 'Allāhu Akbar',
            translation: 'Allah is the Greatest.',
        },
        fr: {
            transliteration: 'Allāhu Akbar',
            translation: 'Allah est le Plus Grand.',
        },
        ur: {
            transliteration: 'اَللّٰہُ اَکبَر',
            translation: 'اللہ سب سے بڑا ہے۔',
        },
        tr: {
            transliteration: 'Allāhu Akbar',
            translation: 'Allah en büyüktür.',
        },
        ms: {
            transliteration: 'Allāhu Akbar',
            translation: 'Allah Maha Besar.',
        },
        bn: {
            transliteration: 'আল্লাহু আকবার',
            translation: 'আল্লাহ সর্বমহান।',
        },
        id: {
            transliteration: 'Allāhu Akbar',
            translation: 'Allah Maha Besar.',
        },
        sw: {
            transliteration: 'Allāhu Akbar',
            translation: 'Mwenyezi Mungu ni Mkubwa zaidi.',
        },
        ha: {
            transliteration: 'Allāhu Akbar',
            translation: 'Allah shi ne Mafi girma.',
        },
        de: {
            transliteration: 'Allāhu Akbar',
            translation: 'Allah ist der Größte.',
        },
        hi: {
            transliteration: 'अल्लाहु अकबर',
            translation: 'अल्लाह सबसे महान है।',
        },
    },
    references: [
        {
            type: 'hadith',
            source: 'Sahih al-Bukhari',
            number: '744',
            grade: 'Sahih',
            narrator: 'Ali ibn Abi Talib',
            url: 'https://sunnah.com/bukhari:744',
        },
        {
            type: 'hadith',
            source: 'Sahih Muslim',
            number: '399',
            grade: 'Sahih',
            narrator: 'Abu Hurayrah',
            url: 'https://sunnah.com/muslim:399',
        },
    ],
    notes: 'The opening Takbeer (Takbeeratul Ihram) marks the formal entry into the state of prayer. Once uttered, the worshipper is in a sacred state (haram) and worldly speech is forbidden. It is obligatory (fard) according to the majority of scholars. The hands are raised to the level of the shoulders or earlobes while saying it.',
    whenToRecite:
        'Recited aloud (by the imam) or silently (by the follower) at the very beginning of every prayer. Both hands are raised to shoulder or earlobe level simultaneously. Once said, the worshipper enters the sacred prayer state (ihraam) and all worldly speech is forbidden until the Tasleem.',
    audioUrl: placeholderAudio,
}
