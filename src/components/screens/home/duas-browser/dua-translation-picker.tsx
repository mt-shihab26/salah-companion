import { cn } from '#/lib/utils'
import { useDuasBrowser } from './duas-browser-context'

import { Badge } from '#/components/ui/badge'
import { Button } from '#/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '#/components/ui/popover'
import { Check, Languages } from 'lucide-react'

import { DUA_LANGS } from '#/data/duas/types'

export const DuaTranslationPicker = () => {
    const { langs, toggleLang } = useDuasBrowser()

    const PICKABLE = DUA_LANGS.filter((l) => l.code !== 'ar')

    const selectedLabels = PICKABLE.filter((l) => langs.includes(l.code))
        .map((l) => l.label)
        .join(', ')

    const selectedCount = PICKABLE.filter((l) => langs.includes(l.code)).length

    return (
        <Popover>
            <PopoverTrigger asChild className="w-full max-w-72 justify-end">
                <Button
                    variant="outline"
                    size="sm"
                    className="h-9 w-full justify-between gap-2 rounded-full pr-2.5 pl-3"
                >
                    <Languages className="text-primary size-4" />
                    <div className="flex gap-1">
                        <span className="hidden max-w-52 truncate sm:inline">
                            {selectedLabels || 'Translations'}
                        </span>
                        <span className="sm:hidden">Translations</span>
                        <Badge
                            variant="secondary"
                            className="ml-1 h-5 rounded-full px-2 text-[10px] font-semibold"
                        >
                            {selectedCount}
                        </Badge>
                    </div>
                </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-72 p-0">
                <div className="border-b px-4 py-3">
                    <p className="text-sm font-semibold">Translations</p>
                    <p className="text-muted-foreground text-xs">
                        Pick one or more to display alongside the Arabic.
                    </p>
                </div>
                <ul className="max-h-72 space-y-1.5 overflow-y-auto p-1.5">
                    {PICKABLE.map((l) => {
                        const active = langs.includes(l.code)
                        return (
                            <li key={l.code}>
                                <button
                                    type="button"
                                    onClick={() => toggleLang(l.code)}
                                    className={cn(
                                        'flex w-full items-center justify-between gap-3 rounded-md px-2.5 py-2 text-left text-sm transition-colors',
                                        'hover:bg-accent hover:text-accent-foreground',
                                        active && 'bg-primary/5 text-foreground',
                                    )}
                                >
                                    <div className="flex items-center gap-1">
                                        <div className="text-primary text-[10px] font-semibold tracking-wider uppercase">
                                            {l.code}
                                        </div>
                                        <div className="text-[11px] leading-tight font-medium">
                                            {l.label}
                                        </div>
                                    </div>
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
