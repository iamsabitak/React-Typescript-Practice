import React from "react";
// import Stepper from "./components/Stepper";
import { MantineProvider } from "@mantine/core";
// import NameInput from "./components/NameInput";
// import Gallery from "./components/Gallery";
// import Stepperrr from "./components/Stepper";
import PostApi from "./components/PostApi";

const App: React.FC = () => {
  return (
    <MantineProvider>
      {/* <NameInput initialFirstName="John" initialLastName="Doe" />
      <Gallery /> */}
      <PostApi />
      {/* <Stepperrr /> */}
    </MantineProvider>
  );
};

export default App;
