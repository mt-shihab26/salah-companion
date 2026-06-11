import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '#/components/ui/card'

import type { TLanguage } from '#/types/languages'
import type { TSalahDua } from '#/types/salah-duas'

import { useState } from 'react'

import { Button } from '#/components/ui/button'
import { Separator } from '#/components/ui/separator'
import { Check, Clock, Copy, ExternalLink } from 'lucide-react'
import { DuaAudioPlayer } from '../../../duas/DuaAudioPlayer'
import { DuaDetailDialog } from '../../../duas/DuaDetailDialog'
import { DuaPositionBadge } from '../../../duas/DuaPositionBadge'
import { DuaReferenceList } from '../../../duas/DuaReferenceList'
import { DuaTextDisplay } from '../../../duas/DuaTextDisplay'
import { DuaFavoriteButton } from './dua-favorite-button'

export const DuaCard = ({
    salahDua,
    languages,
    showPosition = false,
}: {
    salahDua: TSalahDua
    languages: TLanguage[]
    showPosition?: boolean
}) => {
    const [dialogOpen, setDialogOpen] = useState(false)
    const [copied, setCopied] = useState(false)

    async function copy() {
        const lang = languages[0] ?? 'en'
        const text = [
            salahDua.arabic,
            '',
            salahDua.languages[lang].transliteration,
            '',
            salahDua.languages[lang].translation,
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
                        {showPosition && <DuaPositionBadge positionId={salahDua.positionId} />}
                        <CardTitle className="font-serif text-lg">
                            {salahDua.label ?? `Dua ${salahDua.variationIndex}`}
                        </CardTitle>
                        {salahDua.notes && (
                            <CardDescription className="line-clamp-2">
                                {salahDua.notes}
                            </CardDescription>
                        )}
                    </div>
                    <CardAction className="flex items-center gap-1.5">
                        <DuaFavoriteButton duaId={salahDua.id} />
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
                        {salahDua.audioUrl && (
                            <DuaAudioPlayer duaId={salahDua.id} audioUrl={salahDua.audioUrl} />
                        )}
                    </CardAction>
                </CardHeader>

                <CardContent className="space-y-4">
                    <DuaTextDisplay dua={salahDua} langs={languages} />
                    {salahDua.whenToRecite && (
                        <div className="border-primary/20 bg-primary/5 flex gap-2 rounded-md border p-2.5">
                            <Clock className="text-primary mt-0.5 size-3.5 shrink-0" />
                            <p className="text-muted-foreground text-xs leading-relaxed">
                                {salahDua.whenToRecite}
                            </p>
                        </div>
                    )}
                </CardContent>

                {salahDua.references.length > 0 && (
                    <>
                        <Separator />
                        <CardFooter className="flex items-center justify-between pt-4">
                            <DuaReferenceList references={salahDua.references} />
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

                {salahDua.references.length === 0 && (
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
                dua={salahDua}
                open={dialogOpen}
                onOpenChange={setDialogOpen}
                langs={languages}
            />
        </>
    )
}
