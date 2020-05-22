import React, { createContext, useState } from 'react';

export const CurrentUser = createContext();


export let UserProvider = (props) => {
    const [user, setCurrentUser] = useState([{ name: 'Name', age: 24, logged: true }]);
    return (
        <CurrentUser.Provider value={user}>
            {props.children}
        </CurrentUser.Provider>
    )
};

