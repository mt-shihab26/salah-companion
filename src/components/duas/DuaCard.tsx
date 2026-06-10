import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter } from '#/components/ui/card'
import { Separator } from '#/components/ui/separator'
import { DuaPositionBadge } from './DuaPositionBadge'
import { DuaTextDisplay } from './DuaTextDisplay'
import { DuaAudioPlayer } from './DuaAudioPlayer'
import { DuaReferenceList } from './DuaReferenceList'
import type { DuaVariation, DuaLang } from '#/data/duas/types'

interface Props {
  dua: DuaVariation
  lang: DuaLang
  showPosition?: boolean
}

export function DuaCard({ dua, lang, showPosition = false }: Props) {
  return (
    <Card>
      <CardHeader>
        <div className="space-y-1.5">
          {showPosition && <DuaPositionBadge positionId={dua.positionId} />}
          <CardTitle>{dua.label ?? `Dua ${dua.variationIndex}`}</CardTitle>
          {dua.notes && <CardDescription className="line-clamp-2">{dua.notes}</CardDescription>}
        </div>
        <CardAction>
          {dua.audioUrl && <DuaAudioPlayer duaId={dua.id} audioUrl={dua.audioUrl} />}
        </CardAction>
      </CardHeader>

      <CardContent>
        <DuaTextDisplay dua={dua} lang={lang} />
      </CardContent>

      {dua.references.length > 0 && (
        <>
          <Separator />
          <CardFooter className="pt-4">
            <DuaReferenceList references={dua.references} />
          </CardFooter>
        </>
      )}
    </Card>
  )
}
