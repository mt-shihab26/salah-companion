import { createContext, useContext, useRef, useState } from 'react'

interface AudioContextValue {
    currentDuaId: string | null
    isPlaying: boolean
    currentTime: number
    duration: number
    play: (duaId: string, url: string) => void
    pause: () => void
    stop: () => void
    seek: (time: number) => void
}

const AudioContext = createContext<AudioContextValue | null>(null)

export function AudioProvider({ children }: { children: React.ReactNode }) {
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const [currentDuaId, setCurrentDuaId] = useState<string | null>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)

    function initAudio() {
        if (audioRef.current) return
        const audio = new Audio()
        audio.onended = () => {
            setIsPlaying(false)
            setCurrentDuaId(null)
            setCurrentTime(0)
        }
        audio.ontimeupdate = () => setCurrentTime(audio.currentTime)
        audio.onloadedmetadata = () => setDuration(audio.duration)
        audioRef.current = audio
    }

    function play(duaId: string, url: string) {
        initAudio()
        const audio = audioRef.current!

        if (currentDuaId === duaId && isPlaying) {
            audio.pause()
            setIsPlaying(false)
            return
        }

        audio.pause()
        audio.src = url
        audio.currentTime = 0
        setCurrentTime(0)
        setDuration(0)
        audio
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
        setCurrentTime(0)
    }

    function seek(time: number) {
        if (audioRef.current) audioRef.current.currentTime = time
    }

    return (
        <AudioContext
            value={{ currentDuaId, isPlaying, currentTime, duration, play, pause, stop, seek }}
        >
            {children}
        </AudioContext>
    )
}

export function useAudioContext() {
    const ctx = useContext(AudioContext)
    if (!ctx) throw new Error('useAudioContext must be used inside AudioProvider')
    return ctx
}
