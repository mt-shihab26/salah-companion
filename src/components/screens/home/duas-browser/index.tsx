import { PageWrap } from '#/components/page-wrap'
import { DuasBrowserProvider } from './context'
import { Heading } from './heading'
import { MainSection } from './main-section'
import { StickyToolbar } from './sticky-toolbar'

export const DuasBrowser = () => {
    return (
        <DuasBrowserProvider>
            <PageWrap id="duas-browser" className="scroll-mt-6 space-y-6">
                <Heading />
                <StickyToolbar />
                <MainSection />
            </PageWrap>
        </DuasBrowserProvider>
    )
}
