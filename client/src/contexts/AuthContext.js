import React, { createContext, useState } from 'react';

let TOKEN_KEY = '@boilerplate/token';

export let AuthContext = createContext();

export let AuthProvider = (props) => {
    let [token, setToken] = useState(
        localStorage.getItem(TOKEN_KEY) ? localStorage.getItem(TOKEN_KEY) : null
    );

    let onLoginSuccess = (newToken) => {
        localStorage.setItem(TOKEN_KEY, newToken);
        setToken(newToken);
    };

    let onLogoutSuccess = () => {
        localStorage.removeItem(TOKEN_KEY);
        setToken(null);
    };

    return (
        <AuthContext.Provider
            value={{ token, onLoginSuccess, onLogoutSuccess }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};
