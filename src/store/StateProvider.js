// setup data layer
// we need this to track the basket
import React, {createContext, useContext, useReducer} from 'react'


// THIS IS DATA LAYER
export const StateContext = createContext();

// Provider
export const StateProvider = ({reducer, initialState, children}) =>(
         <StateContext.Provider value={useReducer(reducer, initialState)} >
             {children}
         </StateContext.Provider>
);

// this is how we use it inside component

export const useStateValue = ()=> useContext(StateContext);