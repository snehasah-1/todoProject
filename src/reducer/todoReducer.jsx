import { ADD_TODO, COMPLETE_TODO, REMOVE_TODO, EDIT_TODO } from "../action/action.types";

const savedData = JSON.parse(localStorage.getItem("todos"));
const initialState = Array.isArray(savedData) ? savedData : [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case COMPLETE_TODO:
      const { id, todoStatus } = action.payload;
      const updatedTodos = state.map((todo) =>
        todo.id === id ? { ...todo, todoStatus } : todo
      );
      return updatedTodos;

    case REMOVE_TODO:
      const removeTodos = state.filter((todo) => todo.id !== action.payload);
      return removeTodos;
    
    case EDIT_TODO:
      const editedTodos = state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
      );
      return editedTodos;

    default:
      return state;
  }
};

export default todoReducer;
