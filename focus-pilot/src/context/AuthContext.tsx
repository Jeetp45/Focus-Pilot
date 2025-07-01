import { createContext } from 'react';

import type { AuthContextType } from '../types';

const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  login: () => {},
  logout: () => {},
});

export default AuthContext;
