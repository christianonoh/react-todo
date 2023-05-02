import { React, useState } from "react";

const FormToDo = ({ addTodoItem }) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
        addTodoItem(title);
        setTitle('');
        setMessage('');
      } else {
        setMessage('Please add item.');
      }
  };

  return (
    <>
    <form className="form-control" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Todo..."
        value={title}
        onChange={handleChange}
      />
      <button className="btn btn-block" type="submit">Submit</button>
    </form>
    <span className="submit-warning">{message}</span>
    </>
  );
};

export default FormToDo;
