import React from "react";
import { Box, Text, useDisclosure } from "@chakra-ui/react";
import { NavListStyled } from "../style";
import Buttons from "../uiElements/Button";
import { AiOutlinePlus } from "react-icons/ai";
import TodoModal from "../../pages/todo/TodoModal";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onOpenTodoModal = () => {
    onOpen();
  };

  return (
    <>
      <Box
        h="80px"
        w="full"
        shadow="lg"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px="50px"
      >
        <Text fontSize="30px" fontWeight={600} cursor="pointer">
          React Crud
        </Text>
        <NavListStyled>
          <li>home</li>
          <li>todo</li>
          <Buttons
            title="Add New"
            rightIcon={<AiOutlinePlus />}
            onClick={onOpenTodoModal}
          />
        </NavListStyled>
      </Box>
      <TodoModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Navbar;
