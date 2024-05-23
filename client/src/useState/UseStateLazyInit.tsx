import { FC, useState } from 'react';

function fac(num: number) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }

  console.log(`%c Factorial fired`, 'background: blue; color: white');

  return fact;
}

// Lazy initialization
const UseStateLazyInit: FC = () => {
  const [counter, setCounter] = useState(() => fac(10));

  const increment = () => {
    setCounter(counter + 1);
    console.log(`%c Increment: counter = ${counter}`, 'background: green; color: white');
  };

  console.log(`%c Render!`, 'background: red; color: white');

  return (
    <div>
      <div style={{ fontSize: 64, marginBottom: 16 }}>{counter}</div>
      <button onClick={increment}>Click to increment</button>
    </div>
  );
};

export default UseStateLazyInit;
