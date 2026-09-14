import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole } from '../types/index.js';
import { api } from '../services/api.js';

interface AuthContextType {
  user: User | null;
  role: UserRole;
  isLoggedIn: boolean;
  activeView: 'public' | 'portal';
  setActiveView: (view: 'public' | 'portal') => void;
  isLoginModalOpen: boolean;
  setIsLoginModalOpen: (open: boolean) => void;
  login: (email: string, password: string) => Promise<void>;
  quickSwitchRole: (role: 'admin' | 'designer' | 'client') => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [activeView, setActiveView] = useState<'public' | 'portal'>('public');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Initialize with public state, or restore stored role
  useEffect(() => {
    const stored = localStorage.getItem('delpapa_active_role');
    if (stored && ['admin', 'designer', 'client'].includes(stored)) {
      api.switchRole(stored as any)
        .then(res => {
          setUser(res.user);
          setActiveView('portal');
        })
        .catch(() => {
          // Stay public if error
        });
    }
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const res = await api.login(email, password);
      setUser(res.user);
      localStorage.setItem('delpapa_active_role', res.user.role);
      setActiveView('portal');
      setIsLoginModalOpen(false);
    } finally {
      setIsLoading(false);
    }
  };

  const quickSwitchRole = async (targetRole: 'admin' | 'designer' | 'client') => {
    setIsLoading(true);
    try {
      const res = await api.switchRole(targetRole);
      setUser(res.user);
      localStorage.setItem('delpapa_active_role', targetRole);
      setActiveView('portal');
    } catch (err) {
      console.error('Quick switch error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('delpapa_active_role');
    setActiveView('public');
  };

  const role: UserRole = user ? user.role : 'public';

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        isLoggedIn: Boolean(user),
        activeView,
        setActiveView,
        isLoginModalOpen,
        setIsLoginModalOpen,
        login,
        quickSwitchRole,
        logout,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
