import React, { useState } from "react";
import Child from "./Child";

const Parent: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    console.log("object1");
  };

  const decrement = () => {
    setCount(count - 1);
    console.log("object2");
  };

  return (
    <div>
      Parent
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
        <p>Count: {count}</p>
      </div>
      <Child />
    </div>
  );
};

export default Parent;
