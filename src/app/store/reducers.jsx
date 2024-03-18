import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  tasks: [],
  selectedTask: null,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTaskId = nanoid();
      state.tasks.push({
        id: newTaskId,
        description: action.payload.description,
        completed: false, 
      });
    },
    toggleTaskCompletion: (state, action) => {
      const taskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload
      );
      if (taskIndex !== -1) {
        state.tasks[taskIndex].completed = !state.tasks[taskIndex].completed;
      }
    },
  },
});

export const { addTask, toggleTaskCompletion } = todosSlice.actions;
export default todosSlice.reducer;
