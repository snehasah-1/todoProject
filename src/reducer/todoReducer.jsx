import { ADD_TODO, COMPLETE_TODO } from "../action/action.types";

const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case COMPLETE_TODO:
      console.log(action.payload);
      const { id, todoStatus } = action.payload;
      const updatedTodos = state.map((todo) =>
        todo.id === id ? { ...todo, todoStatus } : todo
      );
      return updatedTodos;
    default:
      return state;
  }
};

export default todoReducer;
