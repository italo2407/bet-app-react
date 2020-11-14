const Style: any = {}

Style.headerContainer = `
    w-full
    flex  
    h-16
    p-5
    justify-between
    text-white
    bg-darkBlue-300
    border-b-2
    border-darkBlue-100  
`

Style.rightSide = `
    text-xl
    font-bold
`

Style.leftSide = `
    text-2xl
    font-bold
    cursor-pointer
`

Style.modalOverlay = `
    w-full
    h-full
    bg-gray-500
    bg-opacity-50
    z-30
    inset-0
    fixed
`

Style.betSlipContainer = `
    w-4/5
    bg-white
    absolute
    inset-y-0
    right-0 
    z-50
`

export default Style