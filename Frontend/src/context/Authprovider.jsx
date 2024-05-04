import React, { createContext, useContext, useState } from 'react'

export const Authcontext = createContext();
export default function Authprovider({ children }) {
    const initialAuthuser = localStorage.getItem("user");
    const [authuser, setauthuser] = useState(
        initialAuthuser ? JSON.parse(initialAuthuser) : undefined
    )
    return (
        <Authcontext.Provider value={[authuser, setauthuser]}>
            {children}
        </Authcontext.Provider>
    )
}

export const useauth = () => useContext(Authcontext)
