import { useState } from 'react';
import stylesGLobal from './styles/global.module.scss';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={stylesGLobal.wrapper}>
      <h1 className={stylesGLobal.title}>React App</h1>
      <p>
        <button type="button" onClick={() => setCount((c) => c + 1)}>
          Clicked
          {count}
          times
        </button>
      </p>
    </div>
  );
};

export default App;
