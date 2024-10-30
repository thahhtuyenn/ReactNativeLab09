import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_TODOS, setTodos } from './todoAction';

function* fetchTodosSaga() {
  try {
    const response = yield call(axios.get, 'https://6457b5721a4c152cf98861de.mockapi.io/api/ck/todos');
    yield put(setTodos(response.data));
  } catch (error) {
    console.error(error);
  }
}

export function* watchTodoSaga() {
  yield takeLatest(FETCH_TODOS, fetchTodosSaga);
}