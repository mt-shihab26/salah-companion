import { cn } from '#/lib/utils'
import { useAudioStore } from '#/stores/audio-store'

import { Pause, Play, X } from 'lucide-react'

const fmt = (s: number) => {
    if (!isFinite(s) || s < 0) return '0:00'
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60)
    return `${m}:${sec.toString().padStart(2, '0')}`
}

const BAR_DELAYS = ['0s', '0.25s', '0.1s', '0.35s', '0.18s']

export const GlobalAudioPlayer = () => {
    const { currentDuaId, currentUrl, isPlaying, currentTime, duration, pause, stop, seek, play } =
        useAudioStore()

    if (!currentDuaId) return null

    const progress = duration > 0 ? currentTime / duration : 0

    function toggle() {
        if (isPlaying) {
            pause()
        } else if (currentDuaId) {
            play(currentDuaId, currentUrl)
        }
    }

    return (
        <div
            className={cn(
                'bg-background/95 fixed right-0 bottom-0 left-0 z-50 border-t shadow-lg backdrop-blur-md',
                'animate-in slide-in-from-bottom-2 duration-300',
            )}
        >
            <div className="mx-auto flex max-w-2xl items-center gap-4 px-4 py-3">
                <button
                    onClick={toggle}
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                    className="bg-primary text-primary-foreground flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full shadow transition-transform hover:scale-105 active:scale-95"
                >
                    {isPlaying ? (
                        <Pause className="size-4" />
                    ) : (
                        <Play className="size-4 translate-x-px" />
                    )}
                </button>
                <div className="flex shrink-0 items-end gap-0.75" aria-hidden>
                    {BAR_DELAYS.map((delay, i) => (
                        <span
                            key={i}
                            className={cn(
                                'bg-primary w-0.75 rounded-sm',
                                isPlaying ? 'audio-eq-bar' : 'h-1 opacity-30',
                            )}
                            style={
                                isPlaying
                                    ? ({ '--delay': delay } as React.CSSProperties)
                                    : undefined
                            }
                        />
                    ))}
                </div>
                <div className="flex flex-1 flex-col gap-1.5">
                    <div className="relative flex items-center justify-center">
                        <div className="bg-primary/20 h-1 w-full overflow-hidden rounded-full">
                            <div
                                className="bg-primary h-full rounded-full transition-all duration-100"
                                style={{ width: `${progress * 100}%` }}
                            />
                        </div>
                        <input
                            type="range"
                            min={0}
                            max={duration || 1}
                            step={0.1}
                            value={currentTime}
                            onChange={(e) => seek(Number(e.target.value))}
                            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                            aria-label="Seek"
                        />
                    </div>
                    <div className="text-muted-foreground flex justify-between font-mono text-[10px] tabular-nums">
                        <span>{fmt(currentTime)}</span>
                        <span>{fmt(duration)}</span>
                    </div>
                </div>
                <button
                    onClick={stop}
                    aria-label="Close player"
                    className="text-muted-foreground hover:text-foreground shrink-0 cursor-pointer transition-colors"
                >
                    <X className="size-4" />
                </button>
            </div>
        </div>
    )
}
