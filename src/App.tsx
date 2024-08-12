import { useState } from 'react';
import './App.css';
import ChildOne from './components/ChildOne';
import ChildTwo from './components/ChildTwo';

function App() {
  const [count, setCount] = useState(1);

  return (
    <>
      <h1>React State and performance</h1>

      <button onClick={() => setCount((count) => count + 1)}>
        Parent renders: {count}
      </button>

      <ChildOne />
      <ChildTwo />
    </>
  );
}

export default App;
