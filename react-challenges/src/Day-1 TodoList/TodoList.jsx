import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import '../App.css';

const TodoList = () => {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState(() => {
  const storedTasks = localStorage.getItem("tasks");
      return storedTasks ? JSON.parse(storedTasks) : [
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
      ];
  });

  const [deletedTasks, setDeletedTasks] = useState(() => {
    const storedDeletedTasks = localStorage.getItem("deletedTasks");
    return storedDeletedTasks ? JSON.parse(storedDeletedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    if (tasks.length === 6) {
      localStorage.removeItem("tasks");
    }
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("deletedTasks", JSON.stringify(deletedTasks));
  }, [deletedTasks]);

  const deleteTask = (id) => {
    const deletedTask = tasks.find((task) => task.id === id);
    setDeletedTasks([...deletedTasks, deletedTask]);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const restoreDeletedTasks = () => {
    setTasks([...tasks, ...deletedTasks]);
    setDeletedTasks([]);
  };

  const addTask = (text) => {
    const newTask = {
      id:Date.now,
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setText("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    }));
  };

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
      <button className="btn" onClick={restoreDeletedTasks}>Restore Deleted Tasks</button>
      <div className="active-tasks">
        <strong>Active Tasks:</strong>
        {tasks.map((task) => (
          <TodoItem key={task.id} task={task} deleteTask={deleteTask} toggleCompleted={toggleTask} />
        ))}
      </div>
      <div className="active-tasks">
        <strong>Deleted Tasks:</strong>
        {deletedTasks.map((task) => (
          <div key={task.id}>{task.text}</div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
