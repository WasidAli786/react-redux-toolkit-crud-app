import React, { useState } from "react";
import { Center, SimpleGrid, Text, useDisclosure } from "@chakra-ui/react";
import TodoCard from "../../components/pages/TodoCard";
import { useDispatch, useSelector } from "react-redux";
import Buttons from "../../components/uiElements/Button";
import { clearTodo } from "../../redux/feature/todoSlice";
import TodoModal from "./TodoModal";

const TodoMain = () => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [editData, setEditData] = useState();

  const { todoData } = useSelector((state) => state.todo);

  const onClearAllTodo = () => {
    dispatch(clearTodo());
  };
  return (
    <>
      <div className="container">
        <SimpleGrid columns={[1, 2, null, 3]} spacing={10}>
          {todoData?.length ? (
            todoData?.map((items, index) => (
              <TodoCard
                key={index}
                items={items}
                onOpen={onOpen}
                setEditData={setEditData}
              />
            ))
          ) : (
            <Text>No data found</Text>
          )}
        </SimpleGrid>
        {todoData?.length > 0 && (
          <Center mt="50px">
            <Buttons title="Clear All" onClick={onClearAllTodo} />
          </Center>
        )}
      </div>
      <TodoModal isOpen={isOpen} onClose={onClose} editData={editData} />
    </>
  );
};

export default TodoMain;
