import type { DuaVariation } from './types'

export const openingDuas: DuaVariation[] = [
    // ─── Dua 1 ───────────────────────────────────────────────────────────────
    {
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
            ar: {
                transliteration: 'ٱللَّهُ أَكْبَرُ',
                translation: 'الله أكبر.',
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
    },

    // ─── Dua 2 ───────────────────────────────────────────────────────────────
    {
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
    },

    // ─── Dua 3 ───────────────────────────────────────────────────────────────
    {
        id: 'istiftah-2',
        positionId: 'opening',
        variationIndex: 3,
        label: 'Dua Istiftah — Version 2 (Removal of sins)',
        arabic: 'اللَّهُمَّ بَاعِدْ بَيْنِي وَبَيْنَ خَطَايَايَ كَمَا بَاعَدْتَ بَيْنَ الْمَشْرِقِ وَالْمَغْرِبِ، اللَّهُمَّ نَقِّنِي مِنَ الْخَطَايَا كَمَا يُنَقَّى الثَّوْبُ الْأَبْيَضُ مِنَ الدَّنَسِ، اللَّهُمَّ اغْسِلْ خَطَايَايَ بِالْمَاءِ وَالثَّلْجِ وَالْبَرَدِ',
        languages: {
            en: {
                transliteration:
                    "Allāhumma bā'id baynī wa bayna khaṭāyāya kamā bā'adta baynal-mashriqi wal-maghrib, Allāhumma naqqinī minal-khaṭāyā kamā yunaqqath-thawbul-abyaḍu minad-danas, Allāhummaghsil khaṭāyāya bil-māʾi wath-thalji wal-barad",
                translation:
                    'O Allah, put a great distance between me and my sins, as great as the distance You have made between the East and the West. O Allah, cleanse me of sin as a white garment is cleansed of filth. O Allah, wash away my sins with water, snow and hail.',
            },
            ar: {
                transliteration:
                    'اللَّهُمَّ بَاعِدْ بَيْنِي وَبَيْنَ خَطَايَايَ كَمَا بَاعَدْتَ بَيْنَ الْمَشْرِقِ وَالْمَغْرِبِ، اللَّهُمَّ نَقِّنِي مِنَ الْخَطَايَا كَمَا يُنَقَّى الثَّوْبُ الْأَبْيَضُ مِنَ الدَّنَسِ، اللَّهُمَّ اغْسِلْ خَطَايَايَ بِالْمَاءِ وَالثَّلْجِ وَالْبَرَدِ',
                translation:
                    'اللهم باعد بيني وبين خطاياي كما باعدت بين المشرق والمغرب، اللهم نقِّني من الخطايا كما ينقى الثوب الأبيض من الدنس، اللهم اغسل خطاياي بالماء والثلج والبرد.',
            },
            fr: {
                transliteration:
                    "Allāhumma bā'id baynī wa bayna khaṭāyāya kamā bā'adta baynal-mashriqi wal-maghrib, Allāhumma naqqinī minal-khaṭāyā kamā yunaqqath-thawbul-abyaḍu minad-danas, Allāhummaghsil khaṭāyāya bil-māʾi wath-thalji wal-barad",
                translation:
                    "O Allah, éloigne-moi de mes péchés comme Tu as éloigné l'Est de l'Ouest. O Allah, purifie-moi de mes péchés comme un vêtement blanc est purifié de la saleté. O Allah, lave mes péchés avec de l'eau, de la neige et de la grêle.",
            },
            ur: {
                transliteration:
                    'اَللّٰہُمَّ بَاعِد بَینِی وَبَینَ خَطَایَایَ کَمَا بَاعَدتَ بَینَ المَشرِقِ وَالمَغرِب، اَللّٰہُمَّ نَقِّنِی مِنَ الخَطَایَا کَمَا یُنَقَّی الثَّوبُ الاَبیَضُ مِنَ الدَّنَس، اَللّٰہُمَّ اغسِل خَطَایَایَ بِالمَاءِ وَالثَّلجِ وَالبَرَد',
                translation:
                    'اے اللہ! میرے اور میرے گناہوں کے درمیان اتنا فاصلہ کر دے جتنا تو نے مشرق اور مغرب کے درمیان فاصلہ کیا ہے۔ اے اللہ! مجھے گناہوں سے اس طرح پاک فرما جیسے سفید کپڑا میل سے صاف ہوتا ہے۔ اے اللہ! میرے گناہوں کو پانی، برف اور اولے سے دھو دے۔',
            },
            tr: {
                transliteration:
                    "Allāhumma bā'id baynī wa bayna khaṭāyāya kamā bā'adta baynal-mashriqi wal-maghrib, Allāhumma naqqinī minal-khaṭāyā kamā yunaqqath-thawbul-abyaḍu minad-danas, Allāhummaghsil khaṭāyāya bil-māʾi wath-thalji wal-barad",
                translation:
                    "Allah'ım! Benimle günahlarım arasına, Doğu ile Batı'yı birbirinden ayırdığın gibi mesafe koy. Allah'ım! Beni günahlardan, beyaz elbise kirden temizlendiği gibi temizle. Allah'ım! Günahlarımı su, kar ve doluyla yıka.",
            },
            ms: {
                transliteration:
                    "Allāhumma bā'id baynī wa bayna khaṭāyāya kamā bā'adta baynal-mashriqi wal-maghrib, Allāhumma naqqinī minal-khaṭāyā kamā yunaqqath-thawbul-abyaḍu minad-danas, Allāhummaghsil khaṭāyāya bil-māʾi wath-thalji wal-barad",
                translation:
                    'Ya Allah, jauhkanlah antara aku dan kesalahanku seperti Engkau menjauhkan antara Timur dan Barat. Ya Allah, sucikanlah aku dari kesalahan seperti kain putih disucikan dari kotoran. Ya Allah, basuhkan kesalahanku dengan air, salji dan embun beku.',
            },
            bn: {
                transliteration:
                    'আল্লাহুম্মা বাইদ বাইনী ওয়া বাইনা খাতায়ায়া কামা বাআদতা বাইনাল মাশরিকি ওয়ালমাগরিব, আল্লাহুম্মা নাক্কিনী মিনাল খাতায়া কামা ইউনাক্কাস সাওবুল আবইয়াদু মিনাদ দানাস, আল্লাহুম্মাগসিল খাতায়ায়া বিলমাই ওয়াস সালজি ওয়াল বারাদ',
                translation:
                    'হে আল্লাহ! আমার এবং আমার পাপের মধ্যে এতটা দূরত্ব রাখো যতটা দূরত্ব তুমি পূর্ব ও পশ্চিমের মধ্যে রেখেছ। হে আল্লাহ! আমাকে পাপ থেকে এমনভাবে পরিষ্কার করো যেমন সাদা কাপড় ময়লা থেকে পরিষ্কার হয়। হে আল্লাহ! আমার পাপগুলো পানি, তুষার ও শিলা দিয়ে ধুয়ে দাও।',
            },
        },
        references: [
            {
                type: 'hadith',
                source: 'Sahih al-Bukhari',
                number: '744',
                grade: 'Sahih',
                narrator: 'Abu Hurayrah',
                url: 'https://sunnah.com/bukhari:744',
            },
            {
                type: 'hadith',
                source: 'Sahih Muslim',
                number: '598',
                grade: 'Sahih',
                narrator: 'Abu Hurayrah',
                url: 'https://sunnah.com/muslim:598',
            },
        ],
        notes: 'This supplication uses vivid imagery of distance and cleansing to describe the removal of sins. The mention of water, snow and hail emphasises thorough purification. Most commonly used in obligatory prayers.',
        whenToRecite:
            "Recited silently in the first rak'ah only, after the opening Takbeer and before Ta'awwudh. This is the most common istiftah in obligatory (fard) prayers. Do not combine multiple istiftah versions in a single prayer.",
    },

    // ─── Dua 4 ───────────────────────────────────────────────────────────────
    {
        id: 'istiftah-3',
        positionId: 'opening',
        variationIndex: 4,
        label: 'Dua Istiftah — Version 3 (Glorification)',
        arabic: 'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَى جَدُّكَ، وَلَا إِلَهَ غَيْرُكَ',
        languages: {
            en: {
                transliteration:
                    "Subḥānakallāhumma wa biḥamdik, wa tabārakasmuk, wa ta'ālā jadduk, wa lā ilāha ghayruk",
                translation:
                    'Glory be to You, O Allah, and praise. Blessed is Your name, and exalted is Your Majesty. There is no god worthy of worship except You.',
            },
            ar: {
                transliteration:
                    'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَى جَدُّكَ، وَلَا إِلَهَ غَيْرُكَ',
                translation: 'سبحانك اللهم وبحمدك، وتبارك اسمك، وتعالى جدك، ولا إله غيرك.',
            },
            fr: {
                transliteration:
                    "Subḥānakallāhumma wa biḥamdik, wa tabārakasmuk, wa ta'ālā jadduk, wa lā ilāha ghayruk",
                translation:
                    "Gloire à Toi, ô Allah, et louange. Béni soit Ton nom, et exalté est Ta Majesté. Il n'y a pas de dieu digne d'adoration excepté Toi.",
            },
            ur: {
                transliteration:
                    'سُبحَانَکَ اللّٰہُمَّ وَبِحَمدِک، وَتَبَارَکَ اسمُک، وَتَعَالٰی جَدُّک، وَلَا اِلٰہَ غَیرُک',
                translation:
                    'اے اللہ! تو پاک ہے اور ساتھ ہی تیری حمد ہے، تیرا نام بابرکت ہے، تیری شان بلند ہے اور تیرے سوا کوئی معبود نہیں۔',
            },
            tr: {
                transliteration:
                    "Subḥānakallāhumma wa biḥamdik, wa tabārakasmuk, wa ta'ālā jadduk, wa lā ilāha ghayruk",
                translation:
                    'Sübhansın ya Allah, hamd Senindir; mübarek Senin adın, yücedir Senin şanın; Senden başka ilah yoktur.',
            },
            ms: {
                transliteration:
                    "Subḥānakallāhumma wa biḥamdik, wa tabārakasmuk, wa ta'ālā jadduk, wa lā ilāha ghayruk",
                translation:
                    'Maha Suci Engkau ya Allah, dengan segala puji-pujian-Mu. Maha Berkat nama-Mu, Maha Tinggi kebesaran-Mu. Tiada tuhan yang berhak disembah melainkan Engkau.',
            },
            bn: {
                transliteration:
                    'সুবহানাকাল্লাহুম্মা ওয়াবিহামদিক, ওয়া তাবারাকাসমুক, ওয়া তাআলা জাদ্দুক, ওয়া লা ইলাহা গাইরুক',
                translation:
                    'হে আল্লাহ! তুমি পবিত্র এবং তোমার প্রশংসা। তোমার নাম বরকতময়, তোমার মহিমা সুউচ্চ। তুমি ছাড়া কোনো ইলাহ নেই।',
            },
        },
        references: [
            {
                type: 'hadith',
                source: 'Sunan Abu Dawud',
                number: '775',
                grade: 'Sahih',
                narrator: "Abu Sa'id al-Khudri",
                url: 'https://sunnah.com/abudawud:775',
            },
            {
                type: 'hadith',
                source: 'Sunan al-Tirmidhi',
                number: '243',
                grade: 'Hasan Sahih',
                narrator: "Abu Sa'id al-Khudri",
                url: 'https://sunnah.com/tirmidhi:243',
            },
        ],
        notes: "This is the most widely used istiftah among the Hanafi, Shafi'i and Hanbali schools. It opens with glorification (tasbih), praise (tahmid), blessings on Allah's name (tabarruk), and the declaration of His Majesty and Oneness.",
        whenToRecite:
            "Recited silently in the first rak'ah only, after the opening Takbeer and before Ta'awwudh. This is the preferred istiftah of the Hanafi, Shafi'i and Hanbali madhabs and is the most widely practised globally.",
    },

    // ─── Dua 5 ───────────────────────────────────────────────────────────────
    {
        id: 'istiftah-tahajjud',
        positionId: 'opening',
        variationIndex: 5,
        label: 'Dua Istiftah — Tahajjud (Night Prayer)',
        arabic: 'اللَّهُمَّ لَكَ الْحَمْدُ أَنْتَ نُورُ السَّمَوَاتِ وَالْأَرْضِ وَمَنْ فِيهِنَّ، وَلَكَ الْحَمْدُ أَنْتَ قَيِّمُ السَّمَوَاتِ وَالْأَرْضِ وَمَنْ فِيهِنَّ، وَلَكَ الْحَمْدُ أَنْتَ الْحَقُّ، وَوَعْدُكَ حَقٌّ، وَقَوْلُكَ حَقٌّ، وَلِقَاؤُكَ حَقٌّ، وَالْجَنَّةُ حَقٌّ، وَالنَّارُ حَقٌّ، وَالنَّبِيُّونَ حَقٌّ، وَمُحَمَّدٌ حَقٌّ، وَالسَّاعَةُ حَقٌّ، اللَّهُمَّ لَكَ أَسْلَمْتُ، وَبِكَ آمَنْتُ، وَعَلَيْكَ تَوَكَّلْتُ، وَإِلَيْكَ أَنَبْتُ، وَبِكَ خَاصَمْتُ، وَإِلَيْكَ حَاكَمْتُ، فَاغْفِرْ لِي مَا قَدَّمْتُ وَمَا أَخَّرْتُ، وَمَا أَسْرَرْتُ وَمَا أَعْلَنْتُ، أَنْتَ الْمُقَدِّمُ وَأَنْتَ الْمُؤَخِّرُ، لَا إِلَهَ إِلَّا أَنْتَ',
        languages: {
            en: {
                transliteration:
                    "Allāhumma lakal-ḥamdu anta nūrus-samāwāti wal-arḍi wa man fīhinn, wa lakal-ḥamdu anta qayyimus-samāwāti wal-arḍi wa man fīhinn, wa lakal-ḥamdu antal-ḥaqq, wa wa'duka ḥaqq, wa qawluka ḥaqq, wa liqā'uka ḥaqq, wal-jannatu ḥaqq, wan-nāru ḥaqq, wan-nabiyyūna ḥaqq, wa Muḥammadun ḥaqq, was-sā'atu ḥaqq. Allāhumma laka aslamtu, wa bika āmantu, wa 'alayka tawakkaltu, wa ilayka anabtu, wa bika khāṣamtu, wa ilayka ḥākamtu. Faghfir lī mā qaddamtu wa mā akhkhartu, wa mā asrartu wa mā a'lantu, antal-muqaddimu wa antal-mu'akhkhir, lā ilāha illā ant",
                translation:
                    'O Allah, all praise is for You. You are the Light of the heavens and the earth and whoever is in them. All praise is for You; You are the Sustainer of the heavens and the earth and whoever is in them. All praise is for You; You are the Truth, Your promise is true, Your word is true, Your meeting is true, Paradise is true, Hellfire is true, the Prophets are true, Muhammad ﷺ is true, and the Hour is true. O Allah, to You I have submitted, in You I believe, upon You I rely, to You I turn in repentance, for Your sake I dispute, and to You I resort for judgment. Forgive me for what I have done and left undone, for what I have hidden and what I have shown. You are the One Who brings forward and the One Who puts back. There is no god worthy of worship except You.',
            },
            ar: {
                transliteration:
                    'اللَّهُمَّ لَكَ الْحَمْدُ أَنْتَ نُورُ السَّمَوَاتِ وَالْأَرْضِ وَمَنْ فِيهِنَّ، وَلَكَ الْحَمْدُ أَنْتَ قَيِّمُ السَّمَوَاتِ وَالْأَرْضِ وَمَنْ فِيهِنَّ، وَلَكَ الْحَمْدُ أَنْتَ الْحَقُّ... لَا إِلَهَ إِلَّا أَنْتَ',
                translation: 'اللهم لك الحمد أنت نور السماوات والأرض ومن فيهن... لا إله إلا أنت.',
            },
            fr: {
                transliteration:
                    "Allāhumma lakal-ḥamdu anta nūrus-samāwāti wal-arḍi wa man fīhinn, wa lakal-ḥamdu anta qayyimus-samāwāti wal-arḍi wa man fīhinn, wa lakal-ḥamdu antal-ḥaqq, wa wa'duka ḥaqq, wa qawluka ḥaqq, wa liqā'uka ḥaqq, wal-jannatu ḥaqq, wan-nāru ḥaqq, wan-nabiyyūna ḥaqq, wa Muḥammadun ḥaqq, was-sā'atu ḥaqq. Allāhumma laka aslamtu, wa bika āmantu, wa 'alayka tawakkaltu, wa ilayka anabtu, wa bika khāṣamtu, wa ilayka ḥākamtu. Faghfir lī mā qaddamtu wa mā akhkhartu, wa mā asrartu wa mā a'lantu, antal-muqaddimu wa antal-mu'akhkhir, lā ilāha illā ant",
                translation:
                    "O Allah, toute louange T'appartient. Tu es la Lumière des cieux et de la terre et de ceux qui s'y trouvent. O Allah, à Toi je me suis soumis, en Toi je crois, en Toi je me fie. Il n'y a pas de dieu digne d'adoration excepté Toi.",
            },
            ur: {
                transliteration:
                    'اَللّٰہُمَّ لَکَ الحَمدُ اَنتَ نُورُ السَّمٰوَاتِ وَالاَرضِ وَمَن فِیہِنَّ، وَلَکَ الحَمدُ اَنتَ قَیِّمُ السَّمٰوَاتِ وَالاَرضِ وَمَن فِیہِنَّ، وَلَکَ الحَمدُ اَنتَ الحَقُّ... لَا اِلٰہَ اِلَّا اَنت',
                translation:
                    'اے اللہ! تمام تعریف تیرے لیے ہے، تو آسمانوں اور زمین اور ان میں موجود تمام مخلوق کا نور ہے... تیرے سوا کوئی معبود نہیں۔',
            },
            tr: {
                transliteration:
                    "Allāhumma lakal-ḥamdu anta nūrus-samāwāti wal-arḍi wa man fīhinn, wa lakal-ḥamdu anta qayyimus-samāwāti wal-arḍi wa man fīhinn, wa lakal-ḥamdu antal-ḥaqq, wa wa'duka ḥaqq, wa qawluka ḥaqq, wa liqā'uka ḥaqq, wal-jannatu ḥaqq, wan-nāru ḥaqq, wan-nabiyyūna ḥaqq, wa Muḥammadun ḥaqq, was-sā'atu ḥaqq. Allāhumma laka aslamtu, wa bika āmantu, wa 'alayka tawakkaltu, wa ilayka anabtu, wa bika khāṣamtu, wa ilayka ḥākamtu. Faghfir lī mā qaddamtu wa mā akhkhartu, wa mā asrartu wa mā a'lantu, antal-muqaddimu wa antal-mu'akhkhir, lā ilāha illā ant",
                translation:
                    "Allah'ım! Hamd Senindir. Sen göklerin, yerin ve onlarda bulunanların nurusun... Senden başka ilah yoktur.",
            },
            ms: {
                transliteration:
                    "Allāhumma lakal-ḥamdu anta nūrus-samāwāti wal-arḍi wa man fīhinn, wa lakal-ḥamdu anta qayyimus-samāwāti wal-arḍi wa man fīhinn, wa lakal-ḥamdu antal-ḥaqq, wa wa'duka ḥaqq, wa qawluka ḥaqq, wa liqā'uka ḥaqq, wal-jannatu ḥaqq, wan-nāru ḥaqq, wan-nabiyyūna ḥaqq, wa Muḥammadun ḥaqq, was-sā'atu ḥaqq. Allāhumma laka aslamtu, wa bika āmantu, wa 'alayka tawakkaltu, wa ilayka anabtu, wa bika khāṣamtu, wa ilayka ḥākamtu. Faghfir lī mā qaddamtu wa mā akhkhartu, wa mā asrartu wa mā a'lantu, antal-muqaddimu wa antal-mu'akhkhir, lā ilāha illā ant",
                translation:
                    'Ya Allah, segala puji bagi-Mu. Engkaulah cahaya langit dan bumi dan sesiapa yang ada padanya... Tiada tuhan yang berhak disembah melainkan Engkau.',
            },
            bn: {
                transliteration:
                    'আল্লাহুম্মা লাকাল হামদু আনতা নূরুস সামাওয়াতি ওয়াল আরদি ওয়া মান ফীহিন্ন, ওয়া লাকাল হামদু আনতা কাইয়িমুস সামাওয়াতি ওয়াল আরদি ওয়া মান ফীহিন্ন, ওয়া লাকাল হামদু আনতাল হাক্ক... লা ইলাহা ইল্লা আনত',
                translation:
                    'হে আল্লাহ! সকল প্রশংসা তোমার। তুমি আকাশমণ্ডলী, পৃথিবী এবং তাদের মধ্যে যা কিছু আছে সবকিছুর আলো... তুমি ছাড়া কোনো ইলাহ নেই।',
            },
        },
        references: [
            {
                type: 'hadith',
                source: 'Sahih al-Bukhari',
                number: '1120',
                grade: 'Sahih',
                narrator: 'Ibn Abbas',
                url: 'https://sunnah.com/bukhari:1120',
            },
            {
                type: 'hadith',
                source: 'Sahih Muslim',
                number: '769',
                grade: 'Sahih',
                narrator: 'Ibn Abbas',
                url: 'https://sunnah.com/muslim:769',
            },
        ],
        notes: "This is the dua the Prophet ﷺ used to begin Tahajjud (night prayer) with. Ibn Abbas narrated that he heard it when he stayed the night at his aunt Maymunah's house and observed the Prophet ﷺ pray. It is longer and more comprehensive than the regular istiftah duas, befitting the special nature of the night prayer.",
        whenToRecite:
            "Recited silently at the very start of Tahajjud (night voluntary prayer), after the opening Takbeer of the first rak'ah. Because of its length, it is ideal for unhurried night prayers. It may also be used in Witr and other optional night prayers.",
    },
]
