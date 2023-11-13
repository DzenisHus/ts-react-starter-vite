import { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React App</h1>
      <p>
        <button type="button" onClick={() => setCount((c) => c + 1)}>
          Clicked
          {count}
          times
        </button>
      </p>
    </>
  );
};

export default App;
