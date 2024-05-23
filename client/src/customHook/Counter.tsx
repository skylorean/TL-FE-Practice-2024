import useCounter from './useCounter';

function Counter() {
  const count = useCounter();
  return <h1>Seconds passed: {count}</h1>;
}

export default Counter;
