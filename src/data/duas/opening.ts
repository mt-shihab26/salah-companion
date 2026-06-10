import type { DuaVariation } from './types'

export const openingDuas: DuaVariation[] = [
  // ─── Dua 1 ───────────────────────────────────────────────────────────────
  {
    id: 'takbeer',
    positionId: 'opening',
    variationIndex: 1,
    label: 'Takbeeratul Ihram',
    arabic: 'ٱللَّهُ أَكْبَرُ',
    transliteration: 'Allāhu Akbar',
    translations: {
      en: 'Allah is the Greatest.',
      ar: 'الله أكبر.',
      fr: 'Allah est le Plus Grand.',
      ur: 'اللہ سب سے بڑا ہے۔',
      tr: 'Allah en büyüktür.',
      ms: 'Allah Maha Besar.',
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
    notes:
      'The opening Takbeer (Takbeeratul Ihram) marks the formal entry into the state of prayer. Once uttered, the worshipper is in a sacred state (haram) and worldly speech is forbidden. It is obligatory (fard) according to the majority of scholars. The hands are raised to the level of the shoulders or earlobes while saying it.',
  },

  // ─── Dua 2 ───────────────────────────────────────────────────────────────
  {
    id: 'istiftah-1',
    positionId: 'opening',
    variationIndex: 2,
    label: 'Dua Istiftah — Version 1',
    arabic:
      'اللَّهُ أَكْبَرُ كَبِيرًا، وَالْحَمْدُ لِلَّهِ كَثِيرًا، وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلًا',
    transliteration:
      "Allāhu akbaru kabīrā, wal-ḥamdu lillāhi kathīrā, wa subḥānallāhi bukratan wa aṣīlā",
    translations: {
      en: 'Allah is truly the Greatest; much praise be to Allah; and glory be to Allah in the morning and the evening.',
      ar: 'الله أكبر كبيراً، والحمد لله كثيراً، وسبحان الله بكرةً وأصيلاً.',
      fr: "Allah est vraiment le Plus Grand ; louange abondante à Allah ; et gloire à Allah le matin et le soir.",
      ur: 'اللہ بے حد بڑا ہے، اللہ کے لیے بہت زیادہ تعریف ہے، اور اللہ کی صبح و شام پاکیزگی بیان ہو۔',
      tr: 'Allah gerçekten en büyüktür; Allah\'a bol hamd olsun; sabah akşam Allah\'ı tesbih ederim.',
      ms: 'Allah Maha Besar dengan sebesar-besarnya; segala puji bagi Allah dengan sebanyak-banyaknya; dan Maha Suci Allah pada waktu pagi dan petang.',
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
    notes:
      "This istiftah was praised by the Prophet ﷺ when he heard a companion recite it before prayer. Ibn Umar (رضي الله عنه) narrated that the Prophet ﷺ said: 'I saw twelve angels competing to be the first to carry it up.'",
  },

  // ─── Dua 3 ───────────────────────────────────────────────────────────────
  {
    id: 'istiftah-2',
    positionId: 'opening',
    variationIndex: 3,
    label: 'Dua Istiftah — Version 2 (Removal of sins)',
    arabic:
      'اللَّهُمَّ بَاعِدْ بَيْنِي وَبَيْنَ خَطَايَايَ كَمَا بَاعَدْتَ بَيْنَ الْمَشْرِقِ وَالْمَغْرِبِ، اللَّهُمَّ نَقِّنِي مِنَ الْخَطَايَا كَمَا يُنَقَّى الثَّوْبُ الْأَبْيَضُ مِنَ الدَّنَسِ، اللَّهُمَّ اغْسِلْ خَطَايَايَ بِالْمَاءِ وَالثَّلْجِ وَالْبَرَدِ',
    transliteration:
      "Allāhumma bā'id baynī wa bayna khaṭāyāya kamā bā'adta baynal-mashriqi wal-maghrib, Allāhumma naqqinī minal-khaṭāyā kamā yunaqqath-thawbul-abyaḍu minad-danas, Allāhummaghsil khaṭāyāya bil-māʾi wath-thalji wal-barad",
    translations: {
      en: 'O Allah, put a great distance between me and my sins, as great as the distance You have made between the East and the West. O Allah, cleanse me of sin as a white garment is cleansed of filth. O Allah, wash away my sins with water, snow and hail.',
      ar: 'اللهم باعد بيني وبين خطاياي كما باعدت بين المشرق والمغرب، اللهم نقِّني من الخطايا كما ينقى الثوب الأبيض من الدنس، اللهم اغسل خطاياي بالماء والثلج والبرد.',
      fr: "O Allah, éloigne-moi de mes péchés comme Tu as éloigné l'Est de l'Ouest. O Allah, purifie-moi de mes péchés comme un vêtement blanc est purifié de la saleté. O Allah, lave mes péchés avec de l'eau, de la neige et de la grêle.",
      ur: 'اے اللہ! میرے اور میرے گناہوں کے درمیان اتنا فاصلہ کر دے جتنا تو نے مشرق اور مغرب کے درمیان فاصلہ کیا ہے۔ اے اللہ! مجھے گناہوں سے اس طرح پاک فرما جیسے سفید کپڑا میل سے صاف ہوتا ہے۔ اے اللہ! میرے گناہوں کو پانی، برف اور اولے سے دھو دے۔',
      tr: "Allah'ım! Benimle günahlarım arasına, Doğu ile Batı'yı birbirinden ayırdığın gibi mesafe koy. Allah'ım! Beni günahlardan, beyaz elbise kirden temizlendiği gibi temizle. Allah'ım! Günahlarımı su, kar ve doluyla yıka.",
      ms: 'Ya Allah, jauhkanlah antara aku dan kesalahanku seperti Engkau menjauhkan antara Timur dan Barat. Ya Allah, sucikanlah aku dari kesalahan seperti kain putih disucikan dari kotoran. Ya Allah, basuhkan kesalahanku dengan air, salji dan embun beku.',
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
    notes:
      'This supplication uses vivid imagery of distance and cleansing to describe the removal of sins. The mention of water, snow and hail emphasises thorough purification. Most commonly used in obligatory prayers.',
  },

  // ─── Dua 4 ───────────────────────────────────────────────────────────────
  {
    id: 'istiftah-3',
    positionId: 'opening',
    variationIndex: 4,
    label: 'Dua Istiftah — Version 3 (Glorification)',
    arabic:
      'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَى جَدُّكَ، وَلَا إِلَهَ غَيْرُكَ',
    transliteration:
      "Subḥānakallāhumma wa biḥamdik, wa tabārakasmuk, wa ta'ālā jadduk, wa lā ilāha ghayruk",
    translations: {
      en: 'Glory be to You, O Allah, and praise. Blessed is Your name, and exalted is Your Majesty. There is no god worthy of worship except You.',
      ar: 'سبحانك اللهم وبحمدك، وتبارك اسمك، وتعالى جدك، ولا إله غيرك.',
      fr: 'Gloire à Toi, ô Allah, et louange. Béni soit Ton nom, et exalté est Ta Majesté. Il n\'y a pas de dieu digne d\'adoration excepté Toi.',
      ur: 'اے اللہ! تو پاک ہے اور ساتھ ہی تیری حمد ہے، تیرا نام بابرکت ہے، تیری شان بلند ہے اور تیرے سوا کوئی معبود نہیں۔',
      tr: "Sübhansın ya Allah, hamd Senindir; mübarek Senin adın, yücedir Senin şanın; Senden başka ilah yoktur.",
      ms: 'Maha Suci Engkau ya Allah, dengan segala puji-pujian-Mu. Maha Berkat nama-Mu, Maha Tinggi kebesaran-Mu. Tiada tuhan yang berhak disembah melainkan Engkau.',
    },
    references: [
      {
        type: 'hadith',
        source: 'Sunan Abu Dawud',
        number: '775',
        grade: 'Sahih',
        narrator: 'Abu Sa\'id al-Khudri',
        url: 'https://sunnah.com/abudawud:775',
      },
      {
        type: 'hadith',
        source: 'Sunan al-Tirmidhi',
        number: '243',
        grade: 'Hasan Sahih',
        narrator: 'Abu Sa\'id al-Khudri',
        url: 'https://sunnah.com/tirmidhi:243',
      },
    ],
    notes:
      "This is the most widely used istiftah among the Hanafi, Shafi'i and Hanbali schools. It opens with glorification (tasbih), praise (tahmid), blessings on Allah's name (tabarruk), and the declaration of His Majesty and Oneness.",
  },

  // ─── Dua 5 ───────────────────────────────────────────────────────────────
  {
    id: 'istiftah-tahajjud',
    positionId: 'opening',
    variationIndex: 5,
    label: 'Dua Istiftah — Tahajjud (Night Prayer)',
    arabic:
      'اللَّهُمَّ لَكَ الْحَمْدُ أَنْتَ نُورُ السَّمَوَاتِ وَالْأَرْضِ وَمَنْ فِيهِنَّ، وَلَكَ الْحَمْدُ أَنْتَ قَيِّمُ السَّمَوَاتِ وَالْأَرْضِ وَمَنْ فِيهِنَّ، وَلَكَ الْحَمْدُ أَنْتَ الْحَقُّ، وَوَعْدُكَ حَقٌّ، وَقَوْلُكَ حَقٌّ، وَلِقَاؤُكَ حَقٌّ، وَالْجَنَّةُ حَقٌّ، وَالنَّارُ حَقٌّ، وَالنَّبِيُّونَ حَقٌّ، وَمُحَمَّدٌ حَقٌّ، وَالسَّاعَةُ حَقٌّ، اللَّهُمَّ لَكَ أَسْلَمْتُ، وَبِكَ آمَنْتُ، وَعَلَيْكَ تَوَكَّلْتُ، وَإِلَيْكَ أَنَبْتُ، وَبِكَ خَاصَمْتُ، وَإِلَيْكَ حَاكَمْتُ، فَاغْفِرْ لِي مَا قَدَّمْتُ وَمَا أَخَّرْتُ، وَمَا أَسْرَرْتُ وَمَا أَعْلَنْتُ، أَنْتَ الْمُقَدِّمُ وَأَنْتَ الْمُؤَخِّرُ، لَا إِلَهَ إِلَّا أَنْتَ',
    transliteration:
      "Allāhumma lakal-ḥamdu anta nūrus-samāwāti wal-arḍi wa man fīhinn, wa lakal-ḥamdu anta qayyimus-samāwāti wal-arḍi wa man fīhinn, wa lakal-ḥamdu antal-ḥaqq, wa wa'duka ḥaqq, wa qawluka ḥaqq, wa liqā'uka ḥaqq, wal-jannatu ḥaqq, wan-nāru ḥaqq, wan-nabiyyūna ḥaqq, wa Muḥammadun ḥaqq, was-sā'atu ḥaqq. Allāhumma laka aslamtu, wa bika āmantu, wa 'alayka tawakkaltu, wa ilayka anabtu, wa bika khāṣamtu, wa ilayka ḥākamtu. Faghfir lī mā qaddamtu wa mā akhkhartu, wa mā asrartu wa mā a'lantu, antal-muqaddimu wa antal-mu'akhkhir, lā ilāha illā ant",
    translations: {
      en: 'O Allah, all praise is for You. You are the Light of the heavens and the earth and whoever is in them. All praise is for You; You are the Sustainer of the heavens and the earth and whoever is in them. All praise is for You; You are the Truth, Your promise is true, Your word is true, Your meeting is true, Paradise is true, Hellfire is true, the Prophets are true, Muhammad ﷺ is true, and the Hour is true. O Allah, to You I have submitted, in You I believe, upon You I rely, to You I turn in repentance, for Your sake I dispute, and to You I resort for judgment. Forgive me for what I have done and left undone, for what I have hidden and what I have shown. You are the One Who brings forward and the One Who puts back. There is no god worthy of worship except You.',
      ar: 'اللهم لك الحمد أنت نور السماوات والأرض ومن فيهن... لا إله إلا أنت.',
      fr: "O Allah, toute louange T'appartient. Tu es la Lumière des cieux et de la terre et de ceux qui s'y trouvent. O Allah, à Toi je me suis soumis, en Toi je crois, en Toi je me fie. Il n'y a pas de dieu digne d'adoration excepté Toi.",
      ur: 'اے اللہ! تمام تعریف تیرے لیے ہے، تو آسمانوں اور زمین اور ان میں موجود تمام مخلوق کا نور ہے... تیرے سوا کوئی معبود نہیں۔',
      tr: "Allah'ım! Hamd Senindir. Sen göklerin, yerin ve onlarda bulunanların nurusun... Senden başka ilah yoktur.",
      ms: 'Ya Allah, segala puji bagi-Mu. Engkaulah cahaya langit dan bumi dan sesiapa yang ada padanya... Tiada tuhan yang berhak disembah melainkan Engkau.',
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
    notes:
      "This is the dua the Prophet ﷺ used to begin Tahajjud (night prayer) with. Ibn Abbas narrated that he heard it when he stayed the night at his aunt Maymunah's house and observed the Prophet ﷺ pray. It is longer and more comprehensive than the regular istiftah duas, befitting the special nature of the night prayer.",
  },
]
