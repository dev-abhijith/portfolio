import "./components/Banner.js";
import Banner from "./components/Banner";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import About from "./components/About.js";
import Skills from "./components/Skills.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <React.StrictMode>
      <ChakraProvider>
        <Banner />
        <About />
        <Skills />
        <Footer />
      </ChakraProvider>
    </React.StrictMode>
  );
}

export default App;
