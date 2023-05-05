import React, { useState } from "react";
import {
  Box,
  Divider,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Progress,
  Stack,
  Tag,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { deleteTodo } from "../../redux/feature/todoSlice";
import { useDispatch } from "react-redux";
import TodoModal from "../../pages/todo/TodoModal";
import AlertDialogModal from "../uiElements/AlertDialogModal";

const TodoCard = ({ items }) => {
  const dispatch = useDispatch();
  const isAddUpdateTodoModalOpen = useDisclosure();
  const isAlertDialogOpen = useDisclosure();

  const [editData, setEditData] = useState();
  const [deleteID, setDeleteID] = useState();

  const status =
    items?.sliderValue <= 40
      ? "red"
      : items?.sliderValue >= 90
      ? "green"
      : "blue";

  const onOpenDeleteDialog = (id) => {
    setDeleteID(id);
    isAlertDialogOpen.onOpen();
  };

  const onDeleteTodo = () => {
    dispatch(deleteTodo(deleteID));
    isAlertDialogOpen.onClose();
  };

  const onEditTodo = (values) => {
    setEditData(values);
    isAddUpdateTodoModalOpen.onOpen();
  };

  return (
    <>
      <Box shadow="xl" rounded="lg">
        <Flex align="center" justifyContent="space-between" px="15px" py="6px">
          <Text fontSize="24px" fontWeight={500} textTransform="capitalize">
            {items?.title}
          </Text>
          <Menu>
            <MenuButton>
              <BsThreeDotsVertical />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => onEditTodo(items)}>Edit</MenuItem>
              <MenuItem onClick={() => onOpenDeleteDialog(items?.id)}>
                Delete
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Divider />
        <Stack p="15px" align="flex-start" spacing="15px">
          <Text fontSize="18px" fontWeight={300}>
            {items?.description}
          </Text>
          <Tag size="lg" variant="solid" colorScheme={status}>
            {items?.sliderValue <= 40
              ? "Incomplete"
              : items?.sliderValue >= 90
              ? "Complete"
              : "Pending"}
          </Tag>
          <Stack w="full" direction="row" align="center" spacing="20px">
            <Progress
              value={items?.sliderValue}
              width="full"
              rounded="full"
              hasStripe
              isAnimated
              colorScheme={status}
            />
            <Text>{items?.sliderValue + "%"}</Text>
          </Stack>
        </Stack>
      </Box>
      <TodoModal
        isOpen={isAddUpdateTodoModalOpen.isOpen}
        onClose={isAddUpdateTodoModalOpen.onClose}
        editData={editData}
      />
      <AlertDialogModal
        isOpen={isAlertDialogOpen.isOpen}
        onClose={isAlertDialogOpen.onClose}
        title="Delete Todo"
        description="Are you sure? You can't undo this action afterwards."
        onClick={onDeleteTodo}
      />
    </>
  );
};

export default TodoCard;
