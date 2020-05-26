import React, { createContext, useReducer } from 'react';

export const UserContext = createContext({ user: {} });
const INT_STATE = {
    user: {}
}
const userReducer = (state = INT_STATE, action) => {
    console.log(state.user);
    switch (action.type) {
        case 'LOG_IN_USER':
            return { ...state, user: action.payload };
        case 'LOG_OUT_USER':
            return { ...state, user: {} }; //back to initial state
        default:
            return;
    }
}
export const UserProvider = props => {
    const [currentUser, dispatch] = useReducer(userReducer, INT_STATE);
    return (
        <UserContext.Provider value={{ currentUser, dispatch }}>
            {props.children}
        </UserContext.Provider>
    );
};
