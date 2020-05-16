import React, { useState } from "react";
import Input from "../Input";

function Task() {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);
  return <div className="task">
    <div className="divInputAndButton">
      <input
        type="text"
        onChange={(event) => setTask(event.target.value)}
        value={task}
      />
      <button
        onClick={(event) => {
        }}
        className="btn"
      >
        create
      </button>
    </div>
  </div>;
}
export default Task;
