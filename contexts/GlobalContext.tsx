import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from 'react';

interface IGlobalContextProps {
  isLoading: boolean;
  setIsLoading: SetStateAction<boolean>;
  error: string | null;
  setError: SetStateAction<string | null>;
  user: object | null;
  setUser: SetStateAction<object | null>;
}

const defaultState = {
  isLoading: false,
  setIsLoading: () => false,
  error: null,
  setError: () => null,
  user: null,
  setUser: () => null,
};
const GlobalContext = createContext<IGlobalContextProps>(defaultState);

export const GlobalStateProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const context = {
    user,
    setUser,
    error,
    setError,
    isLoading,
    setIsLoading,
  };

  return (
    <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContext;
