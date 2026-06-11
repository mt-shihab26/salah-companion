import {
    Card,
    CardAction,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '#/components/ui/card'

import type { TLanguage } from '#/types/languages'
import type { TSalahDua } from '#/types/salah-duas'

import { useState } from 'react'

import { Button } from '#/components/ui/button'
import { Separator } from '#/components/ui/separator'
import { ExternalLink } from 'lucide-react'
import { AudioButton } from './audio-button'
import { AudioPlayer } from './audio-player'
import { CopyButton } from './copy-button'
import { DuaDetailDialog } from './DuaDetailDialog'
import { DuaReferenceList } from './DuaReferenceList'
import { FavoriteButton } from './favorite-button'
import { Notes } from './notes'
import { PositionBadge } from './position-badge'
import { TextDisplay } from './text-display'
import { WhenToRecite } from './when-to-recite'

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
                        {showPosition && <PositionBadge positionId={salahDua.positionId} />}
                        <CardTitle className="font-serif text-lg">{salahDua.label}</CardTitle>
                    </div>
                    <CardAction className="flex items-center gap-1.5">
                        <FavoriteButton salahDua={salahDua} />
                        <CopyButton salahDua={salahDua} languages={languages} />
                        <AudioButton salahDua={salahDua} />
                    </CardAction>
                </CardHeader>
                <CardContent className="space-y-4">
                    <TextDisplay salahDua={salahDua} anguages={languages} />
                    {salahDua.notes && <Notes text={salahDua.notes} />}
                    {salahDua.whenToRecite && <WhenToRecite text={salahDua.whenToRecite} />}
                </CardContent>

                {salahDua.references.length > 0 ? (
                    <>
                        <Separator />
                        <CardFooter className="flex items-center justify-between pt-4">
                            {salahDua.references.length > 0 && (
                                <DuaReferenceList references={salahDua.references} />
                            )}
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
                ) : (
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
