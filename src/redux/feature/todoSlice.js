import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("todo")) ?? [];

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoData: initialState,
  },
  reducers: {
    addTodo: (state, action) => {
      if (state.todoData?.length) {
        const findDuplicateTitle = state.todoData.find(
          (items) => items.title === action.payload.title
        );
        if (!findDuplicateTitle) {
          state.todoData.push(action.payload);
          localStorage.setItem("todo", JSON.stringify(state.todoData));
        }
      } else {
        state.todoData.push(action.payload);
        localStorage.setItem("todo", JSON.stringify(state.todoData));
      }
    },
    deleteTodo: (state, action) => {
      //* this syntax convert proxy array into plain array
      const planTodoArray = JSON.parse(JSON.stringify(state.todoData));
      const filterTodo = planTodoArray.filter(
        (items) => items.id !== action.payload
      );
      state.todoData = filterTodo;
      localStorage.setItem("todo", JSON.stringify(filterTodo));
    },
    updateTodo: (state, action) => {
      const planTodoArray = JSON.parse(JSON.stringify(state.todoData));
      const updateTodo = planTodoArray.map((items) =>
        items.id === action.payload.id ? action.payload : items
      );
      state.todoData = updateTodo;
      localStorage.setItem("todo", JSON.stringify(updateTodo));
    },
    clearTodo: (state) => {
      state.todoData = [];
      localStorage.removeItem("todo");
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, clearTodo } = todoSlice.actions;
export default todoSlice.reducer;
