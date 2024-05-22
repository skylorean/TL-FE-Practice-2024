import { createContext } from 'react';

interface IUserContext {
  isLoggedIn: boolean;
  toggleLogin: () => void;
}

const initialUserContextValue: IUserContext = { isLoggedIn: false, toggleLogin: () => {} };

export const UserContext = createContext<IUserContext>(initialUserContextValue);
