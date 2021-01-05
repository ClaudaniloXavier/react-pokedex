import React from 'react';

import Login from './pages/Login';
import GlobalStyle from './styles/global';

import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <Login />
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;
