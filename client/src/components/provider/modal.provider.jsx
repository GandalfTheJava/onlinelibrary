import React, { createContext, useReducer } from 'react';

export const modalContext = createContext();

const INT_STATE = {
    openModal: false,
    selectedBook: null
}
const modalReducer = (state = INT_STATE, action) => {
    switch (action.type) {
        case 'SELECT_BOOK':
            return { ...state, genre: action.payload };
        case 'DEFAULT_GENRE':
            return { ...state, genre: 'default' }; //back to initial state
        default:
            return;
    }
}
export const ModalProvider = props => {
    const [currentModal, setCurrentModal] = useReducer(modalReducer, INT_STATE);
    return (
        <modalContext.Provider value={{ currentModal, setCurrentModal }}>
            {props.children}
        </modalContext.Provider>
    );
};


