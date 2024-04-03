import React from "react";

const Child: React.FC = () => {
  const Greet = () => {
    console.log("Hello");
  };
  Greet();
  return <div>Child</div>;
};

export default Child;
