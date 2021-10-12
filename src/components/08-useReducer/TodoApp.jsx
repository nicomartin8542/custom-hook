import React, {useReducer} from "react";
import {TodoReducer} from "./TodoReducer";
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

			<div className="d-flex flex-column flex-lg-row">
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
							{todos.map((todo, i) => (
								<tr key={todo.id}>
									<td>{i + 1}</td>
									<td>
										<p>{todo.desc}</p>
									</td>
									<td>{JSON.stringify(todo.done)}</td>
									<td>
										<button className="btn btn-danger">Eliminar</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<div className="col-lg-5 col-sm-12">
					<h4>Agregar Todo</h4>
					<hr />
					<form action="">
						<input
							type="text"
							name="description"
							placeholder="Aprender..."
							autoComplete="false"
							className="form-control"
						/>
						<div className="d-grid gap-2">
							<button
								className="btn btn-outline-primary btn-block mt-3 "
								type="submit"
							>
								Agregar
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default TodoApp;
