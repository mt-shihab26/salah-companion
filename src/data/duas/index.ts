import placeholderAudio from '../../assets/audio/subhanaka.m4a'
import { beforeTasleemDuas } from './before-tasleem'
import { jalsahDuas } from './jalsah'
import { openingDuas } from './opening'
import { qawmahDuas } from './qawmah'
import { rukuDuas } from './ruku'
import { sajdahDuas } from './sajdah'
import { salawatDuas } from './salawat'
import { taawwudhDuas } from './taawwudh'
import { tashahhudDuas } from './tashahhud'
import type { TDuaVariation, TSalahPositionId } from './types'

const rawDuas: TDuaVariation[] = [
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

export const allDuas: TDuaVariation[] = rawDuas.map((dua) => ({
    ...dua,
    audioUrl: dua.audioUrl ?? placeholderAudio,
}))

export function getDuaById(id: string): TDuaVariation | undefined {
    return allDuas.find((d) => d.id === id)
}

export function getDuasByPosition(positionId: TSalahPositionId): TDuaVariation[] {
    return allDuas.filter((d) => d.positionId === positionId)
}
