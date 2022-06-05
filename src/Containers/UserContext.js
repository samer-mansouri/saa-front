import React from 'react'
import {useState,createContext} from 'react';


export const UserContext = createContext();

export const Context = ({children}) => {
    const [role,setRole] = useState('');
    return <UserContext.Provider value={[role, setRole]}>{children} </UserContext.Provider>
}

