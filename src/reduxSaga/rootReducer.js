import { combineReducers } from 'redux';
import todoReducer from './todoReducer'; // Path to your individual reducer

const rootReducer = combineReducers({
  todos: todoReducer, // Key will be 'todos' in your state
  // You can add more reducers here
});

export default rootReducer;