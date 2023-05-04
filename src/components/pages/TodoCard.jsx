import React from "react";
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
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { deleteTodo } from "../../redux/feature/todoSlice";
import { useDispatch } from "react-redux";

const TodoCard = ({ items, onOpen, setEditData }) => {
  const dispatch = useDispatch();

  const status =
    items?.sliderValue <= 40
      ? "red"
      : items?.sliderValue >= 90
      ? "green"
      : "blue";

  const onDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const onEditTodo = (values) => {
    setEditData(values);
    onOpen();
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
              <MenuItem onClick={() => onDeleteTodo(items?.id)}>
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
    </>
  );
};

export default TodoCard;
