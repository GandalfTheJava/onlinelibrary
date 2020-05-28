import React, { createContext, useReducer } from 'react';

export const directoryContext = createContext({ directory: {} });
const INT_STATE = {
    directory: {}
}
const directoryReducer = (state = INT_STATE, action) => {
    switch (action) {
        default:
            return directory
    }

}

export const DirectoryProvider = props => {
    const [directory] = useReducer(directoryReducer, INT_STATE);
    return (
        <directoryContext.Provider value={{ directory }}>
            {props.children}
        </directoryContext.Provider>
    );
};