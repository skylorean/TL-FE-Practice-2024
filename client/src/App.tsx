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
import Counter from './customHook/Counter';

function App() {
  // === UseContext 3 ===
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const toggleLogin = () => {
  //   setIsLoggedIn((prevLogin) => !prevLogin);
  // };

  // === Custom Hooks with unmount useEffect ===
  const [showTimer, setShowTimer] = useState(false);

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

        {/* === UseContext 1 ===  */}
        {/* <Navigation /> */}
        {/* === UseContext 2 ===  */}
        {/* <NavigationFixed /> */}

        {/* === useReducer === */}
        {/* <UseReducerExample /> */}

        {/* === Custom Hooks with unmount useEffect === */}
        {showTimer && <Counter />}
        <button onClick={() => setShowTimer((s) => !s)}>Toggle Timer</button>
      </main>

      {/* === UseContext 3 ===  */}
      {/* <UserContext.Provider value={{ isLoggedIn, toggleLogin }}>
        <main>
          <NavigationFixedBest />
        </main>
      </UserContext.Provider> */}
    </>
  );
}

export default App;
