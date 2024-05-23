import { useState } from 'react';

function fac(num: number) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }

  return fact;
}

export const UseStatePrevValue = () => {
  const [counter, setCounter] = useState(() => fac(0));

  const increment = () => {
    setCounter(counter + 1);
    console.log('increment: value after increment:', counter);
  };

  const incrementMultipleTimes = (times: number) => {
    for (let index = 0; index < times; index++) {
      increment();
    }
  };

  console.log(`%c UseStateBaseExample: render`, 'background: red; color: white');

  return (
    <div>
      <div style={{ fontSize: 64, marginBottom: 16 }}>{counter}</div>
      <button onClick={increment}>Click to increment</button>
      <button onClick={() => incrementMultipleTimes(3)}>Click to increment multiple times</button>
    </div>
  );
};

export default UseStatePrevValue;
