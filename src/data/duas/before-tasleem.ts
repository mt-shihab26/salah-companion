import type { DuaVariation } from './types'

export const beforeTasleemDuas: DuaVariation[] = [
    // ─── Dua 31 ──────────────────────────────────────────────────────────────
    {
        id: 'tasleem-1',
        positionId: 'before-tasleem',
        variationIndex: 1,
        label: 'Allahumma inni zalamtu nafsi (Wrongdoing)',
        arabic: 'اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا وَلَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ، فَاغْفِرْ لِي مَغْفِرَةً مِنْ عِنْدِكَ وَارْحَمْنِي، إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ',
        languages: {
            en: {
                transliteration:
                    "Allāhumma innī ẓalamtu nafsī ẓulman kathīrā wa lā yaghfiru dh-dhunūba illā Ant, faghfir lī maghfiratan min 'indika warḥamnī, innaka antal-Ghafūr ar-Raḥīm",
                translation:
                    'O Allah, I have greatly wronged myself and none forgives sins except You. So grant me forgiveness from You and have mercy on me. Surely, You are the Forgiving, the Merciful.',
            },
            ar: {
                transliteration:
                    'اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا وَلَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ، فَاغْفِرْ لِي مَغْفِرَةً مِنْ عِنْدِكَ وَارْحَمْنِي، إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ',
                translation:
                    'اللهم إني ظلمت نفسي ظلماً كثيراً ولا يغفر الذنوب إلا أنت، فاغفر لي مغفرةً من عندك وارحمني، إنك أنت الغفور الرحيم.',
            },
            fr: {
                transliteration:
                    "Allāhumma innī ẓalamtu nafsī ẓulman kathīrā wa lā yaghfiru dh-dhunūba illā Ant, faghfir lī maghfiratan min 'indika warḥamnī, innaka antal-Ghafūr ar-Raḥīm",
                translation:
                    "O Allah, j'ai grandement lésé mon âme et nul ne pardonne les péchés sauf Toi. Accorde-moi Ton pardon et aie pitié de moi. Certes, Tu es le Tout-Pardonnant, le Très-Miséricordieux.",
            },
            ur: {
                transliteration:
                    'اَللّٰہُمَّ اِنِّی ظَلَمتُ نَفسِی ظُلمًا کَثِیرًا وَلَا یَغفِرُ الذُّنُوبَ اِلَّا اَنتَ، فَاغفِر لِی مَغفِرَۃً مِّن عِندِکَ وَارحَمنِی، اِنَّکَ اَنتَ الغَفُورُ الرَّحِیم',
                translation:
                    'اے اللہ! بے شک میں نے اپنے نفس پر بہت ظلم کیا، اور گناہوں کو تیرے سوا کوئی نہیں بخشتا۔ پس تو اپنی طرف سے مجھے بخشش عطا فرما اور مجھ پر رحم فرما، بے شک تو ہی بخشنے والا مہربان ہے۔',
            },
            tr: {
                transliteration:
                    "Allāhumma innī ẓalamtu nafsī ẓulman kathīrā wa lā yaghfiru dh-dhunūba illā Ant, faghfir lī maghfiratan min 'indika warḥamnī, innaka antal-Ghafūr ar-Raḥīm",
                translation:
                    "Allah'ım! Ben nefsime pek çok zulüm ettim. Günahları Sen'den başkası bağışlamaz. Beni kendi katından bir bağışlamayla bağışla ve bana merhamet et. Şüphesiz Sen, çok bağışlayan, çok merhamet edensin.",
            },
            ms: {
                transliteration:
                    "Allāhumma innī ẓalamtu nafsī ẓulman kathīrā wa lā yaghfiru dh-dhunūba illā Ant, faghfir lī maghfiratan min 'indika warḥamnī, innaka antal-Ghafūr ar-Raḥīm",
                translation:
                    'Ya Allah, sesungguhnya aku telah banyak menganiaya diriku sendiri dan tidak ada yang mengampuni dosa-dosa melainkan Engkau. Maka ampunilah aku dengan keampunan dari sisi-Mu dan rahmatilah aku. Sesungguhnya Engkaulah Yang Maha Pengampun lagi Maha Penyayang.',
            },
            bn: {
                transliteration:
                    'আল্লাহুম্মা ইন্নী যালামতু নাফসী যুলমান কাসীরাঁ ওয়া লা ইয়াগফিরুয্ যুনূবা ইল্লা আন্তা, ফাগফির লী মাগফিরাতাম মিন ইন্দিকা ওয়ারহামনী, ইন্নাকা আন্তাল গাফুরুর রাহীম',
                translation:
                    'হে আল্লাহ! আমি নিজের উপর অনেক জুলুম করেছি এবং তুমি ছাড়া গুনাহ মাফ করার কেউ নেই। তুমি তোমার পক্ষ থেকে আমাকে ক্ষমা করো এবং আমার উপর রহম করো। নিশ্চয় তুমি ক্ষমাশীল ও দয়ালু।',
            },
        },
        references: [
            {
                type: 'hadith',
                source: 'Sahih al-Bukhari',
                number: '834',
                grade: 'Sahih',
                narrator: 'Abu Bakr al-Siddiq',
                url: 'https://sunnah.com/bukhari:834',
            },
            {
                type: 'hadith',
                source: 'Sahih Muslim',
                number: '2705',
                grade: 'Sahih',
                narrator: 'Abu Bakr al-Siddiq',
                url: 'https://sunnah.com/muslim:2705',
            },
        ],
        notes: "Abu Bakr al-Siddiq (رضي الله عنه) asked the Prophet ﷺ to teach him a supplication to say in his prayer, and the Prophet ﷺ taught him this dua. The phrase 'I have greatly wronged myself' is a deep expression of humility and self-accountability, while 'none forgives sins except You' acknowledges Allah's exclusive authority to pardon.",
        whenToRecite:
            "Recited silently while seated in the final Qa'dah, after the Salawat Ibrahimiyyah and before the Tasleem. This was specifically taught by the Prophet ﷺ as a prayer-dua. It is particularly recommended as a du'a to choose between the four classical refuge duas.",
    },

    // ─── Dua 32 ──────────────────────────────────────────────────────────────
    {
        id: 'tasleem-2',
        positionId: 'before-tasleem',
        variationIndex: 2,
        label: 'Allahumma ighfir li ma qaddamtu (Comprehensive Forgiveness)',
        arabic: 'اللَّهُمَّ اغْفِرْ لِي مَا قَدَّمْتُ وَمَا أَخَّرْتُ، وَمَا أَسْرَرْتُ وَمَا أَعْلَنْتُ، وَمَا أَسْرَفْتُ، وَمَا أَنْتَ أَعْلَمُ بِهِ مِنِّي، أَنْتَ الْمُقَدِّمُ وَأَنْتَ الْمُؤَخِّرُ، لَا إِلَهَ إِلَّا أَنْتَ',
        languages: {
            en: {
                transliteration:
                    "Allāhummaghfir lī mā qaddamtu wa mā akhkhartu, wa mā asrartu wa mā a'lantu, wa mā asraftu, wa mā anta a'lamu bihi minnī. Antal-muqaddimu wa antal-mu'akhkhir, lā ilāha illā ant",
                translation:
                    'O Allah, forgive me for what I have sent ahead and what I have left behind, what I have hidden and what I have made public, what I have exceeded in, and what You know better than I do. You are the One Who brings forward and the One Who puts back. There is no god worthy of worship except You.',
            },
            ar: {
                transliteration:
                    'اللَّهُمَّ اغْفِرْ لِي مَا قَدَّمْتُ وَمَا أَخَّرْتُ، وَمَا أَسْرَرْتُ وَمَا أَعْلَنْتُ، وَمَا أَسْرَفْتُ، وَمَا أَنْتَ أَعْلَمُ بِهِ مِنِّي، أَنْتَ الْمُقَدِّمُ وَأَنْتَ الْمُؤَخِّرُ، لَا إِلَهَ إِلَّا أَنْتَ',
                translation:
                    'اللهم اغفر لي ما قدمت وما أخرت، وما أسررت وما أعلنت، وما أسرفت، وما أنت أعلم به مني، أنت المقدم وأنت المؤخر، لا إله إلا أنت.',
            },
            fr: {
                transliteration:
                    "Allāhummaghfir lī mā qaddamtu wa mā akhkhartu, wa mā asrartu wa mā a'lantu, wa mā asraftu, wa mā anta a'lamu bihi minnī. Antal-muqaddimu wa antal-mu'akhkhir, lā ilāha illā ant",
                translation:
                    "O Allah, pardonne-moi ce que j'ai fait d'avance et ce que j'ai laissé derrière, ce que j'ai caché et ce que j'ai rendu public, ce en quoi j'ai exagéré, et ce que Tu sais mieux que moi. Tu es Celui Qui met en avant et Celui Qui remet en arrière. Il n'y a pas de dieu digne d'adoration excepté Toi.",
            },
            ur: {
                transliteration:
                    'اَللّٰہُمَّ اغفِر لِی مَا قَدَّمتُ وَمَا اَخَّرتُ، وَمَا اَسرَرتُ وَمَا اَعلَنتُ، وَمَا اَسرَفتُ، وَمَا اَنتَ اَعلَمُ بِہِ مِنِّی، اَنتَ المُقَدِّمُ وَاَنتَ المُؤَخِّر، لَا اِلٰہَ اِلَّا اَنت',
                translation:
                    'اے اللہ! مجھے بخش دے جو میں نے آگے بھیجا اور جو پیچھے چھوڑا، جو میں نے چھپایا اور جو ظاہر کیا، جس میں میں نے زیادتی کی، اور جو تو مجھ سے بہتر جانتا ہے۔ تو ہی آگے کرنے والا اور پیچھے کرنے والا ہے، تیرے سوا کوئی معبود نہیں۔',
            },
            tr: {
                transliteration:
                    "Allāhummaghfir lī mā qaddamtu wa mā akhkhartu, wa mā asrartu wa mā a'lantu, wa mā asraftu, wa mā anta a'lamu bihi minnī. Antal-muqaddimu wa antal-mu'akhkhir, lā ilāha illā ant",
                translation:
                    "Allah'ım, önce yapıp geçtiklerimi ve sonraya bıraktıklarımı, gizlediklerimi ve açığa vurduklarımı, aşırılıklarımı ve Senin benden daha iyi bildiklerimi bağışla. Sen öne geçiren ve geride bırakansın. Senden başka ilah yoktur.",
            },
            ms: {
                transliteration:
                    "Allāhummaghfir lī mā qaddamtu wa mā akhkhartu, wa mā asrartu wa mā a'lantu, wa mā asraftu, wa mā anta a'lamu bihi minnī. Antal-muqaddimu wa antal-mu'akhkhir, lā ilāha illā ant",
                translation:
                    'Ya Allah, ampunilah apa yang telah aku lakukan terlebih dahulu dan apa yang aku tangguhkan, apa yang aku sembunyikan dan apa yang aku nyatakan, apa yang aku berlebihan padanya, dan apa yang Engkau lebih mengetahuinya daripadaku. Engkaulah Yang Mendahulukan dan Yang Mengakhirkan. Tiada tuhan yang berhak disembah melainkan Engkau.',
            },
            bn: {
                transliteration:
                    'আল্লাহুম্মাগফির লী মা কাদ্দামতু ওয়া মা আখখারতু, ওয়া মা আসরারতু ওয়া মা আলান্তু, ওয়া মা আসরাফতু, ওয়া মা আন্তা আলামু বিহী মিন্নী। আন্তাল মুকাদ্দিমু ওয়া আন্তাল মুআখখির, লা ইলাহা ইল্লা আন্ত',
                translation:
                    'হে আল্লাহ! আমি যা আগে করেছি ও যা পরে করেছি, যা গোপনে করেছি ও যা প্রকাশ্যে করেছি, যেখানে বাড়াবাড়ি করেছি এবং যা তুমি আমার চেয়ে বেশি জানো — সবকিছু ক্ষমা করো। তুমিই অগ্রগামীকারী ও পশ্চাদ্গামীকারী। তুমি ছাড়া কোনো ইলাহ নেই।',
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
        notes: 'Ali ibn Abi Talib (رضي الله عنه) reported that the Prophet ﷺ would recite this dua between the tashahhud and tasleem in his night prayer (tahajjud). It is one of the most comprehensive duas for forgiveness, covering six dimensions of sins: past and future, hidden and public, excessive and unknown.',
        whenToRecite:
            "Recited silently in the final Qa'dah after Salawat Ibrahimiyyah and before Tasleem. Originally narrated from the Prophet ﷺ's night prayer (tahajjud), it is practised in all prayers. Its six-dimensional scope of forgiveness makes it especially fitting as a closing supplication before ending the prayer.",
    },

    // ─── Dua 33 ──────────────────────────────────────────────────────────────
    {
        id: 'tasleem-3',
        positionId: 'before-tasleem',
        variationIndex: 3,
        label: 'Four Refuges — Short Form',
        arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، وَمِنْ عَذَابِ النَّارِ، وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ، وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ',
        languages: {
            en: {
                transliteration:
                    "Allāhumma innī a'ūdhu bika min 'adhābil-qabr, wa min 'adhābin-nār, wa min fitnatil-maḥyā wal-mamāt, wa min sharri fitnatil-masīḥid-dajjāl",
                translation:
                    'O Allah, I seek refuge in You from the punishment of the grave, from the punishment of Hellfire, from the trials of life and death, and from the evil trial of the False Messiah (Dajjal).',
            },
            ar: {
                transliteration:
                    'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، وَمِنْ عَذَابِ النَّارِ، وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ، وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ',
                translation:
                    'اللهم إني أعوذ بك من عذاب القبر، ومن عذاب النار، ومن فتنة المحيا والممات، ومن شر فتنة المسيح الدجال.',
            },
            fr: {
                transliteration:
                    "Allāhumma innī a'ūdhu bika min 'adhābil-qabr, wa min 'adhābin-nār, wa min fitnatil-maḥyā wal-mamāt, wa min sharri fitnatil-masīḥid-dajjāl",
                translation:
                    "O Allah, je cherche refuge en Toi contre le châtiment du tombeau, contre le châtiment de l'Enfer, contre les épreuves de la vie et de la mort, et contre le mal de l'épreuve du Faux Messie (Dajjal).",
            },
            ur: {
                transliteration:
                    'اَللّٰہُمَّ اِنِّی اَعُوذُ بِکَ مِن عَذَابِ القَبر، وَمِن عَذَابِ النَّار، وَمِن فِتنَۃِ المَحیَا وَالمَمَات، وَمِن شَرِّ فِتنَۃِ المَسِیحِ الدَّجَّال',
                translation:
                    'اے اللہ! میں تیری پناہ مانگتا ہوں قبر کے عذاب سے، جہنم کے عذاب سے، زندگی اور موت کی آزمائش سے، اور مسیح دجال کے فتنے کی شر سے۔',
            },
            tr: {
                transliteration:
                    "Allāhumma innī a'ūdhu bika min 'adhābil-qabr, wa min 'adhābin-nār, wa min fitnatil-maḥyā wal-mamāt, wa min sharri fitnatil-masīḥid-dajjāl",
                translation:
                    "Allah'ım! Kabir azabından, cehennem azabından, hayat ve ölüm fitnesinden ve Deccal'in fitnesinin şerrinden Sana sığınırım.",
            },
            ms: {
                transliteration:
                    "Allāhumma innī a'ūdhu bika min 'adhābil-qabr, wa min 'adhābin-nār, wa min fitnatil-maḥyā wal-mamāt, wa min sharri fitnatil-masīḥid-dajjāl",
                translation:
                    'Ya Allah, aku berlindung kepada-Mu dari azab kubur, dari azab Neraka, dari fitnah kehidupan dan kematian, dan dari kejahatan fitnah Al-Masih al-Dajjal.',
            },
            bn: {
                transliteration:
                    'আল্লাহুম্মা ইন্নী আউযু বিকা মিন আযাবিল কাব্র, ওয়া মিন আযাবিন্নার, ওয়া মিন ফিতনাতিল মাহইয়া ওয়াল মামাত, ওয়া মিন শাররি ফিতনাতিল মাসীহিদ দাজ্জাল',
                translation:
                    'হে আল্লাহ! আমি তোমার কাছে কবরের আযাব থেকে, জাহান্নামের আযাব থেকে, জীবন ও মৃত্যুর ফিতনা থেকে এবং মিথ্যা মসীহ দাজ্জালের ফিতনার অনিষ্ট থেকে আশ্রয় চাই।',
            },
        },
        references: [
            {
                type: 'hadith',
                source: 'Sahih al-Bukhari',
                number: '789',
                grade: 'Sahih',
                narrator: 'Abu Hurayrah',
                url: 'https://sunnah.com/bukhari:789',
            },
            {
                type: 'hadith',
                source: 'Sahih Muslim',
                number: '588',
                grade: 'Sahih',
                narrator: 'Abu Hurayrah',
                url: 'https://sunnah.com/muslim:588',
            },
        ],
        notes: 'The Prophet ﷺ commanded that this refuge be sought in every prayer. Ibn Hajar al-Asqalani notes that seeking refuge from these four things covers the most dangerous threats a believer faces: spiritual torment after death, eternal punishment, deviation during life, and the greatest end-times trial. The Dajjal (False Messiah) is specifically named because his fitnah is the worst trial ever created.',
        whenToRecite:
            "Recited silently in the final Qa'dah after Salawat Ibrahimiyyah, before Tasleem. The Prophet ﷺ commanded it be said in every prayer (Abu Hurayrah in Bukhari). Some scholars hold it obligatory (wajib) due to the explicit command. It is one of the most universally practised duas before-tasleem across all madhabs.",
    },

    // ─── Dua 34 ──────────────────────────────────────────────────────────────
    {
        id: 'tasleem-4',
        positionId: 'before-tasleem',
        variationIndex: 4,
        label: 'Four Refuges + Refuge from Debt & Sin',
        arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، وَأَعُوذُ بِكَ مِنْ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ، وَأَعُوذُ بِكَ مِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْمَأْثَمِ وَالْمَغْرَمِ',
        languages: {
            en: {
                transliteration:
                    "Allāhumma innī a'ūdhu bika min 'adhābil-qabr, wa a'ūdhu bika min fitnatil-masīḥid-dajjāl, wa a'ūdhu bika min fitnatil-maḥyā wal-mamāt. Allāhumma innī a'ūdhu bika minal-ma'thami wal-maghram",
                translation:
                    'O Allah, I seek refuge in You from the punishment of the grave, and I seek refuge in You from the trial of the False Messiah, and I seek refuge in You from the trials of life and death. O Allah, I seek refuge in You from sin and debt.',
            },
            ar: {
                transliteration:
                    'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، وَأَعُوذُ بِكَ مِنْ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ، وَأَعُوذُ بِكَ مِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْمَأْثَمِ وَالْمَغْرَمِ',
                translation:
                    'اللهم إني أعوذ بك من عذاب القبر، وأعوذ بك من فتنة المسيح الدجال، وأعوذ بك من فتنة المحيا والممات. اللهم إني أعوذ بك من المأثم والمغرم.',
            },
            fr: {
                transliteration:
                    "Allāhumma innī a'ūdhu bika min 'adhābil-qabr, wa a'ūdhu bika min fitnatil-masīḥid-dajjāl, wa a'ūdhu bika min fitnatil-maḥyā wal-mamāt. Allāhumma innī a'ūdhu bika minal-ma'thami wal-maghram",
                translation:
                    "O Allah, je cherche refuge en Toi contre le châtiment du tombeau, et je cherche refuge en Toi contre l'épreuve du Faux Messie, et je cherche refuge en Toi contre les épreuves de la vie et de la mort. O Allah, je cherche refuge en Toi contre le péché et la dette.",
            },
            ur: {
                transliteration:
                    'اَللّٰہُمَّ اِنِّی اَعُوذُ بِکَ مِن عَذَابِ القَبر، وَاَعُوذُ بِکَ مِن فِتنَۃِ المَسِیحِ الدَّجَّال، وَاَعُوذُ بِکَ مِن فِتنَۃِ المَحیَا وَالمَمَات۔ اَللّٰہُمَّ اِنِّی اَعُوذُ بِکَ مِنَ المَاثَمِ وَالمَغرَم',
                translation:
                    'اے اللہ! میں تیری پناہ مانگتا ہوں قبر کے عذاب سے، دجال کے فتنے سے، اور زندگی و موت کی آزمائش سے۔ اے اللہ! میں تیری پناہ مانگتا ہوں گناہ اور قرض سے۔',
            },
            tr: {
                transliteration:
                    "Allāhumma innī a'ūdhu bika min 'adhābil-qabr, wa a'ūdhu bika min fitnatil-masīḥid-dajjāl, wa a'ūdhu bika min fitnatil-maḥyā wal-mamāt. Allāhumma innī a'ūdhu bika minal-ma'thami wal-maghram",
                translation:
                    "Allah'ım! Kabir azabından, Deccal'in fitnesinden, hayat ve ölüm fitnesinden Sana sığınırım. Allah'ım! Günahtan ve borçtan Sana sığınırım.",
            },
            ms: {
                transliteration:
                    "Allāhumma innī a'ūdhu bika min 'adhābil-qabr, wa a'ūdhu bika min fitnatil-masīḥid-dajjāl, wa a'ūdhu bika min fitnatil-maḥyā wal-mamāt. Allāhumma innī a'ūdhu bika minal-ma'thami wal-maghram",
                translation:
                    'Ya Allah, aku berlindung kepada-Mu dari azab kubur, dan aku berlindung kepada-Mu dari fitnah Al-Masih al-Dajjal, dan aku berlindung kepada-Mu dari fitnah kehidupan dan kematian. Ya Allah, aku berlindung kepada-Mu dari dosa dan hutang.',
            },
            bn: {
                transliteration:
                    'আল্লাহুম্মা ইন্নী আউযু বিকা মিন আযাবিল কাব্র, ওয়া আউযু বিকা মিন ফিতনাতিল মাসীহিদ দাজ্জাল, ওয়া আউযু বিকা মিন ফিতনাতিল মাহইয়া ওয়াল মামাত। আল্লাহুম্মা ইন্নী আউযু বিকা মিনাল মাসামি ওয়াল মাগরাম',
                translation:
                    'হে আল্লাহ! আমি তোমার কাছে কবরের আযাব থেকে, মিথ্যা মসীহ দাজ্জালের ফিতনা থেকে এবং জীবন ও মৃত্যুর ফিতনা থেকে আশ্রয় চাই। হে আল্লাহ! আমি তোমার কাছে পাপ ও ঋণ থেকে আশ্রয় চাই।',
            },
        },
        references: [
            {
                type: 'hadith',
                source: 'Sahih al-Bukhari',
                number: '832',
                grade: 'Sahih',
                narrator: 'Aishah',
                url: 'https://sunnah.com/bukhari:832',
            },
            {
                type: 'hadith',
                source: 'Sahih Muslim',
                number: '589',
                grade: 'Sahih',
                narrator: 'Aishah',
                url: 'https://sunnah.com/muslim:589',
            },
        ],
        notes: "This version adds refuge from debt (al-maghram) and sin (al-ma'thim) to the standard four refuges. When someone asked why the Prophet ﷺ sought refuge from debt so often, he replied: 'When a man is in debt, he speaks and lies, and he makes a promise and breaks it.' This dua recognises that financial and moral struggles are spiritual threats as much as worldly ones.",
        whenToRecite:
            "Recited silently in the final Qa'dah after Salawat Ibrahimiyyah, before Tasleem. Narrated from Aishah (رضي الله عنها) who reported the Prophet ﷺ reciting it in prayer. The addition of refuge from debt and sin makes it a broader companion to Dua 33 (the shorter four-refuge form).",
    },

    // ─── Dua 35 ──────────────────────────────────────────────────────────────
    {
        id: 'tasleem-5',
        positionId: 'before-tasleem',
        variationIndex: 5,
        label: "A'udhu bika min al-Bukhl (Miserliness & Cowardice)",
        arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْبُخْلِ، وَأَعُوذُ بِكَ مِنَ الْجُبْنِ، وَأَعُوذُ بِكَ أَنْ أُرَدَّ إِلَى أَرْذَلِ الْعُمُرِ، وَأَعُوذُ بِكَ مِنْ فِتْنَةِ الدُّنْيَا، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ',
        languages: {
            en: {
                transliteration:
                    "Allāhumma innī a'ūdhu bika minal-bukhl, wa a'ūdhu bika minal-jubn, wa a'ūdhu bika an uradda ilā ardhali-l-'umur, wa a'ūdhu bika min fitnatid-dunyā, wa a'ūdhu bika min 'adhābil-qabr",
                translation:
                    'O Allah, I seek refuge in You from miserliness, I seek refuge in You from cowardice, I seek refuge in You from being reduced to the worst of old age (senility), I seek refuge in You from the trial of this world, and I seek refuge in You from the punishment of the grave.',
            },
            ar: {
                transliteration:
                    'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْبُخْلِ، وَأَعُوذُ بِكَ مِنَ الْجُبْنِ، وَأَعُوذُ بِكَ أَنْ أُرَدَّ إِلَى أَرْذَلِ الْعُمُرِ، وَأَعُوذُ بِكَ مِنْ فِتْنَةِ الدُّنْيَا، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ',
                translation:
                    'اللهم إني أعوذ بك من البخل، وأعوذ بك من الجبن، وأعوذ بك أن أُرد إلى أرذل العمر، وأعوذ بك من فتنة الدنيا، وأعوذ بك من عذاب القبر.',
            },
            fr: {
                transliteration:
                    "Allāhumma innī a'ūdhu bika minal-bukhl, wa a'ūdhu bika minal-jubn, wa a'ūdhu bika an uradda ilā ardhali-l-'umur, wa a'ūdhu bika min fitnatid-dunyā, wa a'ūdhu bika min 'adhābil-qabr",
                translation:
                    "O Allah, je cherche refuge en Toi contre l'avarice, je cherche refuge en Toi contre la lâcheté, je cherche refuge en Toi contre le fait d'être réduit au pire de la vieillesse, je cherche refuge en Toi contre l'épreuve de ce monde, et je cherche refuge en Toi contre le châtiment du tombeau.",
            },
            ur: {
                transliteration:
                    'اَللّٰہُمَّ اِنِّی اَعُوذُ بِکَ مِنَ البُخل، وَاَعُوذُ بِکَ مِنَ الجُبن، وَاَعُوذُ بِکَ اَن اُرَدَّ اِلٰی اَرذَلِ العُمُر، وَاَعُوذُ بِکَ مِن فِتنَۃِ الدُّنیَا، وَاَعُوذُ بِکَ مِن عَذَابِ القَبر',
                translation:
                    'اے اللہ! میں تیری پناہ مانگتا ہوں بخل سے، بزدلی سے، بڑھاپے کی بدترین حالت تک پہنچنے سے، دنیا کی آزمائش سے، اور قبر کے عذاب سے۔',
            },
            tr: {
                transliteration:
                    "Allāhumma innī a'ūdhu bika minal-bukhl, wa a'ūdhu bika minal-jubn, wa a'ūdhu bika an uradda ilā ardhali-l-'umur, wa a'ūdhu bika min fitnatid-dunyā, wa a'ūdhu bika min 'adhābil-qabr",
                translation:
                    "Allah'ım! Cimrilikten, korkaklıktan, ömrün en kötüsüne (bunaklar çağına) döndürülmekten, dünyanın fitnesinden ve kabir azabından Sana sığınırım.",
            },
            ms: {
                transliteration:
                    "Allāhumma innī a'ūdhu bika minal-bukhl, wa a'ūdhu bika minal-jubn, wa a'ūdhu bika an uradda ilā ardhali-l-'umur, wa a'ūdhu bika min fitnatid-dunyā, wa a'ūdhu bika min 'adhābil-qabr",
                translation:
                    'Ya Allah, aku berlindung kepada-Mu dari sifat bakhil, aku berlindung kepada-Mu dari pengecut, aku berlindung kepada-Mu dari dikembalikan kepada usia yang paling hina (nyanyuk), aku berlindung kepada-Mu dari fitnah dunia, dan aku berlindung kepada-Mu dari azab kubur.',
            },
            bn: {
                transliteration:
                    'আল্লাহুম্মা ইন্নী আউযু বিকা মিনাল বুখল, ওয়া আউযু বিকা মিনাল জুবন, ওয়া আউযু বিকা আন উরাদ্দা ইলা আরযালিল উমুর, ওয়া আউযু বিকা মিন ফিতনাতিদ দুনইয়া, ওয়া আউযু বিকা মিন আযাবিল কাব্র',
                translation:
                    'হে আল্লাহ! আমি তোমার কাছে কৃপণতা থেকে, কাপুরুষতা থেকে, অতি বৃদ্ধ বয়সের অপমানজনক অবস্থায় ফিরে যাওয়া থেকে, দুনিয়ার ফিতনা থেকে এবং কবরের আযাব থেকে আশ্রয় চাই।',
            },
        },
        references: [
            {
                type: 'hadith',
                source: 'Sahih al-Bukhari',
                number: '2822',
                grade: 'Sahih',
                narrator: "Sa'd ibn Abi Waqqas",
                url: 'https://sunnah.com/bukhari:2822',
            },
        ],
        notes: "Sa'd ibn Abi Waqqas (رضي الله عنه) reported that the Prophet ﷺ used to seek refuge from these five things in every prayer. Miserliness (bukhl) and cowardice (jubn) are linked because they both stem from excessive attachment to the self. 'The worst of old age' refers to severe cognitive decline (kharaf/senility) that strips a person of their intellectual and spiritual capacity.",
        whenToRecite:
            "Recited silently in the final Qa'dah after Salawat Ibrahimiyyah, before Tasleem. Sa'd ibn Abi Waqqas reported the Prophet ﷺ recited these five refuges in every prayer (Bukhari 2822). It addresses character weaknesses that undermine worship and service to Allah — making it a spiritually self-corrective prayer.",
    },

    // ─── Dua 36 ──────────────────────────────────────────────────────────────
    {
        id: 'tasleem-6',
        positionId: 'before-tasleem',
        variationIndex: 6,
        label: "As'aluka bi annakal Wahid al-Ahad (Divine Attributes of Al-Ikhlas)",
        arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ بِأَنَّكَ أَنْتَ اللَّهُ لَا إِلَهَ إِلَّا أَنْتَ الْأَحَدُ الصَّمَدُ الَّذِي لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ، أَنْ تَغْفِرَ لِي ذُنُوبِي إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ',
        languages: {
            en: {
                transliteration:
                    "Allāhumma innī as'aluka bi-annaka Allāhu lā ilāha illā Antal-Aḥad aṣ-Ṣamad alladhī lam yalid wa lam yūlad wa lam yakun lahu kufuwan aḥad, an taghfira lī dhunūbī innaka antal-Ghafūr ar-Raḥīm",
                translation:
                    'O Allah, I ask You, testifying that You are Allah, there is no god worthy of worship except You, the One, the Eternal Refuge, Who neither begets nor was begotten, and there is none equal to Him — that You forgive me my sins. Surely You are the Forgiving, the Merciful.',
            },
            ar: {
                transliteration:
                    'اللَّهُمَّ إِنِّي أَسْأَلُكَ بِأَنَّكَ أَنْتَ اللَّهُ لَا إِلَهَ إِلَّا أَنْتَ الْأَحَدُ الصَّمَدُ الَّذِي لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ، أَنْ تَغْفِرَ لِي ذُنُوبِي إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ',
                translation:
                    'اللهم إني أسألك بأنك أنت الله لا إله إلا أنت الأحد الصمد الذي لم يلد ولم يولد ولم يكن له كفواً أحد، أن تغفر لي ذنوبي إنك أنت الغفور الرحيم.',
            },
            fr: {
                transliteration:
                    "Allāhumma innī as'aluka bi-annaka Allāhu lā ilāha illā Antal-Aḥad aṣ-Ṣamad alladhī lam yalid wa lam yūlad wa lam yakun lahu kufuwan aḥad, an taghfira lī dhunūbī innaka antal-Ghafūr ar-Raḥīm",
                translation:
                    "O Allah, je Te demande en attestant que Tu es Allah, il n'y a pas de dieu digne d'adoration sauf Toi, l'Unique, le Maître Absolu, Qui n'a pas engendré et n'a pas été engendré, et nul n'est Son égal — de me pardonner mes péchés. Certes, Tu es le Tout-Pardonnant, le Très-Miséricordieux.",
            },
            ur: {
                transliteration:
                    'اَللّٰہُمَّ اِنِّی اَسئَلُکَ بِاَنَّکَ اَللّٰہُ لَا اِلٰہَ اِلَّا اَنتَ الاَحَدُ الصَّمَدُ الَّذِی لَم یَلِد وَلَم یُولَد وَلَم یَکُن لَّہُ کُفُوًا اَحَد، اَن تَغفِرَ لِی ذُنُوبِی اِنَّکَ اَنتَ الغَفُورُ الرَّحِیم',
                translation:
                    'اے اللہ! میں تجھ سے مانگتا ہوں اس بات کی گواہی دیتے ہوئے کہ تو اللہ ہے، تیرے سوا کوئی معبود نہیں، یکتا، بے نیاز، جس نے نہ جنا اور نہ وہ جنا گیا، اور اس کا کوئی ہمسر نہیں — کہ تو میرے گناہ بخش دے، بے شک تو بخشنے والا مہربان ہے۔',
            },
            tr: {
                transliteration:
                    "Allāhumma innī as'aluka bi-annaka Allāhu lā ilāha illā Antal-Aḥad aṣ-Ṣamad alladhī lam yalid wa lam yūlad wa lam yakun lahu kufuwan aḥad, an taghfira lī dhunūbī innaka antal-Ghafūr ar-Raḥīm",
                translation:
                    "Allah'ım! Tek ilah olan, hiç doğurmamış ve doğurulmamış, hiç kimse O'na denk olmamış Ahad ve Samed Allah olduğunu tanıklık ederek günahlarımı bağışlamanı istiyorum. Sen Gafûr ve Rahîm'sin.",
            },
            ms: {
                transliteration:
                    "Allāhumma innī as'aluka bi-annaka Allāhu lā ilāha illā Antal-Aḥad aṣ-Ṣamad alladhī lam yalid wa lam yūlad wa lam yakun lahu kufuwan aḥad, an taghfira lī dhunūbī innaka antal-Ghafūr ar-Raḥīm",
                translation:
                    'Ya Allah, aku memohon kepada-Mu dengan bersaksi bahawa Engkaulah Allah, tiada tuhan yang berhak disembah melainkan Engkau, Yang Maha Esa, Yang Menjadi Tempat Bergantung, Yang tidak beranak dan tidak diperanakkan, dan tidak ada seorang pun yang setara dengan-Nya — agar Engkau mengampuni dosa-dosaku. Sesungguhnya Engkau Maha Pengampun lagi Maha Penyayang.',
            },
            bn: {
                transliteration:
                    'আল্লাহুম্মা ইন্নী আসআলুকা বিআন্নাকা আল্লাহু লা ইলাহা ইল্লা আন্তাল আহাদুস সামাদুল্লাযী লাম ইয়ালিদ ওয়া লাম ইউলাদ ওয়া লাম ইয়াকুল লাহু কুফুওয়ান আহাদ, আন তাগফিরা লী যুনূবী ইন্নাকা আন্তাল গাফুরুর রাহীম',
                translation:
                    'হে আল্লাহ! আমি তোমার কাছে প্রার্থনা করি এই সাক্ষ্য দিয়ে যে, তুমিই আল্লাহ, তুমি ছাড়া কোনো ইলাহ নেই, তুমি একক, অমুখাপেক্ষী, যিনি জন্ম দেননি এবং জন্মগ্রহণও করেননি, এবং তাঁর কোনো সমকক্ষ নেই — যে তুমি আমার গুনাহ ক্ষমা করো। নিশ্চয় তুমি ক্ষমাশীল ও দয়ালু।',
            },
        },
        references: [
            {
                type: 'quran',
                surah: 112,
                ayah: 1,
                ayahEnd: 4,
                surahName: 'Al-Ikhlas',
                surahNameArabic: 'الإخلاص',
                url: 'https://quran.com/112',
            },
            {
                type: 'hadith',
                source: 'Sunan Abu Dawud',
                number: '985',
                grade: 'Sahih',
                narrator: 'Buraidah al-Aslami',
                url: 'https://sunnah.com/abudawud:985',
            },
            {
                type: 'hadith',
                source: 'Sunan al-Nasai',
                number: '1300',
                grade: 'Sahih',
                narrator: 'Buraidah al-Aslami',
                url: 'https://sunnah.com/nasai:1300',
            },
        ],
        notes: "The Prophet ﷺ heard a man recite this dua in his prayer and said: 'He has asked Allah by His greatest Name (Ism al-A'zam), the one by which if He is asked He gives, and by which if He is called upon He responds.' The dua uses the attributes from Surah Al-Ikhlas as a means of beseeching Allah, making it one of the most powerful supplications for forgiveness.",
        whenToRecite:
            "Recited silently in the final Qa'dah after Salawat Ibrahimiyyah, before Tasleem. The Prophet ﷺ confirmed it invokes Allah's Greatest Name (Ism al-A'zam), making it among the most potent closing supplications. Particularly recommended when seeking forgiveness for major sins or asking for a significant need.",
    },

    // ─── Dua 37 ──────────────────────────────────────────────────────────────
    {
        id: 'tasleem-7',
        positionId: 'before-tasleem',
        variationIndex: 7,
        label: "As'aluka bil-Mannan Badi' al-Samawat (Creator of the Heavens)",
        arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ بِأَنَّ لَكَ الْحَمْدَ لَا إِلَهَ إِلَّا أَنْتَ الْمَنَّانُ، بَدِيعُ السَّمَاوَاتِ وَالْأَرْضِ، يَا ذَا الْجَلَالِ وَالْإِكْرَامِ، يَا حَيُّ يَا قَيُّومُ، إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ',
        languages: {
            en: {
                transliteration:
                    "Allāhumma innī as'aluka bi-anna lakal-ḥamda lā ilāha illā Antal-Mannān, Badī'as-samāwāti wal-arḍ, yā Dhal-Jalāli wal-Ikrām, yā Ḥayyu yā Qayyūm, innī as'alukal-jannata wa a'ūdhu bika minan-nār",
                translation:
                    'O Allah, I ask You, since all praise belongs to You, there is no god worthy of worship except You, the Bestower of Blessings, the Originator of the heavens and the earth, O Possessor of Majesty and Honour, O Ever-Living, O Self-Sustaining — I ask You for Paradise and I seek Your refuge from the Fire.',
            },
            ar: {
                transliteration:
                    'اللَّهُمَّ إِنِّي أَسْأَلُكَ بِأَنَّ لَكَ الْحَمْدَ لَا إِلَهَ إِلَّا أَنْتَ الْمَنَّانُ، بَدِيعُ السَّمَاوَاتِ وَالْأَرْضِ، يَا ذَا الْجَلَالِ وَالْإِكْرَامِ، يَا حَيُّ يَا قَيُّومُ، إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ',
                translation:
                    'اللهم إني أسألك بأن لك الحمد لا إله إلا أنت المنان، بديع السماوات والأرض، يا ذا الجلال والإكرام، يا حي يا قيوم، إني أسألك الجنة وأعوذ بك من النار.',
            },
            fr: {
                transliteration:
                    "Allāhumma innī as'aluka bi-anna lakal-ḥamda lā ilāha illā Antal-Mannān, Badī'as-samāwāti wal-arḍ, yā Dhal-Jalāli wal-Ikrām, yā Ḥayyu yā Qayyūm, innī as'alukal-jannata wa a'ūdhu bika minan-nār",
                translation:
                    "O Allah, je Te demande car toute la louange T'appartient, il n'y a pas de dieu digne d'adoration sauf Toi, le Bienfaiteur, l'Initiateur des cieux et de la terre, Ô Possesseur de Majesté et d'Honneur, Ô Vivant, Ô Subsistant par Lui-même — je Te demande le Paradis et je cherche refuge en Toi contre le Feu.",
            },
            ur: {
                transliteration:
                    'اَللّٰہُمَّ اِنِّی اَسئَلُکَ بِاَنَّ لَکَ الحَمدَ لَا اِلٰہَ اِلَّا اَنتَ المَنَّانُ، بَدِیعُ السَّمَاوَاتِ وَالاَرض، یَا ذَا الجَلَالِ وَالاِکرَام، یَا حَیُّ یَا قَیُّوم، اِنِّی اَسئَلُکَ الجَنَّۃَ وَاَعُوذُ بِکَ مِنَ النَّار',
                translation:
                    'اے اللہ! میں تجھ سے مانگتا ہوں کیونکہ تمام تعریف تیری ہے، تیرے سوا کوئی معبود نہیں، احسان کرنے والا، آسمانوں اور زمین کا موجد، اے جلال و اکرام والے، اے ہمیشہ زندہ، اے سب کو قائم رکھنے والے — میں تجھ سے جنت مانگتا ہوں اور جہنم سے پناہ مانگتا ہوں۔',
            },
            tr: {
                transliteration:
                    "Allāhumma innī as'aluka bi-anna lakal-ḥamda lā ilāha illā Antal-Mannān, Badī'as-samāwāti wal-arḍ, yā Dhal-Jalāli wal-Ikrām, yā Ḥayyu yā Qayyūm, innī as'alukal-jannata wa a'ūdhu bika minan-nār",
                translation:
                    "Allah'ım! Tüm hamd Sana ait olduğu için, Sen'den başka ilah olmayan, Mannân, göklerin ve yerin Bedî'i, ey Celâl ve İkrâm Sahibi, ey Hayy, ey Kayyûm olduğun için Senden cenneti istiyorum ve Senden cehennemden sığınıyorum.",
            },
            ms: {
                transliteration:
                    "Allāhumma innī as'aluka bi-anna lakal-ḥamda lā ilāha illā Antal-Mannān, Badī'as-samāwāti wal-arḍ, yā Dhal-Jalāli wal-Ikrām, yā Ḥayyu yā Qayyūm, innī as'alukal-jannata wa a'ūdhu bika minan-nār",
                translation:
                    'Ya Allah, aku memohon kepada-Mu kerana segala pujian adalah milik-Mu, tiada tuhan yang berhak disembah melainkan Engkau, Yang Maha Pemberi, Pencipta langit dan bumi, wahai Yang Memiliki Keagungan dan Kehormatan, wahai Yang Maha Hidup, wahai Yang Maha Berdiri Sendiri — aku memohon kepada-Mu syurga dan aku berlindung kepada-Mu dari Neraka.',
            },
            bn: {
                transliteration:
                    'আল্লাহুম্মা ইন্নী আসআলুকা বিআন্না লাকাল হামদা লা ইলাহা ইল্লা আন্তাল মান্নান, বাদীআস সামাওয়াতি ওয়াল আরদ, ইয়া যাল জালালি ওয়াল ইকরাম, ইয়া হাইয়্যু ইয়া কাইয়্যূম, ইন্নী আসআলুকাল জান্নাতা ওয়া আউযু বিকা মিনান্নার',
                translation:
                    'হে আল্লাহ! আমি তোমার কাছে প্রার্থনা করি কারণ সকল প্রশংসা তোমার — তুমি ছাড়া কোনো ইলাহ নেই, তুমি মান্নান (মহা অনুগ্রহশীল), আসমান ও জমিনের সৃষ্টিকর্তা, হে মহিমা ও সম্মানের অধিকারী, হে চিরঞ্জীব, হে চিরস্থায়ী — আমি তোমার কাছে জান্নাত চাই এবং জাহান্নাম থেকে আশ্রয় চাই।',
            },
        },
        references: [
            {
                type: 'hadith',
                source: 'Sunan Abu Dawud',
                number: '1495',
                grade: 'Sahih',
                narrator: 'Anas ibn Malik',
                url: 'https://sunnah.com/abudawud:1495',
            },
            {
                type: 'hadith',
                source: 'Sunan al-Nasai',
                number: '1301',
                grade: 'Sahih',
                narrator: 'Anas ibn Malik',
                url: 'https://sunnah.com/nasai:1301',
            },
        ],
        notes: "The Prophet ﷺ heard a man asking by these names and attributes and said: 'He has asked Allah by His Greatest Name (Ism al-A'zam).' The two divine names al-Mannan (Bestower of blessings without expectation of return) and al-Hayy al-Qayyum (Ever-Living, Self-Sustaining) are considered among the greatest of Allah's names. Ending with a request for Paradise and refuge from the Fire aligns with the Prophet ﷺ's counsel that these two goals encompass all one needs.",
        whenToRecite:
            "Recited silently in the final Qa'dah after Salawat Ibrahimiyyah, before Tasleem. The Prophet ﷺ confirmed it invokes Allah's Greatest Name. This dua culminates in requesting the two ultimate goals — Paradise and protection from the Fire — making it an ideal closing prayer summarising all human need.",
    },

    // ─── Dua 38 ──────────────────────────────────────────────────────────────
    {
        id: 'tasleem-8',
        positionId: 'before-tasleem',
        variationIndex: 8,
        label: 'Refuge from Hell, Grave & Dajjal — Extended Form',
        arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ جَهَنَّمَ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، وَأَعُوذُ بِكَ مِنْ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ، وَأَعُوذُ بِكَ مِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ',
        languages: {
            en: {
                transliteration:
                    "Allāhumma innī a'ūdhu bika min 'adhābi jahannam, wa a'ūdhu bika min 'adhābil-qabr, wa a'ūdhu bika min fitnatil-masīḥid-dajjāl, wa a'ūdhu bika min fitnatil-maḥyā wal-mamāt",
                translation:
                    'O Allah, I seek refuge in You from the punishment of Hellfire, I seek refuge in You from the punishment of the grave, I seek refuge in You from the trial of the False Messiah (Dajjal), and I seek refuge in You from the trials of life and death.',
            },
            ar: {
                transliteration:
                    'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ جَهَنَّمَ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، وَأَعُوذُ بِكَ مِنْ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ، وَأَعُوذُ بِكَ مِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ',
                translation:
                    'اللهم إني أعوذ بك من عذاب جهنم، وأعوذ بك من عذاب القبر، وأعوذ بك من فتنة المسيح الدجال، وأعوذ بك من فتنة المحيا والممات.',
            },
            fr: {
                transliteration:
                    "Allāhumma innī a'ūdhu bika min 'adhābi jahannam, wa a'ūdhu bika min 'adhābil-qabr, wa a'ūdhu bika min fitnatil-masīḥid-dajjāl, wa a'ūdhu bika min fitnatil-maḥyā wal-mamāt",
                translation:
                    "O Allah, je cherche refuge en Toi contre le châtiment de l'Enfer, je cherche refuge en Toi contre le châtiment du tombeau, je cherche refuge en Toi contre l'épreuve du Faux Messie, et je cherche refuge en Toi contre les épreuves de la vie et de la mort.",
            },
            ur: {
                transliteration:
                    'اَللّٰہُمَّ اِنِّی اَعُوذُ بِکَ مِن عَذَابِ جَہَنَّم، وَاَعُوذُ بِکَ مِن عَذَابِ القَبر، وَاَعُوذُ بِکَ مِن فِتنَۃِ المَسِیحِ الدَّجَّال، وَاَعُوذُ بِکَ مِن فِتنَۃِ المَحیَا وَالمَمَات',
                translation:
                    'اے اللہ! میں تیری پناہ مانگتا ہوں جہنم کے عذاب سے، قبر کے عذاب سے، مسیح دجال کے فتنے سے، اور زندگی اور موت کی آزمائشوں سے۔',
            },
            tr: {
                transliteration:
                    "Allāhumma innī a'ūdhu bika min 'adhābi jahannam, wa a'ūdhu bika min 'adhābil-qabr, wa a'ūdhu bika min fitnatil-masīḥid-dajjāl, wa a'ūdhu bika min fitnatil-maḥyā wal-mamāt",
                translation:
                    "Allah'ım! Cehennem azabından, kabir azabından, Deccal'in fitnesinden ve hayat ile ölümün fitnesinden Sana sığınırım.",
            },
            ms: {
                transliteration:
                    "Allāhumma innī a'ūdhu bika min 'adhābi jahannam, wa a'ūdhu bika min 'adhābil-qabr, wa a'ūdhu bika min fitnatil-masīḥid-dajjāl, wa a'ūdhu bika min fitnatil-maḥyā wal-mamāt",
                translation:
                    'Ya Allah, aku berlindung kepada-Mu dari azab Neraka Jahannam, aku berlindung kepada-Mu dari azab kubur, aku berlindung kepada-Mu dari fitnah Al-Masih al-Dajjal, dan aku berlindung kepada-Mu dari fitnah kehidupan dan kematian.',
            },
            bn: {
                transliteration:
                    'আল্লাহুম্মা ইন্নী আউযু বিকা মিন আযাবি জাহান্নাম, ওয়া আউযু বিকা মিন আযাবিল কাব্র, ওয়া আউযু বিকা মিন ফিতনাতিল মাসীহিদ দাজ্জাল, ওয়া আউযু বিকা মিন ফিতনাতিল মাহইয়া ওয়াল মামাত',
                translation:
                    'হে আল্লাহ! আমি তোমার কাছে জাহান্নামের আযাব থেকে, কবরের আযাব থেকে, মিথ্যা মসীহ দাজ্জালের ফিতনা থেকে এবং জীবন ও মৃত্যুর ফিতনা থেকে আশ্রয় চাই।',
            },
        },
        references: [
            {
                type: 'hadith',
                source: 'Sahih al-Bukhari',
                number: '1377',
                grade: 'Sahih',
                narrator: 'Abu Hurayrah',
                url: 'https://sunnah.com/bukhari:1377',
            },
            {
                type: 'hadith',
                source: 'Sahih Muslim',
                number: '590',
                grade: 'Sahih',
                narrator: 'Abu Hurayrah',
                url: 'https://sunnah.com/muslim:590',
            },
        ],
        notes: "This version of the four-refuge dua explicitly names 'Jahannam' (the specific name of Hell in Arabic) rather than the generic 'an-nar' (the Fire), emphasising the severity of the refuge being sought. The order here — Hell, grave, Dajjal, life/death — differs slightly from Dua 33, reflecting different narrations. Both arrangements are authentically reported from the Prophet ﷺ.",
        whenToRecite:
            "Recited silently in the final Qa'dah after Salawat Ibrahimiyyah, before Tasleem. This extended form (using 'Jahannam' explicitly) was taught in the context of instructing the deceased's family on du'a, and is also used in prayer. It is interchangeable with Dua 33 depending on which narration one follows.",
    },

    // ─── Dua 39 ──────────────────────────────────────────────────────────────
    {
        id: 'tasleem-9',
        positionId: 'before-tasleem',
        variationIndex: 9,
        label: 'Refuge from Weakness, Laziness & the Grave',
        arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَالْجُبْنِ وَالْهَرَمِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، وَأَعُوذُ بِكَ مِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ',
        languages: {
            en: {
                transliteration:
                    "Allāhumma innī a'ūdhu bika minal-'ajzi wal-kasal, wal-jubn wal-haram wal-bukhl, wa a'ūdhu bika min 'adhābil-qabr, wa a'ūdhu bika min fitnatil-maḥyā wal-mamāt",
                translation:
                    'O Allah, I seek refuge in You from incapacity, laziness, cowardice, senile old age (loss of mind), and miserliness. I seek refuge in You from the punishment of the grave and from the trials of life and death.',
            },
            ar: {
                transliteration:
                    'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَالْجُبْنِ وَالْهَرَمِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، وَأَعُوذُ بِكَ مِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ',
                translation:
                    'اللهم إني أعوذ بك من العجز والكسل، والجبن والهرم والبخل، وأعوذ بك من عذاب القبر، وأعوذ بك من فتنة المحيا والممات.',
            },
            fr: {
                transliteration:
                    "Allāhumma innī a'ūdhu bika minal-'ajzi wal-kasal, wal-jubn wal-haram wal-bukhl, wa a'ūdhu bika min 'adhābil-qabr, wa a'ūdhu bika min fitnatil-maḥyā wal-mamāt",
                translation:
                    "O Allah, je cherche refuge en Toi contre l'incapacité, la paresse, la lâcheté, la sénilité et l'avarice. Je cherche refuge en Toi contre le châtiment du tombeau et contre les épreuves de la vie et de la mort.",
            },
            ur: {
                transliteration:
                    'اَللّٰہُمَّ اِنِّی اَعُوذُ بِکَ مِنَ العَجزِ وَالکَسَل، وَالجُبنِ وَالہَرَمِ وَالبُخل، وَاَعُوذُ بِکَ مِن عَذَابِ القَبر، وَاَعُوذُ بِکَ مِن فِتنَۃِ المَحیَا وَالمَمَات',
                translation:
                    'اے اللہ! میں تیری پناہ مانگتا ہوں عاجزی، سستی، بزدلی، انتہائی بڑھاپے اور بخل سے۔ اور میں تیری پناہ مانگتا ہوں قبر کے عذاب سے، اور زندگی و موت کی آزمائشوں سے۔',
            },
            tr: {
                transliteration:
                    "Allāhumma innī a'ūdhu bika minal-'ajzi wal-kasal, wal-jubn wal-haram wal-bukhl, wa a'ūdhu bika min 'adhābil-qabr, wa a'ūdhu bika min fitnatil-maḥyā wal-mamāt",
                translation:
                    "Allah'ım! Acizlikten, tembellikten, korkaklıktan, bunaklıktan ve cimrilikten Sana sığınırım. Kabir azabından ve hayat ile ölüm fitnesinden Sana sığınırım.",
            },
            ms: {
                transliteration:
                    "Allāhumma innī a'ūdhu bika minal-'ajzi wal-kasal, wal-jubn wal-haram wal-bukhl, wa a'ūdhu bika min 'adhābil-qabr, wa a'ūdhu bika min fitnatil-maḥyā wal-mamāt",
                translation:
                    'Ya Allah, aku berlindung kepada-Mu dari kelemahan dan kemalasan, pengecut dan nyanyuk serta kebakhilan. Aku berlindung kepada-Mu dari azab kubur, dan aku berlindung kepada-Mu dari fitnah kehidupan dan kematian.',
            },
            bn: {
                transliteration:
                    'আল্লাহুম্মা ইন্নী আউযু বিকা মিনাল আজযি ওয়াল কাসাল, ওয়াল জুবনি ওয়াল হারামি ওয়াল বুখল, ওয়া আউযু বিকা মিন আযাবিল কাব্র, ওয়া আউযু বিকা মিন ফিতনাতিল মাহইয়া ওয়াল মামাত',
                translation:
                    'হে আল্লাহ! আমি তোমার কাছে অক্ষমতা, অলসতা, কাপুরুষতা, অতি বার্ধক্য এবং কৃপণতা থেকে আশ্রয় চাই। আমি তোমার কাছে কবরের আযাব থেকে এবং জীবন ও মৃত্যুর ফিতনা থেকে আশ্রয় চাই।',
            },
        },
        references: [
            {
                type: 'hadith',
                source: 'Sahih al-Bukhari',
                number: '6367',
                grade: 'Sahih',
                narrator: 'Anas ibn Malik',
                url: 'https://sunnah.com/bukhari:6367',
            },
            {
                type: 'hadith',
                source: 'Sahih Muslim',
                number: '2706',
                grade: 'Sahih',
                narrator: 'Anas ibn Malik',
                url: 'https://sunnah.com/muslim:2706',
            },
        ],
        notes: "Anas ibn Malik (رضي الله عنه) reported that the Prophet ﷺ frequently sought refuge from these five character flaws. 'Al-ajz' (incapacity) refers to being unable to perform worship and good deeds. 'Al-kasal' (laziness) refers to having the ability but lacking the will. Together they cover two distinct reasons why a person might fail in their duties. 'Al-haram' (extreme old age / senility) is listed alongside spiritual and moral weaknesses, highlighting that the loss of mental faculty is as much a concern as moral failure.",
        whenToRecite:
            "Recited silently in the final Qa'dah after Salawat Ibrahimiyyah, before Tasleem. Anas ibn Malik narrated the Prophet ﷺ frequently used this dua (Bukhari 6367, Muslim 2706). The combination of character flaws (laziness, cowardice, miserliness) with afterlife threats (grave punishment) reflects the Islamic view that worldly character and eternal fate are intertwined.",
    },
]
