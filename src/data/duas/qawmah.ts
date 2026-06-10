import type { TDuaVariation } from './types'

import placeholderAudio from '#/assets/audio/subhanaka.m4a'

export const qawmahDuas: TDuaVariation[] = [
    // ─── Dua 14 ──────────────────────────────────────────────────────────────
    {
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
    },

    // ─── Dua 15 ──────────────────────────────────────────────────────────────
    {
        id: 'qawmah-2',
        positionId: 'qawmah',
        variationIndex: 2,
        label: "Sami'allahu liman hamidah (Filling heavens)",
        arabic: 'سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ، اللَّهُمَّ رَبَّنَا لَكَ الْحَمْدُ مِلْءَ السَّمَوَاتِ وَمِلْءَ الْأَرْضِ وَمِلْءَ مَا شِئْتَ مِنْ شَيْءٍ بَعْدُ',
        languages: {
            en: {
                transliteration:
                    "Sami'allāhu liman ḥamidah, Allāhumma Rabbanā lakal-ḥamdu mil'as-samāwāti wa mil'al-arḍi wa mil'a mā shi'ta min shay'in ba'd",
                translation:
                    'Allah hears the one who praises Him. O Allah, our Lord, to You is all praise that fills the heavens, fills the earth, and fills whatever else You will.',
            },
            ar: {
                transliteration:
                    'سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ، اللَّهُمَّ رَبَّنَا لَكَ الْحَمْدُ مِلْءَ السَّمَوَاتِ وَمِلْءَ الْأَرْضِ وَمِلْءَ مَا شِئْتَ مِنْ شَيْءٍ بَعْدُ',
                translation:
                    'سمع الله لمن حمده، اللهم ربنا لك الحمد ملء السماوات وملء الأرض وملء ما شئت من شيء بعد.',
            },
            fr: {
                transliteration:
                    "Sami'allāhu liman ḥamidah, Allāhumma Rabbanā lakal-ḥamdu mil'as-samāwāti wa mil'al-arḍi wa mil'a mā shi'ta min shay'in ba'd",
                translation:
                    'Allah entend celui qui Le loue. O Allah notre Seigneur, à Toi est toute louange qui remplit les cieux, remplit la terre, et remplit tout ce que Tu veux en plus.',
            },
            ur: {
                transliteration:
                    'سَمِعَ اللّٰہُ لِمَن حَمِدَہ، اَللّٰہُمَّ رَبَّنَا لَکَ الحَمدُ مِلءَ السَّمٰوَاتِ وَمِلءَ الاَرضِ وَمِلءَ مَا شِئتَ مِن شَیءٍ بَعد',
                translation:
                    'اللہ نے اس کی سنی جس نے اس کی تعریف کی۔ اے اللہ! اے ہمارے رب! تیرے لیے تعریف ہے جو آسمانوں کو بھر دے، زمین کو بھر دے اور اس کے بعد جو تو چاہے اسے بھی بھر دے۔',
            },
            tr: {
                transliteration:
                    "Sami'allāhu liman ḥamidah, Allāhumma Rabbanā lakal-ḥamdu mil'as-samāwāti wa mil'al-arḍi wa mil'a mā shi'ta min shay'in ba'd",
                translation:
                    "Allah, O'nu öveni duyar. Allah'ım Rabbimiz, hamd Senindir — gökleri, yeri ve dilediğin her şeyi dolduracak kadar.",
            },
            ms: {
                transliteration:
                    "Sami'allāhu liman ḥamidah, Allāhumma Rabbanā lakal-ḥamdu mil'as-samāwāti wa mil'al-arḍi wa mil'a mā shi'ta min shay'in ba'd",
                translation:
                    'Allah mendengar orang yang memuji-Nya. Ya Allah Tuhan kami, bagi-Mu segala puji, yang memenuhi langit, memenuhi bumi dan memenuhi apa sahaja yang Engkau kehendaki.',
            },
            bn: {
                transliteration:
                    'সামিআল্লাহু লিমান হামিদাহ, আল্লাহুম্মা রাব্বানা লাকাল হামদু মিলআস সামাওয়াতি ওয়া মিলআল আরদি ওয়া মিলআ মা শিইতা মিন শাইয়িন বাদ',
                translation:
                    'আল্লাহ তাঁর প্রশংসাকারীর কথা শোনেন। হে আল্লাহ, হে আমাদের রব! তোমার জন্য সকল প্রশংসা যা আকাশ পূর্ণ করে, পৃথিবী পূর্ণ করে এবং তুমি যা চাও তা পূর্ণ করে।',
            },
        },
        references: [
            {
                type: 'hadith',
                source: 'Sahih Muslim',
                number: '476',
                grade: 'Sahih',
                narrator: "Abu Sa'id al-Khudri",
                url: 'https://sunnah.com/muslim:476',
            },
        ],
        notes: 'This extended version uses the metaphor of praise so vast it could fill the heavens and earth. It is recommended to add it after the basic response, especially in voluntary prayers.',
        whenToRecite:
            "Recited while standing upright after fully rising from Ruku in every rak'ah. This extended version is recommended in voluntary prayers (Tahajjud, Witr, Sunnah prayers) where more time is available. In congregational prayers, follow the imam's pace.",
        audioUrl: placeholderAudio,
    },

    // ─── Dua 16 ──────────────────────────────────────────────────────────────
    {
        id: 'qawmah-3',
        positionId: 'qawmah',
        variationIndex: 3,
        label: 'Rabbana lakal hamd (Extended — Most Worthy of Praise)',
        arabic: 'رَبَّنَا لَكَ الْحَمْدُ مِلْءَ السَّمَوَاتِ وَالْأَرْضِ وَمِلْءَ مَا شِئْتَ مِنْ شَيْءٍ بَعْدُ، أَهْلَ الثَّنَاءِ وَالْمَجْدِ، أَحَقُّ مَا قَالَ الْعَبْدُ، وَكُلُّنَا لَكَ عَبْدٌ، اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ، وَلَا مُعْطِيَ لِمَا مَنَعْتَ، وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ',
        languages: {
            en: {
                transliteration:
                    "Rabbanā lakal-ḥamdu mil'as-samāwāti wal-arḍi wa mil'a mā shi'ta min shay'in ba'd, ahlath-thanā'i wal-majd, aḥaqqu mā qālal-'abd, wa kullunā laka 'abd. Allāhumma lā māni'a limā a'ṭayt, wa lā mu'ṭiya limā mana't, wa lā yanfa'u dhal-jaddi minkal-jadd",
                translation:
                    "Our Lord, to You is all praise that fills the heavens, fills the earth, and fills whatever else You will. You are the Most Worthy of praise and glory — the most deserving of what a servant can say. We are all Your servants. O Allah, none can withhold what You give, none can give what You withhold, and no person's wealth or status can benefit them against You.",
            },
            ar: {
                transliteration:
                    'رَبَّنَا لَكَ الْحَمْدُ مِلْءَ السَّمَوَاتِ وَالْأَرْضِ وَمِلْءَ مَا شِئْتَ مِنْ شَيْءٍ بَعْدُ، أَهْلَ الثَّنَاءِ وَالْمَجْدِ، أَحَقُّ مَا قَالَ الْعَبْدُ، وَكُلُّنَا لَكَ عَبْدٌ، اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ، وَلَا مُعْطِيَ لِمَا مَنَعْتَ، وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ',
                translation:
                    'ربنا لك الحمد ملء السماوات والأرض وملء ما شئت من شيء بعد، أهل الثناء والمجد، أحق ما قال العبد، وكلنا لك عبد...',
            },
            fr: {
                transliteration:
                    "Rabbanā lakal-ḥamdu mil'as-samāwāti wal-arḍi wa mil'a mā shi'ta min shay'in ba'd, ahlath-thanā'i wal-majd, aḥaqqu mā qālal-'abd, wa kullunā laka 'abd. Allāhumma lā māni'a limā a'ṭayt, wa lā mu'ṭiya limā mana't, wa lā yanfa'u dhal-jaddi minkal-jadd",
                translation:
                    'Notre Seigneur, à Toi est toute la louange qui remplit les cieux et la terre... Ô Allah, nul ne peut retenir ce que Tu donnes, et nul ne peut donner ce que Tu retiens.',
            },
            ur: {
                transliteration:
                    'رَبَّنَا لَکَ الحَمدُ مِلءَ السَّمٰوَاتِ وَالاَرضِ وَمِلءَ مَا شِئتَ مِن شَیءٍ بَعد، اَہلَ الثَّنَاءِ وَالمَجد، اَحَقُّ مَا قَالَ العَبد، وَکُلُّنَا لَکَ عَبد۔ اَللّٰہُمَّ لَا مَانِعَ لِمَا اَعطَیت، وَلَا مُعطِیَ لِمَا مَنَعت، وَلَا یَنفَعُ ذَا الجَدِّ مِنکَ الجَد',
                translation:
                    'اے ہمارے رب! تیرے لیے ہر قسم کی تعریف ہے جو آسمانوں اور زمین کو بھر دے... اے اللہ! جو تو دے اسے کوئی روکنے والا نہیں اور جو تو روک لے اسے کوئی دینے والا نہیں۔',
            },
            tr: {
                transliteration:
                    "Rabbanā lakal-ḥamdu mil'as-samāwāti wal-arḍi wa mil'a mā shi'ta min shay'in ba'd, ahlath-thanā'i wal-majd, aḥaqqu mā qālal-'abd, wa kullunā laka 'abd. Allāhumma lā māni'a limā a'ṭayt, wa lā mu'ṭiya limā mana't, wa lā yanfa'u dhal-jaddi minkal-jadd",
                translation:
                    "Rabbimiz, hamd Senindir — gökleri, yeri ve dilediğin şeyleri dolduracak kadar... Allah'ım, verdiğini hiç kimse engelleyemez, engellediğini de hiç kimse veremez.",
            },
            ms: {
                transliteration:
                    "Rabbanā lakal-ḥamdu mil'as-samāwāti wal-arḍi wa mil'a mā shi'ta min shay'in ba'd, ahlath-thanā'i wal-majd, aḥaqqu mā qālal-'abd, wa kullunā laka 'abd. Allāhumma lā māni'a limā a'ṭayt, wa lā mu'ṭiya limā mana't, wa lā yanfa'u dhal-jaddi minkal-jadd",
                translation:
                    'Tuhan kami, bagi-Mu segala puji yang memenuhi langit dan bumi... Ya Allah, tiada yang dapat menahan apa yang Engkau berikan, dan tiada yang dapat memberi apa yang Engkau tahan.',
            },
            bn: {
                transliteration:
                    'রাব্বানা লাকাল হামদু মিলআস সামাওয়াতি ওয়াল আরদি ওয়া মিলআ মা শিইতা মিন শাইয়িন বাদ, আহলাস সানাই ওয়াল মাজদ, আহাক্কু মা কালাল আবদ, ওয়া কুল্লুনা লাকা আবদ। আল্লাহুম্মা লা মানিআ লিমা আতাইত, ওয়া লা মুতিয়া লিমা মানাত, ওয়া লা ইয়ানফাউ যাল জাদ্দি মিনকাল জাদ্দ',
                translation:
                    'হে আমাদের রব! তোমার জন্য সকল প্রশংসা যা আকাশ ও পৃথিবী পূর্ণ করে... হে আল্লাহ! তুমি যা দাও তা কেউ আটকাতে পারে না, আর তুমি যা আটকে রাখো তা কেউ দিতে পারে না।',
            },
        },
        references: [
            {
                type: 'hadith',
                source: 'Sahih Muslim',
                number: '477',
                grade: 'Sahih',
                narrator: 'Ibn Abbas',
                url: 'https://sunnah.com/muslim:477',
            },
        ],
        notes: 'One of the longest and most comprehensive qawmah duas. It is particularly recommended in voluntary night prayers. The closing phrases affirm complete dependence on Allah — no wealth, status or power can substitute for His favour.',
        whenToRecite:
            'Recited while standing fully upright in the Qawmah position, especially in Tahajjud and other voluntary night prayers. Because of its length, it is not typically used in obligatory prayers behind an imam. The worshipper should remain still until it is complete.',
        audioUrl: placeholderAudio,
    },

    // ─── Dua 17 ──────────────────────────────────────────────────────────────
    {
        id: 'qawmah-4',
        positionId: 'qawmah',
        variationIndex: 4,
        label: 'Allahumma lakal hamd (with Purification)',
        arabic: 'اللَّهُمَّ لَكَ الْحَمْدُ مِلْءَ السَّمَاءِ وَمِلْءَ الْأَرْضِ وَمِلْءَ مَا شِئْتَ مِنْ شَيْءٍ بَعْدُ، اللَّهُمَّ طَهِّرْنِي بِالثَّلْجِ وَالْبَرَدِ وَالْمَاءِ الْبَارِدِ، اللَّهُمَّ طَهِّرْنِي مِنَ الذُّنُوبِ وَالْخَطَايَا كَمَا يُنَقَّى الثَّوْبُ الْأَبْيَضُ مِنَ الدَّنَسِ',
        languages: {
            en: {
                transliteration:
                    "Allāhumma lakal-ḥamdu mil'as-samā'i wa mil'al-arḍi wa mil'a mā shi'ta min shay'in ba'd, Allāhumma ṭahhirnī bith-thalji wal-baradi wal-mā'il-bārid, Allāhumma ṭahhirnī minadh-dhunūbi wal-khaṭāyā kamā yunaqqath-thawbul-abyaḍu minad-danas",
                translation:
                    'O Allah, to You is all praise that fills the heavens, fills the earth, and fills whatever else You will. O Allah, purify me with snow, hail and cold water. O Allah, cleanse me of sins and mistakes as a white garment is cleansed of filth.',
            },
            ar: {
                transliteration:
                    'اللَّهُمَّ لَكَ الْحَمْدُ مِلْءَ السَّمَاءِ وَمِلْءَ الْأَرْضِ وَمِلْءَ مَا شِئْتَ مِنْ شَيْءٍ بَعْدُ، اللَّهُمَّ طَهِّرْنِي بِالثَّلْجِ وَالْبَرَدِ وَالْمَاءِ الْبَارِدِ، اللَّهُمَّ طَهِّرْنِي مِنَ الذُّنُوبِ وَالْخَطَايَا كَمَا يُنَقَّى الثَّوْبُ الْأَبْيَضُ مِنَ الدَّنَسِ',
                translation:
                    'اللهم لك الحمد ملء السماء وملء الأرض... اللهم طهرني بالثلج والبرد والماء البارد...',
            },
            fr: {
                transliteration:
                    "Allāhumma lakal-ḥamdu mil'as-samā'i wa mil'al-arḍi wa mil'a mā shi'ta min shay'in ba'd, Allāhumma ṭahhirnī bith-thalji wal-baradi wal-mā'il-bārid, Allāhumma ṭahhirnī minadh-dhunūbi wal-khaṭāyā kamā yunaqqath-thawbul-abyaḍu minad-danas",
                translation:
                    "O Allah, à Toi est toute louange... O Allah, purifie-moi avec la neige, la grêle et l'eau froide... O Allah, nettoie-moi de mes péchés comme un vêtement blanc est nettoyé de la saleté.",
            },
            ur: {
                transliteration:
                    'اَللّٰہُمَّ لَکَ الحَمدُ مِلءَ السَّمَاءِ وَمِلءَ الاَرضِ وَمِلءَ مَا شِئتَ مِن شَیءٍ بَعد، اَللّٰہُمَّ طَہِّرنِی بِالثَّلجِ وَالبَرَدِ وَالمَاءِ البَارِد، اَللّٰہُمَّ طَہِّرنِی مِنَ الذُّنُوبِ وَالخَطَایَا کَمَا یُنَقَّی الثَّوبُ الاَبیَضُ مِنَ الدَّنَس',
                translation:
                    'اے اللہ! تیرے لیے تعریف ہے... اے اللہ! مجھے برف، اولے اور ٹھنڈے پانی سے پاک فرما... اے اللہ! مجھے گناہوں سے ایسے صاف فرما جیسے سفید کپڑا میل سے صاف ہوتا ہے۔',
            },
            tr: {
                transliteration:
                    "Allāhumma lakal-ḥamdu mil'as-samā'i wa mil'al-arḍi wa mil'a mā shi'ta min shay'in ba'd, Allāhumma ṭahhirnī bith-thalji wal-baradi wal-mā'il-bārid, Allāhumma ṭahhirnī minadh-dhunūbi wal-khaṭāyā kamā yunaqqath-thawbul-abyaḍu minad-danas",
                translation:
                    "Allah'ım, hamd Senindir... Allah'ım, beni kar, dolu ve soğuk suyla temizle... Allah'ım, beni günahlardan, beyaz elbise kirden temizlendiği gibi temizle.",
            },
            ms: {
                transliteration:
                    "Allāhumma lakal-ḥamdu mil'as-samā'i wa mil'al-arḍi wa mil'a mā shi'ta min shay'in ba'd, Allāhumma ṭahhirnī bith-thalji wal-baradi wal-mā'il-bārid, Allāhumma ṭahhirnī minadh-dhunūbi wal-khaṭāyā kamā yunaqqath-thawbul-abyaḍu minad-danas",
                translation:
                    'Ya Allah, bagi-Mu segala puji... Ya Allah, sucikanlah aku dengan salji, embun beku dan air sejuk... Ya Allah, bersihkanlah aku daripada dosa sebagaimana kain putih dibersihkan daripada kotoran.',
            },
            bn: {
                transliteration:
                    'আল্লাহুম্মা লাকাল হামদু মিলআস সামাই ওয়া মিলআল আরদি ওয়া মিলআ মা শিইতা মিন শাইয়িন বাদ, আল্লাহুম্মা তাহহিরনী বিস সালজি ওয়াল বারাদি ওয়াল মাইল বারিদ, আল্লাহুম্মা তাহহিরনী মিনায যুনূবি ওয়াল খাতায়া কামা ইউনাক্কাস সাওবুল আবইয়াদু মিনাদ দানাস',
                translation:
                    'হে আল্লাহ! তোমার জন্য সকল প্রশংসা... হে আল্লাহ! আমাকে তুষার, শিলা ও শীতল পানি দিয়ে পবিত্র করো... হে আল্লাহ! আমাকে পাপ থেকে এমনভাবে পরিষ্কার করো যেমন সাদা কাপড় ময়লা থেকে পরিষ্কার হয়।',
            },
        },
        references: [
            {
                type: 'hadith',
                source: 'Sahih Muslim',
                number: '476',
                grade: 'Sahih',
                narrator: "Abu Sa'id al-Khudri",
                url: 'https://sunnah.com/muslim:476',
            },
        ],
        notes: 'This combines praise with a beautiful supplication for purification from sins. The imagery of snow, hail and cold water cleaning a white garment vividly conveys the complete removal of spiritual impurity.',
        whenToRecite:
            'Recited while standing upright after rising from Ruku, particularly in voluntary prayers where lingering is appropriate. Follows the opening tahmid and adds a request for purification. Best used in solitary voluntary prayers.',
        audioUrl: placeholderAudio,
    },
]
