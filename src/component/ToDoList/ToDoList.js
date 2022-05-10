import { useSelector } from "react-redux";

import ToDo from "../toDo/ToDo";

const ToDoList = () => {
  const todo = useSelector((state) => state.toDo);

  return (
    <>
      <h1>To Do List</h1>
      <ul className="ul">
        {todo.map((todo) => (
          <ToDo todo={todo} />
        ))}
      </ul>
    </>
  );
};
export default ToDoList;
