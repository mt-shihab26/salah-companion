# Duas in Salah — Implementation Progress

## Overview

Building a comprehensive Islamic prayer supplications (duas) website with:

- Arabic text (RTL), transliteration, multi-language translations (EN, AR, FR, UR, TR, MS)
- Audio playback per dua
- Quran ayat & Hadith references
- Salah position context
- Modern shadcn/ui design (sea/lagoon theme)

**Total duas:** 39 across 9 salah positions

---

## Phase 1 — Data Layer

### Types & Positions

- [ ] `src/data/duas/types.ts` — TypeScript interfaces
- [ ] `src/data/duas/positions.ts` — 9 SalahPosition definitions
- [ ] `src/data/duas/index.ts` — Exports: allDuas[], getDuaById(), getDuasByPosition()

### Dua Data Files

#### 1. Opening / Istiftah (5 duas)

| #   | ID                  | Arabic Name                                                 | Status     |
| --- | ------------------- | ----------------------------------------------------------- | ---------- |
| 1   | `takbeer`           | تكبيرة الإحرام — Takbeeratul Ihram                          | ⬜ Pending |
| 2   | `istiftah-1`        | دعاء الاستفتاح — Dua Istiftah (Version 1)                   | ⬜ Pending |
| 3   | `istiftah-2`        | دعاء الاستفتاح — Dua Istiftah (Version 2 – removal of sins) | ⬜ Pending |
| 4   | `istiftah-3`        | دعاء الاستفتاح — Dua Istiftah (Version 3 – glorification)   | ⬜ Pending |
| 5   | `istiftah-tahajjud` | دعاء الاستفتاح — Dua Istiftah (Tahajjud)                    | ⬜ Pending |

**File:** `src/data/duas/opening.ts` — ⬜ Pending

---

#### 2. Before Recitation / Ta'awwudh (1 dua)

| #   | ID           | Arabic Name                          | Status     |
| --- | ------------ | ------------------------------------ | ---------- |
| 6   | `taawwudh-1` | التعوذ — Seeking Refuge from Shaytan | ⬜ Pending |

**File:** `src/data/duas/taawwudh.ts` — ⬜ Pending

---

#### 3. Ruku / Bowing (7 duas)

| #   | ID       | Arabic Name                                       | Status     |
| --- | -------- | ------------------------------------------------- | ---------- |
| 7   | `ruku-1` | سُبْحَانَ رَبِّيَ الْعَظِيمِ                      | ⬜ Pending |
| 8   | `ruku-2` | سُبُّوحٌ قُدُّوسٌ                                 | ⬜ Pending |
| 9   | `ruku-3` | سُبْحَانَكَ وَبِحَمْدِكَ لاَ إِلَهَ إِلاَّ أَنْتَ | ⬜ Pending |
| 10  | `ruku-4` | سُبْحَانَكَ اللَّهُمَّ رَبَّنَا وَبِحَمْدِكَ      | ⬜ Pending |
| 11  | `ruku-5` | سُبْحَانَكَ وَبِحَمْدِكَ أَسْتَغْفِرُكَ           | ⬜ Pending |
| 12  | `ruku-6` | سُبْحَانَ ذِي الْجَبَرُوتِ                        | ⬜ Pending |
| 13  | `ruku-7` | اللَّهُمَّ لَكَ رَكَعْتُ                          | ⬜ Pending |

**File:** `src/data/duas/ruku.ts` — ⬜ Pending

---

#### 4. Qawmah / Standing After Ruku (4 duas)

| #   | ID         | Arabic Name                                         | Status     |
| --- | ---------- | --------------------------------------------------- | ---------- |
| 14  | `qawmah-1` | سَمِعَ اللهُ لِمَنْ حَمِدَهُ (short)                | ⬜ Pending |
| 15  | `qawmah-2` | سَمِعَ اللهُ لِمَنْ حَمِدَهُ (with filling heavens) | ⬜ Pending |
| 16  | `qawmah-3` | رَبَّنَا لَكَ الْحَمْدُ (extended)                  | ⬜ Pending |
| 17  | `qawmah-4` | اللَّهُمَّ لَكَ الْحَمْدُ (with purification)       | ⬜ Pending |

**File:** `src/data/duas/qawmah.ts` — ⬜ Pending

---

#### 5. Sajdah / Prostration (10 duas)

| #   | ID          | Arabic Name                                            | Status     |
| --- | ----------- | ------------------------------------------------------ | ---------- |
| 18  | `sajdah-1`  | سُبْحَانَ رَبِّيَ الْأَعْلَى                           | ⬜ Pending |
| 19  | `sajdah-2`  | اللَّهُمَّ اغْفِرْ لِي مَا أَسْرَرْتُ وَمَا أَعْلَنْتُ | ⬜ Pending |
| 20  | `sajdah-3`  | سُبُّوحٌ قُدُّوسٌ                                      | ⬜ Pending |
| 21  | `sajdah-4`  | سُبْحَانَكَ وَبِحَمْدِكَ لاَ إِلَهَ إِلاَّ أَنْتَ      | ⬜ Pending |
| 22  | `sajdah-5`  | سُبْحَانَكَ اللَّهُمَّ رَبَّنَا وَبِحَمْدِكَ           | ⬜ Pending |
| 23  | `sajdah-6`  | سُبْحَانَ ذِي الْجَبَرُوتِ                             | ⬜ Pending |
| 24  | `sajdah-7`  | اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ                 | ⬜ Pending |
| 25  | `sajdah-8`  | اللَّهُمَّ أَعُوذُ بِرِضَاكَ مِنْ سَخَطِكَ             | ⬜ Pending |
| 26  | `sajdah-9`  | اللَّهُمَّ لَكَ سَجَدْتُ                               | ⬜ Pending |
| 27  | `sajdah-10` | اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُوراً                  | ⬜ Pending |

**File:** `src/data/duas/sajdah.ts` — ⬜ Pending

---

#### 6. Jalsah / Sitting Between Prostrations (1 dua)

| #   | ID         | Arabic Name       | Status     |
| --- | ---------- | ----------------- | ---------- |
| 28  | `jalsah-1` | رَبِّ اغْفِرْ لِي | ⬜ Pending |

**File:** `src/data/duas/jalsah.ts` — ⬜ Pending

---

#### 7. Tashahhud (1 dua)

| #   | ID            | Arabic Name | Status     |
| --- | ------------- | ----------- | ---------- |
| 29  | `tashahhud-1` | التحيات     | ⬜ Pending |

**File:** `src/data/duas/tashahhud.ts` — ⬜ Pending

---

#### 8. Salawat / Prayers on the Prophet (1 dua)

| #   | ID          | Arabic Name                               | Status     |
| --- | ----------- | ----------------------------------------- | ---------- |
| 30  | `salawat-1` | الصلاة الإبراهيمية — Salawat Ibrahimiyyah | ⬜ Pending |

**File:** `src/data/duas/salawat.ts` — ⬜ Pending

---

#### 9. Before Tasleem (9 duas)

| #   | ID          | Arabic Name                                                              | Status     |
| --- | ----------- | ------------------------------------------------------------------------ | ---------- |
| 31  | `tasleem-1` | اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي (wrongdoing)                          | ⬜ Pending |
| 32  | `tasleem-2` | اللَّهُمَّ اغْفِرْ لِي مَا قَدَّمْتُ (comprehensive forgiveness)         | ⬜ Pending |
| 33  | `tasleem-3` | اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ جَهَنَّمَ (refuge from Hell) | ⬜ Pending |
| 34  | `tasleem-4` | اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ (grave + Dajjal)   | ⬜ Pending |
| 35  | `tasleem-5` | اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْبُخْلِ (miserliness + cowardice)  | ⬜ Pending |
| 36  | `tasleem-6` | اللَّهُمَّ إِنِّي أَسْأَلُكَ بِأَنَّكَ الْوَاحِدُ (divine attributes)    | ⬜ Pending |
| 37  | `tasleem-7` | اللَّهُمَّ إِنِّي أَسْأَلُكَ الْمَنَّانُ (creator of heavens)            | ⬜ Pending |
| 38  | `tasleem-8` | Seeking refuge from Hell & False Messiah                                 | ⬜ Pending |
| 39  | `tasleem-9` | Grave, Dajjal, life and death                                            | ⬜ Pending |

**File:** `src/data/duas/before-tasleem.ts` — ⬜ Pending

---

## Phase 2 — Global Infrastructure

- [ ] `src/styles.css` — Arabic font (Noto Naskh Arabic) + `.arabic-text` utility class
- [ ] `src/contexts/AudioContext.tsx` — Global currently-playing dua tracker
- [ ] `src/hooks/use-audio-player.ts` — Per-dua audio playback hook
- [ ] `src/hooks/use-dua-lang.ts` — Translation language preference (localStorage)
- [ ] `src/components/layout/SiteHeader.tsx` — Sticky nav with dark mode toggle
- [ ] `src/components/layout/SiteFooter.tsx` — Footer with attribution
- [ ] `src/routes/__root.tsx` — Wrap children in Header + Footer

---

## Phase 3 — Leaf Components

- [ ] `src/components/duas/DuaPositionBadge.tsx` — Colored position badge
- [ ] `src/components/duas/DuaReferenceList.tsx` — Quran/Hadith citation chips
- [ ] `src/components/duas/DuaTranslationPicker.tsx` — Language selector dropdown
- [ ] `src/components/duas/DuaAudioPlayer.tsx` — Play/pause + scrub bar
- [ ] `src/components/duas/DuaTextDisplay.tsx` — Arabic / Transliteration / Translation tabs
- [ ] `src/components/duas/DuaCard.tsx` — Full dua card assembly
- [ ] `src/components/duas/DuaCardSkeleton.tsx` — Loading skeleton
- [ ] `src/components/duas/DuaGroupSection.tsx` — Position section with card grid
- [ ] `src/components/duas/DuaPositionNav.tsx` — Horizontal position filter strip

---

## Phase 4 — Routes

- [ ] `src/routes/index.tsx` — Hero landing page (replace placeholder)
- [ ] `src/routes/duas/index.tsx` — Browse page with `?position=` filter
- [ ] `src/routes/duas/$duaId.tsx` — Single dua detail page
- [ ] Run `bun run generate-routes` — Regenerate routeTree.gen.ts

---

## Phase 5 — Polish & QA

- [ ] Dark mode testing
- [ ] Mobile responsiveness (RTL Arabic, horizontal position nav scroll)
- [ ] Audio: add known audio URLs to data files
- [ ] Add `public/audio/duas/` directory with audio files
- [ ] Cross-browser Arabic font rendering check

---

## Languages Supported

| Code | Language | Script         | Notes                              |
| ---- | -------- | -------------- | ---------------------------------- |
| `en` | English  | Latin          | Default                            |
| `ar` | Arabic   | Arabic (RTL)   | Modern Standard Arabic translation |
| `fr` | French   | Latin          |                                    |
| `ur` | Urdu     | Nastaliq (RTL) |                                    |
| `tr` | Turkish  | Latin          |                                    |
| `ms` | Malay    | Latin          |                                    |

---

## Salah Positions Order

| #   | ID               | English Name                 | Arabic      | Icon |
| --- | ---------------- | ---------------------------- | ----------- | ---- |
| 1   | `opening`        | Opening (Istiftah)           | الاستفتاح   | 🕌   |
| 2   | `taawwudh`       | Seeking Refuge (Ta'awwudh)   | التعوذ      | 🛡️   |
| 3   | `ruku`           | Bowing (Ruku)                | الركوع      | 🙇   |
| 4   | `qawmah`         | Rising (Qawmah)              | القومة      | ⬆️   |
| 5   | `sajdah`         | Prostration (Sajdah)         | السجدة      | 🤲   |
| 6   | `jalsah`         | Sitting Between Prostrations | الجلسة      | 🧘   |
| 7   | `tashahhud`      | Tashahhud                    | التشهد      | 📿   |
| 8   | `salawat`        | Prayers on the Prophet       | الصلوات     | ☪️   |
| 9   | `before-tasleem` | Before Final Salutation      | قبل التسليم | 🤍   |
