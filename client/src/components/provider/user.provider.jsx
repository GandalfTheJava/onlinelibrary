import React, { createContext, useReducer } from 'react';

export const UserContext = createContext({ user: {} });
const INT_STATE = {
    token: "",
    user: {}
}
const userReducer = (state = INT_STATE, action) => {
    switch (action.type) {
        case 'LOG_IN_USER':
            return { ...state, token: action.token, user: action.payload };
        case 'LOG_OUT_USER':
            return { ...state, user: null }; //back to initial state
        default:
            return;
    }
}
export const UserProvider = props => {
    const [currentUser, setCurrentUser] = useReducer(userReducer, INT_STATE);
    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
            {props.children}
        </UserContext.Provider>
    );
};
