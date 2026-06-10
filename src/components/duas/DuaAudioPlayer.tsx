import { Button } from '#/components/ui/button'
import { useAudioPlayer } from '#/hooks/use-audio-player'
import { Pause, Play } from 'lucide-react'

interface Props {
    duaId: string
    audioUrl: string
}

export function DuaAudioPlayer({ duaId, audioUrl }: Props) {
    const { isPlaying, toggle } = useAudioPlayer(duaId, audioUrl)

    return (
        <Button
            variant="outline"
            size="sm"
            onClick={toggle}
            aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
            className="gap-2"
        >
            {isPlaying ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
            {isPlaying ? 'Pause' : 'Listen'}
        </Button>
    )
}
