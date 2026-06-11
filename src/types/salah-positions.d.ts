export type TSalahPositionId =
    | 'opening'
    | 'taawwudh'
    | 'ruku'
    | 'qawmah'
    | 'sajdah'
    | 'jalsah'
    | 'tashahhud'
    | 'salawat'
    | 'before-tasleem'

export type TSalahPosition = {
    id: TSalahPositionId
    order: number
    name: string
    nameArabic: string
    description: string
    icon: string
    color: string
}
