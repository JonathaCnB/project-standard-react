import P from 'prop-types';
import { createContext } from 'react';

export const SomeContext = createContext();

export const HookUseContext = ({ children }) => {
  const contextValue = 'testing contexts';

  return (
    <SomeContext.Provider value={{ contextValue }}>
      {children}
    </SomeContext.Provider>
  );
};

HookUseContext.propTypes = { children: P.node };
