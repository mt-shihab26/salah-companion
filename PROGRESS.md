# Duas in Salah — Implementation Progress

**Total:** 39 duas · 9 salah positions · 6 languages

**Features per dua:**

- Arabic text (RTL) · Transliteration · 6-language translations (EN, AR, FR, UR, TR, MS)
- Audio playback · Quran reference · Hadith reference · Salah position context · Notes/details

**Legend:** ⬜ Pending · 🔄 In Progress · ✅ Done

**UI rule:** All components must use shadcn/ui primitives (`Badge`, `Button`, `Toggle`, `ToggleGroup`, `Card`, `Separator`, etc.) from `src/components/ui/`. No raw inline styles for structure — use Tailwind classes and CSS variables only where shadcn doesn't cover it. Use `lucide-react` for all icons — no hand-rolled SVGs.

---

## Foundation

- [x] `src/data/duas/types.ts` — TypeScript interfaces
- [x] `src/data/duas/positions.ts` — 9 SalahPosition definitions
- [x] `src/data/duas/index.ts` — allDuas[], getDuaById(), getDuasByPosition()
- [x] `src/styles.css` — Arabic font + `.arabic-text` class
- [x] `src/contexts/AudioContext.tsx` — Global audio state
- [x] `src/hooks/use-audio-player.ts` — Per-dua audio hook
- [x] `src/hooks/use-dua-lang.ts` — Language preference (localStorage)
- [x] `src/hooks/use-dua-favorites.ts` — Favourites (localStorage)
- [x] `src/components/layout/SiteHeader.tsx`
- [x] `src/components/layout/SiteFooter.tsx`
- [x] `src/routes/__root.tsx` — Add header/footer
- [x] `src/components/duas/DuaPositionBadge.tsx`
- [x] `src/components/duas/DuaReferenceList.tsx`
- [x] `src/components/duas/DuaTranslationPicker.tsx`
- [x] `src/components/duas/DuaAudioPlayer.tsx`
- [x] `src/components/duas/DuaTextDisplay.tsx`
- [x] `src/components/duas/DuaCard.tsx` — with favourites ♥ + copy 📋 + Details button
- [x] `src/components/duas/DuaDetailDialog.tsx` — tabbed dialog (Text / Sources / Notes)
- [x] `src/components/duas/DuaGroupSection.tsx`
- [x] `src/components/duas/DuaPositionNav.tsx`
- [x] `src/routes/index.tsx` — Hero landing page
- [x] `src/routes/duas/index.tsx` — Browse page

---

## Position 1 — Opening / Istiftah · الاستفتاح

### Dua 1 — Takbeeratul Ihram · تكبيرة الإحرام

**ID:** `takbeer` · **Status:** ✅ Done

- [x] Arabic text
- [x] Transliteration
- [x] Translation — English
- [x] Translation — Arabic (MSA)
- [x] Translation — French
- [x] Translation — Urdu
- [x] Translation — Turkish
- [x] Translation — Malay
- [x] Quran reference
- [x] Hadith reference · Sahih al-Bukhari 744 · Sahih Muslim 399
- [x] Audio URL
- [x] Salah position context
- [x] Notes / scholarly detail

---

### Dua 2 — Dua Istiftah v1 · دعاء الاستفتاح (رواية ١)

**ID:** `istiftah-1` · **Status:** ✅ Done

- [x] Arabic text
- [x] Transliteration
- [x] Translation — English
- [x] Translation — Arabic (MSA)
- [x] Translation — French
- [x] Translation — Urdu
- [x] Translation — Turkish
- [x] Translation — Malay
- [x] Quran reference
- [x] Hadith reference · Sahih Muslim 601
- [x] Audio URL
- [x] Salah position context
- [x] Notes / scholarly detail

---

### Dua 3 — Dua Istiftah v2 (Removal of sins) · دعاء الاستفتاح (رواية ٢)

**ID:** `istiftah-2` · **Status:** ✅ Done

- [x] Arabic text
- [x] Transliteration
- [x] Translation — English
- [x] Translation — Arabic (MSA)
- [x] Translation — French
- [x] Translation — Urdu
- [x] Translation — Turkish
- [x] Translation — Malay
- [x] Quran reference
- [x] Hadith reference · Sahih al-Bukhari 744 · Sahih Muslim 598
- [x] Audio URL
- [x] Salah position context
- [x] Notes / scholarly detail

---

### Dua 4 — Dua Istiftah v3 (Glorification) · دعاء الاستفتاح (رواية ٣)

**ID:** `istiftah-3` · **Status:** ✅ Done

- [x] Arabic text
- [x] Transliteration
- [x] Translation — English
- [x] Translation — Arabic (MSA)
- [x] Translation — French
- [x] Translation — Urdu
- [x] Translation — Turkish
- [x] Translation — Malay
- [x] Quran reference
- [x] Hadith reference · Sunan Abu Dawud 775 · Sunan al-Tirmidhi 243
- [x] Audio URL
- [x] Salah position context
- [x] Notes / scholarly detail

---

### Dua 5 — Dua Istiftah (Tahajjud) · دعاء الاستفتاح (التهجد)

**ID:** `istiftah-tahajjud` · **Status:** ✅ Done

- [x] Arabic text
- [x] Transliteration
- [x] Translation — English
- [x] Translation — Arabic (MSA)
- [x] Translation — French
- [x] Translation — Urdu
- [x] Translation — Turkish
- [x] Translation — Malay
- [x] Quran reference
- [x] Hadith reference · Sahih al-Bukhari 1120 · Sahih Muslim 769
- [x] Audio URL
- [x] Salah position context
- [x] Notes / scholarly detail

---

## Position 2 — Before Recitation / Ta'awwudh · التعوذ

### Dua 6 — Seeking Refuge from Shaytan · الاستعاذة

**ID:** `taawwudh-1` · **Status:** ✅ Done

- [x] Arabic text
- [x] Transliteration
- [x] Translation — English
- [x] Translation — Arabic (MSA)
- [x] Translation — French
- [x] Translation — Urdu
- [x] Translation — Turkish
- [x] Translation — Malay
- [x] Quran reference · An-Nahl 16:98
- [x] Hadith reference
- [x] Audio URL
- [x] Salah position context
- [x] Notes / scholarly detail

---

## Position 3 — Ruku / Bowing · الركوع

### Dua 7 — Subhana Rabbiy al-'Azim · سبحان ربي العظيم

**ID:** `ruku-1` · **Status:** ✅ Done

- [x] Arabic text
- [x] Transliteration
- [x] Translation — English
- [x] Translation — Arabic (MSA)
- [x] Translation — French
- [x] Translation — Urdu
- [x] Translation — Turkish
- [x] Translation — Malay
- [x] Quran reference
- [x] Hadith reference · Sunan Abu Dawud 869 · Sunan Ibn Majah 888
- [x] Audio URL
- [x] Salah position context
- [x] Notes / scholarly detail

---

### Dua 8 — Subbuhun Quddus · سبوح قدوس

**ID:** `ruku-2` · **Status:** ✅ Done

- [x] Arabic text
- [x] Transliteration
- [x] Translation — English
- [x] Translation — Arabic (MSA)
- [x] Translation — French
- [x] Translation — Urdu
- [x] Translation — Turkish
- [x] Translation — Malay
- [x] Quran reference
- [x] Hadith reference · Sahih Muslim 487
- [x] Audio URL
- [x] Salah position context
- [x] Notes / scholarly detail

---

### Dua 9 — Subhanaka wa bihamdika la ilaha illa anta (Ruku)

**ID:** `ruku-3` · **Status:** ✅ Done

- [x] Arabic text
- [x] Transliteration
- [x] Translation — English
- [x] Translation — Arabic (MSA)
- [x] Translation — French
- [x] Translation — Urdu
- [x] Translation — Turkish
- [x] Translation — Malay
- [x] Quran reference
- [x] Hadith reference · Sahih Muslim 485
- [x] Audio URL
- [x] Salah position context
- [x] Notes / scholarly detail

---

### Dua 10 — Subhanaka Allahumma Rabbana wa bihamdika (Ruku)

**ID:** `ruku-4` · **Status:** ✅ Done

- [x] Arabic text
- [x] Transliteration
- [x] Translation — English
- [x] Translation — Arabic (MSA)
- [x] Translation — French
- [x] Translation — Urdu
- [x] Translation — Turkish
- [x] Translation — Malay
- [x] Quran reference
- [x] Hadith reference · Sahih al-Bukhari 817 · Sahih Muslim 484
- [x] Audio URL
- [x] Salah position context
- [x] Notes / scholarly detail

---

### Dua 11 — Subhanaka wa bihamdika astaghfiruka (Ruku)

**ID:** `ruku-5` · **Status:** ✅ Done

- [x] Arabic text
- [x] Transliteration
- [x] Translation — English
- [x] Translation — Arabic (MSA)
- [x] Translation — French
- [x] Translation — Urdu
- [x] Translation — Turkish
- [x] Translation — Malay
- [x] Quran reference
- [x] Hadith reference · Sahih Muslim 484
- [x] Audio URL
- [x] Salah position context
- [x] Notes / scholarly detail

---

### Dua 12 — Subhana dhil-Jabarut (Ruku)

**ID:** `ruku-6` · **Status:** ✅ Done

- [x] Arabic text
- [x] Transliteration
- [x] Translation — English
- [x] Translation — Arabic (MSA)
- [x] Translation — French
- [x] Translation — Urdu
- [x] Translation — Turkish
- [x] Translation — Malay
- [x] Quran reference
- [x] Hadith reference · Sunan Abu Dawud 873
- [x] Audio URL
- [x] Salah position context
- [x] Notes / scholarly detail

---

### Dua 13 — Allahumma laka raka'tu · اللهم لك ركعت

**ID:** `ruku-7` · **Status:** ✅ Done

- [x] Arabic text
- [x] Transliteration
- [x] Translation — English
- [x] Translation — Arabic (MSA)
- [x] Translation — French
- [x] Translation — Urdu
- [x] Translation — Turkish
- [x] Translation — Malay
- [x] Quran reference
- [x] Hadith reference · Sahih Muslim 771
- [x] Audio URL
- [x] Salah position context
- [x] Notes / scholarly detail

---

## Position 4 — Qawmah / Standing After Ruku · القومة

### Dua 14 — Sami'allahu liman hamidah (short)

**ID:** `qawmah-1` · **Status:** ✅ Done

- [x] Arabic text
- [x] Transliteration
- [x] Translation — English
- [x] Translation — Arabic (MSA)
- [x] Translation — French
- [x] Translation — Urdu
- [x] Translation — Turkish
- [x] Translation — Malay
- [x] Quran reference
- [x] Hadith reference · Sahih al-Bukhari 796
- [x] Audio URL
- [x] Salah position context
- [x] Notes / scholarly detail

---

### Dua 15 — Sami'allahu liman hamidah (filling heavens)

**ID:** `qawmah-2` · **Status:** ✅ Done

- [x] Arabic text
- [x] Transliteration
- [x] Translation — English
- [x] Translation — Arabic (MSA)
- [x] Translation — French
- [x] Translation — Urdu
- [x] Translation — Turkish
- [x] Translation — Malay
- [x] Quran reference
- [x] Hadith reference · Sahih Muslim 476
- [x] Audio URL
- [x] Salah position context
- [x] Notes / scholarly detail

---

### Dua 16 — Rabbana lakal hamd (extended)

**ID:** `qawmah-3` · **Status:** ✅ Done

- [x] Arabic text
- [x] Transliteration
- [x] Translation — English
- [x] Translation — Arabic (MSA)
- [x] Translation — French
- [x] Translation — Urdu
- [x] Translation — Turkish
- [x] Translation — Malay
- [x] Quran reference
- [x] Hadith reference · Sahih Muslim 477
- [x] Audio URL
- [x] Salah position context
- [x] Notes / scholarly detail

---

### Dua 17 — Allahumma lakal hamd (with purification)

**ID:** `qawmah-4` · **Status:** ✅ Done

- [x] Arabic text
- [x] Transliteration
- [x] Translation — English
- [x] Translation — Arabic (MSA)
- [x] Translation — French
- [x] Translation — Urdu
- [x] Translation — Turkish
- [x] Translation — Malay
- [x] Quran reference
- [x] Hadith reference · Sunan al-Nasai 1068
- [x] Audio URL
- [x] Salah position context
- [x] Notes / scholarly detail

---

## Position 5 — Sajdah / Prostration · السجدة

### Dua 18 — Subhana Rabbiy al-A'la · سبحان ربي الأعلى

**ID:** `sajdah-1` · **Status:** ✅ Done

- [x] Arabic text
- [x] Transliteration
- [x] Translation — English
- [x] Translation — Arabic (MSA)
- [x] Translation — French
- [x] Translation — Urdu
- [x] Translation — Turkish
- [x] Translation — Malay
- [x] Quran reference · Al-A'la 87:1
- [x] Hadith reference · Sunan Abu Dawud 869
- [x] Audio URL
- [x] Salah position context
- [x] Notes / scholarly detail

---

### Dua 19 — Allahumma ighfir li ma asrart (Sajdah)

**ID:** `sajdah-2` · **Status:** ✅ Done

- [x] Arabic text
- [x] Transliteration
- [x] Translation — English
- [x] Translation — Arabic (MSA)
- [x] Translation — French
- [x] Translation — Urdu
- [x] Translation — Turkish
- [x] Translation — Malay
- [x] Quran reference
- [x] Hadith reference · Sahih Muslim 483
- [x] Audio URL
- [x] Salah position context
- [x] Notes / scholarly detail

---

### Dua 20 — Subbuhun Quddus (Sajdah)

**ID:** `sajdah-3` · **Status:** ✅ Done

- [x] Arabic text
- [x] Transliteration
- [x] Translation — English
- [x] Translation — Arabic (MSA)
- [x] Translation — French
- [x] Translation — Urdu
- [x] Translation — Turkish
- [x] Translation — Malay
- [x] Quran reference
- [x] Hadith reference · Sahih Muslim 487
- [x] Audio URL
- [x] Salah position context
- [x] Notes / scholarly detail

---

### Dua 21 — Subhanaka wa bihamdika la ilaha illa anta (Sajdah)

**ID:** `sajdah-4` · **Status:** ✅ Done

- [x] Arabic text
- [x] Transliteration
- [x] Translation — English
- [x] Translation — Arabic (MSA)
- [x] Translation — French
- [x] Translation — Urdu
- [x] Translation — Turkish
- [x] Translation — Malay
- [x] Quran reference
- [x] Hadith reference · Sahih Muslim 485
- [x] Audio URL
- [x] Salah position context
- [x] Notes / scholarly detail

---

### Dua 22 — Subhanaka Allahumma Rabbana wa bihamdika (Sajdah)

**ID:** `sajdah-5` · **Status:** ✅ Done

- [x] Arabic text
- [x] Transliteration
- [x] Translation — English
- [x] Translation — Arabic (MSA)
- [x] Translation — French
- [x] Translation — Urdu
- [x] Translation — Turkish
- [x] Translation — Malay
- [x] Quran reference
- [x] Hadith reference · Sahih al-Bukhari 817 · Sahih Muslim 484
- [x] Audio URL
- [x] Salah position context
- [x] Notes / scholarly detail

---

### Dua 23 — Subhana dhil-Jabarut (Sajdah)

**ID:** `sajdah-6` · **Status:** ✅ Done

- [x] Arabic text
- [x] Transliteration
- [x] Translation — English
- [x] Translation — Arabic (MSA)
- [x] Translation — French
- [x] Translation — Urdu
- [x] Translation — Turkish
- [x] Translation — Malay
- [x] Quran reference
- [x] Hadith reference · Sunan Abu Dawud 873
- [x] Audio URL
- [x] Salah position context
- [x] Notes / scholarly detail

---

### Dua 24 — Allahumma ighfir li dhanbi kullahu · اللهم اغفر لي ذنبي كله

**ID:** `sajdah-7` · **Status:** ✅ Done

- [x] Arabic text
- [x] Transliteration
- [x] Translation — English
- [x] Translation — Arabic (MSA)
- [x] Translation — French
- [x] Translation — Urdu
- [x] Translation — Turkish
- [x] Translation — Malay
- [x] Quran reference
- [x] Hadith reference · Sahih Muslim 483
- [x] Audio URL
- [x] Salah position context
- [x] Notes / scholarly detail

---

### Dua 25 — Allahumma a'udhu birdaka min sakhatika · أعوذ برضاك من سخطك

**ID:** `sajdah-8` · **Status:** ✅ Done

- [x] Arabic text
- [x] Transliteration
- [x] Translation — English
- [x] Translation — Arabic (MSA)
- [x] Translation — French
- [x] Translation — Urdu
- [x] Translation — Turkish
- [x] Translation — Malay
- [x] Quran reference
- [x] Hadith reference · Sahih Muslim 486
- [x] Audio URL
- [x] Salah position context
- [x] Notes / scholarly detail

---

### Dua 26 — Allahumma laka sajadtu · اللهم لك سجدت

**ID:** `sajdah-9` · **Status:** ✅ Done

- [x] Arabic text
- [x] Transliteration
- [x] Translation — English
- [x] Translation — Arabic (MSA)
- [x] Translation — French
- [x] Translation — Urdu
- [x] Translation — Turkish
- [x] Translation — Malay
- [x] Quran reference
- [x] Hadith reference · Sahih Muslim 771
- [x] Audio URL
- [x] Salah position context
- [x] Notes / scholarly detail

---

### Dua 27 — Allahumma ij'al fi qalbi nuran · اجعل في قلبي نوراً

**ID:** `sajdah-10` · **Status:** ✅ Done

- [x] Arabic text
- [x] Transliteration
- [x] Translation — English
- [x] Translation — Arabic (MSA)
- [x] Translation — French
- [x] Translation — Urdu
- [x] Translation — Turkish
- [x] Translation — Malay
- [x] Quran reference
- [x] Hadith reference · Sahih Muslim 763
- [x] Audio URL
- [x] Salah position context
- [x] Notes / scholarly detail

---

## Position 6 — Jalsah / Sitting Between Prostrations · الجلسة

### Dua 28 — Rabbi ighfir li · رب اغفر لي

**ID:** `jalsah-1` · **Status:** ✅ Done

- [x] Arabic text
- [x] Transliteration
- [x] Translation — English
- [x] Translation — Arabic (MSA)
- [x] Translation — French
- [x] Translation — Urdu
- [x] Translation — Turkish
- [x] Translation — Malay
- [x] Quran reference
- [x] Hadith reference · Sunan Ibn Majah 897 · Sunan Abu Dawud 874
- [x] Audio URL
- [x] Salah position context
- [x] Notes / scholarly detail

---

## Position 7 — Tashahhud · التشهد

### Dua 29 — At-Tahiyyat · التحيات

**ID:** `tashahhud-1` · **Status:** ✅ Done

- [x] Arabic text
- [x] Transliteration
- [x] Translation — English
- [x] Translation — Arabic (MSA)
- [x] Translation — French
- [x] Translation — Urdu
- [x] Translation — Turkish
- [x] Translation — Malay
- [x] Quran reference
- [x] Hadith reference · Sahih al-Bukhari 831 · Sahih Muslim 402
- [x] Audio URL
- [x] Salah position context
- [x] Notes / scholarly detail

---

## Position 8 — Salawat · الصلوات

### Dua 30 — Salawat Ibrahimiyyah · الصلاة الإبراهيمية

**ID:** `salawat-1` · **Status:** ✅ Done

- [x] Arabic text
- [x] Transliteration
- [x] Translation — English
- [x] Translation — Arabic (MSA)
- [x] Translation — French
- [x] Translation — Urdu
- [x] Translation — Turkish
- [x] Translation — Malay
- [x] Quran reference · Al-Ahzab 33:56
- [x] Hadith reference · Sahih al-Bukhari 3370 · Sahih Muslim 406
- [x] Audio URL
- [x] Salah position context
- [x] Notes / scholarly detail

---

## Position 9 — Before Tasleem · قبل التسليم

### Dua 31 — Allahumma inni zalamtu nafsi (wrongdoing)

**ID:** `tasleem-1` · **Status:** ✅ Done

- [x] Arabic text
- [x] Transliteration
- [x] Translation — English
- [x] Translation — Arabic (MSA)
- [x] Translation — French
- [x] Translation — Urdu
- [x] Translation — Turkish
- [x] Translation — Malay
- [x] Quran reference
- [x] Hadith reference · Sahih al-Bukhari 834 · Sahih Muslim 2705
- [x] Audio URL
- [x] Salah position context
- [x] Notes / scholarly detail

---

### Dua 32 — Allahumma ighfir li ma qaddamtu (comprehensive)

**ID:** `tasleem-2` · **Status:** ✅ Done

- [x] Arabic text
- [x] Transliteration
- [x] Translation — English
- [x] Translation — Arabic (MSA)
- [x] Translation — French
- [x] Translation — Urdu
- [x] Translation — Turkish
- [x] Translation — Malay
- [x] Quran reference
- [x] Hadith reference · Sahih Muslim 771
- [x] Audio URL
- [x] Salah position context
- [x] Notes / scholarly detail

---

### Dua 33 — A'udhu bika min adhab Jahannam (refuge from Hell)

**ID:** `tasleem-3` · **Status:** ✅ Done

- [x] Arabic text
- [x] Transliteration
- [x] Translation — English
- [x] Translation — Arabic (MSA)
- [x] Translation — French
- [x] Translation — Urdu
- [x] Translation — Turkish
- [x] Translation — Malay
- [x] Quran reference
- [x] Hadith reference · Sahih al-Bukhari 789 · Sahih Muslim 588
- [x] Audio URL
- [x] Salah position context
- [x] Notes / scholarly detail

---

### Dua 34 — A'udhu bika min adhab al-qabr (grave + Dajjal)

**ID:** `tasleem-4` · **Status:** ✅ Done

- [x] Arabic text
- [x] Transliteration
- [x] Translation — English
- [x] Translation — Arabic (MSA)
- [x] Translation — French
- [x] Translation — Urdu
- [x] Translation — Turkish
- [x] Translation — Malay
- [x] Quran reference
- [x] Hadith reference · Sahih al-Bukhari 832 · Sahih Muslim 589
- [x] Audio URL
- [x] Salah position context
- [x] Notes / scholarly detail

---

### Dua 35 — A'udhu bika min al-bukhl (miserliness + cowardice)

**ID:** `tasleem-5` · **Status:** ✅ Done

- [x] Arabic text
- [x] Transliteration
- [x] Translation — English
- [x] Translation — Arabic (MSA)
- [x] Translation — French
- [x] Translation — Urdu
- [x] Translation — Turkish
- [x] Translation — Malay
- [x] Quran reference
- [x] Hadith reference · Sahih al-Bukhari 2822
- [x] Audio URL
- [x] Salah position context
- [x] Notes / scholarly detail

---

### Dua 36 — As'aluka bi annakal Wahid al-Ahad (divine attributes)

**ID:** `tasleem-6` · **Status:** ✅ Done

- [x] Arabic text
- [x] Transliteration
- [x] Translation — English
- [x] Translation — Arabic (MSA)
- [x] Translation — French
- [x] Translation — Urdu
- [x] Translation — Turkish
- [x] Translation — Malay
- [x] Quran reference · Al-Ikhlas 112:1-4
- [x] Hadith reference · Sunan Abu Dawud 985 · Sunan al-Nasai 1300
- [x] Audio URL
- [x] Salah position context
- [x] Notes / scholarly detail

---

### Dua 37 — As'aluka bil-Mannan Badi' as-samawat (creator of heavens)

**ID:** `tasleem-7` · **Status:** ✅ Done

- [x] Arabic text
- [x] Transliteration
- [x] Translation — English
- [x] Translation — Arabic (MSA)
- [x] Translation — French
- [x] Translation — Urdu
- [x] Translation — Turkish
- [x] Translation — Malay
- [x] Quran reference
- [x] Hadith reference · Sunan Abu Dawud 1495 · Sunan al-Nasai 1301
- [x] Audio URL
- [x] Salah position context
- [x] Notes / scholarly detail

---

### Dua 38 — Refuge from Hell & False Messiah (v2)

**ID:** `tasleem-8` · **Status:** ✅ Done

- [x] Arabic text
- [x] Transliteration
- [x] Translation — English
- [x] Translation — Arabic (MSA)
- [x] Translation — French
- [x] Translation — Urdu
- [x] Translation — Turkish
- [x] Translation — Malay
- [x] Quran reference
- [x] Hadith reference · Sahih al-Bukhari 1377 · Sahih Muslim 590
- [x] Audio URL
- [x] Salah position context
- [x] Notes / scholarly detail

---

### Dua 39 — Grave, Dajjal, life and death (v2)

**ID:** `tasleem-9` · **Status:** ✅ Done

- [x] Arabic text
- [x] Transliteration
- [x] Translation — English
- [x] Translation — Arabic (MSA)
- [x] Translation — French
- [x] Translation — Urdu
- [x] Translation — Turkish
- [x] Translation — Malay
- [x] Quran reference
- [x] Hadith reference · Sahih al-Bukhari 6367 · Sahih Muslim 2706
- [x] Audio URL
- [x] Salah position context
- [x] Notes / scholarly detail

---

## Overall Progress

| Phase                                                                            | Status       |
| -------------------------------------------------------------------------------- | ------------ |
| Foundation (types, positions, infra, components, routes)                         | ✅ 22 / 22   |
| Duas data (all 39)                                                               | ✅ 39 / 39   |
| Per-dua features (Arabic · translit · 6 langs · refs · notes · audio · position) | ✅ 507 / 507 |
| **Total features completed**                                                     | ✅ 529 / 529 |

### Extra features shipped

- [x] `DuaDetailDialog` — tabbed dialog (Text / Sources / Notes) per dua
- [x] Favourites / bookmarks — heart button, persisted to `localStorage`
- [x] Copy to clipboard — copies Arabic + transliteration + active translation
- [x] `prettier-plugin-organize-imports` + `prettier-plugin-tailwindcss` wired into `.prettierrc`

---

# Salah Knowledge Expansion — Backlog

**Goal:** grow the site from a duas-only portal into a complete salah reference. Every checkbox below is a candidate for new data + a new screen (or a new tab inside the existing browser).

**Legend:** ⬜ Pending · 🔄 In Progress · ✅ Done — everything below starts as ⬜.

---

## 1. Prerequisites of Salah (Shurūṭ aṣ-Ṣalāh)

- [ ] Islam, sanity, age of accountability (tamyīz / bulūgh)
- [ ] Purity from major and minor ḥadath
- [ ] Purity of body, clothes, and place of prayer
- [ ] Covering the ʿawrah (men and women)
- [ ] Entry of the prayer time
- [ ] Facing the qiblah
- [ ] Intention (niyyah) — placement and rulings

---

## 2. Purification (Ṭahārah)

### 2.1 Wuḍūʾ (ablution)

- [ ] Farāʾiḍ (obligatory acts)
- [ ] Sunan and mustaḥabbāt
- [ ] Nawāqiḍ (nullifiers)
- [ ] Step-by-step walkthrough with illustrations
- [ ] Duʿāʾ before and after wuḍūʾ
- [ ] Virtues from Quran & hadith

### 2.2 Ghusl (full ritual bath)

- [ ] When obligatory (janābah, ḥayḍ, nifās, embracing Islam, death)
- [ ] Farāʾiḍ and sunan
- [ ] Full procedure (Prophetic method)

### 2.3 Tayammum (dry ablution)

- [ ] When permitted
- [ ] How to perform
- [ ] What invalidates it

### 2.4 Other purification topics

- [ ] Istinjāʾ / istibrāʾ — etiquette of relieving oneself
- [ ] Masḥ ʿalā al-khuffayn — wiping over socks/leather (durations for resident vs traveller)
- [ ] Najāsāt — categories of impurities and how to remove each

---

## 3. Adhān & Iqāmah

- [ ] Full wording of the adhān (with Fajr's *aṣ-ṣalātu khayrun min an-nawm*)
- [ ] Full wording of the iqāmah
- [ ] Responses to the muʾadhdhin (mujīb al-muʾadhdhin)
- [ ] Duʿāʾ after adhān (al-wasīlah)
- [ ] Rulings, virtues, and brief history of the adhān

---

## 4. Times of Salah (Awqāt aṣ-Ṣalāh)

- [ ] Start and end times of Fajr, Ẓuhr, ʿAṣr, Maghrib, ʿIshāʾ
- [ ] Forbidden times for nafl (sunrise, zenith, sunset)
- [ ] Best (afḍal) times for each prayer
- [ ] How times are derived from sun position
- [ ] High-latitude rulings

---

## 5. Qiblah

- [ ] How to determine direction
- [ ] Ruling when uncertain or unable to verify
- [ ] History of the qiblah change from Bayt al-Maqdis to the Kaʿbah
- [ ] In-flight and at-sea prayer rulings

---

## 6. The Five Daily Prayers — structure

- [ ] Rakʿah counts for each: farḍ + sunnah muʾakkadah + ghayr muʾakkadah + nafl
- [ ] Fajr (2 farḍ) layout
- [ ] Ẓuhr (4 farḍ) layout
- [ ] ʿAṣr (4 farḍ) layout
- [ ] Maghrib (3 farḍ) layout
- [ ] ʿIshāʾ (4 farḍ) layout
- [ ] Silent (sirrī) vs aloud (jahrī) recitation per prayer

---

## 7. Arkān (Pillars) of Salah

- [ ] Qiyām (standing) for those able
- [ ] Takbīrat al-iḥrām
- [ ] Recitation of al-Fātiḥah
- [ ] Rukūʿ
- [ ] Iʿtidāl (rising from rukūʿ)
- [ ] Sujūd
- [ ] Julūs bayna as-sajdatayn
- [ ] Final tashahhud
- [ ] Sitting for the final tashahhud
- [ ] Ṣalāh ʿalā an-Nabī ﷺ
- [ ] Taslīm
- [ ] Tartīb (proper order)
- [ ] Ṭumaʾnīnah (calmness / stillness)

---

## 8. Wājibāt, Sunan, Mustaḥabbāt

- [ ] Wājib acts (e.g. saying takbīr at every transition)
- [ ] Sunan qawliyyah (verbal sunnah acts)
- [ ] Sunan fiʿliyyah (physical sunnah acts)
- [ ] Makrūhāt (disliked acts)
- [ ] Mustaḥabbāt (recommended acts)

---

## 9. Mubṭilāt (Nullifiers of Salah)

- [ ] Speech
- [ ] Excessive movement
- [ ] Eating or drinking
- [ ] Laughter
- [ ] Breaking of wuḍūʾ
- [ ] Turning the chest away from qiblah
- [ ] Other major nullifiers per madhhab

---

## 10. Step-by-step "How to Pray"

- [ ] Full walkthrough rakʿah-by-rakʿah for each of the 5 prayers
- [ ] Gender-specific posture differences (per madhhab)
- [ ] Animated / illustrated position guide tied into the existing 9-position model
- [ ] Printable cheatsheets

---

## 11. Special & Occasional Prayers

- [ ] Jumuʿah — ghusl, khuṭbah, conditions, dhikr of the day
- [ ] Eid al-Fiṭr & Eid al-Aḍḥā — takbīrāt zawāʾid, khuṭbah
- [ ] Janāzah — 4 takbīrs, duʿāʾ for the deceased (adult male / female / child)
- [ ] Khusūf / Kusūf — eclipse prayer
- [ ] Istisqāʾ — prayer for rain
- [ ] Khawf — fear / battlefield prayer
- [ ] Musāfir — qaṣr (shortening) and jamʿ (combining) rules
- [ ] Marīḍ — prayer for the sick (sitting / lying / by gesture)

---

## 12. Voluntary Prayers (Nawāfil)

- [ ] Sunan rawātib (regular sunnah of the 5 prayers)
- [ ] Taḥiyyat al-Masjid
- [ ] Tahajjud / Qiyām al-Layl
- [ ] Witr (with qunūt)
- [ ] Ḍuḥā
- [ ] Awwābīn
- [ ] Tarāwīḥ
- [ ] Istikhārah
- [ ] Tasbīḥ
- [ ] Ḥājah
- [ ] Tawbah
- [ ] Sajdat ash-Shukr
- [ ] Sajdat at-Tilāwah

---

## 13. Sajdat as-Sahw

- [ ] When required (zāda, naqaṣa, shakka)
- [ ] How to perform
- [ ] Before or after taslīm — scholarly views

---

## 14. Qaḍāʾ — making up missed prayers

- [ ] Rulings on qaḍāʾ
- [ ] Order and intention
- [ ] Scholarly positions on intentional vs unintentional missing

---

## 15. Imāmah & Jamāʿah

- [ ] Conditions to lead the prayer
- [ ] How to follow the imām
- [ ] Masbūq (the latecomer)
- [ ] Women leading other women
- [ ] Virtues of congregational prayer
- [ ] Ṣaff (row) etiquette — straightening, gaps, latecomer placement
- [ ] Sutrah (barrier in front of the worshipper)

---

## 16. Adhkār after Salah

- [ ] Astaghfirullāh ×3
- [ ] *Allāhumma anta as-salām wa minka as-salām…*
- [ ] Āyat al-Kursī
- [ ] Last three sūrahs (al-Ikhlāṣ, al-Falaq, an-Nās)
- [ ] Tasbīḥ Fāṭimah (33 / 33 / 34)
- [ ] Morning and evening adhkār attached to Fajr & ʿAṣr

---

## 17. Khushūʿ (presence of heart)

- [ ] Quranic āyāt and hadith on khushūʿ
- [ ] Practical tips for concentration
- [ ] Common distractions and how to handle them
- [ ] Spiritual dimension and reward

---

## 18. Women & Salah

- [ ] Ḥayḍ / nifās exemption (and that prayer is not made up)
- [ ] Posture differences across madhhabs
- [ ] Praying at home vs masjid
- [ ] ʿAwrah / niqāb rulings in salah
- [ ] Women leading other women

---

## 19. Children & Salah

- [ ] Hadith on age 7 and age 10
- [ ] Teaching method and milestones
- [ ] Child-friendly walkthrough

---

## 20. Common Sūrahs recited in Salah

Each entry needs Arabic, transliteration, multi-language translations (reuse existing language stack), audio, and tajwīd notes.

- [ ] Al-Fātiḥah (1)
- [ ] Al-Ikhlāṣ (112)
- [ ] Al-Falaq (113)
- [ ] An-Nās (114)
- [ ] Al-Kāfirūn (109)
- [ ] Al-Kawthar (108)
- [ ] Al-ʿAṣr (103)
- [ ] An-Naṣr (110)
- [ ] Al-Māʿūn (107)
- [ ] Quraysh (106)
- [ ] Al-Fīl (105)
- [ ] Al-Humazah (104)
- [ ] At-Takāthur (102)
- [ ] Additional short Mufaṣṣal selections

---

## 21. Virtues & Warnings (Faḍāʾil)

- [ ] Quranic āyāt on the virtue of ṣalāh
- [ ] Ṣaḥīḥ hadith collection on the virtue of ṣalāh
- [ ] Severity of abandoning ṣalāh
- [ ] *ʿAmūd ad-dīn* hadith ("salah is the pillar of the religion")
- [ ] "First thing judged on Yawm al-Qiyāmah" hadith

---

## 22. Madhhab differences

Side-by-side Ḥanafī · Mālikī · Shāfiʿī · Ḥanbalī views on:

- [ ] Hand placement during qiyām
- [ ] Āmīn — aloud or silent
- [ ] Rafʿ al-yadayn (raising hands at takbīr)
- [ ] Tashahhud finger movement
- [ ] Witr structure
- [ ] Qunūt — when and in which prayer
- [ ] Other notable differences in practice

---

## 23. Common mistakes

- [ ] Frequent posture errors
- [ ] Frequent recitation errors
- [ ] Skipping ṭumaʾnīnah
- [ ] Wuḍūʾ-related mistakes that affect salah
- [ ] How to correct each

---

## 24. Glossary

- [ ] A linkable Arabic / English glossary of every term used on the site (rakʿah, sajdah, qiyām, julūs, taslīm, niyyah, takbīr, tashahhud, qunūt, …)

---

## 25. Tools (optional, content-adjacent)

- [ ] Prayer-time calculator
- [ ] Qiblah compass
- [ ] Rakʿah counter
- [ ] Adhān player
- [ ] Tasbīḥ counter
- [ ] "Today's adhkār" widget
