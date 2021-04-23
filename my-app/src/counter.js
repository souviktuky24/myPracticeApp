import React from 'react';

function Counter() {
  const [count, setCount] = React.useState(0)

  function addOne(value, updateValue) {
    updateValue(value + 1);
    updateValue(value + 1);
    updateValue(value + 1);
  }

  return (
    <div>
      <h1>Count: {count}</h1> {/* 1 (as we expect) */}

      <button onClick={() => addOne(count, setCount)}>+ 1</button>
    </div>
  );
}

export default Counter;