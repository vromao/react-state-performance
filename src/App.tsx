import { useState } from 'react';
import './App.css';
import ChildOne from './components/ChildOne';
import ChildTwo from './components/ChildTwo';

function App() {
  const [count, setCount] = useState(0);
  const firstRenredFixedCounter = 1;
  const counterPlusFirstRender = count + 1;

  return (
    <>
      <h1>React State and performance</h1>

      <button onClick={() => setCount((count) => count + 1)}>
        Parent renders: {counterPlusFirstRender || firstRenredFixedCounter}
      </button>

      <ChildOne />
      <ChildTwo />
    </>
  );
}

export default App;
