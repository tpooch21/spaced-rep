import { Flex, Spacer, Box, Text } from "@chakra-ui/react";
import {
  SmallCloseIcon,
  CheckCircleIcon,
  TimeIcon,
  WarningIcon,
} from "@chakra-ui/icons";

// add status for pending and due here too
const dateColors = {
  success: "green.200",
  failure: "red.300",
  pending: "orange.300",
  due: "teal.200",
};

const icons = {
  success: <CheckCircleIcon color="green.200" mt={1} />,
  failure: (
    <SmallCloseIcon bg="red.300" borderRadius="lg" mt={1} color="gray.600" />
  ),
  pending: (
    <TimeIcon bg="orange.300" borderRadius="lg" mt={1} color="gray.600" />
  ),
  due: <WarningIcon bg="teal.200" borderRadius="lg" mt={1} color="gray.600" />,
};

const DateItem = ({ date, status }) => (
  <Flex direction="column" align="center" h={16} ml={2}>
    <Box
      flex="5"
      w={28}
      borderWidth="1px"
      borderRadius="sm"
      borderColor={dateColors[status]}
      px={1}
      d="flex"
      align="flex-start"
    >
      <Text
        flex="4"
        color={dateColors[status]}
        fontFamily="main"
        fontSize="sm"
        align="left"
        fontWeight="bold"
      >
        {date}
      </Text>
      {icons[status]}
    </Box>
    <Spacer />
    <Box flex="2" bg={dateColors[status]} w={28} borderRadius="sm"></Box>
  </Flex>
);

export default DateItem;
