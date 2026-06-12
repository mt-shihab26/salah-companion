import type { TSalahDua } from '#/types/salah-duas'

import { cn } from '#/lib/utils'
import { useDuaFavoritesStore } from '#/stores/dua-favorites-store'

import { Button } from '#/components/ui/button'
import { Heart } from 'lucide-react'

export const FavoriteButton = ({ salahDua }: { salahDua: TSalahDua }) => {
    const fav = useDuaFavoritesStore((s) => s.favorites.includes(salahDua.id))
    const toggle = useDuaFavoritesStore((s) => s.toggle)

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
