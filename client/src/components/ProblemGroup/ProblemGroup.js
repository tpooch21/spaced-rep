// Components
import ProblemInfo from "./ProblemInfo";
import DateItem from "./DateItem";

// Styles
import { Flex } from "@chakra-ui/react";

const ProblemGroup = ({ problem }) => {
  const { name, attemptDates, difficulty, url, leetcodeId } = problem;

  return (
    <Flex h={16} spacing={6} mb={5} align="flex-start">
      <ProblemInfo
        name={name}
        difficulty={difficulty}
        url={url}
        id={leetcodeId}
      />
      {attemptDates.map(({ dateFormatted, status }) => (
        <DateItem key={dateFormatted} date={dateFormatted} status={status} />
      ))}
    </Flex>
  );
};

export default ProblemGroup;
