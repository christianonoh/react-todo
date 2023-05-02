import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasksProps, setTasks, handleChange, delTodo }) => {
  
  return (
    <ul>
      {tasksProps.map((task) => (
        <TodoItem key={task.id} itemProp={task} setTasks={setTasks} handleChange={handleChange} delTodo={delTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
