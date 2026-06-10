import { useAudioContext } from '#/contexts/AudioContext'

export function useAudioPlayer(duaId: string, audioUrl: string) {
    const { currentDuaId, isPlaying, play, stop } = useAudioContext()

    const isThisDuaPlaying = currentDuaId === duaId && isPlaying

    function toggle() {
        play(duaId, audioUrl)
    }

    return { isPlaying: isThisDuaPlaying, toggle, stop }
}
