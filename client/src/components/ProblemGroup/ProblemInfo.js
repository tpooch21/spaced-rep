import { Link, Box, Text, Badge } from "@chakra-ui/react";

const difficultyColors = {
  Easy: "green",
  Medium: "yellow",
  Hard: "red",
};

const ProblemInfo = ({ name, difficulty, url, id }) => (
  <Link href={url} isExternal>
    <Box w={56} h={16} p={2} borderRadius="sm" bg="gray.300">
      <Text fontFamily="main" fontWeight="bold" isTruncated>
        {name}
      </Text>
      <Text color="gray.700" as="span" fontSize="sm" fontWeight="normal">
        {id} &bull;
      </Text>
      <Badge ml={2} colorScheme={`${difficultyColors[difficulty]}`}>
        {difficulty}
      </Badge>
    </Box>
  </Link>
);

export default ProblemInfo;
