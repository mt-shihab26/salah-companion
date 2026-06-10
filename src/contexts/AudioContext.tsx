import { createContext, useContext, useRef, useState } from 'react'

interface AudioContextValue {
    currentDuaId: string | null
    isPlaying: boolean
    play: (duaId: string, url: string) => void
    pause: () => void
    stop: () => void
}

const AudioContext = createContext<AudioContextValue | null>(null)

export function AudioProvider({ children }: { children: React.ReactNode }) {
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const [currentDuaId, setCurrentDuaId] = useState<string | null>(null)
    const [isPlaying, setIsPlaying] = useState(false)

    function play(duaId: string, url: string) {
        if (!audioRef.current) {
            audioRef.current = new Audio()
            audioRef.current.onended = () => {
                setIsPlaying(false)
                setCurrentDuaId(null)
            }
        }

        if (currentDuaId === duaId && isPlaying) {
            audioRef.current.pause()
            setIsPlaying(false)
            return
        }

        audioRef.current.pause()
        audioRef.current.src = url
        audioRef.current.currentTime = 0
        audioRef.current
            .play()
            .then(() => {
                setCurrentDuaId(duaId)
                setIsPlaying(true)
            })
            .catch(() => {
                setIsPlaying(false)
                setCurrentDuaId(null)
            })
    }

    function pause() {
        audioRef.current?.pause()
        setIsPlaying(false)
    }

    function stop() {
        if (audioRef.current) {
            audioRef.current.pause()
            audioRef.current.currentTime = 0
        }
        setIsPlaying(false)
        setCurrentDuaId(null)
    }

    return (
        <AudioContext value={{ currentDuaId, isPlaying, play, pause, stop }}>
            {children}
        </AudioContext>
    )
}

export function useAudioContext() {
    const ctx = useContext(AudioContext)
    if (!ctx) throw new Error('useAudioContext must be used inside AudioProvider')
    return ctx
}
