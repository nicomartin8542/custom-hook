import React, { useReducer } from "react";
import { TodoReducer } from "./TodoReducer";
/* import { PRUEBA_ACCION } from "./types"; */
import "./todoApp.css";

const initialState = [
  {
    id: new Date().getTime(),
    desc: "Aprender React",
    done: false,
  },
];

const TodoApp = () => {
  const [todos] = useReducer(TodoReducer, initialState);

  console.log(todos);

  return (
    <div>
      <h1>Todo App ({todos.length})</h1>
      <hr />

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
          {todos.map((todo, i) => (
            <tr key={todo.id}>
              <td>{i + 1}</td>
              <td>{todo.desc}</td>
              <td>{JSON.stringify(todo.done)}</td>
              <td>
                <button className="btn btn-danger">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoApp;
