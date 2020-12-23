import {
  Box,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Flex,
  Spacer,
} from "@chakra-ui/react";

/**
 * Name
 * URL
 * Number (optional)
 * Difficulty (optional)
 */

const AddProblemForm = () => (
  <Box
    w={80}
    p={4}
    color="white"
    mt={4}
    bg="gray.300"
    rounded="sm"
    shadow="md"
    fontFamily="main"
    color="green.200"
  >
    <Input
      placeholder="*Name"
      size="sm"
      bg="gray.600"
      border="none"
      fontWeight="700"
    />
    <Input
      placeholder="*URL"
      size="sm"
      mt={3}
      bg="gray.600"
      border="none"
      fontWeight="700"
    />
    <Flex mt={3} spacing={3} align="center" justify="flex-start">
      <Input
        placeholder="ID"
        size="sm"
        bg="gray.600"
        border="none"
        width={14}
        mr={6}
        fontWeight="700"
      />
      <RadioGroup color="gray.600" fontWeight="500" fontSize="sm">
        <Stack direction="row">
          <Radio size="sm" value="easy" colorScheme="green">
            Easy
          </Radio>
          <Radio size="sm" value="medium" colorScheme="yellow">
            Medium
          </Radio>
          <Radio size="sm" value="hard" colorScheme="red">
            Hard
          </Radio>
        </Stack>
      </RadioGroup>
    </Flex>
  </Box>
);

export default AddProblemForm;
