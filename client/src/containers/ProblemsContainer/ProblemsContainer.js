// Libraries
import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import dateformat from "dateformat";

// Components
import ProblemGroup from "../../components/ProblemGroup/ProblemGroup";
import AddProblem from "../../components/AddProblem/AddProblem";
import { GET_PROBLEMS } from "../../queries/problem";

// Styling
import { Box } from "@chakra-ui/react";

const ProblemsContainer = ({ userId }) => {
  const { loading, error, data } = useQuery(GET_PROBLEMS, {
    variables: { userId },
  });
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(handleDateCheck, 5000);
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR</p>;

  function handleDateCheck() {
    const now = new Date();
    if (now.getDate() !== date.getDate()) {
      setDate(now);
    }
  }

  const handleProblemSubmit = (data) => {};

  return (
    <Box mt={16} p={5}>
      {data.problems.map((problem) => (
        <ProblemGroup key={problem.leetcodeId} problem={problem} date={date} />
      ))}
      <AddProblem add={handleProblemSubmit} />
    </Box>
  );
};

export default ProblemsContainer;
