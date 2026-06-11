import { cn } from '#/lib/utils'
import { useDuaFavoritesStore } from '#/stores/dua-favorites-store'

import { Button } from '#/components/ui/button'
import type { TSalahDua } from '#/types/salah-duas'
import { Heart } from 'lucide-react'

export const DuaFavoriteButton = ({ salahDua }: { salahDua: TSalahDua }) => {
    const { isFavorite, toggle } = useDuaFavoritesStore()

    const fav = isFavorite(salahDua.id)

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => toggle(salahDua.id)}
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
