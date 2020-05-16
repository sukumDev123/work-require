import React from "react";
import Navbar from "../Navbar";
import "../../styles/Task.css";
import TaskProvider from "../../providers/TaskProviders";
import ManageTaskList from "../tasks/ManageTaskList";
const UserPage: React.FC = () =>
  <div className="user-page">
    <div className="body-user-page">
      <Navbar></Navbar>
      <div className="body-user">
        <TaskProvider>
          <ManageTaskList></ManageTaskList>
        </TaskProvider>
      </div>
    </div>
  </div>;

export default UserPage;
