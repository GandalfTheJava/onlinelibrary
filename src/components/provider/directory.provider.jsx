import React, { createContext, useReducer } from 'react';
import books from '../../assets/BooksDatabase/database';

export const directoryContext = createContext({ directory: {} });

const INT_STATE = {
    directory: books
}
const directoryReducer = (state = INT_STATE) => {
    return state;
}
export const DirectoryProvider = props => {
    const [directory] = useReducer(directoryReducer, INT_STATE);
    return (
        <directoryContext.Provider value={directory}>
            {props.children}
        </directoryContext.Provider>
    );
};