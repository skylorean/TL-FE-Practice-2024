import { FC, useState } from 'react';

function fac(num: number) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }

  console.log(`%c Factorial fired`, 'background: blue; color: white');

  return fact;
}

// Best Practice
export const UseStateBest: FC = () => {
  const [counter, setCounter] = useState(() => fac(10));

  const incrementByAmount = (amount: number) => {
    setCounter((counter) => counter + amount);
    console.log(`%c Increment: counter = ${counter}`, 'background: green; color: white');
  };

  console.log(`%c Render!`, 'background: red; color: white');

  return (
    <div>
      <div style={{ fontSize: 64, marginBottom: 16 }}>{counter}</div>
      <button onClick={() => incrementByAmount(1)}>Click to increment</button>
      <button onClick={() => incrementByAmount(3)}>Click to increment multiple times</button>
    </div>
  );
};

export default UseStateBest;
