import { Separator } from '#/components/ui/separator'
import type { DuaVariation, DuaLang } from '#/data/duas/types'

interface Props {
  dua: DuaVariation
  lang: DuaLang
}

export function DuaTextDisplay({ dua, lang }: Props) {
  return (
    <div className="space-y-4">
      <p className="arabic-text text-[var(--sea-ink)]">{dua.arabic}</p>

      <Separator />

      <p className="text-sm italic text-[var(--sea-ink-soft)]">{dua.transliteration}</p>

      <p className="text-sm leading-relaxed text-[var(--sea-ink)]">
        {dua.translations[lang]}
      </p>
    </div>
  )
}
