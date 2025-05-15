import React, { createContext, useState, useContext, useEffect } from 'react';

type User = {
  id: string;
  name: string;
  email: string;
  preferences: string[];
};

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Check if user is in localStorage (simulating persistent auth)
    const storedUser = localStorage.getItem('streamUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Mock authentication - in a real app this would call an API
    // For demo purposes, we'll accept any non-empty email/password
    if (email && password) {
      const mockUser = {
        id: '1',
        name: email.split('@')[0],
        email,
        preferences: ['action', 'drama', 'sci-fi'],
      };
      
      setUser(mockUser);
      setIsAuthenticated(true);
      localStorage.setItem('streamUser', JSON.stringify(mockUser));
      return Promise.resolve();
    }
    return Promise.reject('Invalid credentials');
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('streamUser');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;