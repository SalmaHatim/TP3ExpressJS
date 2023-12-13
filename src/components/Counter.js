import React, { useState } from 'react';

const Counter = () => {
  // 1. Initialize State
  const [count, setCount] = useState(0);

  // 4. Implement Functionality
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    // 5. Ensure Non-Negative Value
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };

  // Bonus: Reset Button
  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      {/* 2. Display Value */}
      <p>Count: {count}</p>

      {/* 3. Increment and Decrement Buttons */}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      {/* Bonus: Reset Button */}
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
