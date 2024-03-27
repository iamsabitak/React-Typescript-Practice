import React from "react";
import NameInput from "./components/NameInput";
import Gallery from "./components/Gallery";

const App: React.FC = () => {
  return (
    <div>
      <NameInput initialFirstName="John" initialLastName="Doe" />
      <Gallery />
    </div>
  );
};

export default App;
