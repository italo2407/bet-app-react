import React, {useContext} from 'react'
import Style from './style'
import { AppContext } from '../../context'
import { removeBet } from '../../actions'

type Props = { 
    selection: SelectionType
}

const Bet: React.FC<Props> = ({selection}) => {
    const { dispatch } = useContext(AppContext)

    const deleteBet = (e: any) => {
        e.preventDefault()
        dispatch(removeBet(selection.id))
    }
    return (
        <div data-testid={selection.id} className={Style.betContainer}>
            <span>{selection.name}</span>
            <span className="font-bold">{selection.price}</span>
            <button data-testid="delete" className={Style.deleteButton} onClick={deleteBet}>Delete</button>
        </div>
    )
}

export default Bet