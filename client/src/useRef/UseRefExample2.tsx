import { useRef, useState } from 'react';

// Instead of useState
// UseRef as a storage
const UseRefExample2 = () => {
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
      <button onClick={handleRefClick}>Click me! USEREF</button>
      <button onClick={handleStateClick}>Click me! USESTATE</button>
    </>
  );
};

export default UseRefExample2;
