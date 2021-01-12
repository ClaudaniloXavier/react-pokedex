import React, { createContext, useCallback, useContext, useState } from 'react';

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
  logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be user within an AuthProvider');
  }

  return context;
}

const AuthProvider: React.FC = ({ children }) => {
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
      throw new Error('Invalid trainer');
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('@pokedex:token');
    localStorage.removeItem('@pokedex:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ trainer: data.user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
