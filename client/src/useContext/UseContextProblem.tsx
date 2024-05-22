import { FC, useState } from 'react';

export const Navigation: FC = () => {
  return (
    <div style={{ backgroundColor: 'lightblue', padding: 10, width: 700 }}>
      <NavigationMenu />
      {/* We wanna add GuestProfile button */}
    </div>
  );
};

export const NavigationMenu: FC = () => {
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

export const AuthorizationButton: FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn((prevLogin) => !prevLogin);
  };

  return (
    <button onClick={toggleLogin} style={{ backgroundColor: 'blue', color: 'white', padding: 10 }}>
      {isLoggedIn ? 'Войти' : 'Выйти'}
    </button>
  );
};
