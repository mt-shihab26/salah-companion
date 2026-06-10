import { DuaGroupSection } from '#/components/duas/DuaGroupSection'
import { DuaPositionNav } from '#/components/duas/DuaPositionNav'
import { DuaTranslationPicker } from '#/components/duas/DuaTranslationPicker'
import { PageWrap } from '#/components/page-wrap'
import { Button } from '#/components/ui/button'
import { Card, CardContent } from '#/components/ui/card'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '#/components/ui/select'
import { Separator } from '#/components/ui/separator'
import { getDuasByPosition } from '#/data/duas/index'
import { SALAH_POSITIONS } from '#/data/duas/positions'
import type { SalahPositionId } from '#/data/duas/types'
import { useDuaLang } from '#/hooks/use-dua-lang'
import { createFileRoute } from '@tanstack/react-router'
import {
    ArrowRight,
    BookMarked,
    BookOpen,
    ChevronDown,
    Languages,
    Sparkles,
    Volume2,
} from 'lucide-react'
import { useState } from 'react'

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
                    <div className="bg-primary/20 dark:bg-primary/15 absolute top-0 left-1/2 size-[480px] -translate-x-1/2 rounded-full blur-3xl" />
                    <div className="bg-chart-1/20 dark:bg-chart-1/10 absolute top-32 right-[10%] size-72 rounded-full blur-3xl" />
                    <div className="bg-chart-3/20 dark:bg-chart-3/10 absolute top-40 left-[10%] size-64 rounded-full blur-3xl" />
                </div>

                <PageWrap className="relative pt-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="from-primary to-primary/70 flex size-9 items-center justify-center rounded-xl bg-gradient-to-br shadow-sm">
                                <BookOpen className="text-primary-foreground size-4" />
                            </div>
                            <span className="text-foreground font-serif text-lg font-semibold tracking-tight">
                                Salah Companion
                            </span>
                        </div>
                        <Button
                            size="sm"
                            variant="ghost"
                            className="text-muted-foreground hover:text-foreground hidden gap-1 sm:inline-flex"
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

                <PageWrap className="animate-in fade-in slide-in-from-bottom-4 relative mt-12 space-y-8 text-center duration-700">
                    <div className="border-primary/20 bg-primary/5 text-primary inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium backdrop-blur">
                        <Sparkles className="size-3.5" />
                        <span>39 duas · 9 positions · 6 languages</span>
                    </div>

                    <h1 className="text-foreground mx-auto max-w-3xl font-serif text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                        Every dua of the{' '}
                        <span className="from-primary via-primary/80 to-chart-4 bg-gradient-to-br bg-clip-text text-transparent">
                            Salah
                        </span>
                        , in one place.
                    </h1>

                    <p className="text-muted-foreground mx-auto max-w-xl text-base leading-relaxed sm:text-lg">
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
                            className="group border-border/60 hover:border-primary/30 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div
                                aria-hidden
                                className="from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 absolute inset-0 bg-gradient-to-br transition-colors duration-300 group-hover:to-transparent"
                            />
                            <CardContent className="relative space-y-3 pt-6">
                                <div className="from-primary/15 to-primary/5 ring-primary/10 flex size-11 items-center justify-center rounded-xl bg-gradient-to-br ring-1 ring-inset">
                                    <Icon className="text-primary size-5" />
                                </div>
                                <h3 className="text-foreground font-serif text-base font-semibold">
                                    {title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </PageWrap>

            {/* ── Duas browser ────────────────────────────── */}
            <PageWrap id="duas-browser" className="scroll-mt-6 space-y-6">
                <div className="space-y-2">
                    <span className="text-primary text-xs font-semibold tracking-wider uppercase">
                        Browse
                    </span>
                    <h2 className="text-foreground font-serif text-3xl font-bold sm:text-4xl">
                        Duas in Salah
                    </h2>
                    <p className="text-muted-foreground max-w-2xl text-sm">
                        Select a position in the prayer to read its supplications, with translations
                        of your choice rendered alongside the Arabic.
                    </p>
                </div>

                {/* Sticky toolbar */}
                <div className="border-border/60 bg-background/80 sticky top-0 z-20 -mx-4 border-y px-4 py-3 backdrop-blur-md">
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
                            <span className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
                                Now reading
                            </span>
                            <span className="text-foreground font-serif text-sm font-semibold">
                                {activeMeta?.name}
                            </span>
                            <ChevronDown className="text-muted-foreground size-3.5" />
                        </div>
                        <DuaTranslationPicker langs={langs} onToggle={toggleLang} />
                    </div>
                </div>

                <div className="flex gap-8">
                    <aside className="hidden w-60 shrink-0 lg:block">
                        <div className="border-border/60 bg-card/40 sticky top-20 h-[calc(100vh-6rem)] rounded-2xl border p-2">
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
                        className="text-foreground font-serif text-2xl"
                        style={{ fontFamily: "'Amiri', 'Noto Naskh Arabic', Georgia, serif" }}
                    >
                        رَبَّنَا تَقَبَّلْ مِنَّا
                    </p>
                    <p className="text-muted-foreground text-sm italic">
                        “Our Lord, accept it from us.”
                    </p>
                </div>
            </PageWrap>
        </div>
    )
}
