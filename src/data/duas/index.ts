import type { DuaVariation, SalahPositionId } from './types'
import { openingDuas } from './opening'
import { taawwudhDuas } from './taawwudh'
import { rukuDuas } from './ruku'
import { qawmahDuas } from './qawmah'
import { sajdahDuas } from './sajdah'
import { jalsahDuas } from './jalsah'
import { tashahhudDuas } from './tashahhud'
import { salawatDuas } from './salawat'
import placeholderAudio from '../../assets/audio/subhanaka.m4a'

const rawDuas: DuaVariation[] = [
    ...openingDuas,
    ...taawwudhDuas,
    ...rukuDuas,
    ...qawmahDuas,
    ...sajdahDuas,
    ...jalsahDuas,
    ...tashahhudDuas,
    ...salawatDuas,
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
