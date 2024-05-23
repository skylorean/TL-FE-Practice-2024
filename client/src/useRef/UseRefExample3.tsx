import { useRef, useState } from 'react';

// Simple example: rerender counter
const UseRefExample3 = () => {
  const [count, setCount] = useState(0);
  const [toggled, setToggled] = useState(false);
  const rerenderCounterRef = useRef(0);

  rerenderCounterRef.current += 1;
  console.log(
    `%c UseRefExample3: Rerender. rerenderCounterRef: ${rerenderCounterRef.current}`,
    'background: red; color: white'
  );

  return (
    <>
      <div style={{ position: 'absolute', top: 0, left: 0, padding: 10, backgroundColor: 'blue', color: 'white' }}>
        Ref Counter: {rerenderCounterRef.current}
      </div>

      <div style={{ backgroundColor: 'rgba(100, 100, 100, 0.5)', padding: 10 }}>
        <div>First State - Counter: {count}</div>
        <button onClick={() => setCount((s) => s + 1)}>Increment by state update = rerender</button>
      </div>
      <div style={{ backgroundColor: 'rgba(200, 150, 100, 0.5)', padding: 10 }}>
        <div>Second State - Toggler: {toggled ? 'on' : 'off'}</div>
        <button onClick={() => setToggled((t) => !t)}>Increment by state update = rerender</button>
      </div>
    </>
  );
};

export default UseRefExample3;
