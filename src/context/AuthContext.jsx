import P from 'prop-types';
import { createContext, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children, value }) {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthValue() {
  return useContext(AuthContext);
}

AuthProvider.propTypes = {
  children: P.node.isRequired,
  value: P.any,
};
