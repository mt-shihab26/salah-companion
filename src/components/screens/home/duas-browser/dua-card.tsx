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

import { ArabicText } from '#/components/elements/arabic-text'
import { Button } from '#/components/ui/button'
import { Separator } from '#/components/ui/separator'
import { useDuasBrowserStore } from '#/stores/duas-browser-store'
import { Maximize2 } from 'lucide-react'
import { AudioButton } from './audio-button'
import { CopyButton } from './copy-button'
import { FavoriteButton } from './favorite-button'
import { LanguagesDisplay } from './languages-display'
import { Notes } from './notes'
import { PositionBadge } from './position-badge'
import { ReferenceList } from './reference-list'
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
    const setZenDua = useDuasBrowserStore((s) => s.setZenDua)

    return (
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
                <Separator />
                <ArabicText className="text-foreground">{salahDua.arabic}</ArabicText>
                <Separator />
                <LanguagesDisplay salahDua={salahDua} languages={languages} />
                <Separator />
                {salahDua.notes && <Notes text={salahDua.notes} />}
                {salahDua.whenToRecite && <WhenToRecite text={salahDua.whenToRecite} />}
            </CardContent>
            {salahDua.references.length > 0 && <Separator />}
            <CardFooter className="flex items-center justify-between pt-4">
                <ReferenceList references={salahDua.references} />
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setZenDua(salahDua)}
                    className="text-muted-foreground ml-auto size-6 shrink-0"
                >
                    <Maximize2 className="size-3.5" />
                    <span className="sr-only">Zen mode</span>
                </Button>
            </CardFooter>
        </Card>
    )
}
