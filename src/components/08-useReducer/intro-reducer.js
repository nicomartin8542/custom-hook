//Agrego los types para disparar el dispach del reducer
const types = {AGREGAR_TODO: "AGREGAR_TODO"};
//State inicial
const initialState = [{id: 1, todo: "Comprar pan", done: false}];

//Reducer
const todoReducer = (state = initialState, action) => {
	switch (action?.type) {
		case "AGREGAR_TODO":
			return [...state, action.payload];

		default:
			return state;
	}
};

//Recupero el state actual del reducer
let todos = todoReducer();
console.log(todos);

//Creo un nuevo objeto para cargarle a mi state
const newTodo = {id: 2, todo: "Comprar leche", done: false};
//Dispach para disparar una accion en el reducer
const dispach = {
	type: types.AGREGAR_TODO,
	payload: newTodo,
};

//Envio state actual y dispach para disparar la accion AGREGAR_TODO
todos = todoReducer(todos, dispach);

console.log(todos);
