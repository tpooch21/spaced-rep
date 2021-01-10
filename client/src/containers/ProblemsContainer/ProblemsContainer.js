// Components
import ProblemGroup from "../../components/ProblemGroup/ProblemGroup";
import AddProblem from "../../components/AddProblem/AddProblem";

// Styling
import { Box } from "@chakra-ui/react";

// GraphQL
import { useQuery } from "@apollo/client";
import { GET_USER_INFO } from "../../queries/user";
import { GET_PROBLEMS } from "../../queries/problem";

const ProblemsContainer = ({ userId }) => {
  const { loading, error, data } = useQuery(GET_PROBLEMS, {
    variables: { userId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR</p>;

  const handleProblemSubmit = (data) => {};

  return (
    <Box mt={16} p={5}>
      {data.problems.map((problem) => (
        <ProblemGroup key={problem.leetcodeId} problem={problem} />
      ))}
      <AddProblem add={handleProblemSubmit} />
    </Box>
  );
};

export default ProblemsContainer;
