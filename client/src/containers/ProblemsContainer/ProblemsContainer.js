/**
 * Problems container fetches problems from backend
 * Passes problems as props to Problem groups
 */

// Components
import ProblemGroup from "../../components/ProblemGroup/ProblemGroup";

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
  },
  {
    name: "Rotate Image",
    dates: [
      ["12/18/20", false],
      ["12/20/20", true],
    ],
    difficulty: "Medium",
    url: "https://leetcode.com/problems/rotate-image/",
  },
];

const ProblemsContainer = () => (
  <Box mt={16} p={5} borderWidth="1px" borderRadius="2px">
    {dummy.map((problem) => (
      <ProblemGroup problem={problem} />
    ))}
  </Box>
);

export default ProblemsContainer;
