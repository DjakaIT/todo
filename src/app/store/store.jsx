import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './reducers';

const store = configureStore({
    todos: rootReducer,
});

export default store;

