import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { ChevronLeft } from 'lucide-react'
import { Button } from '#/components/ui/button'
import { Separator } from '#/components/ui/separator'
import { DuaCard } from '#/components/duas/DuaCard'
import { DuaPositionBadge } from '#/components/duas/DuaPositionBadge'
import { getDuaById } from '#/data/duas/index'
import { useDuaLang } from '#/hooks/use-dua-lang'
import { DuaTranslationPicker } from '#/components/duas/DuaTranslationPicker'

export const Route = createFileRoute('/duas/$duaId')({
  loader: ({ params }) => {
    const dua = getDuaById(params.duaId)
    if (!dua) throw notFound()
    return dua
  },
  component: DuaDetail,
})

function DuaDetail() {
  const dua = Route.useLoaderData()
  const { lang, setLang } = useDuaLang()

  return (
    <div className="page-wrap py-8 max-w-2xl">
      <div className="mb-6 space-y-4">
        <Button variant="ghost" size="sm" asChild className="-ml-2">
          <Link to="/duas">
            <ChevronLeft className="size-4" />
            Back to duas
          </Link>
        </Button>

        <div className="space-y-2">
          <DuaPositionBadge positionId={dua.positionId} />
          <h1 className="display-title text-2xl font-bold text-[var(--sea-ink)]">
            {dua.label ?? `Dua ${dua.variationIndex}`}
          </h1>
        </div>

        <DuaTranslationPicker lang={lang} onChange={setLang} />
      </div>

      <Separator className="mb-8" />

      <DuaCard dua={dua} lang={lang} />
    </div>
  )
}
