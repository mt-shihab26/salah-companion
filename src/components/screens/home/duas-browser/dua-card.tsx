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
import { Clock, ExternalLink } from 'lucide-react'
import { DuaDetailDialog } from '../../../duas/DuaDetailDialog'
import { DuaReferenceList } from '../../../duas/DuaReferenceList'
import { AudioPlayer } from './audio-player'
import { DuaAudioPlayer } from './dua-audio-player'
import { DuaCopyButton } from './dua-copy-button'
import { DuaFavoriteButton } from './dua-favorite-button'
import { DuaPositionBadge } from './dua-position-badge'
import { DuaTextDisplay } from './dua-text-display'

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

    return (
        <>
            <Card className="border-border/60 overflow-hidden transition-shadow hover:shadow-md">
                <CardHeader>
                    <div className="space-y-1.5">
                        {showPosition && <DuaPositionBadge positionId={salahDua.positionId} />}
                        <CardTitle className="font-serif text-lg">{salahDua.label}</CardTitle>
                        {salahDua.notes && <CardDescription>{salahDua.notes}</CardDescription>}
                        {salahDua.whenToRecite && (
                            <div className="border-primary/20 bg-primary/5 flex gap-2 rounded-md border p-2.5">
                                <Clock className="text-primary mt-0.5 size-3.5 shrink-0" />
                                <p className="text-muted-foreground text-xs leading-relaxed">
                                    {salahDua.whenToRecite}
                                </p>
                            </div>
                        )}
                    </div>
                    <CardAction className="flex items-center gap-1.5">
                        <DuaFavoriteButton salahDua={salahDua} />
                        <DuaCopyButton salahDua={salahDua} languages={languages} />
                        <DuaAudioPlayer salahDua={salahDua} />
                    </CardAction>
                </CardHeader>

                <CardContent className="space-y-4">
                    <DuaTextDisplay salahDua={salahDua} anguages={languages} />
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

            <AudioPlayer />
        </>
    )
}
