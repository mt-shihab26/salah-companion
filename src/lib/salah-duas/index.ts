import type { TSalahDua } from '#/types/salah-duas'
import type { TSalahPositionId } from '#/types/salah-positions'

import { istiftah1 } from './opening/istiftah-1'
import { istiftah2 } from './opening/istiftah-2'
import { istiftah3 } from './opening/istiftah-3'
import { istiftahTahajjud } from './opening/istiftah-tahajjud'
import { takbeer } from './opening/takbeer'

import { taawwudh1 } from './taawwudh/taawwudh-1'

import { ruku1 } from './ruku/ruku-1'
import { ruku2 } from './ruku/ruku-2'
import { ruku3 } from './ruku/ruku-3'
import { ruku4 } from './ruku/ruku-4'
import { ruku5 } from './ruku/ruku-5'
import { ruku6 } from './ruku/ruku-6'
import { ruku7 } from './ruku/ruku-7'

import { qawmah1 } from './qawmah/qawmah-1'
import { qawmah2 } from './qawmah/qawmah-2'
import { qawmah3 } from './qawmah/qawmah-3'
import { qawmah4 } from './qawmah/qawmah-4'

import { sajdah1 } from './sajdah/sajdah-1'
import { sajdah10 } from './sajdah/sajdah-10'
import { sajdah2 } from './sajdah/sajdah-2'
import { sajdah3 } from './sajdah/sajdah-3'
import { sajdah4 } from './sajdah/sajdah-4'
import { sajdah5 } from './sajdah/sajdah-5'
import { sajdah6 } from './sajdah/sajdah-6'
import { sajdah7 } from './sajdah/sajdah-7'
import { sajdah8 } from './sajdah/sajdah-8'
import { sajdah9 } from './sajdah/sajdah-9'

import { jalsah1 } from './jalsah/jalsah-1'

import { tashahhud1 } from './tashahhud/tashahhud-1'

import { tasleem1 } from './before-tasleem/tasleem-1'
import { tasleem2 } from './before-tasleem/tasleem-2'
import { tasleem3 } from './before-tasleem/tasleem-3'
import { tasleem4 } from './before-tasleem/tasleem-4'
import { tasleem5 } from './before-tasleem/tasleem-5'
import { tasleem6 } from './before-tasleem/tasleem-6'
import { tasleem7 } from './before-tasleem/tasleem-7'
import { tasleem8 } from './before-tasleem/tasleem-8'
import { tasleem9 } from './before-tasleem/tasleem-9'
import { salawat1 } from './salawat/salawat-1'

export const allDuas: TSalahDua[] = [
    takbeer,
    istiftah1,
    istiftah2,
    istiftah3,
    istiftahTahajjud,
    taawwudh1,
    ruku1,
    ruku2,
    ruku3,
    ruku4,
    ruku5,
    ruku6,
    ruku7,
    qawmah1,
    qawmah2,
    qawmah3,
    qawmah4,
    sajdah1,
    sajdah2,
    sajdah3,
    sajdah4,
    sajdah5,
    sajdah6,
    sajdah7,
    sajdah8,
    sajdah9,
    sajdah10,
    jalsah1,
    tashahhud1,
    salawat1,
    tasleem1,
    tasleem2,
    tasleem3,
    tasleem4,
    tasleem5,
    tasleem6,
    tasleem7,
    tasleem8,
    tasleem9,
]

export const getSalahDuaById = (id: string): TSalahDua | undefined => {
    return allDuas.find((d) => d.id === id)
}

export const getSalahDuasBySalahPosition = (positionId: TSalahPositionId | undefined): TSalahDua[] => {
    return allDuas.filter((d) => d.positionId === (positionId ?? 'opening'))
}
