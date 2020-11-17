import { ActionType } from '../actions';
import { ADD_BET, REMOVE_BET } from '../contants/actions'

export type StateType = {
    bets: SelectionType[]
}

export const initialState: StateType = {
    bets : []
}

export const reducer = (state: StateType = initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_BET: {
            return {
                ...state, 
                bets: [...state.bets, action.payload.newBet]
            }
        }
        case REMOVE_BET: {
            return {
                ...state,
                bets: state.bets.filter(bet => bet.id !== action.payload.removeId)
            }
        }
        default:
            return state;
    }
}