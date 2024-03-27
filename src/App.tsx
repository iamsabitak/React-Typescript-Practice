import React from "react";
import NameInput from "./components/NameInput";

const App: React.FC = () => {
  return (
    <div>
      <NameInput initialFirstName="John" initialLastName="Doe" />
    </div>
  );
};

export default App;
