import type { TDuaVariation } from './types'

import placeholderAudio from '#/assets/audio/subhanaka.m4a'

export const sajdahDuas: TDuaVariation[] = [
    // ─── Dua 18 ──────────────────────────────────────────────────────────────
    {
        id: 'sajdah-1',
        positionId: 'sajdah',
        variationIndex: 1,
        label: "Subhana Rabbi al-A'la",
        arabic: 'سُبْحَانَ رَبِّيَ الْأَعْلَى',
        languages: {
            en: {
                transliteration: "Subḥāna Rabbiy al-A'lā",
                translation: 'Glory be to my Lord, the Most High.',
            },
            ar: {
                transliteration: 'سُبْحَانَ رَبِّيَ الْأَعْلَى',
                translation: 'سبحان ربي الأعلى.',
            },
            fr: {
                transliteration: "Subḥāna Rabbiy al-A'lā",
                translation: 'Gloire à mon Seigneur, le Très Haut.',
            },
            ur: {
                transliteration: 'سُبحَانَ رَبِّیَ الاَعلٰی',
                translation: 'پاک ہے میرا رب، سب سے اعلیٰ۔',
            },
            tr: {
                transliteration: "Subḥāna Rabbiy al-A'lā",
                translation: 'En Yüce Rabbimi tesbih ederim.',
            },
            ms: {
                transliteration: "Subḥāna Rabbiy al-A'lā",
                translation: 'Maha Suci Tuhanku Yang Maha Tinggi.',
            },
            bn: {
                transliteration: 'সুবহানা রাব্বিয়াল আলা',
                translation: 'আমার সর্বোচ্চ রবের পবিত্রতা বর্ণনা করি।',
            },
        },
        references: [
            {
                type: 'quran',
                surah: 87,
                ayah: 1,
                surahName: "Al-A'la",
                surahNameArabic: 'الأعلى',
                url: 'https://quran.com/87/1',
            },
            {
                type: 'hadith',
                source: 'Sunan Abu Dawud',
                number: '869',
                grade: 'Sahih',
                narrator: 'Uqbah ibn Amir',
                url: 'https://sunnah.com/abudawud:869',
            },
        ],
        notes: "The most obligatory dhikr in sujood. Corresponds to the Quranic command: 'Glorify the name of your Lord, the Most High' (Al-A'la 87:1). Minimum three repetitions; seven or more in voluntary prayers.",
        whenToRecite:
            "Recited quietly in every Sujood (prostration) of every rak'ah — both the first and second prostrations. Forehead, nose, both palms, both knees and both feet must be on the ground. Minimum three repetitions. The worshipper must be completely still while reciting.",
        audioUrl: placeholderAudio,
    },

    // ─── Dua 19 ──────────────────────────────────────────────────────────────
    {
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
    },

    // ─── Dua 20 ──────────────────────────────────────────────────────────────
    {
        id: 'sajdah-3',
        positionId: 'sajdah',
        variationIndex: 3,
        label: 'Subbuhun Quddus (Sajdah)',
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
                translation: "Très Glorifié, Très Saint, Seigneur des anges et de l'Esprit.",
            },
            ur: {
                transliteration: 'سُبُّوحٌ قُدُّوسٌ رَبُّ المَلَائِکَۃِ وَالرُّوح',
                translation: 'نہایت پاک، نہایت مقدس، فرشتوں اور روح (جبریل) کا رب۔',
            },
            tr: {
                transliteration: "Subbūḥun Quddūs, Rabbul-malā'ikati war-rūḥ",
                translation: "Çok Yüce, Çok Kutsal, meleklerin ve Ruh'un Rabbi.",
            },
            ms: {
                transliteration: "Subbūḥun Quddūs, Rabbul-malā'ikati war-rūḥ",
                translation: 'Maha Suci, Maha Kudus, Tuhan para malaikat dan Roh.',
            },
            bn: {
                transliteration: 'সুব্বুহুন কুদ্দুস, রাব্বুল মালাইকাতি ওয়াররূহ',
                translation: 'সর্বমহিমান্বিত, সর্বপবিত্র, ফেরেশতাগণ ও রুহের রব।',
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
        notes: "Same as ruku-2. A'ishah (رضي الله عنها) reported the Prophet ﷺ said this in both ruku and sujood.",
        whenToRecite:
            "Recited during Sujood in every rak'ah. Used interchangeably with or alongside the primary tasbih (sajdah-1). A'ishah (رضي الله عنها) reported the Prophet ﷺ said this frequently in both bowing and prostration.",
        audioUrl: placeholderAudio,
    },

    // ─── Dua 21 ──────────────────────────────────────────────────────────────
    {
        id: 'sajdah-4',
        positionId: 'sajdah',
        variationIndex: 4,
        label: 'Subhanaka wa bihamdika la ilaha illa anta (Sajdah)',
        arabic: 'سُبْحَانَكَ وَبِحَمْدِكَ لَا إِلَهَ إِلَّا أَنْتَ',
        languages: {
            en: {
                transliteration: 'Subḥānaka wa biḥamdika lā ilāha illā ant',
                translation:
                    'Glory be to You, and all praise. There is no god worthy of worship except You.',
            },
            ar: {
                transliteration: 'سُبْحَانَكَ وَبِحَمْدِكَ لَا إِلَهَ إِلَّا أَنْتَ',
                translation: 'سبحانك وبحمدك لا إله إلا أنت.',
            },
            fr: {
                transliteration: 'Subḥānaka wa biḥamdika lā ilāha illā ant',
                translation:
                    "Gloire à Toi et toute louange. Il n'y a pas de dieu digne d'adoration excepté Toi.",
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
        notes: "Reported by A'ishah (رضي الله عنها) — the Prophet ﷺ said this in both ruku and sujood.",
        whenToRecite:
            "Recited during Sujood in every rak'ah. Combines glorification (tasbih), praise (tahmid) and testimony (Tawhid) in a single phrase. Identical wording to ruku-3 — the Prophet ﷺ used it in both positions.",
        audioUrl: placeholderAudio,
    },

    // ─── Dua 22 ──────────────────────────────────────────────────────────────
    {
        id: 'sajdah-5',
        positionId: 'sajdah',
        variationIndex: 5,
        label: 'Subhanaka Allahumma Rabbana wa bihamdika (Sajdah)',
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
                    'اے اللہ! اے ہمارے رب! تو پاک ہے اور تیری حمد ہے، اے اللہ! مجھے بخش دے۔',
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
        ],
        notes: "Reported in both Bukhari and Muslim from A'ishah (رضي الله عنها), said in both ruku and sujood.",
        whenToRecite:
            "Recited during Sujood in every rak'ah. This supplication implements the command of Surah An-Nasr, combining glorification of Allah with a request for forgiveness. It is especially recommended in the later part of one's life.",
        audioUrl: placeholderAudio,
    },

    // ─── Dua 23 ──────────────────────────────────────────────────────────────
    {
        id: 'sajdah-6',
        positionId: 'sajdah',
        variationIndex: 6,
        label: 'Subhana dhil-Jabarut (Sajdah)',
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
                    "Tüm güce, egemenliğe, büyüklüğe ve azamete sahip Olan'ı tesbih ederim.",
            },
            ms: {
                transliteration: "Subḥāna dhil-jabarūti wal-malakūti wal-kibriyā'i wal-'aẓamah",
                translation:
                    'Maha Suci Tuhan yang memiliki kekuasaan, pemerintahan, keagungan dan kebesaran.',
            },
            bn: {
                transliteration: 'সুবহানা যিল জাবারূতি ওয়াল মালাকূতি ওয়াল কিবরিয়াই ওয়াল আযামাহ',
                translation:
                    'তিনি পবিত্র যিনি সকল শক্তি, সকল কর্তৃত্ব, সকল শ্রেষ্ঠত্ব ও সকল মহিমার অধিকারী।',
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
        ],
        notes: "Reported by A'ishah (رضي الله عنها) as a night prayer dhikr in both ruku and sujood.",
        whenToRecite:
            'Recited during Sujood in night prayers (Tahajjud, Witr, Tarawih). Particularly suited for voluntary prayers where the worshipper lingers in prostration. Can be said after the primary tasbih (sajdah-1).',
        audioUrl: placeholderAudio,
    },

    // ─── Dua 24 ──────────────────────────────────────────────────────────────
    {
        id: 'sajdah-7',
        positionId: 'sajdah',
        variationIndex: 7,
        label: 'Allahumma ighfir li dhanbi kullahu',
        arabic: 'اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ، دِقَّهُ وَجِلَّهُ، وَأَوَّلَهُ وَآخِرَهُ، وَعَلَانِيَتَهُ وَسِرَّهُ',
        languages: {
            en: {
                transliteration:
                    "Allāhummaghfir lī dhanbī kullahu, diqqahu wa jillahu, wa awwalahu wa ākhirah, wa 'alāniyatahu wa sirrah",
                translation:
                    'O Allah, forgive me all of my sins — the small and the great, the first and the last, the open and the secret.',
            },
            ar: {
                transliteration:
                    'اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ، دِقَّهُ وَجِلَّهُ، وَأَوَّلَهُ وَآخِرَهُ، وَعَلَانِيَتَهُ وَسِرَّهُ',
                translation: 'اللهم اغفر لي ذنبي كله، دقه وجله، وأوله وآخره، وعلانيته وسره.',
            },
            fr: {
                transliteration:
                    "Allāhummaghfir lī dhanbī kullahu, diqqahu wa jillahu, wa awwalahu wa ākhirah, wa 'alāniyatahu wa sirrah",
                translation:
                    'O Allah, pardonne-moi tous mes péchés — les petits et les grands, les premiers et les derniers, les publics et les secrets.',
            },
            ur: {
                transliteration:
                    'اَللّٰہُمَّ اغفِر لِی ذَنبِی کُلَّہ، دِقَّہُ وَجِلَّہ، وَاَوَّلَہُ وَاٰخِرَہ، وَعَلَانِیَتَہُ وَسِرَّہ',
                translation:
                    'اے اللہ! میرے سارے گناہ بخش دے — چھوٹے اور بڑے، پہلے اور آخری، علانیہ اور پوشیدہ۔',
            },
            tr: {
                transliteration:
                    "Allāhummaghfir lī dhanbī kullahu, diqqahu wa jillahu, wa awwalahu wa ākhirah, wa 'alāniyatahu wa sirrah",
                translation:
                    "Allah'ım, tüm günahlarımı bağışla — küçüğünü ve büyüğünü, ilkini ve sonuncusunu, açığını ve gizlisini.",
            },
            ms: {
                transliteration:
                    "Allāhummaghfir lī dhanbī kullahu, diqqahu wa jillahu, wa awwalahu wa ākhirah, wa 'alāniyatahu wa sirrah",
                translation:
                    'Ya Allah, ampunkanlah semua dosaku — yang kecil dan yang besar, yang pertama dan yang terakhir, yang terang dan yang tersembunyi.',
            },
            bn: {
                transliteration:
                    'আল্লাহুম্মাগফির লী যানবী কুল্লাহু, দিক্কাহু ওয়া জিল্লাহু, ওয়া আওয়্যালাহু ওয়া আখিরাহ, ওয়া আলানিয়াতাহু ওয়া সিররাহ',
                translation:
                    'হে আল্লাহ! আমার সব পাপ ক্ষমা করো — ছোট ও বড়, প্রথম ও শেষ, প্রকাশ্য ও গোপন।',
            },
        },
        references: [
            {
                type: 'hadith',
                source: 'Sahih Muslim',
                number: '483',
                grade: 'Sahih',
                narrator: 'Abu Hurayrah',
                url: 'https://sunnah.com/muslim:483',
            },
        ],
        notes: 'A comprehensive forgiveness supplication covering every category of sin through elegant pairs of opposites. The sujood — the most humble position — is the ideal moment to seek total forgiveness.',
        whenToRecite:
            "Recited during Sujood in every rak'ah, particularly after the primary tasbih. Using pairs of opposites (small/great, first/last, public/secret), it ensures no sin is left unaddressed in the supplication.",
        audioUrl: placeholderAudio,
    },

    // ─── Dua 25 ──────────────────────────────────────────────────────────────
    {
        id: 'sajdah-8',
        positionId: 'sajdah',
        variationIndex: 8,
        label: "A'udhu birdaka min sakhatika",
        arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِرِضَاكَ مِنْ سَخَطِكَ، وَبِمُعَافَاتِكَ مِنْ عُقُوبَتِكَ، وَأَعُوذُ بِكَ مِنْكَ، لَا أُحْصِي ثَنَاءً عَلَيْكَ، أَنْتَ كَمَا أَثْنَيْتَ عَلَى نَفْسِكَ',
        languages: {
            en: {
                transliteration:
                    "Allāhumma innī a'ūdhu biriḍāka min sakhaṭik, wa bimu'āfātika min 'uqūbatik, wa a'ūdhu bika mink, lā uḥṣī thanā'an 'alayk, anta kamā athnayta 'alā nafsik",
                translation:
                    'O Allah, I seek refuge in Your pleasure from Your wrath, and in Your forgiveness from Your punishment. I seek refuge in You from You. I cannot enumerate Your praise — You are as You have praised Yourself.',
            },
            ar: {
                transliteration:
                    'اللَّهُمَّ إِنِّي أَعُوذُ بِرِضَاكَ مِنْ سَخَطِكَ، وَبِمُعَافَاتِكَ مِنْ عُقُوبَتِكَ، وَأَعُوذُ بِكَ مِنْكَ، لَا أُحْصِي ثَنَاءً عَلَيْكَ، أَنْتَ كَمَا أَثْنَيْتَ عَلَى نَفْسِكَ',
                translation:
                    'اللهم إني أعوذ برضاك من سخطك، وبمعافاتك من عقوبتك، وأعوذ بك منك، لا أحصي ثناءً عليك، أنت كما أثنيت على نفسك.',
            },
            fr: {
                transliteration:
                    "Allāhumma innī a'ūdhu biriḍāka min sakhaṭik, wa bimu'āfātika min 'uqūbatik, wa a'ūdhu bika mink, lā uḥṣī thanā'an 'alayk, anta kamā athnayta 'alā nafsik",
                translation:
                    "O Allah, je cherche refuge dans Ta satisfaction contre Ta colère, et dans Ton pardon contre Ton châtiment. Je cherche refuge en Toi contre Toi. Je ne peux dénombrer Tes louanges — Tu es tel que Tu T'es Toi-même loué.",
            },
            ur: {
                transliteration:
                    'اَللّٰہُمَّ اِنِّی اَعُوذُ بِرِضَاکَ مِن سَخَطِک، وَبِمُعَافَاتِکَ مِن عُقُوبَتِک، وَاَعُوذُ بِکَ مِنک، لَا اُحصِی ثَنَاءً عَلَیک، اَنتَ کَمَا اَثنَیتَ عَلٰی نَفسِک',
                translation:
                    'اے اللہ! میں تیری رضا کے ذریعے تیرے غضب سے، اور تیری معافی کے ذریعے تیری سزا سے پناہ مانگتا ہوں۔ میں تجھ سے تیری پناہ مانگتا ہوں۔ میں تیری تعریف گن نہیں سکتا — تو ویسا ہی ہے جیسا تو نے خود اپنی تعریف کی۔',
            },
            tr: {
                transliteration:
                    "Allāhumma innī a'ūdhu biriḍāka min sakhaṭik, wa bimu'āfātika min 'uqūbatik, wa a'ūdhu bika mink, lā uḥṣī thanā'an 'alayk, anta kamā athnayta 'alā nafsik",
                translation:
                    "Allah'ım, gazabından rızana, cezandan affına sığınırım. Senden Sana sığınırım. Seni layıkıyla övemem — Sen, Kendini övdüğün gibisin.",
            },
            ms: {
                transliteration:
                    "Allāhumma innī a'ūdhu biriḍāka min sakhaṭik, wa bimu'āfātika min 'uqūbatik, wa a'ūdhu bika mink, lā uḥṣī thanā'an 'alayk, anta kamā athnayta 'alā nafsik",
                translation:
                    'Ya Allah, aku berlindung dengan keredhaan-Mu daripada kemurkaan-Mu, dan dengan kemaafan-Mu daripada azab-Mu. Aku berlindung kepada-Mu daripada-Mu. Aku tidak dapat menghitung pujian kepada-Mu — Engkau sebagaimana Engkau memuji diri-Mu sendiri.',
            },
            bn: {
                transliteration:
                    'আল্লাহুম্মা ইন্নী আউযু বিরিদাকা মিন সাখাতিক, ওয়া বিমুআফাতিকা মিন উকূবাতিক, ওয়া আউযু বিকা মিনক, লা উহসী সানাআন আলাইক, আনতা কামা আসনাইতা আলা নাফসিক',
                translation:
                    'হে আল্লাহ! আমি তোমার সন্তুষ্টির মাধ্যমে তোমার ক্রোধ থেকে, এবং তোমার ক্ষমার মাধ্যমে তোমার শাস্তি থেকে আশ্রয় চাই। আমি তোমার কাছ থেকে তোমার আশ্রয় চাই। আমি তোমার প্রশংসা গণনা করতে পারি না — তুমি সেইরকম যেমন তুমি নিজের প্রশংসা করেছ।',
            },
        },
        references: [
            {
                type: 'hadith',
                source: 'Sahih Muslim',
                number: '486',
                grade: 'Sahih',
                narrator: "A'ishah",
                url: 'https://sunnah.com/muslim:486',
            },
        ],
        notes: "One of the most profound duas in the entire prayer. The phrase 'I seek refuge in You from You' (a'udhu bika minka) is unique — it means seeking refuge in Allah's attributes of mercy from His attributes of wrath. The admission 'I cannot enumerate Your praise' is the peak of humility.",
        whenToRecite:
            "Recited during Sujood in voluntary prayers, particularly Tahajjud. This deep supplication, reported by A'ishah (رضي الله عنها), is best suited for solitary night prayers where the worshipper can linger in prostration in full humility.",
        audioUrl: placeholderAudio,
    },

    // ─── Dua 26 ──────────────────────────────────────────────────────────────
    {
        id: 'sajdah-9',
        positionId: 'sajdah',
        variationIndex: 9,
        label: 'Allahumma laka sajadtu',
        arabic: 'اللَّهُمَّ لَكَ سَجَدْتُ، وَبِكَ آمَنْتُ، وَلَكَ أَسْلَمْتُ، سَجَدَ وَجْهِي لِلَّذِي خَلَقَهُ وَصَوَّرَهُ وَشَقَّ سَمْعَهُ وَبَصَرَهُ، تَبَارَكَ اللَّهُ أَحْسَنُ الْخَالِقِينَ',
        languages: {
            en: {
                transliteration:
                    "Allāhumma laka sajadtu, wa bika āmantu, wa laka aslamtu, sajada wajhiya lilladhī khalaqahu wa ṣawwarahu wa shaqqa sam'ahu wa baṣarah, tabārakallāhu aḥsanul-khāliqīn",
                translation:
                    'O Allah, to You I prostrate, in You I believe, to You I submit. My face prostrates before the One Who created it and shaped it, and Who opened its hearing and sight. Blessed is Allah, the Best of creators.',
            },
            ar: {
                transliteration:
                    'اللَّهُمَّ لَكَ سَجَدْتُ، وَبِكَ آمَنْتُ، وَلَكَ أَسْلَمْتُ، سَجَدَ وَجْهِي لِلَّذِي خَلَقَهُ وَصَوَّرَهُ وَشَقَّ سَمْعَهُ وَبَصَرَهُ، تَبَارَكَ اللَّهُ أَحْسَنُ الْخَالِقِينَ',
                translation: 'اللهم لك سجدت، وبك آمنت، ولك أسلمت... تبارك الله أحسن الخالقين.',
            },
            fr: {
                transliteration:
                    "Allāhumma laka sajadtu, wa bika āmantu, wa laka aslamtu, sajada wajhiya lilladhī khalaqahu wa ṣawwarahu wa shaqqa sam'ahu wa baṣarah, tabārakallāhu aḥsanul-khāliqīn",
                translation:
                    "O Allah, c'est pour Toi que je me prosterne, en Toi je crois, à Toi je me soumets... Béni soit Allah, le Meilleur des créateurs.",
            },
            ur: {
                transliteration:
                    'اَللّٰہُمَّ لَکَ سَجَدتُ، وَبِکَ اٰمَنتُ، وَلَکَ اَسلَمتُ، سَجَدَ وَجہِیَ لِلَّذِی خَلَقَہُ وَصَوَّرَہُ وَشَقَّ سَمعَہُ وَبَصَرَہ، تَبَارَکَ اللّٰہُ اَحسَنُ الخَالِقِین',
                translation:
                    'اے اللہ! میں نے تیرے لیے سجدہ کیا، تجھ پر ایمان لایا، تیرے آگے سر تسلیم خم کیا... بابرکت ہے اللہ جو سب سے بہتر خالق ہے۔',
            },
            tr: {
                transliteration:
                    "Allāhumma laka sajadtu, wa bika āmantu, wa laka aslamtu, sajada wajhiya lilladhī khalaqahu wa ṣawwarahu wa shaqqa sam'ahu wa baṣarah, tabārakallāhu aḥsanul-khāliqīn",
                translation:
                    "Allah'ım, Senin için secdeye vardım, Sana iman ettim, Sana teslim oldum... Yaratıcıların en güzeli olan Allah ne mübarektir.",
            },
            ms: {
                transliteration:
                    "Allāhumma laka sajadtu, wa bika āmantu, wa laka aslamtu, sajada wajhiya lilladhī khalaqahu wa ṣawwarahu wa shaqqa sam'ahu wa baṣarah, tabārakallāhu aḥsanul-khāliqīn",
                translation:
                    'Ya Allah, kerana-Mulah aku sujud, kepada-Mulah aku beriman, kepada-Mu aku berserah... Maha Berkat Allah, sebaik-baik Pencipta.',
            },
            bn: {
                transliteration:
                    'আল্লাহুম্মা লাকা সাজাদতু, ওয়া বিকা আমানতু, ওয়া লাকা আসলামতু, সাজাদা ওয়াজহিয়া লিল্লাযী খালাকাহু ওয়া সাওয়্যারাহু ওয়া শাক্কা সামআহু ওয়া বাসারাহ, তাবারাকাল্লাহু আহসানুল খালিকীন',
                translation:
                    'হে আল্লাহ! তোমার জন্যই আমি সেজদা করেছি, তোমার উপর ঈমান এনেছি, তোমার কাছে আত্মসমর্পণ করেছি। আমার মুখ সেজদা করেছে সেই সত্তার সামনে যিনি এটি সৃষ্টি করেছেন ও রূপ দিয়েছেন... বরকতময় আল্লাহ, সর্বোত্তম স্রষ্টা।',
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
            {
                type: 'quran',
                surah: 23,
                ayah: 14,
                surahName: "Al-Mu'minun",
                surahNameArabic: 'المؤمنون',
                url: 'https://quran.com/23/14',
            },
        ],
        notes: "The ending 'Tabaraka Allahu ahsanul-khaliqin' is a direct quote from Al-Mu'minun 23:14. It acknowledges that the face prostrating was created by Allah Himself — making the sujood a return of the creation to its Creator.",
        whenToRecite:
            "Recited during the Sujood of Tahajjud (night prayer). It opens the prostration supplication and beautifully acknowledges that the worshipper's own face — which now presses against the ground — was formed by the same Creator being worshipped.",
        audioUrl: placeholderAudio,
    },

    // ─── Dua 27 ──────────────────────────────────────────────────────────────
    {
        id: 'sajdah-10',
        positionId: 'sajdah',
        variationIndex: 10,
        label: "Allahumma ij'al fi qalbi nuran",
        arabic: 'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا، وَفِي سَمْعِي نُورًا، وَفِي بَصَرِي نُورًا، وَعَنْ يَمِينِي نُورًا، وَعَنْ يَسَارِي نُورًا، وَأَمَامِي نُورًا، وَخَلْفِي نُورًا، وَفَوْقِي نُورًا، وَتَحْتِي نُورًا، وَاجْعَلْ لِي نُورًا',
        languages: {
            en: {
                transliteration:
                    "Allāhummaj'al fī qalbī nūrā, wa fī sam'ī nūrā, wa fī baṣarī nūrā, wa 'an yamīnī nūrā, wa 'an yasārī nūrā, wa amāmī nūrā, wa khalfī nūrā, wa fawqī nūrā, wa taḥtī nūrā, waj'al lī nūrā",
                translation:
                    'O Allah, place light in my heart, light in my hearing, light in my sight, light on my right, light on my left, light in front of me, light behind me, light above me, light below me, and grant me light.',
            },
            ar: {
                transliteration:
                    'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا، وَفِي سَمْعِي نُورًا، وَفِي بَصَرِي نُورًا، وَعَنْ يَمِينِي نُورًا، وَعَنْ يَسَارِي نُورًا، وَأَمَامِي نُورًا، وَخَلْفِي نُورًا، وَفَوْقِي نُورًا، وَتَحْتِي نُورًا، وَاجْعَلْ لِي نُورًا',
                translation:
                    'اللهم اجعل في قلبي نوراً، وفي سمعي نوراً، وفي بصري نوراً... واجعل لي نوراً.',
            },
            fr: {
                transliteration:
                    "Allāhummaj'al fī qalbī nūrā, wa fī sam'ī nūrā, wa fī baṣarī nūrā, wa 'an yamīnī nūrā, wa 'an yasārī nūrā, wa amāmī nūrā, wa khalfī nūrā, wa fawqī nūrā, wa taḥtī nūrā, waj'al lī nūrā",
                translation:
                    'O Allah, mets de la lumière dans mon cœur, de la lumière dans mon ouïe, de la lumière dans ma vue, de la lumière à ma droite, à ma gauche, devant moi, derrière moi, au-dessus et en dessous de moi — accorde-moi de la lumière.',
            },
            ur: {
                transliteration:
                    'اَللّٰہُمَّ اجعَل فِی قَلبِی نُورًا، وَفِی سَمعِی نُورًا، وَفِی بَصَرِی نُورًا، وَعَن یَمِینِی نُورًا، وَعَن یَسَارِی نُورًا، وَاَمَامِی نُورًا، وَخَلفِی نُورًا، وَفَوقِی نُورًا، وَتَحتِی نُورًا، وَاجعَل لِی نُورًا',
                translation:
                    'اے اللہ! میرے دل میں نور ڈال، سماعت میں نور، بصارت میں نور، دائیں طرف نور، بائیں طرف نور، آگے نور، پیچھے نور، اوپر نور، نیچے نور — اور مجھے نور عطا فرما۔',
            },
            tr: {
                transliteration:
                    "Allāhummaj'al fī qalbī nūrā, wa fī sam'ī nūrā, wa fī baṣarī nūrā, wa 'an yamīnī nūrā, wa 'an yasārī nūrā, wa amāmī nūrā, wa khalfī nūrā, wa fawqī nūrā, wa taḥtī nūrā, waj'al lī nūrā",
                translation:
                    "Allah'ım, kalbime nur, kulağıma nur, gözüme nur, sağıma nur, soluma nur, önüme nur, arkama nur, üstüme nur, altıma nur koy — ve bana nur ihsan et.",
            },
            ms: {
                transliteration:
                    "Allāhummaj'al fī qalbī nūrā, wa fī sam'ī nūrā, wa fī baṣarī nūrā, wa 'an yamīnī nūrā, wa 'an yasārī nūrā, wa amāmī nūrā, wa khalfī nūrā, wa fawqī nūrā, wa taḥtī nūrā, waj'al lī nūrā",
                translation:
                    'Ya Allah, letakkanlah cahaya di hatiku, cahaya pada pendengaranku, cahaya pada penglihatanku, cahaya di sebelah kananku, kiri, depan, belakang, atas dan bawahku — dan kurniakanlah cahaya kepadaku.',
            },
            bn: {
                transliteration:
                    'আল্লাহুম্মাজআল ফী কালবী নূরা, ওয়া ফী সামঈ নূরা, ওয়া ফী বাসারী নূরা, ওয়া আন ইয়ামীনী নূরা, ওয়া আন ইয়াসারী নূরা, ওয়া আমামী নূরা, ওয়া খালফী নূরা, ওয়া ফাওকী নূরা, ওয়া তাহতী নূরা, ওয়াজআল লী নূরা',
                translation:
                    'হে আল্লাহ! আমার হৃদয়ে নূর রাখো, শ্রবণে নূর, দৃষ্টিতে নূর, আমার ডানে নূর, বামে নূর, সামনে নূর, পেছনে নূর, উপরে নূর, নিচে নূর — এবং আমাকে নূর দান করো।',
            },
        },
        references: [
            {
                type: 'hadith',
                source: 'Sahih al-Bukhari',
                number: '6316',
                grade: 'Sahih',
                narrator: 'Ibn Abbas',
                url: 'https://sunnah.com/bukhari:6316',
            },
            {
                type: 'hadith',
                source: 'Sahih Muslim',
                number: '763',
                grade: 'Sahih',
                narrator: 'Ibn Abbas',
                url: 'https://sunnah.com/muslim:763',
            },
        ],
        notes: "Ibn Abbas narrated that he heard the Prophet ﷺ say this supplication during his night prayer sujood. The word 'nur' (light) appears ten times, requesting divine illumination in every direction and dimension — a profound prayer for guidance and clarity.",
        whenToRecite:
            'Recited during Sujood in Tahajjud (night prayer). Ibn Abbas (رضي الله عنه) narrated hearing the Prophet ﷺ recite this in his night-prayer prostration. Asking for divine light in ten different aspects, it covers every dimension of spiritual and physical guidance.',
        audioUrl: placeholderAudio,
    },
]
