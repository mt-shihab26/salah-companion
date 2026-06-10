import type { TDuaVariation } from './types'

export const rukuDuas: TDuaVariation[] = [
    // ─── Dua 7 ───────────────────────────────────────────────────────────────
    {
        id: 'ruku-1',
        positionId: 'ruku',
        variationIndex: 1,
        label: 'Subhana Rabbi al-Azim',
        arabic: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ',
        languages: {
            en: {
                transliteration: "Subḥāna Rabbiy al-'Aẓīm",
                translation: 'Glory be to my Lord, the Most Great.',
            },
            ar: {
                transliteration: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ',
                translation: 'سبحان ربي العظيم.',
            },
            fr: {
                transliteration: "Subḥāna Rabbiy al-'Aẓīm",
                translation: 'Gloire à mon Seigneur, le Plus Grand.',
            },
            ur: {
                transliteration: 'سُبحَانَ رَبِّیَ العَظِیم',
                translation: 'پاک ہے میرا رب، سب سے بڑا۔',
            },
            tr: {
                transliteration: "Subḥāna Rabbiy al-'Aẓīm",
                translation: 'Büyük Rabbimi tesbih ederim.',
            },
            ms: {
                transliteration: "Subḥāna Rabbiy al-'Aẓīm",
                translation: 'Maha Suci Tuhanku Yang Maha Agung.',
            },
            bn: {
                transliteration: 'সুবহানা রাব্বিয়াল আযীম',
                translation: 'আমার রব সর্বমহান, তাঁর পবিত্রতা বর্ণনা করি।',
            },
        },
        references: [
            {
                type: 'hadith',
                source: 'Sunan Abu Dawud',
                number: '869',
                grade: 'Sahih',
                narrator: 'Uqbah ibn Amir',
                url: 'https://sunnah.com/abudawud:869',
            },
            {
                type: 'hadith',
                source: 'Sunan Ibn Majah',
                number: '888',
                grade: 'Sahih',
                narrator: 'Hudhayfah',
                url: 'https://sunnah.com/ibnmajah:888',
            },
        ],
        notes: "The most widely agreed-upon dhikr for ruku. The minimum is three repetitions, and more is recommended. It corresponds to the verse 'So glorify the name of your Lord, the Most Great' (Al-Waqi'ah 56:96 / Al-Haqqah 69:52).",
        whenToRecite:
            "Recited quietly in every rak'ah during Ruku (bowing), with hands gripping the knees and back flat. Minimum three repetitions; seven or more are recommended in voluntary prayers. Said while completely still — movement before finishing is discouraged.",
    },

    // ─── Dua 8 ───────────────────────────────────────────────────────────────
    {
        id: 'ruku-2',
        positionId: 'ruku',
        variationIndex: 2,
        label: 'Subbuhun Quddus (Ruku)',
        arabic: 'سُبُّوحٌ قُدُّوسٌ رَبُّ الْمَلَائِكَةِ وَالرُّوحِ',
        languages: {
            en: {
                transliteration: "Subbūḥun Quddūs, Rabbul-malā'ikati war-rūḥ",
                translation:
                    'Most Glorified, Most Holy, Lord of the angels and the Spirit (Jibreel).',
            },
            ar: {
                transliteration: 'سُبُّوحٌ قُدُّوسٌ رَبُّ الْمَلَائِكَةِ وَالرُّوحِ',
                translation: 'سبوح قدوس رب الملائكة والروح.',
            },
            fr: {
                transliteration: "Subbūḥun Quddūs, Rabbul-malā'ikati war-rūḥ",
                translation:
                    "Très Glorifié, Très Saint, Seigneur des anges et de l'Esprit (Jibreel).",
            },
            ur: {
                transliteration: 'سُبُّوحٌ قُدُّوسٌ رَبُّ المَلَائِکَۃِ وَالرُّوح',
                translation: 'نہایت پاک، نہایت مقدس، فرشتوں اور روح (جبریل) کا رب۔',
            },
            tr: {
                transliteration: "Subbūḥun Quddūs, Rabbul-malā'ikati war-rūḥ",
                translation: "Çok Yüce, Çok Kutsal, meleklerin ve Ruh'un (Cebrail'in) Rabbi.",
            },
            ms: {
                transliteration: "Subbūḥun Quddūs, Rabbul-malā'ikati war-rūḥ",
                translation: 'Maha Suci, Maha Kudus, Tuhan para malaikat dan Roh (Jibril).',
            },
            bn: {
                transliteration: 'সুব্বুহুন কুদ্দুস, রাব্বুল মালাইকাতি ওয়াররূহ',
                translation: 'সর্বমহিমান্বিত, সর্বপবিত্র, ফেরেশতাগণ ও রুহ (জিবরাঈল)-এর রব।',
            },
        },
        references: [
            {
                type: 'hadith',
                source: 'Sahih Muslim',
                number: '487',
                grade: 'Sahih',
                narrator: "A'ishah",
                url: 'https://sunnah.com/muslim:487',
            },
        ],
        notes: "A'ishah (رضي الله عنها) reported that the Prophet ﷺ frequently said this in his ruku and sujood. The word 'Subbuh' is an intensive form meaning one who is glorified to the utmost degree. 'Quddus' means utterly pure and free from all defects.",
        whenToRecite:
            "Recited quietly during Ruku in every rak'ah, as an alternative to or alongside ruku-1. Can be combined with the primary tasbih. Particularly used in the night prayer (Tahajjud) where more duas are recited.",
    },

    // ─── Dua 9 ───────────────────────────────────────────────────────────────
    {
        id: 'ruku-3',
        positionId: 'ruku',
        variationIndex: 3,
        label: 'Subhanaka wa bihamdika (Ruku)',
        arabic: 'سُبْحَانَكَ وَبِحَمْدِكَ لَا إِلَهَ إِلَّا أَنْتَ',
        languages: {
            en: {
                transliteration: 'Subḥānaka wa biḥamdika lā ilāha illā ant',
                translation:
                    'Glory be to You and all praise. There is no god worthy of worship except You.',
            },
            ar: {
                transliteration: 'سُبْحَانَكَ وَبِحَمْدِكَ لَا إِلَهَ إِلَّا أَنْتَ',
                translation: 'سبحانك وبحمدك لا إله إلا أنت.',
            },
            fr: {
                transliteration: 'Subḥānaka wa biḥamdika lā ilāha illā ant',
                translation:
                    "Gloire à Toi et toute louange T'appartient. Il n'y a pas de dieu digne d'adoration excepté Toi.",
            },
            ur: {
                transliteration: 'سُبحَانَکَ وَبِحَمدِکَ لَا اِلٰہَ اِلَّا اَنت',
                translation: 'تو پاک ہے اور تیری حمد ہے، تیرے سوا کوئی معبود نہیں۔',
            },
            tr: {
                transliteration: 'Subḥānaka wa biḥamdika lā ilāha illā ant',
                translation: 'Seni tesbih eder ve hamd ederim. Senden başka ilah yoktur.',
            },
            ms: {
                transliteration: 'Subḥānaka wa biḥamdika lā ilāha illā ant',
                translation:
                    'Maha Suci Engkau dan dengan memuji-Mu. Tiada tuhan yang berhak disembah melainkan Engkau.',
            },
            bn: {
                transliteration: 'সুবহানাকা ওয়া বিহামদিকা লা ইলাহা ইল্লা আনত',
                translation: 'তুমি পবিত্র এবং তোমার প্রশংসা করি। তুমি ছাড়া কোনো ইলাহ নেই।',
            },
        },
        references: [
            {
                type: 'hadith',
                source: 'Sahih Muslim',
                number: '485',
                grade: 'Sahih',
                narrator: "A'ishah",
                url: 'https://sunnah.com/muslim:485',
            },
        ],
        notes: "A'ishah (رضي الله عنها) reported that the Prophet ﷺ recited this frequently in his ruku and sujood, implementing the Quranic command to glorify (Al-Nasr 110:3).",
        whenToRecite:
            "Recited quietly during Ruku in every rak'ah. Can be used as the sole tasbih or added after ruku-1. Also recited during Sujood (sajdah-4 uses identical wording).",
    },

    // ─── Dua 10 ──────────────────────────────────────────────────────────────
    {
        id: 'ruku-4',
        positionId: 'ruku',
        variationIndex: 4,
        label: 'Subhanaka Allahumma Rabbana (Ruku)',
        arabic: 'سُبْحَانَكَ اللَّهُمَّ رَبَّنَا وَبِحَمْدِكَ، اللَّهُمَّ اغْفِرْ لِي',
        languages: {
            en: {
                transliteration: 'Subḥānakallāhumma Rabbanā wa biḥamdika, Allāhummagh-fir lī',
                translation:
                    'Glory be to You, O Allah our Lord, and all praise. O Allah, forgive me.',
            },
            ar: {
                transliteration:
                    'سُبْحَانَكَ اللَّهُمَّ رَبَّنَا وَبِحَمْدِكَ، اللَّهُمَّ اغْفِرْ لِي',
                translation: 'سبحانك اللهم ربنا وبحمدك، اللهم اغفر لي.',
            },
            fr: {
                transliteration: 'Subḥānakallāhumma Rabbanā wa biḥamdika, Allāhummagh-fir lī',
                translation:
                    'Gloire à Toi, ô Allah notre Seigneur, et toute louange. Ô Allah, pardonne-moi.',
            },
            ur: {
                transliteration: 'سُبحَانَکَ اللّٰہُمَّ رَبَّنَا وَبِحَمدِک، اَللّٰہُمَّ اغفِر لِی',
                translation:
                    'اے اللہ! اے ہمارے رب! تو پاک ہے اور تیری حمد ہے، اے اللہ! مجھے معاف فرما۔',
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
        whenToRecite:
            "Recited quietly during Ruku in every rak'ah, particularly in the final period of the Prophet's ﷺ life when Surah An-Nasr was revealed. Combines glorification with a request for forgiveness in one supplication.",
    },

    // ─── Dua 11 ──────────────────────────────────────────────────────────────
    {
        id: 'ruku-5',
        positionId: 'ruku',
        variationIndex: 5,
        label: 'Subhanaka wa bihamdika astaghfiruka (Ruku)',
        arabic: 'سُبْحَانَكَ وَبِحَمْدِكَ أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ',
        languages: {
            en: {
                transliteration: 'Subḥānaka wa biḥamdika, astaghfiruka wa atūbu ilayk',
                translation:
                    'Glory be to You, and all praise. I seek Your forgiveness and I repent to You.',
            },
            ar: {
                transliteration: 'سُبْحَانَكَ وَبِحَمْدِكَ أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ',
                translation: 'سبحانك وبحمدك، أستغفرك وأتوب إليك.',
            },
            fr: {
                transliteration: 'Subḥānaka wa biḥamdika, astaghfiruka wa atūbu ilayk',
                translation:
                    'Gloire à Toi et toute louange. Je Te demande pardon et me repens vers Toi.',
            },
            ur: {
                transliteration: 'سُبحَانَکَ وَبِحَمدِکَ، اَستَغفِرُکَ وَاَتُوبُ اِلَیک',
                translation:
                    'تو پاک ہے اور تیری حمد ہے، میں تجھ سے مغفرت مانگتا ہوں اور تیری طرف توبہ کرتا ہوں۔',
            },
            tr: {
                transliteration: 'Subḥānaka wa biḥamdika, astaghfiruka wa atūbu ilayk',
                translation:
                    'Seni tesbih eder ve hamd ederim. Senden bağışlanma diler ve Sana tevbe ederim.',
            },
            ms: {
                transliteration: 'Subḥānaka wa biḥamdika, astaghfiruka wa atūbu ilayk',
                translation:
                    'Maha Suci Engkau dan dengan memuji-Mu. Aku memohon keampunan-Mu dan bertaubat kepada-Mu.',
            },
            bn: {
                transliteration: 'সুবহানাকা ওয়া বিহামদিকা, আস্তাগফিরুকা ওয়া আতূবু ইলাইক',
                translation:
                    'তুমি পবিত্র এবং তোমার প্রশংসা করি। আমি তোমার কাছে ক্ষমা চাই এবং তোমার দিকে তাওবা করি।',
            },
        },
        references: [
            {
                type: 'hadith',
                source: 'Sahih al-Bukhari',
                number: '4967',
                grade: 'Sahih',
                narrator: "A'ishah",
                url: 'https://sunnah.com/bukhari:4967',
            },
        ],
        notes: "A'ishah (رضي الله عنها) said the Prophet ﷺ recited this abundantly in his ruku and sujood as implementation of Surah An-Nasr.",
        whenToRecite:
            "Recited quietly during Ruku in every rak'ah, following the revelation of Surah An-Nasr. Also said during Sujood. Particularly recommended in the last phase of a believer's life as a preparation for meeting Allah.",
    },

    // ─── Dua 12 ──────────────────────────────────────────────────────────────
    {
        id: 'ruku-6',
        positionId: 'ruku',
        variationIndex: 6,
        label: 'Subhana dhil-Jabarut (Ruku)',
        arabic: 'سُبْحَانَ ذِي الْجَبَرُوتِ وَالْمَلَكُوتِ وَالْكِبْرِيَاءِ وَالْعَظَمَةِ',
        languages: {
            en: {
                transliteration: "Subḥāna dhil-jabarūti wal-malakūti wal-kibriyā'i wal-'aẓamah",
                translation:
                    'Glory be to the One Who possesses all power, all sovereignty, all greatness and all magnificence.',
            },
            ar: {
                transliteration:
                    'سُبْحَانَ ذِي الْجَبَرُوتِ وَالْمَلَكُوتِ وَالْكِبْرِيَاءِ وَالْعَظَمَةِ',
                translation: 'سبحان ذي الجبروت والملكوت والكبرياء والعظمة.',
            },
            fr: {
                transliteration: "Subḥāna dhil-jabarūti wal-malakūti wal-kibriyā'i wal-'aẓamah",
                translation:
                    'Gloire à Celui qui possède toute puissance, toute souveraineté, toute grandeur et toute magnificence.',
            },
            ur: {
                transliteration:
                    'سُبحَانَ ذِی الجَبَرُوتِ وَالمَلَکُوتِ وَالکِبرِیَاءِ وَالعَظَمَہ',
                translation: 'پاک ہے وہ جو قدرت، بادشاہت، بڑائی اور عظمت والا ہے۔',
            },
            tr: {
                transliteration: "Subḥāna dhil-jabarūti wal-malakūti wal-kibriyā'i wal-'aẓamah",
                translation:
                    "Tüm güce, tüm egemenliğe, tüm büyüklüğe ve tüm azamete sahip Olan'ı tesbih ederim.",
            },
            ms: {
                transliteration: "Subḥāna dhil-jabarūti wal-malakūti wal-kibriyā'i wal-'aẓamah",
                translation:
                    'Maha Suci Tuhan yang memiliki segala kekuasaan, pemerintahan, keagungan dan kebesaran.',
            },
            bn: {
                transliteration: 'সুবহানা যিল জাবারূতি ওয়াল মালাকূতি ওয়াল কিবরিয়াই ওয়াল আযামাহ',
                translation:
                    'তিনি পবিত্র যিনি সর্বশক্তি, সর্বকর্তৃত্ব, সর্বশ্রেষ্ঠতা ও সর্বমহিমার অধিকারী।',
            },
        },
        references: [
            {
                type: 'hadith',
                source: 'Sunan Abu Dawud',
                number: '873',
                grade: 'Sahih',
                narrator: "A'ishah",
                url: 'https://sunnah.com/abudawud:873',
            },
            {
                type: 'hadith',
                source: 'Sunan al-Nasai',
                number: '1130',
                grade: 'Sahih',
                narrator: "A'ishah",
                url: 'https://sunnah.com/nasai:1130',
            },
        ],
        notes: "This dhikr is reported to have been recited during the night prayer (Tahajjud) ruku. The four divine attributes mentioned — jabarut (absolute power), malakut (sovereignty), kibriya' (magnificence), and azamah (greatness) — together emphasise the complete supremacy of Allah.",
        whenToRecite:
            'Recited quietly during Ruku in night prayers (Tahajjud, Witr, Tarawih). Not typically used in short obligatory prayers. The worshipper should be in the correct bowing position — back flat, hands on knees — for the full duration.',
    },

    // ─── Dua 13 ──────────────────────────────────────────────────────────────
    {
        id: 'ruku-7',
        positionId: 'ruku',
        variationIndex: 7,
        label: "Allahumma laka raka'tu",
        arabic: 'اللَّهُمَّ لَكَ رَكَعْتُ، وَبِكَ آمَنْتُ، وَلَكَ أَسْلَمْتُ، خَشَعَ لَكَ سَمْعِي وَبَصَرِي وَمُخِّي وَعَظْمِي وَعَصَبِي',
        languages: {
            en: {
                transliteration:
                    "Allāhumma laka raka'tu, wa bika āmantu, wa laka aslamtu, khasha'a laka sam'ī wa baṣarī wa mukkhī wa 'aẓmī wa 'aṣabī",
                translation:
                    'O Allah, for You I have bowed. In You I believe. To You I have submitted. My hearing, my sight, my brain, my bones and my nerves are humbled before You.',
            },
            ar: {
                transliteration:
                    'اللَّهُمَّ لَكَ رَكَعْتُ، وَبِكَ آمَنْتُ، وَلَكَ أَسْلَمْتُ، خَشَعَ لَكَ سَمْعِي وَبَصَرِي وَمُخِّي وَعَظْمِي وَعَصَبِي',
                translation:
                    'اللهم لك ركعت، وبك آمنت، ولك أسلمت، خشع لك سمعي وبصري ومخي وعظمي وعصبي.',
            },
            fr: {
                transliteration:
                    "Allāhumma laka raka'tu, wa bika āmantu, wa laka aslamtu, khasha'a laka sam'ī wa baṣarī wa mukkhī wa 'aẓmī wa 'aṣabī",
                translation:
                    "O Allah, c'est pour Toi que je me suis incliné. En Toi je crois. À Toi je me suis soumis. Mon ouïe, ma vue, mon cerveau, mes os et mes nerfs sont humiliés devant Toi.",
            },
            ur: {
                transliteration:
                    'اَللّٰہُمَّ لَکَ رَکَعتُ، وَبِکَ اٰمَنتُ، وَلَکَ اَسلَمتُ، خَشَعَ لَکَ سَمعِی وَبَصَرِی وَمُخِّی وَعَظمِی وَعَصَبِی',
                translation:
                    'اے اللہ! میں نے تیرے لیے رکوع کیا، تجھ پر ایمان لایا، تیرے لیے اسلام لایا، تیرے سامنے میری سماعت، بصارت، دماغ، ہڈیاں اور اعصاب سب جھک گئے۔',
            },
            tr: {
                transliteration:
                    "Allāhumma laka raka'tu, wa bika āmantu, wa laka aslamtu, khasha'a laka sam'ī wa baṣarī wa mukkhī wa 'aẓmī wa 'aṣabī",
                translation:
                    "Allah'ım, Senin için rükuya vardım, Sana iman ettim, Sana teslim oldum. Kulağım, gözüm, beynin, kemiklerim ve sinirlerim Sana boyun eğdi.",
            },
            ms: {
                transliteration:
                    "Allāhumma laka raka'tu, wa bika āmantu, wa laka aslamtu, khasha'a laka sam'ī wa baṣarī wa mukkhī wa 'aẓmī wa 'aṣabī",
                translation:
                    'Ya Allah, kerana-Mulah aku ruku. Kepada-Mulah aku beriman. Kepada-Mu aku berserah. Pendengaranku, penglihatanku, otakku, tulangku dan sarafku semuanya khusyuk kepada-Mu.',
            },
            bn: {
                transliteration:
                    'আল্লাহুম্মা লাকা রাকাতু, ওয়া বিকা আমানতু, ওয়া লাকা আসলামতু, খাশাআ লাকা সামঈ ওয়া বাসারী ওয়া মুখখী ওয়া আযমী ওয়া আসাবী',
                translation:
                    'হে আল্লাহ! তোমার জন্যই আমি রুকু করেছি, তোমার উপর ঈমান এনেছি, তোমার কাছে আত্মসমর্পণ করেছি। আমার শ্রবণ, দৃষ্টি, মস্তিষ্ক, হাড় ও স্নায়ু সবকিছু তোমার সামনে বিনম্র।',
            },
        },
        references: [
            {
                type: 'hadith',
                source: 'Sahih Muslim',
                number: '771',
                grade: 'Sahih',
                narrator: 'Ali ibn Abi Talib',
                url: 'https://sunnah.com/muslim:771',
            },
        ],
        notes: 'Ali ibn Abi Talib (رضي الله عنه) reported this as the supplication the Prophet ﷺ used in ruku during Tahajjud. It expresses total submission — every faculty of the worshipper is dedicated and humbled before Allah.',
        whenToRecite:
            'Recited quietly during the Ruku of Tahajjud (night prayer). It opens the Ruku supplication and can be followed by the standard tasbih (ruku-1). Expresses comprehensive submission at the moment of bowing.',
    },
]
