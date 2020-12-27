/**
 * Problems container fetches problems from backend
 * Passes problems as props to Problem groups
 */

// React
import { useEffect, useState } from "react";

// Components
import ProblemGroup from "../../components/ProblemGroup/ProblemGroup";
import AddProblem from "../../components/AddProblem/AddProblem";

// Styling
import { Box } from "@chakra-ui/react";

// Misc
import axios from "axios";

const url = "http://localhost:3001";

const ProblemsContainer = () => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => setProblems(res.data));
  }, []);

  const handleProblemSubmit = (data) => {
    setProblems(data);
  };

  console.log(problems);
  return (
    <Box mt={16} p={5}>
      {problems.map((problem) => (
        <ProblemGroup key={problem.id} problem={problem} />
      ))}
      <AddProblem add={handleProblemSubmit} />
    </Box>
  );
};

export default ProblemsContainer;
