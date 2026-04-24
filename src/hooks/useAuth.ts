import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [role, setRole] = useState<string | null>(null);
    const [adminName, setAdminName] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('b2a_admin_token');
        if (token === 'admin-token-b2a') {
            setIsAuthenticated(true);
            setRole(localStorage.getItem('b2a_admin_role') ?? 'master');
            setAdminName(localStorage.getItem('b2a_admin_name') ?? 'Administrador');
        } else {
            setIsAuthenticated(false);
        }
        setLoading(false);
    }, []);

    const login = (token: string, userRole?: string, userName?: string, username?: string) => {
        localStorage.setItem('b2a_admin_token', token);
        if (userRole)  localStorage.setItem('b2a_admin_role', userRole);
        if (userName)  localStorage.setItem('b2a_admin_name', userName);
        if (username)  localStorage.setItem('b2a_admin_username', username);
        setIsAuthenticated(true);
        setRole(userRole ?? null);
        setAdminName(userName ?? null);
        navigate('/admin/dashboard');
    };

    const logout = () => {
        localStorage.removeItem('b2a_admin_token');
        localStorage.removeItem('b2a_admin_role');
        localStorage.removeItem('b2a_admin_name');
        localStorage.removeItem('b2a_admin_username');
        setIsAuthenticated(false);
        setRole(null);
        setAdminName(null);
        navigate('/admin/login');
    };

    return { isAuthenticated, loading, login, logout, role, adminName };
};
