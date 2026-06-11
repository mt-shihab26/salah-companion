import type { TSalahDua } from '#/types/salah-duas'

import placeholderAudio from '#/assets/audio/subhanaka.m4a'

export const openingDuas: TSalahDua[] = [
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
            id: {
                transliteration:
                    "Subḥānakallāhumma wa biḥamdik, wa tabārakasmuk, wa ta'ālā jadduk, wa lā ilāha ghayruk",
                translation:
                    'Maha Suci Engkau ya Allah, dengan segala pujian-Mu. Maha Berkat nama-Mu, Maha Tinggi kebesaran-Mu. Tiada tuhan yang berhak disembah melainkan Engkau.',
            },
            sw: {
                transliteration:
                    "Subḥānakallāhumma wa biḥamdik, wa tabārakasmuk, wa ta'ālā jadduk, wa lā ilāha ghayruk",
                translation:
                    'Utukufu ni Wako Wewe Ee Mwenyezi Mungu, na sifa Yako. Jina Lako limebarikiwa, na Utukufu Wako umetukuka. Hapana mungu anayestahili kuabudiwa isipokuwa Wewe.',
            },
            ha: {
                transliteration:
                    "Subḥānakallāhumma wa biḥamdik, wa tabārakasmuk, wa ta'ālā jadduk, wa lā ilāha ghayruk",
                translation:
                    'Tsarki ta tabbata a gare Ka ya Allah, tare da yabonka. Sunanka mai albarka ne, kuma daukakanka ya ɗaukaka. Babu abin bautawa da ya dace sai Kai.',
            },
            de: {
                transliteration:
                    "Subḥānakallāhumma wa biḥamdik, wa tabārakasmuk, wa ta'ālā jadduk, wa lā ilāha ghayruk",
                translation:
                    'Gepriesen seist Du, o Allah, und Lob sei Dir. Gesegnet ist Dein Name, und erhaben ist Deine Majestät. Es gibt keinen Gott, der die Anbetung verdient, außer Dir.',
            },
            hi: {
                transliteration:
                    'सुब्हानकल्लाहुम्म व बिहम्दिक, व तबारकस्मुक, व तआला जद्दुक, व ला इलाह ग़ैरुक',
                translation:
                    'ऐ अल्लाह! तू पवित्र है और तेरी प्रशंसा हो। तेरा नाम बरकतवाला है, तेरी शान बुलंद है। तेरे सिवा कोई इबादत के लायक नहीं।',
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
        audioUrl: placeholderAudio,
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
            id: {
                transliteration:
                    "Allāhumma lakal-ḥamdu anta nūrus-samāwāti wal-arḍi wa man fīhinn, wa lakal-ḥamdu anta qayyimus-samāwāti wal-arḍi wa man fīhinn, wa lakal-ḥamdu antal-ḥaqq, wa wa'duka ḥaqq, wa qawluka ḥaqq, wa liqā'uka ḥaqq, wal-jannatu ḥaqq, wan-nāru ḥaqq, wan-nabiyyūna ḥaqq, wa Muḥammadun ḥaqq, was-sā'atu ḥaqq. Allāhumma laka aslamtu, wa bika āmantu, wa 'alayka tawakkaltu, wa ilayka anabtu, wa bika khāṣamtu, wa ilayka ḥākamtu. Faghfir lī mā qaddamtu wa mā akhkhartu, wa mā asrartu wa mā a'lantu, antal-muqaddimu wa antal-mu'akhkhir, lā ilāha illā ant",
                translation:
                    'Ya Allah, segala puji bagi-Mu. Engkaulah cahaya langit dan bumi serta siapa yang ada di dalamnya. Engkaulah Pemelihara langit dan bumi. Engkaulah Al-Haqq; janji-Mu benar, firman-Mu benar, surga itu benar, neraka itu benar, para nabi itu benar, Muhammad ﷺ itu benar, dan hari kiamat itu benar. Ya Allah, kepada-Mu aku berserah diri, kepada-Mu aku beriman, kepada-Mu aku bertawakal. Ampunilah aku atas apa yang telah aku lakukan dan tinggalkan, yang aku sembunyikan dan yang aku tampakkan. Tiada tuhan yang berhak disembah selain Engkau.',
            },
            sw: {
                transliteration:
                    "Allāhumma lakal-ḥamdu anta nūrus-samāwāti wal-arḍi wa man fīhinn, wa lakal-ḥamdu anta qayyimus-samāwāti wal-arḍi wa man fīhinn, wa lakal-ḥamdu antal-ḥaqq, wa wa'duka ḥaqq, wa qawluka ḥaqq, wa liqā'uka ḥaqq, wal-jannatu ḥaqq, wan-nāru ḥaqq, wan-nabiyyūna ḥaqq, wa Muḥammadun ḥaqq, was-sā'atu ḥaqq. Allāhumma laka aslamtu, wa bika āmantu, wa 'alayka tawakkaltu, wa ilayka anabtu, wa bika khāṣamtu, wa ilayka ḥākamtu. Faghfir lī mā qaddamtu wa mā akhkhartu, wa mā asrartu wa mā a'lantu, antal-muqaddimu wa antal-mu'akhkhir, lā ilāha illā ant",
                translation:
                    'Ee Mwenyezi Mungu, sifa zote ni Zako. Wewe ni Nuru ya mbingu na ardhi na waliomo ndani yao. Wewe ni Msimamizi wa mbingu na ardhi. Wewe ni Al-Haqq; ahadi Yako ni kweli, maneno Yako ni kweli, pepo ni kweli, moto ni kweli, manabii ni kweli, Muhammad ﷺ ni kweli, na Saa ya Mwisho ni kweli. Ee Mwenyezi Mungu, kwako nimesalimu, kwako nimeamini, kwako nimetegemea. Nisamehe niliyofanya na kuacha, nililofichwa na kudhihirisha. Hapana mungu anayestahili kuabudiwa isipokuwa Wewe.',
            },
            ha: {
                transliteration:
                    "Allāhumma lakal-ḥamdu anta nūrus-samāwāti wal-arḍi wa man fīhinn, wa lakal-ḥamdu anta qayyimus-samāwāti wal-arḍi wa man fīhinn, wa lakal-ḥamdu antal-ḥaqq, wa wa'duka ḥaqq, wa qawluka ḥaqq, wa liqā'uka ḥaqq, wal-jannatu ḥaqq, wan-nāru ḥaqq, wan-nabiyyūna ḥaqq, wa Muḥammadun ḥaqq, was-sā'atu ḥaqq. Allāhumma laka aslamtu, wa bika āmantu, wa 'alayka tawakkaltu, wa ilayka anabtu, wa bika khāṣamtu, wa ilayka ḥākamtu. Faghfir lī mā qaddamtu wa mā akhkhartu, wa mā asrartu wa mā a'lantu, antal-muqaddimu wa antal-mu'akhkhir, lā ilāha illā ant",
                translation:
                    'Ya Allah, dukkan yabo na gare Ka. Kai ne haske na sammai da ƙasa da duk wanda ke cikinsu. Kai ne Mai tsaron sammai da ƙasa. Kai ne Al-Haqq; alkawarka gaskiya ne, maganarka gaskiya ne, aljanna gaskiya ne, wuta gaskiya ce, annabawa gaskiya ne, Muhammad ﷺ gaskiya ne, kuma Lokacin Ƙarshe gaskiya ne. Ya Allah, maka na mika wuya, a cikinKa na yi imani, a kanKa na dogara. Ka gafarta mini abin da na yi da na bar, na ɓoye da na bayyana. Babu abin bautawa da ya dace sai Kai.',
            },
            de: {
                transliteration:
                    "Allāhumma lakal-ḥamdu anta nūrus-samāwāti wal-arḍi wa man fīhinn, wa lakal-ḥamdu anta qayyimus-samāwāti wal-arḍi wa man fīhinn, wa lakal-ḥamdu antal-ḥaqq, wa wa'duka ḥaqq, wa qawluka ḥaqq, wa liqā'uka ḥaqq, wal-jannatu ḥaqq, wan-nāru ḥaqq, wan-nabiyyūna ḥaqq, wa Muḥammadun ḥaqq, was-sā'atu ḥaqq. Allāhumma laka aslamtu, wa bika āmantu, wa 'alayka tawakkaltu, wa ilayka anabtu, wa bika khāṣamtu, wa ilayka ḥākamtu. Faghfir lī mā qaddamtu wa mā akhkhartu, wa mā asrartu wa mā a'lantu, antal-muqaddimu wa antal-mu'akhkhir, lā ilāha illā ant",
                translation:
                    'O Allah, aller Lobpreis gehört Dir. Du bist das Licht der Himmel und der Erde und all dessen, was in ihnen ist. Du bist der Erhalter der Himmel und der Erde. Du bist Al-Haqq; Dein Versprechen ist wahr, Dein Wort ist wahr, das Paradies ist wahr, das Höllenfeuer ist wahr, die Propheten sind wahr, Muhammad ﷺ ist wahr, und die Stunde ist wahr. O Allah, Dir habe ich mich ergeben, an Dich glaube ich, auf Dich vertraue ich. Vergib mir, was ich getan und unterlassen, verborgen und offenbart habe. Es gibt keinen Gott, der die Anbetung verdient, außer Dir.',
            },
            hi: {
                transliteration:
                    'अल्लाहुम्मा लकल हम्दु अन्त नूरुस्समावाति वलअर्दि वमन फीहिन्न, वलकल हम्दु अन्त क़य्युमुस्समावाति वलअर्दि वमन फीहिन्न, वलकल हम्दु अन्तल हक़्क़... ला इलाहा इल्ला अन्त',
                translation:
                    'ऐ अल्लाह! सारी प्रशंसा तेरी है। तू आकाशों और ज़मीन और जो कुछ उनमें है उन सबका नूर है। तू आकाशों और ज़मीन का क़ायम रखने वाला है। तू अल-हक़ है; तेरा वादा सच है, तेरा कलाम सच है, जन्नत सच है, जहन्नम सच है, नबी सच हैं, मुहम्मद ﷺ सच हैं, क़यामत सच है। ऐ अल्लाह! तेरे सामने मैंने इस्लाम कबूल किया, तुझ पर ईमान लाया, तुझ पर भरोसा किया। मेरे अगले-पिछले, छुपे-ज़ाहिर गुनाह माफ कर दे। तेरे सिवा कोई इबादत के योग्य नहीं।',
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
        audioUrl: placeholderAudio,
    },
]
