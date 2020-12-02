import React, { createContext, useContext, useReducer } from 'react'

//setup data layer
// we need this to track the basket




//THIS IS THE DATA LAYER
export const StateContext = createContext()


//BUILD A PROVIDER
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const UseStateValue = () => useContext(StateContext)