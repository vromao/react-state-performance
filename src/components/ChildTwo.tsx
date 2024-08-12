import { useEffect, useRef, useState } from 'react';

function ChildTwo() {
  const [toggle, setToggle] = useState(false);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div className="child childTwo">
      <p>
        I'm the <b>ChildTwo</b> component
      </p>
      <p>My renders count: {renderCount.current || 1}</p>

      <button onClick={() => setToggle((prevState) => !prevState)}>
        I'm a local toggle state button - {`${toggle}`.toUpperCase()}
      </button>
    </div>
  );
}

export default ChildTwo;
