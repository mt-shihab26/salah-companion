import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import {
    BookOpen,
    Languages,
    Volume2,
    BookMarked,
    Sparkles,
    ArrowRight,
    ChevronDown,
} from 'lucide-react'
import { Button } from '#/components/ui/button'
import { Card, CardContent } from '#/components/ui/card'
import { Separator } from '#/components/ui/separator'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '#/components/ui/select'
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
    {
        icon: BookOpen,
        title: 'Arabic with Tashkeel',
        description: 'Authentic Arabic text with full vowel marks for precise recitation.',
    },
    {
        icon: Languages,
        title: '6 Translations',
        description: 'Read multiple translations side-by-side — just like quran.com.',
    },
    {
        icon: Volume2,
        title: 'Audio Recitation',
        description: 'Listen to each dua recited correctly, one tap from any card.',
    },
    {
        icon: BookMarked,
        title: 'Authentic Sources',
        description: 'Every supplication linked to its Quranic verse or hadith reference.',
    },
]

function Home() {
    const { langs, toggleLang } = useDuaLang()
    const [activePosition, setActivePosition] = useState<SalahPositionId>(
        SALAH_POSITIONS[0].id as SalahPositionId,
    )
    const duas = getDuasByPosition(activePosition)
    const activeMeta = SALAH_POSITIONS.find((p) => p.id === activePosition)

    return (
        <div className="space-y-24 pb-24">
            {/* ── Hero ────────────────────────────────────── */}
            <section className="relative overflow-hidden">
                {/* Gradient orbs */}
                <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute left-1/2 top-0 size-[480px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl dark:bg-primary/15" />
                    <div className="absolute right-[10%] top-32 size-72 rounded-full bg-chart-1/20 blur-3xl dark:bg-chart-1/10" />
                    <div className="absolute left-[10%] top-40 size-64 rounded-full bg-chart-3/20 blur-3xl dark:bg-chart-3/10" />
                </div>

                <PageWrap className="relative pt-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/70 shadow-sm">
                                <BookOpen className="size-4 text-primary-foreground" />
                            </div>
                            <span className="font-serif text-lg font-semibold tracking-tight text-foreground">
                                Salah Companion
                            </span>
                        </div>
                        <Button
                            size="sm"
                            variant="ghost"
                            className="hidden gap-1 text-muted-foreground hover:text-foreground sm:inline-flex"
                            onClick={() =>
                                document
                                    .getElementById('duas-browser')
                                    ?.scrollIntoView({ behavior: 'smooth' })
                            }
                        >
                            Browse duas
                            <ArrowRight className="size-3.5" />
                        </Button>
                    </div>
                </PageWrap>

                <PageWrap className="relative mt-12 space-y-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur">
                        <Sparkles className="size-3.5" />
                        <span>39 duas · 9 positions · 6 languages</span>
                    </div>

                    <h1 className="mx-auto max-w-3xl font-serif text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                        Every dua of the{' '}
                        <span className="bg-gradient-to-br from-primary via-primary/80 to-chart-4 bg-clip-text text-transparent">
                            Salah
                        </span>
                        , in one place.
                    </h1>

                    <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                        Arabic text with tashkeel, transliteration, and multiple translations
                        side-by-side — backed by authentic Quranic and hadith references.
                    </p>

                    <div className="flex justify-center">
                        <Button
                            size="lg"
                            className="rounded-full px-6 shadow-md"
                            onClick={() =>
                                document
                                    .getElementById('duas-browser')
                                    ?.scrollIntoView({ behavior: 'smooth' })
                            }
                        >
                            Browse All Duas
                            <ArrowRight className="size-4" />
                        </Button>
                    </div>
                </PageWrap>
            </section>

            {/* ── Feature grid ────────────────────────────── */}
            <PageWrap>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {FEATURES.map(({ icon: Icon, title, description }) => (
                        <Card
                            key={title}
                            className="group relative overflow-hidden border-border/60 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                        >
                            <div
                                aria-hidden
                                className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 transition-colors duration-300 group-hover:from-primary/5 group-hover:to-transparent"
                            />
                            <CardContent className="relative space-y-3 pt-6">
                                <div className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 ring-1 ring-inset ring-primary/10">
                                    <Icon className="size-5 text-primary" />
                                </div>
                                <h3 className="font-serif text-base font-semibold text-foreground">
                                    {title}
                                </h3>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    {description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </PageWrap>

            {/* ── Duas browser ────────────────────────────── */}
            <PageWrap id="duas-browser" className="space-y-6 scroll-mt-6">
                <div className="space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        Browse
                    </span>
                    <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
                        Duas in Salah
                    </h2>
                    <p className="max-w-2xl text-sm text-muted-foreground">
                        Select a position in the prayer to read its supplications, with translations
                        of your choice rendered alongside the Arabic.
                    </p>
                </div>

                {/* Sticky toolbar */}
                <div className="sticky top-0 z-20 -mx-4 border-y border-border/60 bg-background/80 px-4 py-3 backdrop-blur-md">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2 lg:hidden">
                            <Select
                                value={activePosition}
                                onValueChange={(v) => setActivePosition(v as SalahPositionId)}
                            >
                                <SelectTrigger className="h-9 min-w-[220px] rounded-full">
                                    <SelectValue placeholder="Pick a position" />
                                </SelectTrigger>
                                <SelectContent>
                                    {SALAH_POSITIONS.map((pos) => (
                                        <SelectItem key={pos.id} value={pos.id}>
                                            {pos.order}. {pos.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="hidden items-center gap-2 lg:flex">
                            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                Now reading
                            </span>
                            <span className="font-serif text-sm font-semibold text-foreground">
                                {activeMeta?.name}
                            </span>
                            <ChevronDown className="size-3.5 text-muted-foreground" />
                        </div>
                        <DuaTranslationPicker langs={langs} onToggle={toggleLang} />
                    </div>
                </div>

                <div className="flex gap-8">
                    <aside className="hidden w-60 shrink-0 lg:block">
                        <div className="sticky top-20 h-[calc(100vh-6rem)] rounded-2xl border border-border/60 bg-card/40 p-2">
                            <DuaPositionNav
                                activeId={activePosition}
                                onSelect={setActivePosition}
                            />
                        </div>
                    </aside>

                    <div className="min-w-0 flex-1">
                        <DuaGroupSection positionId={activePosition} duas={duas} langs={langs} />
                    </div>
                </div>
            </PageWrap>

            <Separator className="opacity-50" />

            {/* ── Closing note ───────────────────────────── */}
            <PageWrap className="text-center">
                <div className="mx-auto max-w-xl space-y-3">
                    <p
                        dir="rtl"
                        className="font-serif text-2xl text-foreground"
                        style={{ fontFamily: "'Amiri', 'Noto Naskh Arabic', Georgia, serif" }}
                    >
                        رَبَّنَا تَقَبَّلْ مِنَّا
                    </p>
                    <p className="text-sm italic text-muted-foreground">
                        “Our Lord, accept it from us.”
                    </p>
                </div>
            </PageWrap>
        </div>
    )
}
