import React, { memo } from "react";

const Child: React.FC = () => {
  const Greet = () => {
    console.log("Hello");
  };
  Greet();
  return <div>Child</div>;
};

export default memo(Child); //stop the unnecessary re render when the parent component is updated
