import { Flex, Spacer, Box, Text } from "@chakra-ui/react";
import { SmallCloseIcon, CheckCircleIcon } from "@chakra-ui/icons";

// add status for pending and due here too
const dateColors = {
  true: "green.200",
  false: "red.300",
};

const icons = {
  true: <CheckCircleIcon color="green.200" mt={1} />,
  false: (
    <SmallCloseIcon bg="red.300" borderRadius="lg" mt={1} color="gray.600" />
  ),
};

const DateItem = ({ date, solved }) => (
  <Flex direction="column" align="center" h={16} ml={2}>
    <Box
      flex="5"
      w={28}
      borderWidth="1px"
      borderRadius="sm"
      borderColor={dateColors[solved]}
      px={1}
      d="flex"
      align="flex-start"
    >
      <Text
        flex="4"
        color={dateColors[solved]}
        fontFamily="main"
        fontSize="sm"
        align="left"
        fontWeight="bold"
      >
        {date}
      </Text>
      {icons[solved]}
    </Box>
    <Spacer />
    <Box flex="2" bg={dateColors[solved]} w={28} borderRadius="sm"></Box>
  </Flex>
);

export default DateItem;
