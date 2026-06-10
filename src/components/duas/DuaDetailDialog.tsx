import { ArabicText } from '#/components/arabic-text'
import { Badge } from '#/components/ui/badge'
import { Button } from '#/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '#/components/ui/dialog'
import { Separator } from '#/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '#/components/ui/tabs'
import type { DuaLang, DuaVariation } from '#/data/duas/types'
import { DUA_LANGS } from '#/data/duas/types'
import { cn } from '#/lib/utils'
import { BookOpen, Check, Clock, Copy, Info, ScrollText } from 'lucide-react'
import { useState } from 'react'
import { DuaAudioPlayer } from './DuaAudioPlayer'
import { DuaPositionBadge } from './DuaPositionBadge'

interface Props {
    dua: DuaVariation
    open: boolean
    onOpenChange: (open: boolean) => void
    langs: DuaLang[]
}

export function DuaDetailDialog({ dua, open, onOpenChange, langs }: Props) {
    const [copied, setCopied] = useState(false)
    const [activeLang, setActiveLang] = useState<DuaLang>(langs[0] ?? 'en')

    const allLangs = DUA_LANGS.filter((l) => l.code !== 'ar')
    const activeLangMeta = DUA_LANGS.find((l) => l.code === activeLang)

    async function copyToClipboard() {
        const translation = dua.translations[activeLang] ?? dua.translations['en']
        const text = [
            dua.arabic,
            '',
            dua.transliteration,
            '',
            `[${activeLangMeta?.label ?? activeLang.toUpperCase()}] ${translation}`,
        ].join('\n')
        try {
            await navigator.clipboard.writeText(text)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch {
            // ignore
        }
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="flex max-h-[90dvh] w-full max-w-2xl flex-col gap-0 overflow-hidden p-0">
                {/* Header */}
                <DialogHeader className="border-b px-6 py-4">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                        <div className="space-y-1.5">
                            <DuaPositionBadge positionId={dua.positionId} />
                            <DialogTitle className="font-serif text-xl">
                                {dua.label ?? `Dua ${dua.variationIndex}`}
                            </DialogTitle>
                            {dua.notes && (
                                <DialogDescription className="line-clamp-2 text-xs">
                                    {dua.notes.slice(0, 120)}
                                    {dua.notes.length > 120 ? '…' : ''}
                                </DialogDescription>
                            )}
                        </div>
                        {dua.audioUrl && <DuaAudioPlayer duaId={dua.id} audioUrl={dua.audioUrl} />}
                    </div>
                </DialogHeader>

                {/* Scrollable body */}
                <div className="flex-1 overflow-y-auto">
                    <Tabs defaultValue="text" className="w-full">
                        <div className="bg-background sticky top-0 z-10 border-b px-6 pt-2">
                            <TabsList className="h-9 w-full">
                                <TabsTrigger value="text" className="flex-1 gap-1.5 text-xs">
                                    <BookOpen className="size-3.5" />
                                    Text
                                </TabsTrigger>
                                <TabsTrigger value="references" className="flex-1 gap-1.5 text-xs">
                                    <ScrollText className="size-3.5" />
                                    Sources
                                    {dua.references.length > 0 && (
                                        <Badge
                                            variant="secondary"
                                            className="h-4 min-w-4 rounded-full px-1 text-[10px]"
                                        >
                                            {dua.references.length}
                                        </Badge>
                                    )}
                                </TabsTrigger>
                                {dua.notes && (
                                    <TabsTrigger value="notes" className="flex-1 gap-1.5 text-xs">
                                        <Info className="size-3.5" />
                                        Notes
                                    </TabsTrigger>
                                )}
                            </TabsList>
                        </div>

                        {/* ── Text tab ─────────────────────────────────── */}
                        <TabsContent value="text" className="m-0 space-y-6 px-6 py-5">
                            {/* When to recite */}
                            {dua.whenToRecite && (
                                <div className="border-primary/20 bg-primary/5 flex gap-3 rounded-lg border p-3">
                                    <Clock className="text-primary mt-0.5 size-4 shrink-0" />
                                    <p className="text-muted-foreground text-xs leading-relaxed">
                                        {dua.whenToRecite}
                                    </p>
                                </div>
                            )}

                            {/* Arabic */}
                            <div className="bg-muted/40 rounded-lg p-5 text-center">
                                <ArabicText size="lg" className="text-foreground leading-loose">
                                    {dua.arabic}
                                </ArabicText>
                            </div>

                            {/* Transliteration */}
                            <div>
                                <p className="text-muted-foreground mb-1 text-[10px] font-semibold tracking-wider uppercase">
                                    Transliteration
                                </p>
                                <p className="text-foreground font-mono text-sm leading-relaxed">
                                    {dua.transliteration}
                                </p>
                            </div>

                            <Separator />

                            {/* Language picker + translation */}
                            <div>
                                <p className="text-muted-foreground mb-3 text-[10px] font-semibold tracking-wider uppercase">
                                    Translation
                                </p>
                                <div className="mb-4 flex flex-wrap gap-1.5">
                                    {allLangs.map((l) => (
                                        <button
                                            key={l.code}
                                            onClick={() => setActiveLang(l.code)}
                                            className={cn(
                                                'rounded-md border px-2.5 py-1 text-xs font-medium transition-colors',
                                                activeLang === l.code
                                                    ? 'border-primary bg-primary text-primary-foreground'
                                                    : 'border-border bg-muted/40 text-muted-foreground hover:border-primary/50 hover:text-foreground',
                                            )}
                                        >
                                            {l.label}
                                        </button>
                                    ))}
                                </div>
                                {activeLangMeta && (
                                    <p
                                        dir={activeLangMeta.dir}
                                        className={cn(
                                            'text-foreground text-sm leading-relaxed',
                                            activeLangMeta.dir === 'rtl' && 'text-right',
                                        )}
                                        style={
                                            activeLangMeta.dir === 'rtl'
                                                ? {
                                                      fontFamily:
                                                          "'Amiri', 'Noto Naskh Arabic', Georgia, serif",
                                                      fontSize: '1rem',
                                                  }
                                                : undefined
                                        }
                                    >
                                        {dua.translations[activeLang]}
                                    </p>
                                )}
                            </div>

                            {/* All translations accordion-style */}
                            <Separator />
                            <details className="group">
                                <summary className="text-muted-foreground hover:text-foreground cursor-pointer list-none text-xs font-semibold tracking-wider uppercase">
                                    All {allLangs.length} translations ▸
                                    <span className="group-open:hidden" />
                                </summary>
                                <ul className="mt-4 space-y-4">
                                    {allLangs.map((l) => (
                                        <li
                                            key={l.code}
                                            className={cn(
                                                'border-primary/40 border-l-2 pl-4',
                                                l.dir === 'rtl' &&
                                                    'border-r-2 border-l-0 pr-4 pl-0',
                                            )}
                                        >
                                            <div className="mb-1 flex items-center gap-2">
                                                <span className="text-primary text-[10px] font-semibold tracking-wider uppercase">
                                                    {l.code}
                                                </span>
                                                <span className="text-muted-foreground text-[11px]">
                                                    {l.label}
                                                </span>
                                            </div>
                                            <p
                                                dir={l.dir}
                                                className={cn(
                                                    'text-foreground text-sm leading-relaxed',
                                                    l.dir === 'rtl' && 'text-right',
                                                )}
                                                style={
                                                    l.dir === 'rtl'
                                                        ? {
                                                              fontFamily:
                                                                  "'Amiri', 'Noto Naskh Arabic', Georgia, serif",
                                                          }
                                                        : undefined
                                                }
                                            >
                                                {dua.translations[l.code]}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </details>
                        </TabsContent>

                        {/* ── Sources tab ──────────────────────────────── */}
                        <TabsContent value="references" className="m-0 space-y-5 px-6 py-5">
                            {dua.references.length === 0 ? (
                                <p className="text-muted-foreground text-sm">
                                    No references recorded.
                                </p>
                            ) : (
                                <ul className="space-y-4">
                                    {dua.references.map((ref, i) => (
                                        <li
                                            key={i}
                                            className="border-border/60 rounded-lg border p-4"
                                        >
                                            {ref.type === 'hadith' ? (
                                                <div className="space-y-1.5">
                                                    <div className="flex flex-wrap items-center gap-2">
                                                        <span className="text-sm font-semibold">
                                                            {ref.source}
                                                        </span>
                                                        {ref.number && (
                                                            <Badge
                                                                variant="outline"
                                                                className="text-[10px]"
                                                            >
                                                                #{ref.number}
                                                            </Badge>
                                                        )}
                                                        {ref.grade && (
                                                            <Badge
                                                                variant="secondary"
                                                                className="border-emerald-500/20 bg-emerald-500/10 text-[10px] text-emerald-700 dark:text-emerald-400"
                                                            >
                                                                {ref.grade}
                                                            </Badge>
                                                        )}
                                                    </div>
                                                    {ref.narrator && (
                                                        <p className="text-muted-foreground text-xs">
                                                            Narrated by {ref.narrator}
                                                        </p>
                                                    )}
                                                    {ref.url && (
                                                        <a
                                                            href={ref.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-primary inline-flex items-center gap-1 text-xs hover:underline"
                                                        >
                                                            View on Sunnah.com →
                                                        </a>
                                                    )}
                                                </div>
                                            ) : (
                                                <div className="space-y-1.5">
                                                    <div className="flex flex-wrap items-center gap-2">
                                                        <span className="text-sm font-semibold">
                                                            {ref.surahName}
                                                        </span>
                                                        <Badge
                                                            variant="outline"
                                                            className="text-[10px]"
                                                        >
                                                            {ref.surah}:{ref.ayah}
                                                            {ref.ayahEnd ? `–${ref.ayahEnd}` : ''}
                                                        </Badge>
                                                        <ArabicText
                                                            as="span"
                                                            size="sm"
                                                            className="text-muted-foreground"
                                                        >
                                                            {ref.surahNameArabic}
                                                        </ArabicText>
                                                    </div>
                                                    {ref.url && (
                                                        <a
                                                            href={ref.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-primary inline-flex items-center gap-1 text-xs hover:underline"
                                                        >
                                                            View on Quran.com →
                                                        </a>
                                                    )}
                                                </div>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </TabsContent>

                        {/* ── Notes tab ────────────────────────────────── */}
                        {dua.notes && (
                            <TabsContent value="notes" className="m-0 px-6 py-5">
                                <p className="text-foreground text-sm leading-relaxed whitespace-pre-line">
                                    {dua.notes}
                                </p>
                            </TabsContent>
                        )}
                    </Tabs>
                </div>

                {/* Footer actions */}
                <div className="flex items-center justify-between border-t px-6 py-3">
                    <p className="text-muted-foreground text-[11px]">
                        Position {dua.variationIndex} of this station
                    </p>
                    <Button variant="outline" size="sm" onClick={copyToClipboard} className="gap-2">
                        {copied ? (
                            <>
                                <Check className="size-3.5 text-emerald-500" />
                                Copied
                            </>
                        ) : (
                            <>
                                <Copy className="size-3.5" />
                                Copy
                            </>
                        )}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
