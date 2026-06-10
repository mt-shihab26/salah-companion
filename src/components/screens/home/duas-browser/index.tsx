import { PageWrap } from '#/components/page-wrap'
import { getDuasByPosition } from '#/data/duas/index'
import { SALAH_POSITIONS } from '#/data/duas/positions'
import type { SalahPositionId } from '#/data/duas/types'
import { useDuaLang } from '#/hooks/use-dua-lang'
import { useState } from 'react'
import { Heading } from './heading'
import { MainSection } from './main-section'
import { StickyToolbar } from './sticky-toolbar'

export const DuasBrowser = () => {
    const { langs, toggleLang } = useDuaLang()
    const [activePosition, setActivePosition] = useState<SalahPositionId>(
        SALAH_POSITIONS[0].id as SalahPositionId,
    )
    const duas = getDuasByPosition(activePosition)
    const activeMeta = SALAH_POSITIONS.find((p) => p.id === activePosition)

    return (
        <PageWrap id="duas-browser" className="scroll-mt-6 space-y-6">
            <Heading />
            <StickyToolbar />
            <MainSection />
        </PageWrap>
    )
}
