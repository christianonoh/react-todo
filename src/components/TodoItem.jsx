import React from "react";

const TodoItem = ({ itemProp, delTodo, handleChange }) => {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  return (
    <li className="task">
      <h3>
        <span className="form-control-check">
          <input
            type="checkbox"
            checked={itemProp.completed}
            onChange={() => handleChange(itemProp.id)}
          />
          <span style={itemProp.completed ? completedStyle : null}>{itemProp.title}</span>
        </span>
        <button className="btn" onClick={() => delTodo(itemProp.id)}>
          Delete
        </button>
      </h3>
    </li>
  );
};

export default TodoItem;
