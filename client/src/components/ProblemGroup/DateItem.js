import { Flex, Spacer, Box, Text } from "@chakra-ui/react";

const DateItem = ({ date, status }) => (
  <Flex direction="column" align="center" h={16} ml={2}>
    <Box
      flex="4"
      w={28}
      borderWidth="1px"
      borderRadius="sm"
      borderColor="green.200"
      pl={1}
    >
      <Text
        flex="4"
        color="green.200"
        fontFamily="main"
        fontSize="sm"
        align="left"
        fontWeight="bold"
      >
        {date}
      </Text>
    </Box>
    <Spacer />
    <Box flex="1" bg="green.200" w={28} borderRadius="sm"></Box>
  </Flex>
);

export default DateItem;
