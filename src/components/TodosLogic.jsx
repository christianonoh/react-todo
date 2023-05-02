import TodoList from "./TodoList";
import FormToDo from "./FormToDo";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";


const TodosLogic = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Buy groceries",
      completed: false,
    },
    {
      id: 2,
      title: "Clean the house",
      completed: true,
    },
    {
      id: 3,
      title: "Finish work project",
      completed: false,
    },
  ]);

  const handleChange = (id) => {
    setTasks((prevState) =>
    prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    })
  );
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTasks([...tasks, newTodo]);
  };

  const delTodo = (id) => {
    setTasks([
      ...tasks.filter((task) => {
        return task.id !== id;
      }),
    ]);
  };

  return (
    <div>
      <FormToDo addTodoItem={addTodoItem}/>
      <TodoList tasksProps={tasks} setTasks={setTasks} handleChange={handleChange} delTodo={delTodo} />
    </div>
  )
};

export default TodosLogic;
