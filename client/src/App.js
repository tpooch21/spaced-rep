// components
import ProblemsContainer from "./containers/ProblemsContainer/ProblemsContainer";
import Toolbar from "./components/Navigation/Toolbar";

// Styling
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box minH="100vh" bg="gray.600" p={5}>
      <Toolbar />
      <Box as="main" mt={16} p={5} borderWidth="1px" borderRadius="2px">
        <ProblemsContainer />
      </Box>
    </Box>
  );
}

export default App;
