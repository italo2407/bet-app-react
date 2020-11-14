import React from 'react'
import Style from './style'

type Props = { 
    selection: SelectionType
}

const Selection: React.FC<Props> = ({selection}) => {
    return (
        <button className={Style.selection}>
            <span>{selection.name}</span>
            <span>{selection.price}</span>
        </button>
    )
}

export default Selection