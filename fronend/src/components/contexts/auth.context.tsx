import React, { createContext, ReactNode, useContext, useState } from 'react';

interface IUserInfo {
    user?: {
        email: string;
        fullName: string;
    }
    isAuthenticated: boolean;
}
interface IAppLoading {
    appLoading: boolean;
}
interface UserContextType {
    auth: IUserInfo | null;
    setAuth: (auth: IUserInfo | null) => void;
    appLoading: IAppLoading | null;
    setAppLoading: (appLoadingInfor: IAppLoading | null) => void;
}
export const AuthContext = createContext<UserContextType | undefined>(undefined);

export const AuthWrapper = ({ children }: { children: ReactNode }) => {
    const [auth, setAuth] = useState<IUserInfo | null>(null);
    const [appLoading, setAppLoading] = useState<IAppLoading | null>(null);
    return (
        <AuthContext.Provider
            value={{ auth, setAuth, appLoading, setAppLoading, }}
        >
            {children}
        </AuthContext.Provider>
    )
}