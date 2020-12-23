import { Flex, Spacer, Text } from "@chakra-ui/react";

const Toolbar = () => (
  <Flex
    bg="blackTransp"
    pos="fixed"
    top="0"
    left="0"
    w="full"
    h={14}
    pl={5}
    borderBottom="1px"
    borderBottomColor="green.200"
  >
    <Text fontFamily="logo" fontSize="3xl" color="white">
      Spaced Repetition
    </Text>
  </Flex>
);

export default Toolbar;
