import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_TODOS, setTodos } from './todoAction';

function* fetchTodosSaga() {
  try {
    const response = yield call(axios.get, 'https://66f38c9f71c84d8058790dec.mockapi.io/crudapi');
    yield put(setTodos(response.data));
  } catch (error) {
    console.error(error);
  }
}

export function* watchTodoSaga() {
  yield takeLatest(FETCH_TODOS, fetchTodosSaga);
}