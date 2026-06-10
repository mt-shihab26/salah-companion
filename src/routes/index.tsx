import { createFileRoute, Link } from '@tanstack/react-router'
import { BookOpen, Languages, Volume2, BookMarked } from 'lucide-react'
import { Button } from '#/components/ui/button'
import { Card, CardContent } from '#/components/ui/card'
import { Badge } from '#/components/ui/badge'

export const Route = createFileRoute('/')({ component: Home })

const FEATURES = [
  {
    icon: BookOpen,
    title: 'Arabic Text',
    description: 'Authentic Arabic with full tashkeel (diacritics) for every dua.',
  },
  {
    icon: Languages,
    title: '6 Languages',
    description: 'Translations in English, French, Urdu, Turkish, and Malay.',
  },
  {
    icon: Volume2,
    title: 'Audio Playback',
    description: 'Listen to each dua recited correctly before memorising.',
  },
  {
    icon: BookMarked,
    title: 'Hadith Sources',
    description: 'Every dua linked to its authentic Quran or Hadith reference.',
  },
]

function Home() {
  return (
    <div className="page-wrap py-16 space-y-16">
      {/* Hero */}
      <section className="text-center space-y-6 rise-in">
        <Badge variant="outline" className="border-[var(--lagoon)] text-[var(--lagoon-deep)]">
          39 duas · 9 positions · 6 languages
        </Badge>

        <h1 className="display-title text-4xl font-bold text-[var(--sea-ink)] sm:text-5xl">
          Duas of the Salah
        </h1>

        <p className="mx-auto max-w-xl text-lg text-[var(--sea-ink-soft)]">
          Every supplication recited in prayer — with Arabic text, transliteration,
          translations, and authentic hadith references.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link to="/duas">Browse All Duas</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/duas">
              <BookMarked className="size-4" />
              View by Position
            </Link>
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map(({ icon: Icon, title, description }) => (
          <Card key={title} className="feature-card border-[var(--line)] transition-transform">
            <CardContent className="pt-6 space-y-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-[color-mix(in_oklab,var(--lagoon)_15%,transparent)]">
                <Icon className="size-5 text-[var(--lagoon-deep)]" />
              </div>
              <h3 className="font-semibold text-[var(--sea-ink)]">{title}</h3>
              <p className="text-sm text-[var(--sea-ink-soft)]">{description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  )
}
