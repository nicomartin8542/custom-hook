import React, { useContext } from "react";
import TodoContext from "./todoContext/TodoContext";

const TodoListItem = ({ todo, i }) => {
  const todoContext = useContext(TodoContext);
  const { marcarTodo, eliminarTodo } = todoContext;

  return (
    <tr>
      <td>{i + 1}</td>
      <td>
        <p
          onClick={() => marcarTodo(todo)}
          className={`${todo.done && "complete"}`}
        >
          {todo.desc}
        </p>
      </td>
      <td>{todo.done ? "Completada" : "Incompleta"}</td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => eliminarTodo(todo.id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default TodoListItem;
