import { AGREGAR_TODO, BORRAR_TODO, MARCAR_TODO } from "../types";

export const TodoReducer = (state = [], action) => {
  switch (action.type) {
    case MARCAR_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );

    case BORRAR_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    case AGREGAR_TODO:
      return [...state, action.payload];

    default:
      return state;
  }
};
