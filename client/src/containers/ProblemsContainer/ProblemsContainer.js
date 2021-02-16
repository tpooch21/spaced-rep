// Libraries
import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import dateformat from "dateformat";

// Components + Styling
import ProblemGroup from "../../components/ProblemGroup/ProblemGroup";
import AddProblem from "../../components/AddProblem/AddProblem";
import { GET_PROBLEMS } from "../../queries/problem";
import { Box, Text } from "@chakra-ui/react";
import {
  SmallCloseIcon,
  CheckCircleIcon,
  TimeIcon,
  WarningIcon,
} from "@chakra-ui/icons";

const icons = {
  Success: <CheckCircleIcon color="green.200" mt={1} />,
  Failure: (
    <SmallCloseIcon bg="red.300" borderRadius="lg" mt={1} color="gray.600" />
  ),
  Pending: <TimeIcon bg="teal.200" borderRadius="lg" mt={1} color="gray.600" />,
  Due: (
    <WarningIcon bg="gray.600" borderRadius="lg" mt={1} color="orange.300" />
  ),
};

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
      <div style={{ display: "flex", marginBottom: "20px" }}>
        {Object.keys(icons).map((status) => (
          <div style={{ display: "flex", margin: "0 5px" }}>
            {icons[status]}
            <Text color="gray.200" ml={1}>
              {status}
            </Text>
          </div>
        ))}
      </div>
      {data.problems.map((problem) => (
        <ProblemGroup key={problem.leetcodeId} problem={problem} date={date} />
      ))}
      <AddProblem add={handleProblemSubmit} />
    </Box>
  );
};

export default ProblemsContainer;
