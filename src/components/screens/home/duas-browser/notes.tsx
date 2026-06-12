import { Info } from 'lucide-react'

export const Notes = ({ text }: { text: string }) => {
    return (
        <div className="flex gap-2 rounded-md border border-amber-500/20 bg-amber-500/5 p-2.5">
            <Info className="mt-0.5 size-3.5 shrink-0 text-amber-500" />
            <p className="text-muted-foreground text-xs leading-relaxed">{text}</p>
        </div>
    )
}
