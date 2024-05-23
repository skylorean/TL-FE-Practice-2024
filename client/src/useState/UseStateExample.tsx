import { FC, useState } from 'react';

function fac(num: number) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }

  return fact;
}

function getInitialStateValue() {
  console.log('getInitialStateValue: in');

  return fac(5);
}

// Lazy initialization
export const UseStateExample1: FC = () => {
  const [counter, setCounter] = useState(() => getInitialStateValue());

  const increment = () => {
    setCounter(counter + 1);
    console.log('increment: value after increment:', counter);
  };

  console.log('UseStateExample rendered', counter);

  return (
    <div>
      <div style={{ fontSize: 64, marginBottom: 16 }}>{counter}</div>
      <button onClick={increment}>Click to increment</button>
    </div>
  );
};

// Previous state
export const UseStateExample2: FC = () => {
  const [counter, setCounter] = useState(() => getInitialStateValue());

  const increment = () => {
    setCounter(counter + 1);
    // setCounter((counter) => counter + 1);
    console.log('increment: value after increment:', counter);
  };

  const incrementMultipleTimes = (times: number) => {
    for (let index = 0; index < times; index++) {
      increment();
      console.log('increment in loop: value after increment:', counter);
    }
  };

  console.log('UseStateExample rendered', counter);

  return (
    <div>
      <div style={{ fontSize: 64, marginBottom: 16 }}>{counter}</div>
      <button onClick={increment}>Click to increment</button>
      <button onClick={() => incrementMultipleTimes(3)}>Click to increment multiple times</button>
    </div>
  );
};

// Best Practice
export const UseStateExample3: FC = () => {
  const [counter, setCounter] = useState(() => getInitialStateValue());

  const incrementByAmount = (amount: number) => {
    setCounter((counter) => counter + amount);
    console.log('increment: value after increment:', counter);
  };

  console.log('UseStateExample rendered', counter);

  return (
    <div>
      <div style={{ fontSize: 64, marginBottom: 16 }}>{counter}</div>
      <button onClick={() => incrementByAmount(1)}>Click to increment</button>
      <button onClick={() => incrementByAmount(3)}>Click to increment multiple times</button>
    </div>
  );
};
