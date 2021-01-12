import React, { createContext, useCallback, useContext, useState } from 'react';

import Loading from '../components/Loading';

interface LoadingContextData {
  toggleLoading(): void;
}

const LoadingContext = createContext<LoadingContextData>(
  {} as LoadingContextData,
);

const LoadingProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const toggleLoading = useCallback(() => {
    console.log('show loading');
    // setLoading(!loading);
  }, []);

  return (
    <LoadingContext.Provider value={{ toggleLoading }}>
      {children}
      <Loading />
    </LoadingContext.Provider>
  );
};

function useLoading(): LoadingContextData {
  const context = useContext(LoadingContext);

  if (!context) {
    throw new Error('useLoading must be used within an AuthProvider');
  }

  return context;
}

export { LoadingProvider, useLoading };
