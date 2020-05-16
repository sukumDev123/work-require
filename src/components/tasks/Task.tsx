import React, { useState, useContext } from "react";
import { taskContext } from "../../providers/TaskProviders";

function Task() {
  const [task, setTask] = useState<string>("");
  const { tasks, setTasks } = useContext(taskContext);
  return <div className="task">
    <div className="divInputAndButton">
      <input
        type="text"
        placeholder={"Add new task"}
        onChange={(event) => setTask(event.target.value)}
        value={task}
      />
      <button
        onClick={(event) => {
          event.preventDefault();
          if (task) {
            const newTask = [...tasks, task];
            setTasks(newTask);
          }
        }}
        className="btn"
      >
        create
      </button>
    </div>
  </div>;
}
export default Task;
