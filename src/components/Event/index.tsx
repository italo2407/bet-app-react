import React from 'react'
import Market from '../Market'
import Style from './style'

type Props = { 
    event: EventType
}

const Event: React.FC<Props> = ({event}) => {
    return (
        <>
            <div className={Style.eventContainer}>
                <p className={Style.eventTitle}>{event.name}</p>
                {
                    event.markets.map((market: MarketType, i: number) => <Market key={`Market-${i}`} market={market} />)
                }
            </div>
        </>
    )
}

export default Event