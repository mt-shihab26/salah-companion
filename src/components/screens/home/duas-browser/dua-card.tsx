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
import { Separator } from '#/components/ui/separator'
import { AudioButton } from './audio-button'
import { CopyButton } from './copy-button'
import { FavoriteButton } from './favorite-button'
import { LanguagesDisplay } from './languages-display'
import { Notes } from './notes'
import { PositionBadge } from './position-badge'
import { ReferenceList } from './reference-list'
import { WhenToRecite } from './when-to-recite'
import { ZenButton } from './zen-button'

export const DuaCard = ({
    salahDua,
    languages,
    zenView = false,
}: {
    salahDua: TSalahDua
    languages: TLanguage[]
    zenView?: boolean
}) => {
    return (
        <Card className="border-border/60 overflow-hidden transition-shadow hover:shadow-md">
            <CardHeader>
                <div className="space-y-1.5">
                    {zenView && <PositionBadge positionId={salahDua.positionId} />}
                    <CardTitle className="font-serif text-lg">{salahDua.label}</CardTitle>
                </div>
                <CardAction className="flex items-center gap-1.5">
                    <FavoriteButton salahDua={salahDua} />
                    <CopyButton salahDua={salahDua} languages={languages} />
                    <AudioButton salahDua={salahDua} />
                </CardAction>
            </CardHeader>
            <CardContent className="space-y-4">
                {salahDua.notes && <Notes text={salahDua.notes} />}
                {salahDua.whenToRecite && <WhenToRecite text={salahDua.whenToRecite} />}
                <Separator />
                <ArabicText className="text-foreground">{salahDua.arabic}</ArabicText>
                <Separator />
                <LanguagesDisplay salahDua={salahDua} languages={languages} />
            </CardContent>
            {salahDua.references.length > 0 && <Separator />}
            <CardFooter className="flex items-center justify-between pt-4">
                <ReferenceList references={salahDua.references} />
                {!zenView && <ZenButton salahDua={salahDua} />}
            </CardFooter>
        </Card>
    )
}
