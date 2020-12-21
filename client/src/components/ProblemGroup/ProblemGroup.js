// Components
import ProblemInfo from "./ProblemInfo";
import DateItem from "./DateItem";

// Styles
import { Flex } from "@chakra-ui/react";

const ProblemGroup = ({ problem }) => {
  const { name, dates, difficulty, url, id } = problem;

  return (
    <Flex h={16} spacing={6} mb={5} align="flex-start">
      <ProblemInfo name={name} difficulty={difficulty} url={url} id={id} />
      {dates.map(([date, status]) => (
        <DateItem date={date} status={status} />
      ))}
    </Flex>
  );
};

export default ProblemGroup;
