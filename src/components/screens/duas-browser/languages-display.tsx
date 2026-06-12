import type { TLanguage } from '#/types/languages'
import type { TSalahDua } from '#/types/salah-duas'

import { cn } from '#/lib/utils'

import { LANGUAGES } from '#/lib/languages'

export const LanguagesDisplay = ({
    salahDua,
    languages,
}: {
    salahDua: TSalahDua
    languages: TLanguage[]
}) => {
    const orderedLangs = LANGUAGES.filter((l) => languages.includes(l.code))
    return (
        <>
            {orderedLangs.length > 0 && (
                <ul className="space-y-4">
                    {orderedLangs.map((l) => {
                        const isRtl = l.dir === 'rtl'
                        return (
                            <li
                                key={l.code}
                                className={cn(
                                    'border-primary/40 border-l-2 pl-4',
                                    isRtl && 'border-r-2 border-l-0 pr-4 pl-0',
                                )}
                            >
                                <div
                                    className={cn(
                                        'mb-1 flex items-center gap-2',
                                        isRtl && 'flex-row-reverse',
                                    )}
                                >
                                    <span className="text-primary text-[10px] font-semibold tracking-wider uppercase">
                                        {l.code}
                                    </span>
                                    <span className="text-muted-foreground text-[11px]">
                                        {l.label}
                                    </span>
                                </div>
                                <p
                                    className={cn(
                                        'text-muted-foreground mb-2 font-mono text-xs leading-relaxed',
                                        isRtl && 'text-right',
                                    )}
                                >
                                    {salahDua.languages[l.code].transliteration}
                                </p>
                                <p
                                    dir={l.dir}
                                    className={cn(
                                        'text-foreground text-sm leading-relaxed',
                                        isRtl && 'text-right',
                                    )}
                                    style={
                                        isRtl
                                            ? {
                                                  fontFamily:
                                                      "'Amiri', 'Noto Naskh Arabic', Georgia, serif",
                                              }
                                            : undefined
                                    }
                                >
                                    {salahDua.languages[l.code].translation}
                                </p>
                            </li>
                        )
                    })}
                </ul>
            )}
        </>
    )
}
