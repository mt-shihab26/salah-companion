import type { TSalahDua } from '#/types/salah-duas'

import placeholderAudio from '#/assets/audio/subhanaka.m4a'

export const istiftah1: TSalahDua = {
    id: 'istiftah-1',
    positionId: 'opening',
    variationIndex: 2,
    label: 'Dua Istiftah — Version 1',
    arabic: 'اللَّهُ أَكْبَرُ كَبِيرًا، وَالْحَمْدُ لِلَّهِ كَثِيرًا، وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلًا',
    languages: {
        en: {
            transliteration:
                'Allāhu akbaru kabīrā, wal-ḥamdu lillāhi kathīrā, wa subḥānallāhi bukratan wa aṣīlā',
            translation:
                'Allah is truly the Greatest; much praise be to Allah; and glory be to Allah in the morning and the evening.',
        },
        ar: {
            transliteration:
                'اللَّهُ أَكْبَرُ كَبِيرًا، وَالْحَمْدُ لِلَّهِ كَثِيرًا، وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلًا',
            translation: 'الله أكبر كبيراً، والحمد لله كثيراً، وسبحان الله بكرةً وأصيلاً.',
        },
        fr: {
            transliteration:
                'Allāhu akbaru kabīrā, wal-ḥamdu lillāhi kathīrā, wa subḥānallāhi bukratan wa aṣīlā',
            translation:
                'Allah est vraiment le Plus Grand ; louange abondante à Allah ; et gloire à Allah le matin et le soir.',
        },
        ur: {
            transliteration:
                'اَللّٰہُ اَکبَرُ کَبِیرًا، وَالحَمدُ لِلّٰہِ کَثِیرًا، وَسُبحَانَ اللّٰہِ بُکرَۃً وَاَصِیلًا',
            translation:
                'اللہ بے حد بڑا ہے، اللہ کے لیے بہت زیادہ تعریف ہے، اور اللہ کی صبح و شام پاکیزگی بیان ہو۔',
        },
        tr: {
            transliteration:
                'Allāhu akbaru kabīrā, wal-ḥamdu lillāhi kathīrā, wa subḥānallāhi bukratan wa aṣīlā',
            translation:
                "Allah gerçekten en büyüktür; Allah'a bol hamd olsun; sabah akşam Allah'ı tesbih ederim.",
        },
        ms: {
            transliteration:
                'Allāhu akbaru kabīrā, wal-ḥamdu lillāhi kathīrā, wa subḥānallāhi bukratan wa aṣīlā',
            translation:
                'Allah Maha Besar dengan sebesar-besarnya; segala puji bagi Allah dengan sebanyak-banyaknya; dan Maha Suci Allah pada waktu pagi dan petang.',
        },
        bn: {
            transliteration:
                'আল্লাহু আকবারু কাবীরা, ওয়ালহামদু লিল্লাহি কাসীরা, ওয়া সুবহানাল্লাহি বুকরাতান ওয়া আসীলা',
            translation:
                'আল্লাহ সত্যিই সর্বমহান; আল্লাহর জন্য প্রচুর প্রশংসা; এবং সকাল ও সন্ধ্যায় আল্লাহর পবিত্রতা বর্ণনা করি।',
        },
        id: {
            transliteration:
                'Allāhu akbaru kabīrā, wal-ḥamdu lillāhi kathīrā, wa subḥānallāhi bukratan wa aṣīlā',
            translation:
                'Allah Maha Besar dengan sebesar-besarnya; segala puji bagi Allah dengan sebanyak-banyaknya; dan Maha Suci Allah di waktu pagi dan petang.',
        },
        sw: {
            transliteration:
                'Allāhu akbaru kabīrā, wal-ḥamdu lillāhi kathīrā, wa subḥānallāhi bukratan wa aṣīlā',
            translation:
                'Mwenyezi Mungu ni Mkubwa zaidi; sifa nyingi ni za Mwenyezi Mungu; na Utukufu wa Mwenyezi Mungu asubuhi na jioni.',
        },
        ha: {
            transliteration:
                'Allāhu akbaru kabīrā, wal-ḥamdu lillāhi kathīrā, wa subḥānallāhi bukratan wa aṣīlā',
            translation:
                'Allah shi ne Mafi girma sosai; yabo mai yawa ya tabbata ga Allah; kuma tsarki ya tabbata ga Allah da safe da maraice.',
        },
        de: {
            transliteration:
                'Allāhu akbaru kabīrā, wal-ḥamdu lillāhi kathīrā, wa subḥānallāhi bukratan wa aṣīlā',
            translation:
                'Allah ist wahrhaftig der Größte; viel Lob sei Allah; und Preis sei Allah am Morgen und am Abend.',
        },
        hi: {
            transliteration:
                'अल्लाहु अकबरु कबीरा, वलहम्दु लिल्लाहि कसीरा, व सुब्हानल्लाहि बुकरतन व असीला',
            translation:
                'अल्लाह वास्तव में सबसे महान है; अल्लाह के लिए अत्यधिक प्रशंसा हो; और सुबह तथा शाम अल्लाह की महिमा हो।',
        },
    },
    references: [
        {
            type: 'hadith',
            source: 'Sahih Muslim',
            number: '601',
            grade: 'Sahih',
            narrator: 'Ibn Umar',
            url: 'https://sunnah.com/muslim:601',
        },
    ],
    notes: "This istiftah was praised by the Prophet ﷺ when he heard a companion recite it before prayer. Ibn Umar (رضي الله عنه) narrated that the Prophet ﷺ said: 'I saw twelve angels competing to be the first to carry it up.'",
    whenToRecite:
        "Recited silently in the first rak'ah only, immediately after the opening Takbeer and before seeking refuge (Ta'awwudh). Choose one istiftah per prayer session. Omitted when joining a prayer already in progress (masbooq).",
    audioUrl: placeholderAudio,
}
