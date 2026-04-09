import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { registerUser, loginUser, getMe } from '../api/auth.api';
import { updateProfile as updateProfileApi, updateSkills as updateSkillsApi } from '../api/user.api';

const AuthContext = createContext(null);

const TOKEN_KEY = 'skillswap_token';

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Hydrate user from stored token on mount
    useEffect(() => {
        const token = localStorage.getItem(TOKEN_KEY);
        if (!token) {
            setLoading(false);
            return;
        }

        getMe()
            .then((data) => {
                if (data.success) {
                    setUser(data.user);
                } else {
                    localStorage.removeItem(TOKEN_KEY);
                }
            })
            .catch(() => {
                localStorage.removeItem(TOKEN_KEY);
            })
            .finally(() => setLoading(false));
    }, []);

    const register = useCallback(async ({ name, email, password }) => {
        setError(null);
        try {
            const data = await registerUser({ name, email, password });
            if (data.success) {
                localStorage.setItem(TOKEN_KEY, data.token);
                setUser(data.user);
                return data;
            }
        } catch (err) {
            const message =
                err.response?.data?.message || 'Registration failed. Please try again.';
            setError(message);
            throw new Error(message);
        }
    }, []);

    const login = useCallback(async ({ email, password }) => {
        setError(null);
        try {
            const data = await loginUser({ email, password });
            if (data.success) {
                localStorage.setItem(TOKEN_KEY, data.token);
                setUser(data.user);
                return data;
            }
        } catch (err) {
            const message =
                err.response?.data?.message || 'Login failed. Please try again.';
            setError(message);
            throw new Error(message);
        }
    }, []);

    const updateProfile = useCallback(async (data) => {
        try {
            const response = await updateProfileApi(data);
            if (response.success) {
                setUser(response.user);
                return response.user;
            }
        } catch (err) {
            const message = err.response?.data?.message || 'Update failed.';
            setError(message);
            throw new Error(message);
        }
    }, []);

    const updateSkills = useCallback(async (data) => {
        try {
            const response = await updateSkillsApi(data);
            if (response.success) {
                setUser(response.user);
                return response.user;
            }
        } catch (err) {
            const message = err.response?.data?.message || 'Skills update failed.';
            setError(message);
            throw new Error(message);
        }
    }, []);

    const logout = useCallback(() => {
        localStorage.removeItem(TOKEN_KEY);
        setUser(null);
        setError(null);
    }, []);

    const clearError = useCallback(() => setError(null), []);

    const value = {
        user,
        loading,
        error,
        isAuthenticated: !!user,
        register,
        login,
        updateProfile,
        updateSkills,
        logout,
        clearError,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

/**
 * Custom hook to access auth state and actions
 * @returns {{ user, loading, error, isAuthenticated, register, login, logout, clearError }}
 */
export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
