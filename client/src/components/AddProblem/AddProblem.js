// Styling
import { useDisclosure, Button, Collapse, Box } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const AddProblem = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Button
        onClick={onToggle}
        w={48}
        p={6}
        fontSize="sm"
        fontFamily="main"
        borderRadius="sm"
        variant="ghost"
        color="gray.200"
        _hover={{ bg: "gray.500", color: "green.200" }}
        leftIcon={
          <AddIcon
            borderRadius="50%"
            border="1px"
            borderRadius="50%"
            p={2}
            w={8}
            h={8}
            color="inherit"
          />
        }
      >
        Add a New Problem
      </Button>
      <Collapse in={isOpen} animateOpacity>
        {/* Throw form in here in place of box */}
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="sm"
          shadow="md"
        ></Box>
      </Collapse>
    </>
  );
};

export default AddProblem;
