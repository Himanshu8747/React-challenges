import { useState } from "react";
import TodoItem from "./TodoItem";
import '../App.css';
const TodoList = () => {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Build A Todo App using react",
      completed: false,
    },
    {
      id: 2,
      text: "Create Resuable Components",
      completed: false,
    },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = (text) => {
    const newTask = {
      id: 3,
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setText("");
  };

  const toggleTask=(id)=>{
    setTasks(tasks.map(task => {
        if (task.id === id) {
        return {...task, completed: !task.completed};
        } else {
        return task;
        } 
        }));
  }

  return (
    <div className="todo-list">
      <input
        className="text"
        placeholder="Add a Todo...."
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="btn" onClick={() => addTask(text)}>Add Task</button>  
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} deleteTask={deleteTask} toggleCompleted={toggleTask}/>
      ))}
    </div>
  );
};

export default TodoList;
