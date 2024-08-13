import { useEffect, useRef } from 'react';

const UseRefExample1 = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    inputRef.current?.focus();
  }

  console.log(`%c UseRefExample1: render`, 'background: red; color: white');
  console.log(inputRef.current);

  // Access to ref only after mounting
  useEffect(() => {
    console.log(`%c useEffect:`, 'background: blue; color: white');
    console.log(inputRef.current);
  }, []);

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
};

export default UseRefExample1;
