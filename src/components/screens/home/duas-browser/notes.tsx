import { Info } from 'lucide-react'

export const Notes = ({ text }: { text: string }) => (
    <div className="border-muted-foreground/20 bg-muted/40 flex gap-2 rounded-md border p-2.5">
        <Info className="text-muted-foreground mt-0.5 size-3.5 shrink-0" />
        <p className="text-muted-foreground text-xs leading-relaxed">{text}</p>
    </div>
)
