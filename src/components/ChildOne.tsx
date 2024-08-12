let renderCount = 0;

function ChildOne() {
  console.info('renderizou');

  return (
    <div className="child childOne">
      <p>I'm the ChildOne component</p>
      <p>My renders count: {renderCount++}</p>
    </div>
  );
}

export default ChildOne;
