import React, { createContext, useState } from "react";

interface TaskProviderInterface {
  tasks: string[];
  setTasks: (tasks: string[]) => void;
}

export const taskContext = createContext<TaskProviderInterface>(
  {
    tasks: [],
    setTasks: () => {},
  },
);

const TaskProvider = ({ children }: any) => {
  const [tasks, setTasks] = useState<string[]>([]);
  return <taskContext.Provider value={{ tasks, setTasks }}>
    {children}
  </taskContext.Provider>;
};

export default TaskProvider;
