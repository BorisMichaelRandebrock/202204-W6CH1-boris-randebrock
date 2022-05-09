import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import ToDoList from "./component/ToDoList/ToDoList";
import { loadToDoSActionCreator } from "./redux/feature/toDoSlice";
import toDoArray from "./toDoArray";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadToDoSActionCreator(toDoArray));
  }, [dispatch]);

  return (
    <div>
      <ToDoList toDoArray={toDoArray} />
    </div>
  );
}

export default App;
