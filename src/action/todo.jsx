import { ADD_TODO, COMPLETE_TODO , REMOVE_TODO, EDIT_TODO, UPDATE_TODO} from "./action.types";

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const markComplete = (id,todoStatus) => ({
  type: COMPLETE_TODO,
  payload: {id,todoStatus},
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});

export const editTodo = (editedTodo) => ({
  type: EDIT_TODO,
  payload: editedTodo,
});