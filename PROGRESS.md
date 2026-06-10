# Duas in Salah — Implementation Progress

**Total:** 39 duas · 9 salah positions · 6 languages

**Features per dua:**
- Arabic text (RTL) · Transliteration · 6-language translations (EN, AR, FR, UR, TR, MS)
- Audio playback · Quran reference · Hadith reference · Salah position context · Notes/details

**Legend:** ⬜ Pending · 🔄 In Progress · ✅ Done

**UI rule:** All components must use shadcn/ui primitives (`Badge`, `Button`, `Toggle`, `ToggleGroup`, `Card`, `Separator`, etc.) from `src/components/ui/`. No raw inline styles for structure — use Tailwind classes and CSS variables only where shadcn doesn't cover it.

---

## Foundation

- [x] `src/data/duas/types.ts` — TypeScript interfaces
- [x] `src/data/duas/positions.ts` — 9 SalahPosition definitions
- [x] `src/data/duas/index.ts` — allDuas[], getDuaById(), getDuasByPosition()
- [x] `src/styles.css` — Arabic font + `.arabic-text` class
- [x] `src/contexts/AudioContext.tsx` — Global audio state
- [x] `src/hooks/use-audio-player.ts` — Per-dua audio hook
- [x] `src/hooks/use-dua-lang.ts` — Language preference (localStorage)
- [x] `src/components/layout/SiteHeader.tsx`
- [x] `src/components/layout/SiteFooter.tsx`
- [x] `src/routes/__root.tsx` — Add header/footer
- [x] `src/components/duas/DuaPositionBadge.tsx`
- [x] `src/components/duas/DuaReferenceList.tsx`
- [ ] `src/components/duas/DuaTranslationPicker.tsx`
- [ ] `src/components/duas/DuaAudioPlayer.tsx`
- [ ] `src/components/duas/DuaTextDisplay.tsx`
- [ ] `src/components/duas/DuaCard.tsx`
- [ ] `src/components/duas/DuaGroupSection.tsx`
- [ ] `src/components/duas/DuaPositionNav.tsx`
- [ ] `src/routes/index.tsx` — Hero landing page
- [ ] `src/routes/duas/index.tsx` — Browse page
- [ ] `src/routes/duas/$duaId.tsx` — Detail page

---

## Position 1 — Opening / Istiftah · الاستفتاح

### Dua 1 — Takbeeratul Ihram · تكبيرة الإحرام
**ID:** `takbeer` · **Status:** ⬜ Pending

- [ ] Arabic text
- [ ] Transliteration
- [ ] Translation — English
- [ ] Translation — Arabic (MSA)
- [ ] Translation — French
- [ ] Translation — Urdu
- [ ] Translation — Turkish
- [ ] Translation — Malay
- [ ] Quran reference
- [ ] Hadith reference
- [ ] Audio URL
- [ ] Salah position context
- [ ] Notes / scholarly detail

---

### Dua 2 — Dua Istiftah v1 · دعاء الاستفتاح (رواية ١)
**ID:** `istiftah-1` · **Status:** ⬜ Pending

- [ ] Arabic text
- [ ] Transliteration
- [ ] Translation — English
- [ ] Translation — Arabic (MSA)
- [ ] Translation — French
- [ ] Translation — Urdu
- [ ] Translation — Turkish
- [ ] Translation — Malay
- [ ] Quran reference
- [ ] Hadith reference
- [ ] Audio URL
- [ ] Salah position context
- [ ] Notes / scholarly detail

---

### Dua 3 — Dua Istiftah v2 (Removal of sins) · دعاء الاستفتاح (رواية ٢)
**ID:** `istiftah-2` · **Status:** ⬜ Pending

- [ ] Arabic text
- [ ] Transliteration
- [ ] Translation — English
- [ ] Translation — Arabic (MSA)
- [ ] Translation — French
- [ ] Translation — Urdu
- [ ] Translation — Turkish
- [ ] Translation — Malay
- [ ] Quran reference
- [ ] Hadith reference
- [ ] Audio URL
- [ ] Salah position context
- [ ] Notes / scholarly detail

---

### Dua 4 — Dua Istiftah v3 (Glorification) · دعاء الاستفتاح (رواية ٣)
**ID:** `istiftah-3` · **Status:** ⬜ Pending

- [ ] Arabic text
- [ ] Transliteration
- [ ] Translation — English
- [ ] Translation — Arabic (MSA)
- [ ] Translation — French
- [ ] Translation — Urdu
- [ ] Translation — Turkish
- [ ] Translation — Malay
- [ ] Quran reference
- [ ] Hadith reference
- [ ] Audio URL
- [ ] Salah position context
- [ ] Notes / scholarly detail

---

### Dua 5 — Dua Istiftah (Tahajjud) · دعاء الاستفتاح (التهجد)
**ID:** `istiftah-tahajjud` · **Status:** ⬜ Pending

- [ ] Arabic text
- [ ] Transliteration
- [ ] Translation — English
- [ ] Translation — Arabic (MSA)
- [ ] Translation — French
- [ ] Translation — Urdu
- [ ] Translation — Turkish
- [ ] Translation — Malay
- [ ] Quran reference
- [ ] Hadith reference · Sahih Muslim 1848
- [ ] Audio URL
- [ ] Salah position context
- [ ] Notes / scholarly detail

---

## Position 2 — Before Recitation / Ta'awwudh · التعوذ

### Dua 6 — Seeking Refuge from Shaytan · الاستعاذة
**ID:** `taawwudh-1` · **Status:** ⬜ Pending

- [ ] Arabic text
- [ ] Transliteration
- [ ] Translation — English
- [ ] Translation — Arabic (MSA)
- [ ] Translation — French
- [ ] Translation — Urdu
- [ ] Translation — Turkish
- [ ] Translation — Malay
- [ ] Quran reference · An-Nahl 16:98
- [ ] Hadith reference · Musnad Ahmad 22179
- [ ] Audio URL
- [ ] Salah position context
- [ ] Notes / scholarly detail

---

## Position 3 — Ruku / Bowing · الركوع

### Dua 7 — Subhana Rabbiy al-'Azim · سبحان ربي العظيم
**ID:** `ruku-1` · **Status:** ⬜ Pending

- [ ] Arabic text
- [ ] Transliteration
- [ ] Translation — English
- [ ] Translation — Arabic (MSA)
- [ ] Translation — French
- [ ] Translation — Urdu
- [ ] Translation — Turkish
- [ ] Translation — Malay
- [ ] Quran reference
- [ ] Hadith reference
- [ ] Audio URL
- [ ] Salah position context
- [ ] Notes / scholarly detail

---

### Dua 8 — Subbuhun Quddus · سبوح قدوس
**ID:** `ruku-2` · **Status:** ⬜ Pending

- [ ] Arabic text
- [ ] Transliteration
- [ ] Translation — English
- [ ] Translation — Arabic (MSA)
- [ ] Translation — French
- [ ] Translation — Urdu
- [ ] Translation — Turkish
- [ ] Translation — Malay
- [ ] Quran reference
- [ ] Hadith reference
- [ ] Audio URL
- [ ] Salah position context
- [ ] Notes / scholarly detail

---

### Dua 9 — Subhanaka wa bihamdika la ilaha illa anta (Ruku)
**ID:** `ruku-3` · **Status:** ⬜ Pending

- [ ] Arabic text
- [ ] Transliteration
- [ ] Translation — English
- [ ] Translation — Arabic (MSA)
- [ ] Translation — French
- [ ] Translation — Urdu
- [ ] Translation — Turkish
- [ ] Translation — Malay
- [ ] Quran reference
- [ ] Hadith reference
- [ ] Audio URL
- [ ] Salah position context
- [ ] Notes / scholarly detail

---

### Dua 10 — Subhanaka Allahumma Rabbana wa bihamdika (Ruku)
**ID:** `ruku-4` · **Status:** ⬜ Pending

- [ ] Arabic text
- [ ] Transliteration
- [ ] Translation — English
- [ ] Translation — Arabic (MSA)
- [ ] Translation — French
- [ ] Translation — Urdu
- [ ] Translation — Turkish
- [ ] Translation — Malay
- [ ] Quran reference
- [ ] Hadith reference
- [ ] Audio URL
- [ ] Salah position context
- [ ] Notes / scholarly detail

---

### Dua 11 — Subhanaka wa bihamdika astaghfiruka (Ruku)
**ID:** `ruku-5` · **Status:** ⬜ Pending

- [ ] Arabic text
- [ ] Transliteration
- [ ] Translation — English
- [ ] Translation — Arabic (MSA)
- [ ] Translation — French
- [ ] Translation — Urdu
- [ ] Translation — Turkish
- [ ] Translation — Malay
- [ ] Quran reference
- [ ] Hadith reference
- [ ] Audio URL
- [ ] Salah position context
- [ ] Notes / scholarly detail

---

### Dua 12 — Subhana dhil-Jabarut (Ruku)
**ID:** `ruku-6` · **Status:** ⬜ Pending

- [ ] Arabic text
- [ ] Transliteration
- [ ] Translation — English
- [ ] Translation — Arabic (MSA)
- [ ] Translation — French
- [ ] Translation — Urdu
- [ ] Translation — Turkish
- [ ] Translation — Malay
- [ ] Quran reference
- [ ] Hadith reference
- [ ] Audio URL
- [ ] Salah position context
- [ ] Notes / scholarly detail

---

### Dua 13 — Allahumma laka raka'tu · اللهم لك ركعت
**ID:** `ruku-7` · **Status:** ⬜ Pending

- [ ] Arabic text
- [ ] Transliteration
- [ ] Translation — English
- [ ] Translation — Arabic (MSA)
- [ ] Translation — French
- [ ] Translation — Urdu
- [ ] Translation — Turkish
- [ ] Translation — Malay
- [ ] Quran reference
- [ ] Hadith reference
- [ ] Audio URL
- [ ] Salah position context
- [ ] Notes / scholarly detail

---

## Position 4 — Qawmah / Standing After Ruku · القومة

### Dua 14 — Sami'allahu liman hamidah (short)
**ID:** `qawmah-1` · **Status:** ⬜ Pending

- [ ] Arabic text
- [ ] Transliteration
- [ ] Translation — English
- [ ] Translation — Arabic (MSA)
- [ ] Translation — French
- [ ] Translation — Urdu
- [ ] Translation — Turkish
- [ ] Translation — Malay
- [ ] Quran reference
- [ ] Hadith reference
- [ ] Audio URL
- [ ] Salah position context
- [ ] Notes / scholarly detail

---

### Dua 15 — Sami'allahu liman hamidah (filling heavens)
**ID:** `qawmah-2` · **Status:** ⬜ Pending

- [ ] Arabic text
- [ ] Transliteration
- [ ] Translation — English
- [ ] Translation — Arabic (MSA)
- [ ] Translation — French
- [ ] Translation — Urdu
- [ ] Translation — Turkish
- [ ] Translation — Malay
- [ ] Quran reference
- [ ] Hadith reference
- [ ] Audio URL
- [ ] Salah position context
- [ ] Notes / scholarly detail

---

### Dua 16 — Rabbana lakal hamd (extended)
**ID:** `qawmah-3` · **Status:** ⬜ Pending

- [ ] Arabic text
- [ ] Transliteration
- [ ] Translation — English
- [ ] Translation — Arabic (MSA)
- [ ] Translation — French
- [ ] Translation — Urdu
- [ ] Translation — Turkish
- [ ] Translation — Malay
- [ ] Quran reference
- [ ] Hadith reference
- [ ] Audio URL
- [ ] Salah position context
- [ ] Notes / scholarly detail

---

### Dua 17 — Allahumma lakal hamd (with purification)
**ID:** `qawmah-4` · **Status:** ⬜ Pending

- [ ] Arabic text
- [ ] Transliteration
- [ ] Translation — English
- [ ] Translation — Arabic (MSA)
- [ ] Translation — French
- [ ] Translation — Urdu
- [ ] Translation — Turkish
- [ ] Translation — Malay
- [ ] Quran reference
- [ ] Hadith reference
- [ ] Audio URL
- [ ] Salah position context
- [ ] Notes / scholarly detail

---

## Position 5 — Sajdah / Prostration · السجدة

### Dua 18 — Subhana Rabbiy al-A'la · سبحان ربي الأعلى
**ID:** `sajdah-1` · **Status:** ⬜ Pending

- [ ] Arabic text
- [ ] Transliteration
- [ ] Translation — English
- [ ] Translation — Arabic (MSA)
- [ ] Translation — French
- [ ] Translation — Urdu
- [ ] Translation — Turkish
- [ ] Translation — Malay
- [ ] Quran reference · Al-A'la 87:1
- [ ] Hadith reference
- [ ] Audio URL
- [ ] Salah position context
- [ ] Notes / scholarly detail

---

### Dua 19 — Allahumma ighfir li ma asrart (Sajdah)
**ID:** `sajdah-2` · **Status:** ⬜ Pending

- [ ] Arabic text
- [ ] Transliteration
- [ ] Translation — English
- [ ] Translation — Arabic (MSA)
- [ ] Translation — French
- [ ] Translation — Urdu
- [ ] Translation — Turkish
- [ ] Translation — Malay
- [ ] Quran reference
- [ ] Hadith reference
- [ ] Audio URL
- [ ] Salah position context
- [ ] Notes / scholarly detail

---

### Dua 20 — Subbuhun Quddus (Sajdah)
**ID:** `sajdah-3` · **Status:** ⬜ Pending

- [ ] Arabic text
- [ ] Transliteration
- [ ] Translation — English
- [ ] Translation — Arabic (MSA)
- [ ] Translation — French
- [ ] Translation — Urdu
- [ ] Translation — Turkish
- [ ] Translation — Malay
- [ ] Quran reference
- [ ] Hadith reference
- [ ] Audio URL
- [ ] Salah position context
- [ ] Notes / scholarly detail

---

### Dua 21 — Subhanaka wa bihamdika la ilaha illa anta (Sajdah)
**ID:** `sajdah-4` · **Status:** ⬜ Pending

- [ ] Arabic text
- [ ] Transliteration
- [ ] Translation — English
- [ ] Translation — Arabic (MSA)
- [ ] Translation — French
- [ ] Translation — Urdu
- [ ] Translation — Turkish
- [ ] Translation — Malay
- [ ] Quran reference
- [ ] Hadith reference
- [ ] Audio URL
- [ ] Salah position context
- [ ] Notes / scholarly detail

---

### Dua 22 — Subhanaka Allahumma Rabbana wa bihamdika (Sajdah)
**ID:** `sajdah-5` · **Status:** ⬜ Pending

- [ ] Arabic text
- [ ] Transliteration
- [ ] Translation — English
- [ ] Translation — Arabic (MSA)
- [ ] Translation — French
- [ ] Translation — Urdu
- [ ] Translation — Turkish
- [ ] Translation — Malay
- [ ] Quran reference
- [ ] Hadith reference
- [ ] Audio URL
- [ ] Salah position context
- [ ] Notes / scholarly detail

---

### Dua 23 — Subhana dhil-Jabarut (Sajdah)
**ID:** `sajdah-6` · **Status:** ⬜ Pending

- [ ] Arabic text
- [ ] Transliteration
- [ ] Translation — English
- [ ] Translation — Arabic (MSA)
- [ ] Translation — French
- [ ] Translation — Urdu
- [ ] Translation — Turkish
- [ ] Translation — Malay
- [ ] Quran reference
- [ ] Hadith reference
- [ ] Audio URL
- [ ] Salah position context
- [ ] Notes / scholarly detail

---

### Dua 24 — Allahumma ighfir li dhanbi kullahu · اللهم اغفر لي ذنبي كله
**ID:** `sajdah-7` · **Status:** ⬜ Pending

- [ ] Arabic text
- [ ] Transliteration
- [ ] Translation — English
- [ ] Translation — Arabic (MSA)
- [ ] Translation — French
- [ ] Translation — Urdu
- [ ] Translation — Turkish
- [ ] Translation — Malay
- [ ] Quran reference
- [ ] Hadith reference
- [ ] Audio URL
- [ ] Salah position context
- [ ] Notes / scholarly detail

---

### Dua 25 — Allahumma a'udhu birdaka min sakhatika · أعوذ برضاك من سخطك
**ID:** `sajdah-8` · **Status:** ⬜ Pending

- [ ] Arabic text
- [ ] Transliteration
- [ ] Translation — English
- [ ] Translation — Arabic (MSA)
- [ ] Translation — French
- [ ] Translation — Urdu
- [ ] Translation — Turkish
- [ ] Translation — Malay
- [ ] Quran reference
- [ ] Hadith reference
- [ ] Audio URL
- [ ] Salah position context
- [ ] Notes / scholarly detail

---

### Dua 26 — Allahumma laka sajadtu · اللهم لك سجدت
**ID:** `sajdah-9` · **Status:** ⬜ Pending

- [ ] Arabic text
- [ ] Transliteration
- [ ] Translation — English
- [ ] Translation — Arabic (MSA)
- [ ] Translation — French
- [ ] Translation — Urdu
- [ ] Translation — Turkish
- [ ] Translation — Malay
- [ ] Quran reference
- [ ] Hadith reference
- [ ] Audio URL
- [ ] Salah position context
- [ ] Notes / scholarly detail

---

### Dua 27 — Allahumma ij'al fi qalbi nuran · اجعل في قلبي نوراً
**ID:** `sajdah-10` · **Status:** ⬜ Pending

- [ ] Arabic text
- [ ] Transliteration
- [ ] Translation — English
- [ ] Translation — Arabic (MSA)
- [ ] Translation — French
- [ ] Translation — Urdu
- [ ] Translation — Turkish
- [ ] Translation — Malay
- [ ] Quran reference
- [ ] Hadith reference
- [ ] Audio URL
- [ ] Salah position context
- [ ] Notes / scholarly detail

---

## Position 6 — Jalsah / Sitting Between Prostrations · الجلسة

### Dua 28 — Rabbi ighfir li · رب اغفر لي
**ID:** `jalsah-1` · **Status:** ⬜ Pending

- [ ] Arabic text
- [ ] Transliteration
- [ ] Translation — English
- [ ] Translation — Arabic (MSA)
- [ ] Translation — French
- [ ] Translation — Urdu
- [ ] Translation — Turkish
- [ ] Translation — Malay
- [ ] Quran reference
- [ ] Hadith reference
- [ ] Audio URL
- [ ] Salah position context
- [ ] Notes / scholarly detail

---

## Position 7 — Tashahhud · التشهد

### Dua 29 — At-Tahiyyat · التحيات
**ID:** `tashahhud-1` · **Status:** ⬜ Pending

- [ ] Arabic text
- [ ] Transliteration
- [ ] Translation — English
- [ ] Translation — Arabic (MSA)
- [ ] Translation — French
- [ ] Translation — Urdu
- [ ] Translation — Turkish
- [ ] Translation — Malay
- [ ] Quran reference
- [ ] Hadith reference
- [ ] Audio URL
- [ ] Salah position context
- [ ] Notes / scholarly detail

---

## Position 8 — Salawat · الصلوات

### Dua 30 — Salawat Ibrahimiyyah · الصلاة الإبراهيمية
**ID:** `salawat-1` · **Status:** ⬜ Pending

- [ ] Arabic text
- [ ] Transliteration
- [ ] Translation — English
- [ ] Translation — Arabic (MSA)
- [ ] Translation — French
- [ ] Translation — Urdu
- [ ] Translation — Turkish
- [ ] Translation — Malay
- [ ] Quran reference · Al-Ahzab 33:56
- [ ] Hadith reference
- [ ] Audio URL
- [ ] Salah position context
- [ ] Notes / scholarly detail

---

## Position 9 — Before Tasleem · قبل التسليم

### Dua 31 — Allahumma inni zalamtu nafsi (wrongdoing)
**ID:** `tasleem-1` · **Status:** ⬜ Pending

- [ ] Arabic text
- [ ] Transliteration
- [ ] Translation — English
- [ ] Translation — Arabic (MSA)
- [ ] Translation — French
- [ ] Translation — Urdu
- [ ] Translation — Turkish
- [ ] Translation — Malay
- [ ] Quran reference
- [ ] Hadith reference
- [ ] Audio URL
- [ ] Salah position context
- [ ] Notes / scholarly detail

---

### Dua 32 — Allahumma ighfir li ma qaddamtu (comprehensive)
**ID:** `tasleem-2` · **Status:** ⬜ Pending

- [ ] Arabic text
- [ ] Transliteration
- [ ] Translation — English
- [ ] Translation — Arabic (MSA)
- [ ] Translation — French
- [ ] Translation — Urdu
- [ ] Translation — Turkish
- [ ] Translation — Malay
- [ ] Quran reference
- [ ] Hadith reference
- [ ] Audio URL
- [ ] Salah position context
- [ ] Notes / scholarly detail

---

### Dua 33 — A'udhu bika min adhab Jahannam (refuge from Hell)
**ID:** `tasleem-3` · **Status:** ⬜ Pending

- [ ] Arabic text
- [ ] Transliteration
- [ ] Translation — English
- [ ] Translation — Arabic (MSA)
- [ ] Translation — French
- [ ] Translation — Urdu
- [ ] Translation — Turkish
- [ ] Translation — Malay
- [ ] Quran reference
- [ ] Hadith reference
- [ ] Audio URL
- [ ] Salah position context
- [ ] Notes / scholarly detail

---

### Dua 34 — A'udhu bika min adhab al-qabr (grave + Dajjal)
**ID:** `tasleem-4` · **Status:** ⬜ Pending

- [ ] Arabic text
- [ ] Transliteration
- [ ] Translation — English
- [ ] Translation — Arabic (MSA)
- [ ] Translation — French
- [ ] Translation — Urdu
- [ ] Translation — Turkish
- [ ] Translation — Malay
- [ ] Quran reference
- [ ] Hadith reference
- [ ] Audio URL
- [ ] Salah position context
- [ ] Notes / scholarly detail

---

### Dua 35 — A'udhu bika min al-bukhl (miserliness + cowardice)
**ID:** `tasleem-5` · **Status:** ⬜ Pending

- [ ] Arabic text
- [ ] Transliteration
- [ ] Translation — English
- [ ] Translation — Arabic (MSA)
- [ ] Translation — French
- [ ] Translation — Urdu
- [ ] Translation — Turkish
- [ ] Translation — Malay
- [ ] Quran reference
- [ ] Hadith reference
- [ ] Audio URL
- [ ] Salah position context
- [ ] Notes / scholarly detail

---

### Dua 36 — As'aluka bi annakal Wahid al-Ahad (divine attributes)
**ID:** `tasleem-6` · **Status:** ⬜ Pending

- [ ] Arabic text
- [ ] Transliteration
- [ ] Translation — English
- [ ] Translation — Arabic (MSA)
- [ ] Translation — French
- [ ] Translation — Urdu
- [ ] Translation — Turkish
- [ ] Translation — Malay
- [ ] Quran reference · Al-Ikhlas 112:1-4
- [ ] Hadith reference
- [ ] Audio URL
- [ ] Salah position context
- [ ] Notes / scholarly detail

---

### Dua 37 — As'aluka bil-Mannan Badi' as-samawat (creator of heavens)
**ID:** `tasleem-7` · **Status:** ⬜ Pending

- [ ] Arabic text
- [ ] Transliteration
- [ ] Translation — English
- [ ] Translation — Arabic (MSA)
- [ ] Translation — French
- [ ] Translation — Urdu
- [ ] Translation — Turkish
- [ ] Translation — Malay
- [ ] Quran reference
- [ ] Hadith reference
- [ ] Audio URL
- [ ] Salah position context
- [ ] Notes / scholarly detail

---

### Dua 38 — Refuge from Hell & False Messiah (v2)
**ID:** `tasleem-8` · **Status:** ⬜ Pending

- [ ] Arabic text
- [ ] Transliteration
- [ ] Translation — English
- [ ] Translation — Arabic (MSA)
- [ ] Translation — French
- [ ] Translation — Urdu
- [ ] Translation — Turkish
- [ ] Translation — Malay
- [ ] Quran reference
- [ ] Hadith reference
- [ ] Audio URL
- [ ] Salah position context
- [ ] Notes / scholarly detail

---

### Dua 39 — Grave, Dajjal, life and death (v2)
**ID:** `tasleem-9` · **Status:** ⬜ Pending

- [ ] Arabic text
- [ ] Transliteration
- [ ] Translation — English
- [ ] Translation — Arabic (MSA)
- [ ] Translation — French
- [ ] Translation — Urdu
- [ ] Translation — Turkish
- [ ] Translation — Malay
- [ ] Quran reference
- [ ] Hadith reference
- [ ] Audio URL
- [ ] Salah position context
- [ ] Notes / scholarly detail

---

## Overall Progress

| Phase | Status |
|-------|--------|
| Foundation (types, positions, infra, components, routes) | 🔄 3 / 21 |
| Duas data (all 39) | ⬜ 0 / 39 |
| **Total features completed** | ⬜ 0 / 507 |
