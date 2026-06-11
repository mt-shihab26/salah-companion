import type { TSalahDua } from '#/types/salah-duas'

import { cn } from '#/lib/utils'
import { useAudioStore } from '#/stores/audio-store'

import { Play } from 'lucide-react'

const BAR_DELAYS = ['0s', '0.2s', '0.1s', '0.3s']

export const AudioButton = ({ salahDua }: { salahDua: TSalahDua }) => {
    const { currentDuaId, isPlaying, play } = useAudioStore()

    const isActive = currentDuaId === salahDua.id
    const isThisPlaying = isActive && isPlaying

    const toggle = () => play(salahDua.id, salahDua.audioUrl)

    return (
        <button
            onClick={toggle}
            aria-label={isThisPlaying ? 'Pause audio' : 'Play audio'}
            className={cn(
                'flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full border transition-all hover:scale-105',
                isActive
                    ? 'border-primary bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'border-primary/40 bg-primary/10 text-primary hover:bg-primary/20',
            )}
        >
            {isThisPlaying ? (
                <span className="flex items-end gap-px" aria-hidden>
                    {BAR_DELAYS.map((delay, i) => (
                        <span
                            key={i}
                            className="audio-eq-bar bg-primary-foreground w-[2.5px] rounded-sm"
                            style={{ '--delay': delay } as React.CSSProperties}
                        />
                    ))}
                </span>
            ) : isActive ? (
                <Play className="size-3.5 translate-x-px" />
            ) : (
                <Play className="size-3.5 translate-x-px" />
            )}
        </button>
    )
}
