import axios from 'axios';

const API_URL = 'https://6457b5721a4c152cf98861de.mockapi.io/api/ck/todos';

export const fetchTodosApi = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addTodoApi = async (todo) => {
  const response = await axios.post(API_URL, todo);
  return response.data;
};

export const deleteTodoApi = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};