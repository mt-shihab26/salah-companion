import type { DuaVariation } from './types'

export const sajdahDuas: DuaVariation[] = [
  // ─── Dua 18 ──────────────────────────────────────────────────────────────
  {
    id: 'sajdah-1',
    positionId: 'sajdah',
    variationIndex: 1,
    label: "Subhana Rabbi al-A'la",
    arabic: 'سُبْحَانَ رَبِّيَ الْأَعْلَى',
    transliteration: "Subḥāna Rabbiy al-A'lā",
    translations: {
      en: 'Glory be to my Lord, the Most High.',
      ar: 'سبحان ربي الأعلى.',
      fr: 'Gloire à mon Seigneur, le Très Haut.',
      ur: 'پاک ہے میرا رب، سب سے اعلیٰ۔',
      tr: 'En Yüce Rabbimi tesbih ederim.',
      ms: 'Maha Suci Tuhanku Yang Maha Tinggi.',
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
    notes:
      "The most obligatory dhikr in sujood. Corresponds to the Quranic command: 'Glorify the name of your Lord, the Most High' (Al-A'la 87:1). Minimum three repetitions; seven or more in voluntary prayers.",
  },

  // ─── Dua 19 ──────────────────────────────────────────────────────────────
  {
    id: 'sajdah-2',
    positionId: 'sajdah',
    variationIndex: 2,
    label: 'Allahumma ighfir li ma asrart (Sajdah)',
    arabic: 'اللَّهُمَّ اغْفِرْ لِي مَا أَسْرَرْتُ وَمَا أَعْلَنْتُ',
    transliteration: "Allāhummaghfir lī mā asrartu wa mā a'lant",
    translations: {
      en: 'O Allah, forgive me for what I have done in secret and what I have done openly.',
      ar: 'اللهم اغفر لي ما أسررت وما أعلنت.',
      fr: "O Allah, pardonne-moi pour ce que j'ai fait en secret et pour ce que j'ai fait ouvertement.",
      ur: 'اے اللہ! مجھے معاف فرما جو میں نے چھپ کر کیا اور جو میں نے علانیہ کیا۔',
      tr: "Allah'ım, gizli yaptıklarımı ve açıkça yaptıklarımı bağışla.",
      ms: 'Ya Allah, ampunkanlah aku atas apa yang aku lakukan secara tersembunyi dan secara terang-terangan.',
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
    notes:
      'Sujood is the closest position to Allah. The Prophet ﷺ said: "The closest a servant is to his Lord is when he is in sujood, so make many duas." This dua seeks forgiveness for all hidden and open sins.',
  },

  // ─── Dua 20 ──────────────────────────────────────────────────────────────
  {
    id: 'sajdah-3',
    positionId: 'sajdah',
    variationIndex: 3,
    label: 'Subbuhun Quddus (Sajdah)',
    arabic: 'سُبُّوحٌ قُدُّوسٌ رَبُّ الْمَلَائِكَةِ وَالرُّوحِ',
    transliteration: "Subbūḥun Quddūs, Rabbul-malā'ikati war-rūḥ",
    translations: {
      en: 'Most Glorified, Most Holy, Lord of the angels and the Spirit (Jibreel).',
      ar: 'سبوح قدوس رب الملائكة والروح.',
      fr: 'Très Glorifié, Très Saint, Seigneur des anges et de l\'Esprit.',
      ur: 'نہایت پاک، نہایت مقدس، فرشتوں اور روح (جبریل) کا رب۔',
      tr: 'Çok Yüce, Çok Kutsal, meleklerin ve Ruh\'un Rabbi.',
      ms: 'Maha Suci, Maha Kudus, Tuhan para malaikat dan Roh.',
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
  },

  // ─── Dua 21 ──────────────────────────────────────────────────────────────
  {
    id: 'sajdah-4',
    positionId: 'sajdah',
    variationIndex: 4,
    label: 'Subhanaka wa bihamdika la ilaha illa anta (Sajdah)',
    arabic: 'سُبْحَانَكَ وَبِحَمْدِكَ لَا إِلَهَ إِلَّا أَنْتَ',
    transliteration: 'Subḥānaka wa biḥamdika lā ilāha illā ant',
    translations: {
      en: 'Glory be to You, and all praise. There is no god worthy of worship except You.',
      ar: 'سبحانك وبحمدك لا إله إلا أنت.',
      fr: "Gloire à Toi et toute louange. Il n'y a pas de dieu digne d'adoration excepté Toi.",
      ur: 'تو پاک ہے اور تیری حمد ہے، تیرے سوا کوئی معبود نہیں۔',
      tr: 'Seni tesbih eder ve hamd ederim. Senden başka ilah yoktur.',
      ms: 'Maha Suci Engkau dan dengan memuji-Mu. Tiada tuhan yang berhak disembah melainkan Engkau.',
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
  },

  // ─── Dua 22 ──────────────────────────────────────────────────────────────
  {
    id: 'sajdah-5',
    positionId: 'sajdah',
    variationIndex: 5,
    label: 'Subhanaka Allahumma Rabbana wa bihamdika (Sajdah)',
    arabic: 'سُبْحَانَكَ اللَّهُمَّ رَبَّنَا وَبِحَمْدِكَ، اللَّهُمَّ اغْفِرْ لِي',
    transliteration: 'Subḥānakallāhumma Rabbanā wa biḥamdika, Allāhummagh-fir lī',
    translations: {
      en: 'Glory be to You, O Allah our Lord, and all praise. O Allah, forgive me.',
      ar: 'سبحانك اللهم ربنا وبحمدك، اللهم اغفر لي.',
      fr: 'Gloire à Toi, ô Allah notre Seigneur, et toute louange. Ô Allah, pardonne-moi.',
      ur: 'اے اللہ! اے ہمارے رب! تو پاک ہے اور تیری حمد ہے، اے اللہ! مجھے بخش دے۔',
      tr: "Allah'ım Rabbimiz, Seni tesbih eder ve hamd ederim. Allah'ım, beni bağışla.",
      ms: 'Maha Suci Engkau ya Allah Tuhan kami, dengan memuji-Mu. Ya Allah, ampunkanlah aku.',
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
  },

  // ─── Dua 23 ──────────────────────────────────────────────────────────────
  {
    id: 'sajdah-6',
    positionId: 'sajdah',
    variationIndex: 6,
    label: 'Subhana dhil-Jabarut (Sajdah)',
    arabic: 'سُبْحَانَ ذِي الْجَبَرُوتِ وَالْمَلَكُوتِ وَالْكِبْرِيَاءِ وَالْعَظَمَةِ',
    transliteration: "Subḥāna dhil-jabarūti wal-malakūti wal-kibriyā'i wal-'aẓamah",
    translations: {
      en: 'Glory be to the One Who possesses all power, all sovereignty, all greatness and all magnificence.',
      ar: 'سبحان ذي الجبروت والملكوت والكبرياء والعظمة.',
      fr: 'Gloire à Celui qui possède toute puissance, toute souveraineté, toute grandeur et toute magnificence.',
      ur: 'پاک ہے وہ جو قدرت، بادشاہت، بڑائی اور عظمت والا ہے۔',
      tr: 'Tüm güce, egemenliğe, büyüklüğe ve azamete sahip Olan\'ı tesbih ederim.',
      ms: 'Maha Suci Tuhan yang memiliki kekuasaan, pemerintahan, keagungan dan kebesaran.',
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
    notes: 'Reported by A\'ishah (رضي الله عنها) as a night prayer dhikr in both ruku and sujood.',
  },

  // ─── Dua 24 ──────────────────────────────────────────────────────────────
  {
    id: 'sajdah-7',
    positionId: 'sajdah',
    variationIndex: 7,
    label: 'Allahumma ighfir li dhanbi kullahu',
    arabic:
      'اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ، دِقَّهُ وَجِلَّهُ، وَأَوَّلَهُ وَآخِرَهُ، وَعَلَانِيَتَهُ وَسِرَّهُ',
    transliteration:
      "Allāhummaghfir lī dhanbī kullahu, diqqahu wa jillahu, wa awwalahu wa ākhirah, wa 'alāniyatahu wa sirrah",
    translations: {
      en: 'O Allah, forgive me all of my sins — the small and the great, the first and the last, the open and the secret.',
      ar: 'اللهم اغفر لي ذنبي كله، دقه وجله، وأوله وآخره، وعلانيته وسره.',
      fr: "O Allah, pardonne-moi tous mes péchés — les petits et les grands, les premiers et les derniers, les publics et les secrets.",
      ur: 'اے اللہ! میرے سارے گناہ بخش دے — چھوٹے اور بڑے، پہلے اور آخری، علانیہ اور پوشیدہ۔',
      tr: "Allah'ım, tüm günahlarımı bağışla — küçüğünü ve büyüğünü, ilkini ve sonuncusunu, açığını ve gizlisini.",
      ms: 'Ya Allah, ampunkanlah semua dosaku — yang kecil dan yang besar, yang pertama dan yang terakhir, yang terang dan yang tersembunyi.',
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
    notes:
      'A comprehensive forgiveness supplication covering every category of sin through elegant pairs of opposites. The sujood — the most humble position — is the ideal moment to seek total forgiveness.',
  },

  // ─── Dua 25 ──────────────────────────────────────────────────────────────
  {
    id: 'sajdah-8',
    positionId: 'sajdah',
    variationIndex: 8,
    label: "A'udhu birdaka min sakhatika",
    arabic:
      'اللَّهُمَّ إِنِّي أَعُوذُ بِرِضَاكَ مِنْ سَخَطِكَ، وَبِمُعَافَاتِكَ مِنْ عُقُوبَتِكَ، وَأَعُوذُ بِكَ مِنْكَ، لَا أُحْصِي ثَنَاءً عَلَيْكَ، أَنْتَ كَمَا أَثْنَيْتَ عَلَى نَفْسِكَ',
    transliteration:
      "Allāhumma innī a'ūdhu biriḍāka min sakhaṭik, wa bimu'āfātika min 'uqūbatik, wa a'ūdhu bika mink, lā uḥṣī thanā'an 'alayk, anta kamā athnayta 'alā nafsik",
    translations: {
      en: "O Allah, I seek refuge in Your pleasure from Your wrath, and in Your forgiveness from Your punishment. I seek refuge in You from You. I cannot enumerate Your praise — You are as You have praised Yourself.",
      ar: 'اللهم إني أعوذ برضاك من سخطك، وبمعافاتك من عقوبتك، وأعوذ بك منك، لا أحصي ثناءً عليك، أنت كما أثنيت على نفسك.',
      fr: "O Allah, je cherche refuge dans Ta satisfaction contre Ta colère, et dans Ton pardon contre Ton châtiment. Je cherche refuge en Toi contre Toi. Je ne peux dénombrer Tes louanges — Tu es tel que Tu T'es Toi-même loué.",
      ur: 'اے اللہ! میں تیری رضا کے ذریعے تیرے غضب سے، اور تیری معافی کے ذریعے تیری سزا سے پناہ مانگتا ہوں۔ میں تجھ سے تیری پناہ مانگتا ہوں۔ میں تیری تعریف گن نہیں سکتا — تو ویسا ہی ہے جیسا تو نے خود اپنی تعریف کی۔',
      tr: "Allah'ım, gazabından rızana, cezandan affına sığınırım. Senden Sana sığınırım. Seni layıkıyla övemem — Sen, Kendini övdüğün gibisin.",
      ms: 'Ya Allah, aku berlindung dengan keredhaan-Mu daripada kemurkaan-Mu, dan dengan kemaafan-Mu daripada azab-Mu. Aku berlindung kepada-Mu daripada-Mu. Aku tidak dapat menghitung pujian kepada-Mu — Engkau sebagaimana Engkau memuji diri-Mu sendiri.',
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
    notes:
      "One of the most profound duas in the entire prayer. The phrase 'I seek refuge in You from You' (a'udhu bika minka) is unique — it means seeking refuge in Allah's attributes of mercy from His attributes of wrath. The admission 'I cannot enumerate Your praise' is the peak of humility.",
  },

  // ─── Dua 26 ──────────────────────────────────────────────────────────────
  {
    id: 'sajdah-9',
    positionId: 'sajdah',
    variationIndex: 9,
    label: 'Allahumma laka sajadtu',
    arabic:
      'اللَّهُمَّ لَكَ سَجَدْتُ، وَبِكَ آمَنْتُ، وَلَكَ أَسْلَمْتُ، سَجَدَ وَجْهِي لِلَّذِي خَلَقَهُ وَصَوَّرَهُ وَشَقَّ سَمْعَهُ وَبَصَرَهُ، تَبَارَكَ اللَّهُ أَحْسَنُ الْخَالِقِينَ',
    transliteration:
      "Allāhumma laka sajadtu, wa bika āmantu, wa laka aslamtu, sajada wajhiya lilladhī khalaqahu wa ṣawwarahu wa shaqqa sam'ahu wa baṣarah, tabārakallāhu aḥsanul-khāliqīn",
    translations: {
      en: 'O Allah, to You I prostrate, in You I believe, to You I submit. My face prostrates before the One Who created it and shaped it, and Who opened its hearing and sight. Blessed is Allah, the Best of creators.',
      ar: 'اللهم لك سجدت، وبك آمنت، ولك أسلمت... تبارك الله أحسن الخالقين.',
      fr: "O Allah, c'est pour Toi que je me prosterne, en Toi je crois, à Toi je me soumets... Béni soit Allah, le Meilleur des créateurs.",
      ur: 'اے اللہ! میں نے تیرے لیے سجدہ کیا، تجھ پر ایمان لایا، تیرے آگے سر تسلیم خم کیا... بابرکت ہے اللہ جو سب سے بہتر خالق ہے۔',
      tr: "Allah'ım, Senin için secdeye vardım, Sana iman ettim, Sana teslim oldum... Yaratıcıların en güzeli olan Allah ne mübarektir.",
      ms: 'Ya Allah, kerana-Mulah aku sujud, kepada-Mulah aku beriman, kepada-Mu aku berserah... Maha Berkat Allah, sebaik-baik Pencipta.',
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
        surahName: 'Al-Mu\'minun',
        surahNameArabic: 'المؤمنون',
        url: 'https://quran.com/23/14',
      },
    ],
    notes:
      "The ending 'Tabaraka Allahu ahsanul-khaliqin' is a direct quote from Al-Mu'minun 23:14. It acknowledges that the face prostrating was created by Allah Himself — making the sujood a return of the creation to its Creator.",
  },

  // ─── Dua 27 ──────────────────────────────────────────────────────────────
  {
    id: 'sajdah-10',
    positionId: 'sajdah',
    variationIndex: 10,
    label: "Allahumma ij'al fi qalbi nuran",
    arabic:
      'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا، وَفِي سَمْعِي نُورًا، وَفِي بَصَرِي نُورًا، وَعَنْ يَمِينِي نُورًا، وَعَنْ يَسَارِي نُورًا، وَأَمَامِي نُورًا، وَخَلْفِي نُورًا، وَفَوْقِي نُورًا، وَتَحْتِي نُورًا، وَاجْعَلْ لِي نُورًا',
    transliteration:
      "Allāhummaj'al fī qalbī nūrā, wa fī sam'ī nūrā, wa fī baṣarī nūrā, wa 'an yamīnī nūrā, wa 'an yasārī nūrā, wa amāmī nūrā, wa khalfī nūrā, wa fawqī nūrā, wa taḥtī nūrā, waj'al lī nūrā",
    translations: {
      en: 'O Allah, place light in my heart, light in my hearing, light in my sight, light on my right, light on my left, light in front of me, light behind me, light above me, light below me, and grant me light.',
      ar: 'اللهم اجعل في قلبي نوراً، وفي سمعي نوراً، وفي بصري نوراً... واجعل لي نوراً.',
      fr: "O Allah, mets de la lumière dans mon cœur, de la lumière dans mon ouïe, de la lumière dans ma vue, de la lumière à ma droite, à ma gauche, devant moi, derrière moi, au-dessus et en dessous de moi — accorde-moi de la lumière.",
      ur: 'اے اللہ! میرے دل میں نور ڈال، سماعت میں نور، بصارت میں نور، دائیں طرف نور، بائیں طرف نور، آگے نور، پیچھے نور، اوپر نور، نیچے نور — اور مجھے نور عطا فرما۔',
      tr: "Allah'ım, kalbime nur, kulağıma nur, gözüme nur, sağıma nur, soluma nur, önüme nur, arkama nur, üstüme nur, altıma nur koy — ve bana nur ihsan et.",
      ms: 'Ya Allah, letakkanlah cahaya di hatiku, cahaya pada pendengaranku, cahaya pada penglihatanku, cahaya di sebelah kananku, kiri, depan, belakang, atas dan bawahku — dan kurniakanlah cahaya kepadaku.',
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
    notes:
      "Ibn Abbas narrated that he heard the Prophet ﷺ say this supplication during his night prayer sujood. The word 'nur' (light) appears ten times, requesting divine illumination in every direction and dimension — a profound prayer for guidance and clarity.",
  },
]
