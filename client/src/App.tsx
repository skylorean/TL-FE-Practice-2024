import './App.css';

import { useState } from 'react';

import UseStateBaseExample from './useState/UseStateBaseExample';
import { UserContext } from './useContext/UserContext';
import UseStateLazyInit from './useState/UseStateLazyInit';
import { Navigation } from './useContext/UseContextProblem';
import { NavigationFixed } from './useContext/UseContextSolutionPropsDrilling';
import UseStatePrevValue from './useState/UseStatePrevValue';
import UseStateBest from './useState/UseStateBest';
import UseRefExample1 from './useRef/UseRefExample1';
import UseRefExample2 from './useRef/UseRefExample2';
import UseRefExample3 from './useRef/UseRefExample3';
import { NavigationFixedBest } from './useContext/UseContextBestSolution';
import UseReducerExample from './useReducer/UseReducerExample';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleLogin = () => {
    setIsLoggedIn((prevLogin) => !prevLogin);
  };

  return (
    <>
      <main>
        {/* === UseState === */}
        {/* <UseStateBaseExample /> */}
        {/* <UseStateLazyInit /> */}
        {/* <UseStatePrevValue /> */}
        {/* <UseStateBest /> */}

        {/* === UseRef === */}
        {/* <UseRefExample1 /> */}
        {/* <UseRefExample2 /> */}
        {/* <UseRefExample3 /> */}

        {/* === UseContext ===  */}
        {/* <Navigation /> */}
        {/* <NavigationFixed /> */}

        {/* === useReducer === */}
        {/* <UseReducerExample /> */}
      </main>

      {/* === UseContext ===  */}
      {/* <UserContext.Provider value={{ isLoggedIn, toggleLogin }}>
        <main>
          <NavigationFixedBest />
        </main>
      </UserContext.Provider> */}
    </>
  );
}

export default App;
