import { createSlice } from "@reduxjs/toolkit";

const toDoSlice = createSlice({
  name: "to do",
  initialState: [],
  reducers: {
    loadToDoS: (projects, action) => [...action.payload],
    addToDoS: (projects, action) => [...projects, action.payload],
    removeToDos: (projects, action) => [
      projects.filter((projects, action) => projects.id !== action.payload),
    ],
  },
});
export const {
  loadToDoS: loadToDoSActionCreator,
  addToDoS: addToDoSActionCreator,
  removeToDos: removeToDosActionCreator,
} = toDoSlice.actions;
export default toDoSlice.reducer;
