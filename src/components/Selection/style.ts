const Style: any = {}

Style.selection = (seletedSelection: boolean) => `
    ${seletedSelection ? 'bg-blue-600' : 'bg-darkBlue-200'}
    py-2
    px-6
    rounded-lg
    grid
    text-xs
`

export default Style