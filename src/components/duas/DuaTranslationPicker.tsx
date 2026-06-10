import { Languages, Check } from 'lucide-react'
import { Button } from '#/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '#/components/ui/popover'
import { Badge } from '#/components/ui/badge'
import { DUA_LANGS } from '#/data/duas/types'
import type { DuaLang } from '#/data/duas/types'
import { cn } from '#/lib/utils'

interface Props {
    langs: DuaLang[]
    onToggle: (lang: DuaLang) => void
}

export function DuaTranslationPicker({ langs, onToggle }: Props) {
    const PICKABLE = DUA_LANGS.filter((l) => l.code !== 'ar')
    const selectedLabels = PICKABLE.filter((l) => langs.includes(l.code))
        .map((l) => l.label)
        .join(', ')
    const selectedCount = PICKABLE.filter((l) => langs.includes(l.code)).length

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="h-9 gap-2 rounded-full pl-3 pr-2.5">
                    <Languages className="size-4 text-primary" />
                    <span className="hidden max-w-[180px] truncate sm:inline">
                        {selectedLabels || 'Translations'}
                    </span>
                    <span className="sm:hidden">Translations</span>
                    <Badge
                        variant="secondary"
                        className="ml-1 h-5 rounded-full px-2 text-[10px] font-semibold"
                    >
                        {selectedCount}
                    </Badge>
                </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-72 p-0">
                <div className="border-b px-4 py-3">
                    <p className="text-sm font-semibold">Translations</p>
                    <p className="text-xs text-muted-foreground">
                        Pick one or more to display alongside the Arabic.
                    </p>
                </div>
                <ul className="max-h-72 overflow-y-auto p-1.5">
                    {PICKABLE.map((l) => {
                        const active = langs.includes(l.code)
                        return (
                            <li key={l.code}>
                                <button
                                    type="button"
                                    onClick={() => onToggle(l.code)}
                                    className={cn(
                                        'flex w-full items-center justify-between gap-3 rounded-md px-2.5 py-2 text-left text-sm transition-colors',
                                        'hover:bg-accent hover:text-accent-foreground',
                                        active && 'bg-primary/5 text-foreground',
                                    )}
                                >
                                    <span className="flex flex-col">
                                        <span className="font-medium leading-tight">{l.label}</span>
                                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                                            {l.code} · {l.dir}
                                        </span>
                                    </span>
                                    <span
                                        className={cn(
                                            'flex size-5 items-center justify-center rounded-full border transition-colors',
                                            active
                                                ? 'border-primary bg-primary text-primary-foreground'
                                                : 'border-input',
                                        )}
                                    >
                                        {active && <Check className="size-3.5" />}
                                    </span>
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </PopoverContent>
        </Popover>
    )
}
