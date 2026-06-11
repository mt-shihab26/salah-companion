import { Button } from '#/components/ui/button'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '#/components/ui/card'
import { Separator } from '#/components/ui/separator'
import { useDuaFavorites } from '#/hooks/use-dua-favorites'
import { cn } from '#/lib/utils'
import type { TLanguage } from '#/types/languages'
import type { TSalahDua } from '#/types/salah-duas'
import { Check, Clock, Copy, ExternalLink, Heart } from 'lucide-react'
import { useState } from 'react'
import { DuaAudioPlayer } from './DuaAudioPlayer'
import { DuaDetailDialog } from './DuaDetailDialog'
import { DuaPositionBadge } from './DuaPositionBadge'
import { DuaReferenceList } from './DuaReferenceList'
import { DuaTextDisplay } from './DuaTextDisplay'

interface Props {
    dua: TSalahDua
    langs: TLanguage[]
    showPosition?: boolean
}

export function DuaCard({ dua, langs, showPosition = false }: Props) {
    const [dialogOpen, setDialogOpen] = useState(false)
    const [copied, setCopied] = useState(false)
    const { isFavorite, toggle } = useDuaFavorites()
    const fav = isFavorite(dua.id)

    async function copy() {
        const lang = langs[0] ?? 'en'
        const text = [
            dua.arabic,
            '',
            dua.languages[lang].transliteration,
            '',
            dua.languages[lang].translation,
        ].join('\n')
        try {
            await navigator.clipboard.writeText(text)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch {
            // ignore
        }
    }

    return (
        <>
            <Card className="border-border/60 overflow-hidden transition-shadow hover:shadow-md">
                <CardHeader>
                    <div className="space-y-1.5">
                        {showPosition && <DuaPositionBadge positionId={dua.positionId} />}
                        <CardTitle className="font-serif text-lg">
                            {dua.label ?? `Dua ${dua.variationIndex}`}
                        </CardTitle>
                        {dua.notes && (
                            <CardDescription className="line-clamp-2">{dua.notes}</CardDescription>
                        )}
                    </div>
                    <CardAction className="flex items-center gap-1.5">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => toggle(dua.id)}
                            aria-label={fav ? 'Remove from favourites' : 'Add to favourites'}
                            className={cn(
                                'size-8 transition-colors',
                                fav
                                    ? 'text-rose-500 hover:text-rose-600'
                                    : 'text-muted-foreground hover:text-rose-500',
                            )}
                        >
                            <Heart className={cn('size-4', fav && 'fill-current')} />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={copy}
                            aria-label="Copy dua text"
                            className="text-muted-foreground size-8"
                        >
                            {copied ? (
                                <Check className="size-4 text-emerald-500" />
                            ) : (
                                <Copy className="size-4" />
                            )}
                        </Button>
                        {dua.audioUrl && <DuaAudioPlayer duaId={dua.id} audioUrl={dua.audioUrl} />}
                    </CardAction>
                </CardHeader>

                <CardContent className="space-y-4">
                    <DuaTextDisplay dua={dua} langs={langs} />
                    {dua.whenToRecite && (
                        <div className="border-primary/20 bg-primary/5 flex gap-2 rounded-md border p-2.5">
                            <Clock className="text-primary mt-0.5 size-3.5 shrink-0" />
                            <p className="text-muted-foreground text-xs leading-relaxed">
                                {dua.whenToRecite}
                            </p>
                        </div>
                    )}
                </CardContent>

                {dua.references.length > 0 && (
                    <>
                        <Separator />
                        <CardFooter className="flex items-center justify-between pt-4">
                            <DuaReferenceList references={dua.references} />
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setDialogOpen(true)}
                                className="text-muted-foreground hover:text-foreground ml-3 shrink-0 gap-1.5 text-xs"
                            >
                                <ExternalLink className="size-3.5" />
                                Details
                            </Button>
                        </CardFooter>
                    </>
                )}

                {dua.references.length === 0 && (
                    <CardFooter className="justify-end pt-0">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setDialogOpen(true)}
                            className="text-muted-foreground hover:text-foreground gap-1.5 text-xs"
                        >
                            <ExternalLink className="size-3.5" />
                            Details
                        </Button>
                    </CardFooter>
                )}
            </Card>

            <DuaDetailDialog
                dua={dua}
                open={dialogOpen}
                onOpenChange={setDialogOpen}
                langs={langs}
            />
        </>
    )
}
