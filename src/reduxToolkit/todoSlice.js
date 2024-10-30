import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchTodos = createAsyncThunk('fetchTodos', async () => {
    try {
        const response = await axios.get('https://6457b5721a4c152cf98861de.mockapi.io/api/ck/todos')
        console.log(response.data)
        return response.data;

    } catch (error) {
        console.log(error)
    }
})

const todoSlice = createSlice({
  name: "todos",
  initialState: {value: []},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
        state.value = action.payload 
    }) 
  }
});

export {fetchTodos}
export default todoSlice.reducer;