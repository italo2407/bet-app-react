import { ADD_BET, REMOVE_BET } from '../contants/actions'

export type ActionType = {
    readonly type : string
    readonly payload: any
}

export const addBet = (newBet: SelectionType) : ActionType  => (
    {
        type: ADD_BET,
        payload: {
            newBet
        }
    }
)

export const removeBet = (id: SelectionType) : ActionType  => (
    {
        type: REMOVE_BET,
        payload: {
            removeId: id 
        }
    }
)