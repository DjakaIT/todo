import { createSlice } from "@reduxjs/toolkit";

const intialState = {
    todos: [],
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        toggleTodo: (state, action) => {
            const todoIndex = state.todos.findIndex((todo) => todo.id === action.payload.id);
            state.todos[todoIndex].completed = !state.todos[todoIndex].completed;
    
        },
    },
});

export const { addTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;