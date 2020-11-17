import React, { createContext, Dispatch, SetStateAction, useContext, useReducer } from 'react';
import { ActionType } from '../actions';
import { StateType, reducer, initialState } from '../reducer';

export type AppContextType = {
    state: StateType
    dispatch: Dispatch<ActionType>
}

export const AppContext = createContext<AppContextType>({
    state: initialState,
    dispatch: () => {}
});

export const AppProvider = ({children} : any) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <AppContext.Provider value = {{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
};