import type { TDuaVariation, TSalahPositionId } from './types'

import { beforeTasleemDuas } from './before-tasleem'
import { jalsahDuas } from './jalsah'
import { openingDuas } from './opening'
import { qawmahDuas } from './qawmah'
import { rukuDuas } from './ruku'
import { sajdahDuas } from './sajdah'
import { salawatDuas } from './salawat'
import { taawwudhDuas } from './taawwudh'
import { tashahhudDuas } from './tashahhud'

export const allDuas: TDuaVariation[] = [
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

export const getDuaById = (id: string): TDuaVariation | undefined => {
    return allDuas.find((d) => d.id === id)
}

export const getDuasByPosition = (positionId: TSalahPositionId): TDuaVariation[] => {
    return allDuas.filter((d) => d.positionId === positionId)
}
