import React, { createContext, useReducer } from 'react';

export const genreContext = createContext();

const INT_STATE = {
    genre: 'default'
}
const genreReducer = (state = INT_STATE, action) => {
    switch (action.type) {
        case 'SELECT_GENRE':
            return { ...state, genre: action.payload };
        case 'DEFAULT_GENRE':
            return { ...state, genre: 'default' }; //back to initial state
        default:
            return;
    }
}
export const GenreProvider = props => {
    const [currentGenre, setCurrentGenre] = useReducer(genreReducer, INT_STATE);
    return (
        <genreContext.Provider value={{ currentGenre, setCurrentGenre }}>
            {props.children}
        </genreContext.Provider>
    );
};


