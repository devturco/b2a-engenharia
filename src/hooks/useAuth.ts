import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('b2a_admin_token');
        if (token === 'admin-token-b2a') {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
        setLoading(false);
    }, []);

    const login = (token: string) => {
        localStorage.setItem('b2a_admin_token', token);
        setIsAuthenticated(true);
        navigate('/admin/dashboard');
    };

    const logout = () => {
        localStorage.removeItem('b2a_admin_token');
        setIsAuthenticated(false);
        navigate('/admin/login');
    };

    return { isAuthenticated, loading, login, logout };
};
