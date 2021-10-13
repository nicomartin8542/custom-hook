import React, { useContext } from "react";
import TodoContext from "./todoContext/TodoContext";

const TodoList = () => {
  //Importo context en el compnonente
  const todoContext = useContext(TodoContext);
  const { todos, eliminarTodo, marcarTodo } = todoContext;

  return (
    <div className="col-lg-7 col-sm-12 me-lg-3">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Desc</th>
            <th>Done</th>
            <th>Accion</th>
          </tr>
        </thead>

        <tbody>
          {todos?.map((todo, i) => (
            <tr key={todo.id}>
              <td>{i + 1}</td>
              <td>
                <p
                  onClick={() => marcarTodo(todo)}
                  className={todo.done ? "complete" : ""}
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
