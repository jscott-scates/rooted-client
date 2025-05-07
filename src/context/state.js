import { createContext, useContext, useEffect, useState } from 'react';
import { getUserProfile } from '@/data/auth';
import { useRouter } from 'next/router';

const AppContext = createContext();

export function AppWrapper({ children }) {
    const [sage, setSage] = useState({});
    const [token, setToken] = useState('');
    const router = useRouter();

    //Sets token to the stored token for the Sage that has successfully logged
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    useEffect(() => {
        const authRoutes = ['/login', '/register'];
        if (token) {
            localStorage.setItem('token', token);
            if (!authRoutes.includes(router.pathname)) {
                getUserProfile().then((sageData) => {
                    if (sageData) {
                        setSage(sageData);
                    }
                });
            } else {
                setSage({});
            }
        }
    }, [token, router.pathname]);

    return (
        <AppContext.Provider value={{ sage, token, setToken, setSage }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
