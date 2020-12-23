/**
 * Problems container fetches problems from backend
 * Passes problems as props to Problem groups
 */

// Components
import ProblemGroup from "../../components/ProblemGroup/ProblemGroup";
import AddProblem from "../../components/AddProblem/AddProblem";

// Styling
import { Box } from "@chakra-ui/react";

const dummy = [
  {
    name: "Two Sum",
    dates: [
      ["12/14/20", false],
      ["12/16/20", true],
    ],
    difficulty: "Easy",
    url: "https://leetcode.com/problems/two-sum/",
    id: 1,
  },
  {
    name: "Rotate Image",
    dates: [
      ["12/18/20", false],
      ["12/20/20", true],
    ],
    difficulty: "Medium",
    url: "https://leetcode.com/problems/rotate-image/",
    id: 48,
  },
];

const ProblemsContainer = () => (
  <Box mt={16} p={5}>
    {dummy.map((problem) => (
      <ProblemGroup key={problem.id} problem={problem} />
    ))}
    <AddProblem />
  </Box>
);

export default ProblemsContainer;
