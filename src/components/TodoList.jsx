import PropTypes from "prop-types";
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

TodoList.propTypes = {
  tasksProps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      task: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  setTasks: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default TodoList;
