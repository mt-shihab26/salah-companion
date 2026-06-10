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

| Phase                                                    | Status        |
| -------------------------------------------------------- | ------------- |
| Foundation (types, positions, infra, components, routes) | ✅ 22 / 22    |
| Duas data (all 39)                                       | ✅ 39 / 39    |
| Per-dua features (Arabic · translit · 6 langs · refs · notes · audio · position) | ✅ 507 / 507 |
| **Total features completed**                             | ✅ 529 / 529  |

### Extra features shipped

- [x] `DuaDetailDialog` — tabbed dialog (Text / Sources / Notes) per dua
- [x] Favourites / bookmarks — heart button, persisted to `localStorage`
- [x] Copy to clipboard — copies Arabic + transliteration + active translation
- [x] `prettier-plugin-organize-imports` + `prettier-plugin-tailwindcss` wired into `.prettierrc`
