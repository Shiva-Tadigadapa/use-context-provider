import React, { createContext, useContext, useState, useCallback } from 'react';

const MainDashContext = createContext();

export const Provider = ({ children }) => {
  const [state, setState] = useState({});

  const createState = useCallback((key, initialState) => {
    if (!(key in state)) {
      setState((prevState) => ({
        ...prevState,
        [key]: initialState,
      }));
    }
  }, [state]);

  const updateState = useCallback((key, newValue) => {
    setState((prevState) => ({
      ...prevState,
      [key]: newValue,
    }));
  }, []);

  const getState = useCallback((key) => state[key], [state]);

  return (
    <MainDashContext.Provider value={{ state, createState, updateState, getState }}>
      {children}
    </MainDashContext.Provider>
  );
};

export const GetStates = () => {
  const context = useContext(MainDashContext);
  if (!context) {
    throw new Error('useMainDashContext must be used within a MainDashProvider');
  }
  return context;
};

// Custom hook for creating new state
export const NewState = (key, initialState) => {
  const { createState, getState, updateState } = GetStates();
  
  React.useEffect(() => {
    createState(key, initialState);
  }, [key, initialState, createState]);

  const stateValue = getState(key);
  const setStateValue = (newValue) => updateState(key, newValue);

  return [stateValue, setStateValue];
};
  