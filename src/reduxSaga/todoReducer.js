import {ADD_TODO, SET_TODOS, UPDATE_COMPLETED, UPDATE_TODO} from "./todoAction"
const initialState = {
    todos: [],
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_TODOS:
        return { ...state, todos: action.payload };
      case ADD_TODO:
        return {...state, todos:[...state.todos, action.payload]}
      case UPDATE_TODO:
          return { ...state, 
            todos: state.todos.map(td => 
              td.id === action.payload.id ? {...td, name: action.payload.updateTodo} : todo
              ) };
      case UPDATE_COMPLETED:
        return {
          ...state,
          todos: state.todos.map(todo =>
            todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
          ),
        };
      default:
        return state;
    }
  };
  
  export default todoReducer;