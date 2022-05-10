import { useDispatch } from "react-redux";
import { removeToDosActionCreator } from "../../redux/feature/toDoSlice";

const ToDo = ({ todo: { name, id, done } }) => {
  const dispatch = useDispatch();

  const removeToDos = () => {
    dispatch(removeToDosActionCreator(id));
  };

  return (
    <>
      <h2>{name}</h2>
      <li className="li">Id: {id}</li>
      <li>Name: {name}</li>
      <li>Done: {done ? "Yes" : "No"}</li>
      <button onClick={removeToDos}>remove</button>
    </>
  );
};
export default ToDo;
