// components
import ProblemsContainer from "./containers/ProblemsContainer/ProblemsContainer";

// Styling
import { Box } from "@chakra-ui/react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Box
        as="main"
        m={5}
        p={5}
        bg="cyan.50"
        borderWidth="1px"
        borderRadius="2px"
      >
        <ProblemsContainer />
      </Box>
    </div>
  );
}

export default App;
