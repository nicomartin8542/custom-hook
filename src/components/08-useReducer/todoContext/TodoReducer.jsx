import {
  AGREGAR_STORAGE,
  AGREGAR_TODO,
  BORRAR_TODO,
  GUARDAR_STORAGE,
  MARCAR_TODO,
} from "../types";

export const TodoReducer = (state = [], action) => {
  switch (action.type) {
    case MARCAR_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };

    case BORRAR_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case AGREGAR_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case AGREGAR_STORAGE:
      return {
        ...state,
        todosStorage: JSON.parse(localStorage.getItem("todos")),
        todos: JSON.parse(localStorage.getItem("todos")),
      };

    case GUARDAR_STORAGE:
      localStorage.setItem("todos", JSON.stringify(state.todos));
      return {
        ...state,
      };

    default:
      return state;
  }
};
