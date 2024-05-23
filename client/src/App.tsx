import './App.css';
import { UseStateExample1, UseStateExample2, UseStateExample3 } from './useState/UseStateExample';
import { UseRefExample1, UseRefExample2, UseRefExample3 } from './useRef/UseRefExample1';
import { Navigation } from './useContext/UseContextProblem';
import { NavigationFixed } from './useContext/UseContextSolutionPropsDrilling';
import { UserContext } from './useContext/UserContext';
import { useState } from 'react';
import UseReducerExample from './useReducer/UseReducerExample';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleLogin = () => {
    setIsLoggedIn((prevLogin) => !prevLogin);
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, toggleLogin }}>
      <main>
        {/* === UseState === */}
        {/* <UseStateExample1 /> */}
        {/* <UseStateExample2 /> */}
        {/* <UseStateExample3 /> */}

        {/* === UseRef === */}
        {/* <UseRefExample1 /> */}
        {/* <UseRefExample2 /> */}
        {/* <UseRefExample3 /> */}

        {/* === UseContext === */}
        {/* <Navigation /> */}
        {/* <NavigationFixed /> */}

        {/* === useReducer === */}
        <UseReducerExample />
      </main>
    </UserContext.Provider>
  );
}

export default App;
