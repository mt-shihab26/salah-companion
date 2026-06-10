import { useAudioContext } from '#/contexts/AudioContext'

export const useAudioPlayer = (duaId: string, audioUrl: string) => {
    const { currentDuaId, isPlaying, currentTime, duration, play, stop, seek } = useAudioContext()

    const isThisDuaPlaying = currentDuaId === duaId && isPlaying
    const isThisDuaActive = currentDuaId === duaId

    const toggle = () => play(duaId, audioUrl)

    return {
        isPlaying: isThisDuaPlaying,
        isActive: isThisDuaActive,
        currentTime: isThisDuaActive ? currentTime : 0,
        duration: isThisDuaActive ? duration : 0,
        toggle,
        stop,
        seek,
    }
}
