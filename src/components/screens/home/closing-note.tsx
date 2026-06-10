import { PageWrap } from '#/components/page-wrap'

export const ClosingNote = () => {
    return (
        <PageWrap className="text-center">
            <div className="mx-auto max-w-xl space-y-3">
                <p
                    dir="rtl"
                    className="text-foreground font-serif text-2xl"
                    style={{ fontFamily: "'Amiri', 'Noto Naskh Arabic', Georgia, serif" }}
                >
                    رَبَّنَا تَقَبَّلْ مِنَّا
                </p>
                <p className="text-muted-foreground text-sm italic">
                    “Our Lord, accept it from us.”
                </p>
            </div>
        </PageWrap>
    )
}
