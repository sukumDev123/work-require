import React, { useContext } from "react";
import Task from "./Task";
import { taskContext } from "../../providers/TaskProviders";

const ManageTaskList: React.FC = () => {
  const { tasks } = useContext(taskContext);
  return <div className="show-all-task">
    <h3>Create New Task</h3>
    <Task></Task>
    <div className="show-task-list">
      <div className="show-task-list-left">
        {tasks.map((task) => <li>{task}</li>)}
      </div>
      <div className="show-task-list-right"></div>
    </div>
  </div>;
};
export default ManageTaskList;
