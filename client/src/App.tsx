import './App.css';
import { UseStateExample1, UseStateExample2, UseStateExample3 } from './UseStateExample';
import { UseRefExample1, UseRefExample2, UseRefExample3 } from './UseRefExample';
import { Navigation } from './useContext/UseContextProblem';
import { NavigationFixed } from './useContext/UseContextSolutionPropsDrilling';
import { UserContext } from './useContext/UserContext';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleLogin = () => {
    setIsLoggedIn((prevLogin) => !prevLogin);
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, toggleLogin }}>
      <main>
        {/* === UseState=== */}
        {/* <UseStateExample1 /> */}
        {/* <UseStateExample2 /> */}
        {/* <UseStateExample3 /> */}

        {/* === UseRef=== */}
        {/* <UseRefExample1 /> */}
        {/* <UseRefExample2 /> */}
        {/* <UseRefExample3 /> */}

        {/* === UseContext === */}
        {/* <Navigation /> */}
        <NavigationFixed />
      </main>
    </UserContext.Provider>
  );
}

export default App;
