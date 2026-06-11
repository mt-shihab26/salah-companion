import type { TSalahPositionId } from '#/types/salah-positions'
import type { TSalahDua } from '../../types/salah-duas'

import { beforeTasleemDuas } from './before-tasleem'
import { jalsahDuas } from './jalsah'
import { openingDuas } from './opening-duas/opening'
import { qawmahDuas } from './qawmah'
import { rukuDuas } from './ruku'
import { sajdahDuas } from './sajdah'
import { salawatDuas } from './salawat'
import { taawwudhDuas } from './taawwudh'
import { tashahhudDuas } from './tashahhud'

export const allDuas: TSalahDua[] = [
    ...openingDuas,
    ...taawwudhDuas,
    ...rukuDuas,
    ...qawmahDuas,
    ...sajdahDuas,
    ...jalsahDuas,
    ...tashahhudDuas,
    ...salawatDuas,
    ...beforeTasleemDuas,
]

export const getDuaById = (id: string): TSalahDua | undefined => {
    return allDuas.find((d) => d.id === id)
}

export const getDuasByPosition = (positionId: TSalahPositionId): TSalahDua[] => {
    return allDuas.filter((d) => d.positionId === positionId)
}
