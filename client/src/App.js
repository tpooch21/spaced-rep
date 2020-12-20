// components
import ProblemsContainer from "./containers/ProblemsContainer/ProblemsContainer";
import Toolbar from "./components/Navigation/Toolbar";

// Styling
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box minH="100vh" bg="gray.600" p={5}>
      <Toolbar />
      <main>
        <ProblemsContainer />
      </main>
    </Box>
  );
}

export default App;
