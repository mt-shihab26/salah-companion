import type { DuaVariation } from './types'

export const jalsahDuas: DuaVariation[] = [
  {
    id: 'jalsah-1',
    positionId: 'jalsah',
    variationIndex: 1,
    label: 'Rabbi ighfir li',
    arabic: 'رَبِّ اغْفِرْ لِي، رَبِّ اغْفِرْ لِي',
    transliteration: 'Rabbigh-fir lī, Rabbigh-fir lī',
    translations: {
      en: 'My Lord, forgive me. My Lord, forgive me.',
      ar: 'رب اغفر لي، رب اغفر لي.',
      fr: 'Mon Seigneur, pardonne-moi. Mon Seigneur, pardonne-moi.',
      ur: 'اے میرے رب! مجھے بخش دے۔ اے میرے رب! مجھے بخش دے۔',
      tr: 'Rabbim, beni bağışla. Rabbim, beni bağışla.',
      ms: 'Tuhanku, ampunkanlah aku. Tuhanku, ampunkanlah aku.',
    },
    references: [
      {
        type: 'hadith',
        source: 'Sunan Ibn Majah',
        number: '897',
        grade: 'Sahih',
        narrator: 'Hudhayfah',
        url: 'https://sunnah.com/ibnmajah:897',
      },
      {
        type: 'hadith',
        source: 'Sunan Abu Dawud',
        number: '874',
        grade: 'Sahih',
        narrator: 'Ibn Abbas',
        url: 'https://sunnah.com/abudawud:874',
      },
    ],
    notes:
      "Recited in the brief sitting position between the two prostrations. The repetition of 'My Lord, forgive me' twice emphasises urgency and sincerity. The Prophet ﷺ would linger in this position long enough to recite it, and the sitting should not be hurried.",
  },
]
