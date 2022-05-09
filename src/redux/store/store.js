import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "../feature/toDoSlice";

const store = configureStore({
  reducer: {
    toDo: toDoReducer,
  },
});

export default store;
