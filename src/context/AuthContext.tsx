import React, { createContext, useCallback } from 'react';

interface LoginCredentials {
  trainer: string;
  password: string;
}

interface AuthContextData {
  trainer: string;
  login(credentials: LoginCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const login = useCallback(async ({ trainer, password }) => {
    if (trainer === 'frauzera' && password === 'teste123') {
      const response = {
        data: {
          user: {
            id: 1,
            trainer: 'Frauzera',
          },
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidHJhaW5lciI6IkZyYXV6ZXJhIn0.iSf407k430qvty2FlPwgNupyCGwnqlFVZ__9GhOJnP8',
        },
      };
      console.log(response);
    } else {
      console.log('Invalid trainer');
    }
  }, []);

  return (
    <AuthContext.Provider value={{ trainer: 'Frauzera', login }}>
      {children}
    </AuthContext.Provider>
  );
};
