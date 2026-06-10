import { useAudioContext } from '#/contexts/AudioContext'

export const useAudioPlayer = (duaId: string, audioUrl: string) => {
    const { currentDuaId, isPlaying, play, stop } = useAudioContext()

    const isThisDuaPlaying = currentDuaId === duaId && isPlaying

    const toggle = () => {
        play(duaId, audioUrl)
    }

    return { isPlaying: isThisDuaPlaying, toggle, stop }
}
