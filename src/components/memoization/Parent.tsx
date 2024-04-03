import React from "react";
import Child from "./Child";

const Parent: React.FC = () => {
  return (
    <div>
      Parent
      <Child />
    </div>
  );
};

export default Parent;
