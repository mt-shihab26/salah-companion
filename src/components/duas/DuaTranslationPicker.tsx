import { ToggleGroup, ToggleGroupItem } from '#/components/ui/toggle-group'
import { DUA_LANGS } from '#/data/duas/types'
import type { DuaLang } from '#/data/duas/types'

interface Props {
  lang: DuaLang
  onChange: (lang: DuaLang) => void
}

export function DuaTranslationPicker({ lang, onChange }: Props) {
  return (
    <ToggleGroup
      type="single"
      value={lang}
      onValueChange={(v) => { if (v) onChange(v as DuaLang) }}
      variant="outline"
      size="sm"
      className="flex-wrap justify-start"
    >
      {DUA_LANGS.map((l) => (
        <ToggleGroupItem key={l.code} value={l.code} aria-label={l.label}>
          {l.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
