import { Separator } from '#/components/ui/separator'
import { ArabicText } from '#/components/arabic-text'
import type { DuaVariation, DuaLang } from '#/data/duas/types'

interface Props {
  dua: DuaVariation
  lang: DuaLang
}

export function DuaTextDisplay({ dua, lang }: Props) {
  return (
    <div className="space-y-4">
      <ArabicText className="text-foreground">{dua.arabic}</ArabicText>

      <Separator />

      <p className="text-sm italic text-muted-foreground">{dua.transliteration}</p>

      <p className="text-sm leading-relaxed text-foreground">{dua.translations[lang]}</p>
    </div>
  )
}
