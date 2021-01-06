import React, { createContext, useCallback, useState } from 'react';

interface LoginCredentials {
  trainer: string;
  password: string;
}

interface AuthState {
  token: string;
  user: object;
}

interface AuthContextData {
  trainer: object;
  login(credentials: LoginCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@pokedex:token');
    const user = localStorage.getItem('@pokedex:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }
    return {} as AuthState;
  });

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

      const { token, user } = response.data;

      localStorage.setItem('@pokedex:token', token);
      localStorage.setItem('@pokedex:user', JSON.stringify(user));

      setData({ token, user });
    } else {
      console.log('Invalid trainer');
    }
  }, []);

  return (
    <AuthContext.Provider value={{ trainer: data.user, login }}>
      {children}
    </AuthContext.Provider>
  );
};
