import { PageWrap } from '#/components/elements/page-wrap'
import { Button } from '#/components/ui/button'
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react'

export const Hero = () => {
    return (
        <section className="relative overflow-hidden">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="bg-primary/20 dark:bg-primary/15 absolute top-0 left-1/2 size-120 -translate-x-1/2 rounded-full blur-3xl" />
                <div className="bg-chart-1/20 dark:bg-chart-1/10 absolute top-32 right-[10%] size-72 rounded-full blur-3xl" />
                <div className="bg-chart-3/20 dark:bg-chart-3/10 absolute top-40 left-[10%] size-64 rounded-full blur-3xl" />
            </div>
            <PageWrap className="relative pt-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="from-primary to-primary/70 flex size-9 items-center justify-center rounded-xl bg-linear-to-br shadow-sm">
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
            <PageWrap className="animate-in fade-in slide-in-from-bottom-4 relative my-12 space-y-8 text-center duration-700">
                <div className="border-primary/20 bg-primary/5 text-primary inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium backdrop-blur">
                    <Sparkles className="size-3.5" />
                    <span>39 duas · 9 positions · 6 languages</span>
                </div>
                <h1 className="text-foreground mx-auto max-w-3xl font-serif text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                    Every dua of the{' '}
                    <span className="from-primary via-primary/80 to-chart-4 bg-linear-to-br bg-clip-text text-transparent">
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
    )
}
