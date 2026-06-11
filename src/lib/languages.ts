import type { TLanguage } from '#/types/languages'

export const LANGUAGES: { code: TLanguage; label: string; dir: 'ltr' | 'rtl' }[] = [
    { code: 'en', label: 'English', dir: 'ltr' },
    { code: 'bn', label: 'বাংলা', dir: 'ltr' },
    { code: 'ar', label: 'العربية', dir: 'rtl' },
    { code: 'fr', label: 'Français', dir: 'ltr' },
    { code: 'ur', label: 'اردو', dir: 'rtl' },
    { code: 'tr', label: 'Türkçe', dir: 'ltr' },
    { code: 'ms', label: 'Melayu', dir: 'ltr' },
    { code: 'id', label: 'Indonesia', dir: 'ltr' },
    { code: 'sw', label: 'Kiswahili', dir: 'ltr' },
    { code: 'ha', label: 'Hausa', dir: 'ltr' },
    { code: 'de', label: 'Deutsch', dir: 'ltr' },
    { code: 'hi', label: 'हिन्दी', dir: 'ltr' },
]
