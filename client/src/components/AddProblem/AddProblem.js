// Components
import AddProblemForm from "./AddProblemForm";

// Styling
import { useDisclosure, Button, Collapse } from "@chakra-ui/react";
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
            border="1px"
            borderRadius="md"
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
        <AddProblemForm />
      </Collapse>
    </>
  );
};

export default AddProblem;
