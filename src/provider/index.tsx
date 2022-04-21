import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "../styles";

interface GlobalProviderProps {
  children: ReactNode;
}

const GlobalProvider = ({ children }: GlobalProviderProps) => {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>;
    </BrowserRouter>
  );
};

export default GlobalProvider;
