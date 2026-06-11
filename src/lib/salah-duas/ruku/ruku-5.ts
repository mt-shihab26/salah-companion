import type { TSalahDua } from '#/types/salah-duas'
import placeholderAudio from '#/assets/audio/subhanaka.m4a'

export const ruku5: TSalahDua = {
    id: 'ruku-5',
    positionId: 'ruku',
    variationIndex: 5,
    label: 'Subhanaka wa bihamdika astaghfiruka (Ruku)',
    arabic: 'سُبْحَانَكَ وَبِحَمْدِكَ أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ',
    languages: {
        en: {
            transliteration: 'Subḥānaka wa biḥamdika, astaghfiruka wa atūbu ilayk',
            translation: 'Glory be to You, and all praise. I seek Your forgiveness and I repent to You.',
        },
        ar: {
            transliteration: 'سُبْحَانَكَ وَبِحَمْدِكَ أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ',
            translation: 'سبحانك وبحمدك، أستغفرك وأتوب إليك.',
        },
        fr: {
            transliteration: 'Subḥānaka wa biḥamdika, astaghfiruka wa atūbu ilayk',
            translation: 'Gloire à Toi et toute louange. Je Te demande pardon et me repens vers Toi.',
        },
        ur: {
            transliteration: 'سُبحَانَکَ وَبِحَمدِکَ، اَستَغفِرُکَ وَاَتُوبُ اِلَیک',
            translation: 'تو پاک ہے اور تیری حمد ہے، میں تجھ سے مغفرت مانگتا ہوں اور تیری طرف توبہ کرتا ہوں۔',
        },
        tr: {
            transliteration: 'Subḥānaka wa biḥamdika, astaghfiruka wa atūbu ilayk',
            translation: 'Seni tesbih eder ve hamd ederim. Senden bağışlanma diler ve Sana tevbe ederim.',
        },
        ms: {
            transliteration: 'Subḥānaka wa biḥamdika, astaghfiruka wa atūbu ilayk',
            translation: 'Maha Suci Engkau dan dengan memuji-Mu. Aku memohon keampunan-Mu dan bertaubat kepada-Mu.',
        },
        bn: {
            transliteration: 'সুবহানাকা ওয়া বিহামদিকা, আস্তাগফিরুকা ওয়া আতূবু ইলাইক',
            translation: 'তুমি পবিত্র এবং তোমার প্রশংসা করি। আমি তোমার কাছে ক্ষমা চাই এবং তোমার দিকে তাওবা করি।',
        },
        id: {
            transliteration: 'Subḥānaka wa biḥamdika, astaghfiruka wa atūbu ilayk',
            translation: 'Maha Suci Engkau dan dengan memuji-Mu. Aku memohon ampunan-Mu dan bertaubat kepada-Mu.',
        },
        sw: {
            transliteration: 'Subḥānaka wa biḥamdika, astaghfiruka wa atūbu ilayk',
            translation: 'Utukufu ni Wako na sifa ni Zako. Nakuomba msamaha na natubu kwako.',
        },
        ha: {
            transliteration: 'Subḥānaka wa biḥamdika, astaghfiruka wa atūbu ilayk',
            translation: 'Tsarki ta tabbata a gare Ka da yabonka. Ina neman gafaranka kuma ina tuba zuwa gare Ka.',
        },
        de: {
            transliteration: 'Subḥānaka wa biḥamdika, astaghfiruka wa atūbu ilayk',
            translation: 'Gepriesen seist Du und aller Lobpreis gehört Dir. Ich bitte Dich um Vergebung und wende mich reumütig zu Dir.',
        },
        hi: {
            transliteration: 'सुब्हानक व बिहम्दिक, अस्तग़्फ़िरुक व अतूबु इलैक',
            translation: 'तू पवित्र है और तेरी प्रशंसा हो। मैं तुझसे माफी मांगता हूं और तेरी तरफ तौबा करता हूं।',
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
    whenToRecite: "Recited quietly during Ruku in every rak'ah, following the revelation of Surah An-Nasr. Also said during Sujood. Particularly recommended in the last phase of a believer's life as a preparation for meeting Allah.",
    audioUrl: placeholderAudio,
}
