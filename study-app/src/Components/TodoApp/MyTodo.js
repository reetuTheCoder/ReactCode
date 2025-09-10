import React, { use, useState } from "react";

const MyTodo = () => {
  const [inputData, setInputData] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTask = () => {
    if (inputData.trim() === "") return "";
    const newTask = {
      id: Date.now(),
      text: inputData,
      completed: false,
    };

    setTodos([...todos, newTask]);
    setInputData("");
  };

  const handleCompleteTask = (id) => {
    setTodos(
      todos.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: task.id,
            }
          : task
      )
    );
  };

  const handleDeletetask = (id) => {
    setTodos(todos.filter((task) => task.id !== id));
  };

  const handlAllDeletBtn = () => {
    setTodos([]);
  };

  const completedTaskCount = () => {
    return todos.filter((task) => task.completed).length;
  };
  return (
    <div>
      <h1>MyTodo</h1>
      <div>
        <div>
          <input
            type="text"
            placeholder="Type here.."
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <button onClick={handleAddTask}>Add</button>
        </div>

        <div>
          <ul>
            {todos.map((task) => (
              <li key={task.id} onClick={() => handleCompleteTask(task.id)}>
                <span
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                  }}
                >
                  {task.text}
                </span>
                <span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeletetask(task.id);
                    }}
                  >
                    Delete
                  </button>
                </span>
              </li>
            ))}
          </ul>

          {todos.length > 1 && (
            <button onClick={handlAllDeletBtn}>Delete All</button>
          )}

            {completedTaskCount() > 0 && (
            <button>Total completed task: {completedTaskCount()}</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyTodo;
