const Form = () => {
  return (
    <form noValidate autoComplete="off">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" />
      <input type="submit" value="Add" />
    </form>
  );
};

export default Form;
