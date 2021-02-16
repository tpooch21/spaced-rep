import { Flex, Spacer, Box, Text, IconButton } from "@chakra-ui/react";
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
  pending: "teal.200",
  due: "orange.300",
};

const icons = {
  success: <CheckCircleIcon color="green.200" mt={1} />,
  failure: (
    <SmallCloseIcon bg="red.300" borderRadius="lg" mt={1} color="gray.600" />
  ),
  pending: <TimeIcon bg="teal.200" borderRadius="lg" mt={1} color="gray.600" />,
  due: (
    <WarningIcon bg="gray.600" borderRadius="lg" mt={1} color="orange.300" />
  ),
};

const DateItem = ({ date, status }) => (
  <>
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
    {status === "due" && (
      <Flex ml={2} direction="column" alignItems="flex-start">
        <IconButton
          aria-label="indicate success"
          display="flex"
          justifyContent="center"
          alignItems="center"
          icon={
            <CheckCircleIcon
              bg="gray.200"
              borderColor="gray.200"
              borderWidth="1px"
              borderRadius="lg"
              color="gray.600"
              _hover={{ bg: "green.200", borderColor: "green.200" }}
            />
          }
          bg="transparent"
          minW={0}
          h={5}
          _hover={{ bg: "transparent" }}
        />
        <IconButton
          aria-label="indicate success"
          bg="transparent"
          display="flex"
          justifyContent="center"
          alignItems="center"
          minW={0}
          h={5}
          mt={1}
          icon={
            <SmallCloseIcon
              bg="gray.600"
              borderColor="gray.200"
              borderWidth="1px"
              borderRadius="lg"
              color="gray.300"
              _hover={{ color: "red.300", borderColor: "red.300" }}
            />
          }
          _hover={{ bg: "transparent" }}
        />
      </Flex>
    )}
  </>
);

export default DateItem;
