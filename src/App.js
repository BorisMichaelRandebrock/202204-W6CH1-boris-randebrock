import "./App.css";
import ToDoList from "./component/ToDoList/ToDoList";
import toDoArray from "./toDoArray";

function App() {
  return (
    <div>
      <ToDoList toDoArray={toDoArray} />
    </div>
  );
}

export default App;
