import React from 'react';
import Counter from './components/Counter.js'; 
/*6- Testing: Render the Counter component in the main App component */
const App = () => {
  return (
    <div>
      <h1>React Counter App</h1>
      <Counter />
    </div>
  );
};

export default App;

