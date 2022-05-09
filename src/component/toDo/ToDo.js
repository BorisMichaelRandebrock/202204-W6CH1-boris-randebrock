const ToDo = ({ todo: { name, id, done } }) => {
  return (
    <li>
      <h1>{name}</h1>
    </li>
  );
};
export default ToDo;
