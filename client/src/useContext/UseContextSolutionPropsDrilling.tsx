import { FC, useState } from 'react';

export const NavigationFixed: FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn((prevLogin) => !prevLogin);
  };

  return (
    <div style={{ backgroundColor: 'lightblue', padding: 10, width: 700 }}>
      <NavigationMenu isLogged={isLoggedIn} toggleLogin={toggleLogin} />
      <GuestButton isLogged={isLoggedIn} />
    </div>
  );
};

interface NavigationMenuProps {
  isLogged: boolean;
  toggleLogin: () => void;
}
export const NavigationMenu = ({ isLogged, toggleLogin }: NavigationMenuProps) => {
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
      <AuthorizationButton isLogged={isLogged} toggleLogin={toggleLogin} />
      <div>Other menu btn #1</div>
      <div>Other menu btn #2</div>
    </div>
  );
};

interface AuthorizationButtonProps {
  isLogged: boolean;
  toggleLogin: () => void;
}
export const AuthorizationButton = ({ isLogged, toggleLogin }: AuthorizationButtonProps) => {
  return (
    <button onClick={toggleLogin} style={{ backgroundColor: 'blue', color: 'white', padding: 10 }}>
      {isLogged ? 'Выйти' : 'Войти'}
    </button>
  );
};

interface GuestButtonProps {
  isLogged: boolean;
}
export const GuestButton = ({ isLogged }: GuestButtonProps) => {
  return (
    <button style={{ backgroundColor: 'pink', color: 'white', padding: 10 }}>
      {isLogged ? 'Ваш профиль' : 'Войдите чтобы увидеть'}
    </button>
  );
};
