import { create } from 'zustand'

type TAudioStore = {
    currentDuaId: string | null
    currentUrl: string
    isPlaying: boolean
    currentTime: number
    duration: number
    audioElement: HTMLAudioElement | null

    play: (duaId: string, url: string) => void
    pause: () => void
    stop: () => void
    seek: (time: number) => void
    setCurrentTime: (time: number) => void
    setDuration: (duration: number) => void
}

const createAudioElement = () => {
    const audio = new Audio()
    return audio
}

export const useAudioStore = create<TAudioStore>((set, get) => ({
    currentDuaId: null,
    currentUrl: '',
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    audioElement: null,

    play: (duaId: string, url: string) => {
        const state = get()
        let audio = state.audioElement

        if (!audio) {
            audio = createAudioElement()
            const audioEl = audio
            audio.onended = () => {
                set({ isPlaying: false, currentDuaId: null, currentTime: 0 })
            }
            audio.ontimeupdate = () => set({ currentTime: audioEl.currentTime })
            audio.onloadedmetadata = () => set({ duration: audioEl.duration })
            set({ audioElement: audio })
        }

        if (state.currentDuaId === duaId && state.isPlaying) {
            audio.pause()
            set({ isPlaying: false })
            return
        }

        if (audio) {
            audio.pause()
            if (url) {
                audio.src = url
                audio.currentTime = 0
                set({ currentTime: 0, duration: 0, currentUrl: url })
            }

            audio
                .play()
                .then(() => {
                    set({ currentDuaId: duaId, isPlaying: true })
                })
                .catch(() => {
                    set({ isPlaying: false, currentDuaId: null })
                })
        }
    },

    pause: () => {
        const audio = get().audioElement
        audio?.pause()
        set({ isPlaying: false })
    },

    stop: () => {
        const audio = get().audioElement
        if (audio) {
            audio.pause()
            audio.currentTime = 0
        }
        set({ isPlaying: false, currentDuaId: null, currentTime: 0 })
    },

    seek: (time: number) => {
        const audio = get().audioElement
        if (audio) audio.currentTime = time
    },

    setCurrentTime: (time: number) => {
        set({ currentTime: time })
    },

    setDuration: (duration: number) => {
        set({ duration })
    },
}))
