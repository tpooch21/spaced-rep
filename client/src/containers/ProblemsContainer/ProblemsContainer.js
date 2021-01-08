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

// GraphQL
import { useQuery, gql } from "@apollo/client";
import { GET_USER_INFO } from "../../queries";

const ProblemsContainer = ({ userId }) => {
  const { loading, error, data } = useQuery(GET_USER_INFO, {
    variables: { userId },
  });

  if (loading) return <p>Loading...</p>;
  console.log(data.user.problems);

  const handleProblemSubmit = (data) => {};

  return (
    <Box mt={16} p={5}>
      {data.user.problems.map((problem) => (
        <ProblemGroup key={problem.leetcodeId} problem={problem} />
      ))}
      <AddProblem add={handleProblemSubmit} />
    </Box>
  );
};

export default ProblemsContainer;
