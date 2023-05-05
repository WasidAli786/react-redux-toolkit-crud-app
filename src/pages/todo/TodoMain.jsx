import React from "react";
import { Center, SimpleGrid, Text } from "@chakra-ui/react";
import TodoCard from "../../components/pages/TodoCard";
import { useDispatch, useSelector } from "react-redux";
import Buttons from "../../components/uiElements/Button";
import { clearTodo } from "../../redux/feature/todoSlice";
import { motion } from "framer-motion";

const TodoMain = () => {
  const dispatch = useDispatch();

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
              <motion.div
                key={index}
                viewport={{ once: true }}
                initial={{ opacity: 0, scale: 0, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  type: "spring",
                  duration: 0.15,
                  delay: index * 0.15,
                }}
              >
                <TodoCard items={items} />
              </motion.div>
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
    </>
  );
};

export default TodoMain;
