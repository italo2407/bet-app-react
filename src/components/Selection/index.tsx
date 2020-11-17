import React, {useContext} from 'react'
import { AppContext } from '../../context'
import { addBet, removeBet } from '../../actions'
import Style from './style'

type Props = { 
    selection: SelectionType
}

const Selection: React.FC<Props> = ({selection}) => {
    const { state, dispatch } = useContext(AppContext)
    
    const selectedSelection: boolean = state.bets.some(bet => bet.id === selection.id)

    const selectSelection = (e: any) => {
        e.preventDefault()
        if(selectedSelection){
            dispatch(removeBet(selection.id))
            return;
        }

        const newBet: SelectionType = {
            id: selection.id,
            name: selection.name,
            price: selection.price
        }
        dispatch(addBet(newBet))
    }

    return (
        <button data-testid="selection" className={Style.selection(selectedSelection)} onClick={selectSelection}>
            <span>{selection.name}</span>
            <span>{selection.price}</span>
        </button>
    )
}

export default Selection