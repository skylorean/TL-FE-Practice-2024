import { FC, useContext } from 'react';
import { UserContext } from './UserContext';

export const NavigationFixedBest: FC = () => {
  return (
    <div style={{ backgroundColor: 'lightblue', padding: 10, width: 700 }}>
      <NavigationMenu />
      <GuestButton />
    </div>
  );
};

export const NavigationMenu = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'coral',
        padding: 10,
        marginBottom: 10
      }}
    >
      <AuthorizationButton />
      <div>Other menu btn #1</div>
      <div>Other menu btn #2</div>
    </div>
  );
};

export const AuthorizationButton = () => {
  const { isLoggedIn: isLogged, toggleLogin } = useContext(UserContext);

  return (
    <button onClick={toggleLogin} style={{ backgroundColor: 'blue', color: 'white', padding: 10 }}>
      {isLogged ? 'Выйти' : 'Войти'}
    </button>
  );
};

export const GuestButton = () => {
  const { isLoggedIn: isLogged } = useContext(UserContext);

  return (
    <button style={{ backgroundColor: 'pink', color: 'white', padding: 10 }}>
      {isLogged ? 'Ваш профиль' : 'Войдите чтобы увидеть'}
    </button>
  );
};
