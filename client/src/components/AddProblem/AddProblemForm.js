import {
  Box,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  useToast,
  Badge,
} from "@chakra-ui/react";

// Misc
import { useForm } from "react-hook-form";
import { isHttpUri, isHttpsUri } from "valid-url";

// GraphQL
import { useMutation, gql } from "@apollo/client";
import { ADD_PROBLEM, GET_PROBLEMS } from "../../queries/problem";
/**
 * Name
 * URL
 * Number (optional)
 * Difficulty (optional)
 */

// CURRENT USER SHOULD BE KNOWN BY THIS FORM

const AddProblemForm = ({ add }) => {
  const [addProblem, { data, error, loading }] = useMutation(ADD_PROBLEM, {
    update(cache, { data: { addProblem } }) {
      cache.modify({
        fields: {
          problems(existingProblems = []) {
            const newProblemRef = cache.writeFragment({
              data: addProblem,
              fragment: gql`
                fragment NewProblem on Problem {
                  id
                  name
                  url
                  difficulty
                  leetcodeId
                  attemptDates {
                    dateFormatted
                    status
                    createdAt
                  }
                }
              `,
            });
            return [...existingProblems, newProblemRef];
          },
        },
      });
    },
  });
  const toast = useToast();
  const { handleSubmit, register, errors, reset } = useForm();

  const onSubmit = (data) => {
    const { name, url, leetcodeId, difficulty, status } = data;
    const userId = 1;

    addProblem({
      variables: { name, url, leetcodeId, difficulty, status, userId },
    })
      .then((res) => {
        toast({
          title: "Success",
          description: "Problem added successfully",
          status: "success",
          duration: 4000,
          isClosable: true,
          bg: "green.200",
        });
      })
      .catch((err) => {
        toast({
          title: "Error",
          description: "Failed to add problem",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      });
    reset();
  };

  const validateURL = (value) => {
    if (isHttpsUri(value) || isHttpUri(value)) {
      return true;
    }
    return "URL is invalid";
  };

  if (loading) return <p>Loading...</p>;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        w={96}
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
        <Flex
          mt={3}
          spacing={3}
          align="center"
          justify="flex-start"
          w={96}
          pl={4}
        >
          <FormControl width={14}>
            <Input
              name="leetcodeId"
              placeholder="ID"
              size="sm"
              bg="gray.600"
              border="none"
              fontWeight="700"
              ref={register}
            />
          </FormControl>
          <FormControl>
            <RadioGroup color="gray.600" fontWeight="500" fontSize="sm" ml={4}>
              <Stack direction="row">
                <Badge colorScheme="green">
                  <Radio
                    name="difficulty"
                    size="sm"
                    value="Easy"
                    colorScheme="green"
                    ref={register}
                  >
                    Easy
                  </Radio>
                </Badge>
                <Badge colorScheme="yellow">
                  <Radio
                    name="difficulty"
                    size="sm"
                    value="Medium"
                    colorScheme="yellow"
                    ref={register}
                  >
                    Medium
                  </Radio>
                </Badge>
                <Badge colorScheme="red">
                  <Radio
                    name="difficulty"
                    size="sm"
                    value="Hard"
                    colorScheme="red"
                    ref={register}
                  >
                    Hard
                  </Radio>
                </Badge>
              </Stack>
            </RadioGroup>
          </FormControl>
        </Flex>
        <FormControl my={3}>
          <FormLabel color="gray.600" fontWeight="600" fontSize="sm">
            Result of First Attempt
          </FormLabel>
          <RadioGroup color="gray.600" fontWeight="500" fontSize="sm" pr={2}>
            <Stack direction="row">
              <Badge colorScheme="green">
                <Radio
                  name="status"
                  size="sm"
                  value="success"
                  colorScheme="green"
                  ref={register}
                >
                  Success
                </Radio>
              </Badge>
              <Badge colorScheme="red">
                <Radio
                  name="status"
                  size="sm"
                  value="failure"
                  colorScheme="red"
                  ref={register}
                >
                  Failure
                </Radio>
              </Badge>
            </Stack>
          </RadioGroup>
        </FormControl>
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
        w={96}
        h={7}
        mt={0}
        borderRadius="sm"
        bg={errors.name || errors.url ? "red.300" : "green.200"}
      ></Box>
    </form>
  );
};

export default AddProblemForm;
