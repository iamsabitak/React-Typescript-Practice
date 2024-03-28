import React from "react";
// import Stepper from "./components/Stepper";
import { MantineProvider } from "@mantine/core";
// import NameInput from "./components/NameInput";
// import Gallery from "./components/Gallery";
import Stepperrr from "./components/Stepper";

const App: React.FC = () => {
  return (
    <MantineProvider>
      {/* <NameInput initialFirstName="John" initialLastName="Doe" />
      <Gallery /> */}
      <Stepperrr />
    </MantineProvider>
  );
};

export default App;
