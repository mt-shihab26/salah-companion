import { cn } from '#/lib/utils'
import { useDuaFavoritesStore } from '#/stores/dua-favorites-store'

import { Button } from '#/components/ui/button'
import { Heart } from 'lucide-react'

export const DuaFavoriteButton = ({ duaId }: { duaId: string }) => {
    const { isFavorite, toggle } = useDuaFavoritesStore()

    const fav = isFavorite(duaId)

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => toggle(duaId)}
            aria-label={fav ? 'Remove from favourites' : 'Add to favourites'}
            className={cn(
                'size-8 transition-colors',
                fav
                    ? 'text-rose-500 hover:text-rose-600'
                    : 'text-muted-foreground hover:text-rose-500',
            )}
        >
            <Heart className={cn('size-4', fav && 'fill-current')} />
        </Button>
    )
}
