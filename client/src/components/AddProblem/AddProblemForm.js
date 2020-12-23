import {
  Box,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Flex,
  Spacer,
  FormControl,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
/**
 * Name
 * URL
 * Number (optional)
 * Difficulty (optional)
 */

const AddProblemForm = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (data) => {
    debugger;
    const { problemName, problemURL } = data;
    console.log(problemName, problemURL);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        w={80}
        p={4}
        color="white"
        mt={4}
        bg="gray.300"
        rounded="sm"
        shadow="md"
        fontFamily="main"
        color="green.200"
        direction="column"
        align="center"
      >
        <FormControl isInvalid={errors.problemName}>
          <Input
            name="problemName"
            placeholder="*Name"
            size="sm"
            bg="gray.600"
            border="none"
            fontWeight="700"
            ref={register({ required: true })}
          />
          <FormErrorMessage>Name is required</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.problemURL}>
          <Input
            name="problemURL"
            placeholder="*URL"
            size="sm"
            mt={3}
            bg="gray.600"
            border="none"
            fontWeight="700"
            ref={register({ required: true })}
          />
          <FormErrorMessage>URL is required</FormErrorMessage>
        </FormControl>
        <Flex mt={3} spacing={3} align="center" justify="space-between" w={72}>
          <Input
            placeholder="ID"
            size="sm"
            bg="gray.600"
            border="none"
            width={14}
            fontWeight="700"
          />
          <RadioGroup color="gray.600" fontWeight="500" fontSize="sm" pr={2}>
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
        <Button
          type="submit"
          mt={3}
          p={2}
          bg="green.200"
          color="gray.600"
          w={36}
        >
          Submit
        </Button>
      </Flex>
    </form>
  );
};

export default AddProblemForm;
