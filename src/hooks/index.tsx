import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import { LoadingProvider } from './loading';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>{children}</ToastProvider>
    <LoadingProvider />
  </AuthProvider>
);

export default AppProvider;
