import React from "react";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
// import NameInput from "./components/NameInput";
// import Gallery from "./components/Gallery";
// import Stepperrr from "./components/Stepper";
import PostApi from "./components/PostApi";
import Promises from "./components/Promises";
import Promisee from "./components/promisee";

const App: React.FC = () => {
  return (
    <MantineProvider defaultColorScheme="dark">
      {/* <NameInput initialFirstName="John" initialLastName="Doe" />
      <Gallery /> */}
      <PostApi />
      {/* <Stepperrr /> */}
      <Promises />
      <Promisee />
    </MantineProvider>
  );
};

export default App;
