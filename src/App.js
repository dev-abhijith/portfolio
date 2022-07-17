import "./components/Banner/Banner.js";
import Banner from "./components/Banner/Banner";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Banner />
    </ChakraProvider>
  );
}

export default App;
