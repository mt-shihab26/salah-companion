import { useState } from 'react'

import { Button } from '#/components/ui/button'
import type { TLanguage } from '#/types/languages'
import type { TSalahDua } from '#/types/salah-duas'
import { Check, Copy } from 'lucide-react'

export const DuaCopyButton = ({
    salahDua,
    languages,
}: {
    salahDua: TSalahDua
    languages: TLanguage[]
}) => {
    const [copied, setCopied] = useState(false)

    async function handleCopy() {
        const lang = languages[0] ?? 'en'
        const text = [
            salahDua.arabic,
            '',
            salahDua.languages[lang].transliteration,
            '',
            salahDua.languages[lang].translation,
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
        <Button
            variant="ghost"
            size="icon"
            onClick={handleCopy}
            aria-label="Copy dua text"
            className="text-muted-foreground size-8"
        >
            {copied ? <Check className="size-4 text-emerald-500" /> : <Copy className="size-4" />}
        </Button>
    )
}
