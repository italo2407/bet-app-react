import React from 'react'
import Selection from '../Selection'
import Style from './style'

type Props = { 
    market: MarketType
}

const Market: React.FC<Props> = ({market}) => {
    return (
        <div className={Style.marketContainer}>
            <p className={Style.marketTitle}>{market.name}</p>
            <div className={Style.selectionContainer}>
                {market.selections.map((selection: SelectionType, i:number) => <Selection key={`Selection-${i}`} selection={selection} />)}
            </div>
        </div>
    )
}

export default Market