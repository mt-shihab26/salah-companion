import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { BookOpen, Languages, Volume2, BookMarked, Moon, Sun } from 'lucide-react'
import { Button } from '#/components/ui/button'
import { useTheme } from '#/hooks/use-theme'
import { Card, CardContent } from '#/components/ui/card'
import { Badge } from '#/components/ui/badge'
import { Separator } from '#/components/ui/separator'
import { PageWrap } from '#/components/page-wrap'
import { DuaPositionNav } from '#/components/duas/DuaPositionNav'
import { DuaGroupSection } from '#/components/duas/DuaGroupSection'
import { DuaTranslationPicker } from '#/components/duas/DuaTranslationPicker'
import { getDuasByPosition } from '#/data/duas/index'
import { SALAH_POSITIONS } from '#/data/duas/positions'
import { useDuaLang } from '#/hooks/use-dua-lang'
import type { SalahPositionId } from '#/data/duas/types'

export const Route = createFileRoute('/')({ component: Home })

const FEATURES = [
  { icon: BookOpen, title: 'Arabic Text', description: 'Authentic Arabic with full tashkeel for every dua.' },
  { icon: Languages, title: '6 Languages', description: 'English, French, Urdu, Turkish, and Malay translations.' },
  { icon: Volume2, title: 'Audio Playback', description: 'Listen to each dua recited correctly.' },
  { icon: BookMarked, title: 'Hadith Sources', description: 'Every dua linked to its authentic reference.' },
]

function Home() {
  const { theme, toggle } = useTheme()
  const { lang, setLang } = useDuaLang()
  const [activePosition, setActivePosition] = useState<SalahPositionId>(
    SALAH_POSITIONS[0].id as SalahPositionId,
  )
  const duas = getDuasByPosition(activePosition)

  return (
    <div className="space-y-20">
      {/* ── Top bar ──────────────────────────────────── */}
      <PageWrap className="flex items-center justify-between pt-6">
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
            <BookOpen className="size-4 text-primary-foreground" />
          </div>
          <span className="font-semibold text-foreground">Salah Companion</span>
        </div>
        <Button variant="outline" size="icon" onClick={toggle} aria-label="Toggle theme">
          {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </Button>
      </PageWrap>

      {/* ── Hero ─────────────────────────────────────── */}
      <PageWrap className="space-y-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
        <Badge variant="outline" className="border-primary/30 bg-primary/5 text-primary">
          39 duas · 9 positions · 6 languages
        </Badge>

        <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Duas of the Salah
        </h1>

        <p className="mx-auto max-w-xl text-lg text-muted-foreground">
          Every supplication recited in prayer — with Arabic text, transliteration,
          translations, and authentic hadith references.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Button size="lg" onClick={() => document.getElementById('duas-browser')?.scrollIntoView({ behavior: 'smooth' })}>
            Browse All Duas
          </Button>
          <Button variant="outline" size="lg" onClick={() => document.getElementById('duas-browser')?.scrollIntoView({ behavior: 'smooth' })}>
            <BookMarked className="size-4" />
            View by Position
          </Button>
        </div>
      </PageWrap>

      {/* ── Feature grid ─────────────────────────────── */}
      <PageWrap>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="space-y-3 pt-6">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="size-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </PageWrap>

      <Separator />

      {/* ── Duas browser ─────────────────────────────── */}
      <PageWrap id="duas-browser" className="space-y-6">
        <div className="space-y-1">
          <h2 className="font-serif text-3xl font-bold text-foreground">Duas in Salah</h2>
          <p className="text-sm text-muted-foreground">Select a position to browse its supplications</p>
        </div>

        <DuaTranslationPicker lang={lang} onChange={setLang} />

        <Separator />

        <div className="flex gap-8">
          <aside className="hidden w-56 shrink-0 lg:block">
            <div className="sticky top-20 h-[calc(100vh-6rem)]">
              <DuaPositionNav activeId={activePosition} onSelect={setActivePosition} />
            </div>
          </aside>

          <div className="min-w-0 flex-1">
            <DuaGroupSection positionId={activePosition} duas={duas} lang={lang} />
          </div>
        </div>
      </PageWrap>
    </div>
  )
}
