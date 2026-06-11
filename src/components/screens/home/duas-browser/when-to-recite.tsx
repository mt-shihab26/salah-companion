import { Clock } from 'lucide-react'

export const WhenToRecite = ({ text }: { text: string }) => (
    <div className="border-primary/20 bg-primary/5 flex gap-2 rounded-md border p-2.5">
        <Clock className="text-primary mt-0.5 size-3.5 shrink-0" />
        <p className="text-muted-foreground text-xs leading-relaxed">{text}</p>
    </div>
)
