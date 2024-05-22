import { useEffect, useRef, useState } from 'react';

// DOM elements access
export const UseRefExample1 = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    inputRef.current?.focus();
  }

  console.log(`%c UseRefExample1: render`, 'background: red; color: white');
  console.log(inputRef.current);

  // After mount
  //   useEffect(() => {
  //     console.log(`%c useEffect:`, 'background: blue; color: white');
  //     console.log(inputRef.current);
  //   }, []);

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
};

// Instead of useState
export const UseRefExample2 = () => {
  const ref = useRef(0);
  const [count, setCount] = useState(0);

  function handleRefClick() {
    ref.current = ref.current + 1;
    console.log('%c REF: You clicked ' + ref.current + ' times!', 'background: blue; color: white');
  }
  function handleStateClick() {
    setCount((count) => count + 1);
    console.log('%c STATE: You clicked ' + count + ' times!', 'background: violet; color: white');
  }

  console.log('%c UseRefExample2: Rerender', 'background: red; color: white');

  return (
    <>
      <button onClick={handleRefClick}>Click me!</button>
      <button onClick={handleStateClick}>Click me!</button>
    </>
  );
};

// Simple example: rerender counter
export const UseRefExample3 = () => {
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
