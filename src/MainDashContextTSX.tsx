import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

type State = Record<string, any>;

interface MainDashContextType {
  state: State;
  createState: (key: string, initialState: any) => State;
  updateState: (key: string, newValue: any) => void;
  getState: (key: string) => any;
}

const MainDashContext = createContext<MainDashContextType>({
  state: {},
  createState: () => ({}),
  updateState: () => {},
  getState: () => {},
});

interface ProviderProps {
  children: React.ReactNode;
}

export const ProviderTSX: React.FC<ProviderProps> = ({ children }) => {
  const [state, setState] = useState<State>({});

  const createState = useCallback((key: string, initialState: any) => {
    if (!(key in state)) {
      const newState = {
        ...state,
        [key]: initialState,
      };
      setState(newState);
      return newState;
    }
    return state;
  }, [state]);

  const updateState = useCallback((key: string, newValue: any) => {
    setState((prevState) => ({
      ...prevState,
      [key]: newValue,
    }));
  }, []);

  const getState = useCallback((key: string) => state[key], [state]);

  return (
    <MainDashContext.Provider value={{ state, createState, updateState, getState }}>
      {children}
    </MainDashContext.Provider>
  );
};

export const useMainDashContextTSX = () => {
  const context = useContext(MainDashContext);
  if (!context) {
    throw new Error('useMainDashContext must be used within a MainDashProvider');
  }
  return context;
};

export const NewStateTSX = (key: string, initialState: any) => {
  const { createState, getState, updateState } = useMainDashContextTSX();
  
  useEffect(() => {
    createState(key, initialState);
  }, [key, initialState, createState]);

  const stateValue = getState(key);
  const setStateValue = (newValue: any) => updateState(key, newValue);

  return [stateValue, setStateValue] as const;
};
