import { PageWrap } from '#/components/page-wrap'
import { Card, CardContent } from '#/components/ui/card'
import { BookMarked, BookOpen, Languages, Volume2 } from 'lucide-react'

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

export const Features = () => {
    return (
        <PageWrap>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {FEATURES.map(({ icon: Icon, title, description }) => (
                    <Card
                        key={title}
                        className="group border-border/60 hover:border-primary/30 relative overflow-hidden py-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                        <div
                            aria-hidden
                            className="from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 absolute inset-0 bg-linear-to-br transition-colors duration-300 group-hover:to-transparent"
                        />
                        <CardContent className="relative space-y-3 py-6">
                            <div className="from-primary/15 to-primary/5 ring-primary/10 flex size-11 items-center justify-center rounded-xl bg-linear-to-br ring-1 ring-inset">
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
    )
}
