import { Flex, Box } from "@chakra-ui/react";

const ProblemGroup = ({ problem }) => {
  const { name, dates } = problem;
  const datesFormatted = Object.keys(dates).map((date) => ({
    [date]: dates[date],
  }));

  return (
    <Flex h={12} spacing={6} m={2} align="center">
      {datesFormatted.map(({ date }) => {
        return (
          <Box h={10} w={24} m={2} bg="green.200">
            {date}
          </Box>
        );
      })}
    </Flex>
  );
};

export default ProblemGroup;
