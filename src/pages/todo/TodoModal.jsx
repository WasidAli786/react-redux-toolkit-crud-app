import React, { useState, useEffect } from "react";
import { Flex, Stack } from "@chakra-ui/react";
import ChakraModal from "../../components/uiElements/ChakraModal";
import { useForm } from "react-hook-form";
import TextField from "../../components/uiElements/TextField";
import TextArea from "../../components/uiElements/TextArea";
import ChakraSlider from "../../components/uiElements/ChakraSlider";
import Buttons from "../../components/uiElements/Button";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../../redux/feature/todoSlice";

const TodoModal = ({ isOpen, onClose, editData }) => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();
  const dispatch = useDispatch();
  const [sliderValue, setSliderValue] = useState(100);

  useEffect(() => {
    if (editData) {
      reset({
        title: editData?.title,
        description: editData?.description,
      });
    }
  }, [editData]);

  const onAddAndUpdateTodo = (values) => {
    const data = {
      ...values,
      id: Math.random(),
      sliderValue,
    };
    if (editData) {
      dispatch(
        updateTodo({
          ...values,
          id: editData?.id,
          sliderValue,
        })
      );
      onClose();
    } else {
      dispatch(addTodo(data));
      onClose();
    }
  };
  return (
    <>
      <ChakraModal isOpen={isOpen} onClose={onClose} modalTitle="Add Todo">
        <form onSubmit={handleSubmit(onAddAndUpdateTodo)}>
          <Stack spacing="15px" pb="10px">
            <TextField
              name="title"
              label="Enter title"
              placeText="Enter title"
              register={register}
              errors={errors}
            />
            <TextArea
              name="description"
              label="Enter description"
              placeText="Enter description"
              register={register}
              errors={errors}
            />
            <ChakraSlider
              sliderValue={sliderValue}
              setSliderValue={setSliderValue}
            />
            <Flex justify="flex-end" gap="10px">
              <Buttons title="Cancel" variant="ghost" onClick={onClose} />
              <Buttons title="Add Todo" type="submit" />
            </Flex>
          </Stack>
        </form>
      </ChakraModal>
    </>
  );
};

export default TodoModal;
