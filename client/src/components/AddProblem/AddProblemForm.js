import {
  Box,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Flex,
  FormControl,
  FormErrorMessage,
  Button,
  useToast,
} from "@chakra-ui/react";

// Misc
import { useForm } from "react-hook-form";
import { isHttpUri, isHttpsUri } from "valid-url";

// GraphQL
import { useMutation } from "@apollo/client";
import { ADD_PROBLEM } from "../../queries/problem";
/**
 * Name
 * URL
 * Number (optional)
 * Difficulty (optional)
 */

const AddProblemForm = ({ add }) => {
  const [addProblem, { data }] = useMutation(ADD_PROBLEM);

  const toast = useToast();
  const { handleSubmit, register, errors, reset } = useForm();
  const onSubmit = (data) => {
    const { name, url, leetcodeId, difficulty } = data;
    const userId = 1;

    addProblem({ variables: { name, url, leetcodeId, difficulty, userId } });

    toast({
      title: "Success",
      description: "Problem added successfully",
      status: "success",
      duration: 4000,
      isClosable: true,
      bg: "green.200",
    });

    reset();
  };

  const validateURL = (value) => {
    if (isHttpsUri(value) || isHttpUri(value)) {
      return true;
    }
    return "URL is invalid";
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        w={80}
        p={4}
        mt={4}
        mb={3}
        bg="gray.300"
        rounded="sm"
        fontFamily="main"
        color="green.200"
        direction="column"
        align="center"
      >
        <FormControl isInvalid={errors.name}>
          <Input
            name="name"
            placeholder="*Name"
            size="sm"
            bg="gray.600"
            fontWeight="700"
            ref={register({ required: "Name is required" })}
            data-testid="name"
          />
          <FormErrorMessage fontSize="xs" mt={1} data-testid="name-msg">
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.url}>
          <Input
            name="url"
            placeholder="*URL"
            size="sm"
            mt={3}
            bg="gray.600"
            border="none"
            fontWeight="700"
            ref={register({
              required: "URL is required",
              validate: validateURL,
            })}
            data-testid="url"
          />
          <FormErrorMessage fontSize="xs" mt={1} data-testid="url-msg">
            {errors.url && errors.url.message}
          </FormErrorMessage>
        </FormControl>
        <Flex mt={3} spacing={3} align="center" justify="space-between" w={72}>
          <FormControl>
            <Input
              name="leetcodeId"
              placeholder="ID"
              size="sm"
              bg="gray.600"
              border="none"
              width={14}
              fontWeight="700"
              ref={register}
            />
          </FormControl>
          <FormControl>
            <RadioGroup color="gray.600" fontWeight="500" fontSize="sm" pr={2}>
              <Stack direction="row">
                <Radio
                  name="difficulty"
                  size="sm"
                  value="Easy"
                  colorScheme="green"
                  ref={register}
                >
                  Easy
                </Radio>
                <Radio
                  name="difficulty"
                  size="sm"
                  value="Medium"
                  colorScheme="yellow"
                  ref={register}
                >
                  Medium
                </Radio>
                <Radio
                  name="difficulty"
                  size="sm"
                  value="Hard"
                  colorScheme="red"
                  ref={register}
                >
                  Hard
                </Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
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
      <Box
        w={80}
        h={7}
        mt={0}
        borderRadius="sm"
        bg={errors.name || errors.url ? "red.300" : "green.200"}
      ></Box>
    </form>
  );
};

export default AddProblemForm;
