import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// styling
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import myTheme from "./customTheme/themeExtension";

// apollo
import { ApolloProvider } from "@apollo/client";
import client from "./apolloConfig";

const theme = extendTheme(myTheme);

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
