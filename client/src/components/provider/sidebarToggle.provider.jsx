import React, { createContext, useReducer } from 'react';


export const sidebarContext = createContext();

const INT_STATE = {
    sideBar: true
}
//Reducer
const sidebarReducer = (state = INT_STATE) => {
    return {
        ...state,
        sideBar: !state.sideBar
    };
}
//Provider
export const SidebarProvider = props => {
    const [sideBar, toggleSidebar] = useReducer(sidebarReducer, INT_STATE);
    return (
        <sidebarContext.Provider value={{ sideBar, toggleSidebar }}>
            {props.children}
        </sidebarContext.Provider>
    );
};


