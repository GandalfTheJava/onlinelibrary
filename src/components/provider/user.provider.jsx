import React, { createContext, useState } from 'react';

export const UserContext = createContext();


export const UserProvider = props => {
    const [currentUser, setUser] = useState({ name: 'Name', age: 25, logged: true });
    return (
        <UserContext.Provider value={currentUser}>
            {props.children}
        </UserContext.Provider>
    );
};
