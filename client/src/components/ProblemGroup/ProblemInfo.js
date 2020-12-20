import { Box, Text, Badge } from "@chakra-ui/react";

const difficultyColors = {
  Easy: "green",
  Medium: "yellow",
  Hard: "red",
};

const ProblemInfo = ({ name, difficulty }) => (
  <Box w={48} h={16} p={2} borderRadius="sm" bg="gray.200">
    <Text fontFamily="main" fontWeight="bold">
      {name}
    </Text>
    <Badge colorScheme={`${difficultyColors[difficulty]}`}>{difficulty}</Badge>
  </Box>
);

export default ProblemInfo;
