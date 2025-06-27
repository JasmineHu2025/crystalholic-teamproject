import React from 'react';
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({ name: '', avatar: '' });

    useEffect(() => {
        const storedLogin = localStorage.getItem('isLoggedIn') === 'true';
        const storedUser = JSON.parse(localStorage.getItem('user')) || { name: '', avatar: '' };
        setIsLoggedIn(storedLogin);
        setUser(storedUser);
    }, []);

    const login = () => {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUser({ name: '', avatar: '' });
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('user');
    };

    // 設定 user 同時存進 localStorage
    const setUserAndPersist = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };


    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout, user, setUser: setUserAndPersist }}>

            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}