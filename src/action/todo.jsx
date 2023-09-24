import { ADD_TODO, COMPLETE_TODO } from "./action.types";

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const markComplete = (id,todoStatus) => ({
  type: COMPLETE_TODO,
  payload: {id,todoStatus},
});
