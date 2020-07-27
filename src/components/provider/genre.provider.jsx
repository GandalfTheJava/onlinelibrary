import React, { createContext, useReducer } from 'react';

export const GenreContext = createContext();
const INT_STATE = {
    genre: 'default'
}
const genreReducer = (state = INT_STATE, action) => {
    switch (action.type) {
        case 'SELECT_GENRE':
            return { ...state, user: action.payload };
        case 'DEFAULT_GENRE':
            return { ...state, user: {} }; //back to initial state
        default:
            return;
    }
}
export const genreProvider = props => {
    const [currentGenre, setCurrentGenre] = useReducer(genreContext, INT_STATE);
    return (
        <GenreContext.Provider value={{ currentGenre, setCurrentGenre }}>
            {props.children}
        </GenreContext.Provider>
    );
};


