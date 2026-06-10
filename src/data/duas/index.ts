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
import type { DuaVariation, SalahPositionId } from './types'

const rawDuas: DuaVariation[] = [
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

export const allDuas: DuaVariation[] = rawDuas.map((dua) => ({
    ...dua,
    audioUrl: dua.audioUrl ?? placeholderAudio,
}))

export function getDuaById(id: string): DuaVariation | undefined {
    return allDuas.find((d) => d.id === id)
}

export function getDuasByPosition(positionId: SalahPositionId): DuaVariation[] {
    return allDuas.filter((d) => d.positionId === positionId)
}
