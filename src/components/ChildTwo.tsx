function ChildTwo() {
  let renderCount = 1;

  return (
    <div className="child childTwo">
      <p>I'm the ChildTwo component</p>
      <p>My renders count: {renderCount++}</p>
    </div>
  );
}

export default ChildTwo;
