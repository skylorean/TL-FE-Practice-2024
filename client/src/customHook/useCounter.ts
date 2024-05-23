import { useEffect, useState } from 'react';

function useCounter(intervalTime: number = 1000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      console.log(`%c Time is ticking!`, 'background: red; color: white');

      setCount((c) => c + 1);
    }, intervalTime);

    return () => {
      console.log(`%c Unmount callback!`, 'background: green; color: white');

      clearInterval(timerId);
    };
  }, []);
  return count;
}

export default useCounter;
