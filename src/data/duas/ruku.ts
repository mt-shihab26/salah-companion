import type { DuaVariation } from './types'

export const rukuDuas: DuaVariation[] = [
  // ─── Dua 7 ───────────────────────────────────────────────────────────────
  {
    id: 'ruku-1',
    positionId: 'ruku',
    variationIndex: 1,
    label: 'Subhana Rabbi al-Azim',
    arabic: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ',
    transliteration: "Subḥāna Rabbiy al-'Aẓīm",
    translations: {
      en: 'Glory be to my Lord, the Most Great.',
      ar: 'سبحان ربي العظيم.',
      fr: 'Gloire à mon Seigneur, le Plus Grand.',
      ur: 'پاک ہے میرا رب، سب سے بڑا۔',
      tr: 'Büyük Rabbimi tesbih ederim.',
      ms: 'Maha Suci Tuhanku Yang Maha Agung.',
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
    notes:
      "The most widely agreed-upon dhikr for ruku. The minimum is three repetitions, and more is recommended. It corresponds to the verse 'So glorify the name of your Lord, the Most Great' (Al-Waqi'ah 56:96 / Al-Haqqah 69:52).",
  },

  // ─── Dua 8 ───────────────────────────────────────────────────────────────
  {
    id: 'ruku-2',
    positionId: 'ruku',
    variationIndex: 2,
    label: 'Subbuhun Quddus (Ruku)',
    arabic: 'سُبُّوحٌ قُدُّوسٌ رَبُّ الْمَلَائِكَةِ وَالرُّوحِ',
    transliteration: "Subbūḥun Quddūs, Rabbul-malā'ikati war-rūḥ",
    translations: {
      en: 'Most Glorified, Most Holy, Lord of the angels and the Spirit (Jibreel).',
      ar: 'سبوح قدوس رب الملائكة والروح.',
      fr: 'Très Glorifié, Très Saint, Seigneur des anges et de l\'Esprit (Jibreel).',
      ur: 'نہایت پاک، نہایت مقدس، فرشتوں اور روح (جبریل) کا رب۔',
      tr: 'Çok Yüce, Çok Kutsal, meleklerin ve Ruh\'un (Cebrail\'in) Rabbi.',
      ms: 'Maha Suci, Maha Kudus, Tuhan para malaikat dan Roh (Jibril).',
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
    notes:
      "A'ishah (رضي الله عنها) reported that the Prophet ﷺ frequently said this in his ruku and sujood. The word 'Subbuh' is an intensive form meaning one who is glorified to the utmost degree. 'Quddus' means utterly pure and free from all defects.",
  },

  // ─── Dua 9 ───────────────────────────────────────────────────────────────
  {
    id: 'ruku-3',
    positionId: 'ruku',
    variationIndex: 3,
    label: 'Subhanaka wa bihamdika (Ruku)',
    arabic: 'سُبْحَانَكَ وَبِحَمْدِكَ لَا إِلَهَ إِلَّا أَنْتَ',
    transliteration: 'Subḥānaka wa biḥamdika lā ilāha illā ant',
    translations: {
      en: 'Glory be to You and all praise. There is no god worthy of worship except You.',
      ar: 'سبحانك وبحمدك لا إله إلا أنت.',
      fr: "Gloire à Toi et toute louange T'appartient. Il n'y a pas de dieu digne d'adoration excepté Toi.",
      ur: 'تو پاک ہے اور تیری حمد ہے، تیرے سوا کوئی معبود نہیں۔',
      tr: 'Seni tesbih eder ve hamd ederim. Senden başka ilah yoktur.',
      ms: 'Maha Suci Engkau dan dengan memuji-Mu. Tiada tuhan yang berhak disembah melainkan Engkau.',
    },
    references: [
      {
        type: 'hadith',
        source: "Sahih Muslim",
        number: '485',
        grade: 'Sahih',
        narrator: "A'ishah",
        url: 'https://sunnah.com/muslim:485',
      },
    ],
    notes:
      "A'ishah (رضي الله عنها) reported that the Prophet ﷺ recited this frequently in his ruku and sujood, implementing the Quranic command to glorify (Al-Nasr 110:3).",
  },

  // ─── Dua 10 ──────────────────────────────────────────────────────────────
  {
    id: 'ruku-4',
    positionId: 'ruku',
    variationIndex: 4,
    label: 'Subhanaka Allahumma Rabbana (Ruku)',
    arabic: 'سُبْحَانَكَ اللَّهُمَّ رَبَّنَا وَبِحَمْدِكَ، اللَّهُمَّ اغْفِرْ لِي',
    transliteration: 'Subḥānakallāhumma Rabbanā wa biḥamdika, Allāhummagh-fir lī',
    translations: {
      en: 'Glory be to You, O Allah our Lord, and all praise. O Allah, forgive me.',
      ar: 'سبحانك اللهم ربنا وبحمدك، اللهم اغفر لي.',
      fr: 'Gloire à Toi, ô Allah notre Seigneur, et toute louange. Ô Allah, pardonne-moi.',
      ur: 'اے اللہ! اے ہمارے رب! تو پاک ہے اور تیری حمد ہے، اے اللہ! مجھے معاف فرما۔',
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
      {
        type: 'hadith',
        source: 'Sahih Muslim',
        number: '484',
        grade: 'Sahih',
        narrator: "A'ishah",
        url: 'https://sunnah.com/muslim:484',
      },
    ],
    notes:
      "A'ishah (رضي الله عنها) reported the Prophet ﷺ frequently recited this, implementing the Quranic command 'then glorify the praises of your Lord and ask His forgiveness' (An-Nasr 110:3).",
  },

  // ─── Dua 11 ──────────────────────────────────────────────────────────────
  {
    id: 'ruku-5',
    positionId: 'ruku',
    variationIndex: 5,
    label: 'Subhanaka wa bihamdika astaghfiruka (Ruku)',
    arabic: 'سُبْحَانَكَ وَبِحَمْدِكَ أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ',
    transliteration: 'Subḥānaka wa biḥamdika, astaghfiruka wa atūbu ilayk',
    translations: {
      en: 'Glory be to You, and all praise. I seek Your forgiveness and I repent to You.',
      ar: 'سبحانك وبحمدك، أستغفرك وأتوب إليك.',
      fr: "Gloire à Toi et toute louange. Je Te demande pardon et me repens vers Toi.",
      ur: 'تو پاک ہے اور تیری حمد ہے، میں تجھ سے مغفرت مانگتا ہوں اور تیری طرف توبہ کرتا ہوں۔',
      tr: 'Seni tesbih eder ve hamd ederim. Senden bağışlanma diler ve Sana tevbe ederim.',
      ms: 'Maha Suci Engkau dan dengan memuji-Mu. Aku memohon keampunan-Mu dan bertaubat kepada-Mu.',
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
    notes:
      "A'ishah (رضي الله عنها) said the Prophet ﷺ recited this abundantly in his ruku and sujood as implementation of Surah An-Nasr.",
  },

  // ─── Dua 12 ──────────────────────────────────────────────────────────────
  {
    id: 'ruku-6',
    positionId: 'ruku',
    variationIndex: 6,
    label: 'Subhana dhil-Jabarut (Ruku)',
    arabic: 'سُبْحَانَ ذِي الْجَبَرُوتِ وَالْمَلَكُوتِ وَالْكِبْرِيَاءِ وَالْعَظَمَةِ',
    transliteration: "Subḥāna dhil-jabarūti wal-malakūti wal-kibriyā'i wal-'aẓamah",
    translations: {
      en: 'Glory be to the One Who possesses all power, all sovereignty, all greatness and all magnificence.',
      ar: 'سبحان ذي الجبروت والملكوت والكبرياء والعظمة.',
      fr: 'Gloire à Celui qui possède toute puissance, toute souveraineté, toute grandeur et toute magnificence.',
      ur: 'پاک ہے وہ جو قدرت، بادشاہت، بڑائی اور عظمت والا ہے۔',
      tr: 'Tüm güce, tüm egemenliğe, tüm büyüklüğe ve tüm azamete sahip Olan\'ı tesbih ederim.',
      ms: 'Maha Suci Tuhan yang memiliki segala kekuasaan, pemerintahan, keagungan dan kebesaran.',
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
    notes:
      'This dhikr is reported to have been recited during the night prayer (Tahajjud) ruku. The four divine attributes mentioned — jabarut (absolute power), malakut (sovereignty), kibriya\' (magnificence), and azamah (greatness) — together emphasise the complete supremacy of Allah.',
  },

  // ─── Dua 13 ──────────────────────────────────────────────────────────────
  {
    id: 'ruku-7',
    positionId: 'ruku',
    variationIndex: 7,
    label: "Allahumma laka raka'tu",
    arabic:
      'اللَّهُمَّ لَكَ رَكَعْتُ، وَبِكَ آمَنْتُ، وَلَكَ أَسْلَمْتُ، خَشَعَ لَكَ سَمْعِي وَبَصَرِي وَمُخِّي وَعَظْمِي وَعَصَبِي',
    transliteration:
      "Allāhumma laka raka'tu, wa bika āmantu, wa laka aslamtu, khasha'a laka sam'ī wa baṣarī wa mukkhī wa 'aẓmī wa 'aṣabī",
    translations: {
      en: 'O Allah, for You I have bowed. In You I believe. To You I have submitted. My hearing, my sight, my brain, my bones and my nerves are humbled before You.',
      ar: 'اللهم لك ركعت، وبك آمنت، ولك أسلمت، خشع لك سمعي وبصري ومخي وعظمي وعصبي.',
      fr: "O Allah, c'est pour Toi que je me suis incliné. En Toi je crois. À Toi je me suis soumis. Mon ouïe, ma vue, mon cerveau, mes os et mes nerfs sont humiliés devant Toi.",
      ur: 'اے اللہ! میں نے تیرے لیے رکوع کیا، تجھ پر ایمان لایا، تیرے لیے اسلام لایا، تیرے سامنے میری سماعت، بصارت، دماغ، ہڈیاں اور اعصاب سب جھک گئے۔',
      tr: "Allah'ım, Senin için rükuya vardım, Sana iman ettim, Sana teslim oldum. Kulağım, gözüm, beynin, kemiklerim ve sinirlerim Sana boyun eğdi.",
      ms: 'Ya Allah, kerana-Mulah aku ruku. Kepada-Mulah aku beriman. Kepada-Mu aku berserah. Pendengaranku, penglihatanku, otakku, tulangku dan sarafku semuanya khusyuk kepada-Mu.',
    },
    references: [
      {
        type: 'hadith',
        source: 'Sahih Muslim',
        number: '771',
        grade: 'Sahih',
        narrator: "Ali ibn Abi Talib",
        url: 'https://sunnah.com/muslim:771',
      },
    ],
    notes:
      "Ali ibn Abi Talib (رضي الله عنه) reported this as the supplication the Prophet ﷺ used in ruku during Tahajjud. It expresses total submission — every faculty of the worshipper is dedicated and humbled before Allah.",
  },
]
