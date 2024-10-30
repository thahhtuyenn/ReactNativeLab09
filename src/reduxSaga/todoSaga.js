import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_TODOS, setTodos, ADD_TODO, UPDATE_TODO, UPDATE_COMPLETED, SET_TODOS } from './todoAction';

const API_URL = 'https://6457b5721a4c152cf98861de.mockapi.io/api/ck/todos';

function* fetchTodosSaga() {
  try {
    const response = yield call(axios.get, 'https://6457b5721a4c152cf98861de.mockapi.io/api/ck/todos');
    yield put(setTodos(response.data));
  } catch (error) {
    console.error(error);
  }
}

function* addTodoSaga(action) {
  const response = yield call(axios.post, API_URL, { name: action.payload });
  yield put({ type: ADD_TODO, payload: response.data });
}

function* updateTodoSaga(action) {
  const response = yield call(axios.put, `${API_URL}/${action.payload.id}`, { name: action.payload.updatedTodo });
  yield put({ type: UPDATE_TODO, payload: { id: response.data.id, updatedTodo: response.data.name } });
}

function* updateCompletedSaga(action) {
  const response = yield call(axios.put, `${API_URL}/${action.payload}`, { completed: true });
  yield put({ type: UPDATE_COMPLETED, payload: response.data.id });
}

export function* watchTodoSaga() {
  yield takeLatest(FETCH_TODOS, fetchTodosSaga);
}