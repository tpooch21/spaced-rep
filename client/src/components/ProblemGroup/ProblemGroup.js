import { Flex, Box, Text } from "@chakra-ui/react";

const ProblemGroup = ({ problem }) => {
  const { name, dates } = problem;

  return (
    <Flex h={12} spacing={6} m={2} align="center">
      {dates.map(([date, status]) => {
        console.log(typeof date, date);
        return (
          <Box h={10} w={24} m={2} bg="green.200" key={date} align="center">
            <Text color="gray.600" fontSize="lg" lineHeight="taller">
              {date}
            </Text>
          </Box>
        );
      })}
    </Flex>
  );
};

export default ProblemGroup;
