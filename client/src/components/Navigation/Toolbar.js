import { Flex, Text } from "@chakra-ui/react";

const Toolbar = () => (
  <Flex
    bg="green.200"
    pos="fixed"
    top="0"
    left="0"
    w="full"
    h={14}
    pl={5}
    borderBottom="1px"
    borderBottomColor="green.200"
  >
    <Text fontFamily="logo" fontSize="3xl" color="gray.600">
      Spaced Repetition
    </Text>
  </Flex>
);

export default Toolbar;
