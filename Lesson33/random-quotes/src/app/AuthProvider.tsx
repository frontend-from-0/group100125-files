'use client';
import { createContext, useContext, useState } from 'react';
import { createUserWithEmailAndPassword, User } from 'firebase/auth';
import { auth } from '@/lib/firebase';

type AuthContextType = {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  register: (username: string, password: string) => Promise<void>;
  error: AuthError | null;
};

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthError {
  code: string;
  message: string;
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<AuthError| null>(null);

  const register = async (username: string, password: string) => {
    createUserWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        setError(null);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        setError({ code: errorCode, message: errorMessage });
      });
  };

  const login = async (username: string, password: string) => {
    // Implement your login logic here
  };

  const logout = () => {
    // Implement your logout logic here
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, error }}>
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