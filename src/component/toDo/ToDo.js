const ToDo = ({ todo: { name, id, done } }) => {
  return (
    <li className="li">
      <h2>{name}</h2>
    </li>
  );
};
export default ToDo;
