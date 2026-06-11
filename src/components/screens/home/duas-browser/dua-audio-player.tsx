import type { TSalahDua } from '#/types/salah-duas'

import { useAudioPlayer } from '#/hooks/use-audio-player'
import { cn } from '#/lib/utils'

import { Play } from 'lucide-react'

const BAR_DELAYS = ['0s', '0.2s', '0.1s', '0.3s']

export const DuaAudioPlayer = ({ salahDua }: { salahDua: TSalahDua }) => {
    const { isPlaying, isActive, toggle } = useAudioPlayer(salahDua.id, salahDua.audioUrl)

    return (
        <button
            onClick={toggle}
            aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
            className={cn(
                'flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full border transition-all hover:scale-105',
                isActive
                    ? 'border-primary bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'border-primary/40 bg-primary/10 text-primary hover:bg-primary/20',
            )}
        >
            {isPlaying ? (
                /* Animated EQ bars when playing */
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
                /* Paused — show resume icon in active style */
                <Play className="size-3.5 translate-x-px" />
            ) : (
                /* Idle */
                <Play className="size-3.5 translate-x-px" />
            )}
        </button>
    )
}
