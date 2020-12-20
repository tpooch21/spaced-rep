// Components
import ProblemInfo from "./ProblemInfo";

// Styles
import { Flex, Box, Text } from "@chakra-ui/react";

const ProblemGroup = ({ problem }) => {
  const { name, dates, difficulty } = problem;

  return (
    <Flex h={16} spacing={6} m={2} align="flex-start">
      <ProblemInfo name={name} difficulty={difficulty} />
      {dates.map(([date, status]) => {
        return (
          <Box
            h={10}
            w={24}
            ml={2}
            bg="green.200"
            key={date}
            align="center"
            borderRadius="sm"
          >
            <Text
              color="gray.600"
              fontFamily="main"
              fontSize="lg"
              lineHeight="taller"
            >
              {date}
            </Text>
          </Box>
        );
      })}
    </Flex>
  );
};

export default ProblemGroup;
