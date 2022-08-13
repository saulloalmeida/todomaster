import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import Form from "./components/Form";
import Logo from "./components/Icons/Logo";
import Tasks from "./components/Tasks";
import TasksEmpty from "./components/TasksEmpty";
import TasksInfo from "./components/TasksInfo";
import { Task } from "./interfaces/TaskInterface";

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [tasksRef] = useAutoAnimate<HTMLDivElement>();

  function handleNewTask(name: string) {
    const newTask = { id: uuidv4(), name: name, isCompleted: false };
    setTasks((state) => [...state, newTask]);
  }

  function handleDeletetask(id: string) {
    const newTasksList = tasks.filter((task) => task.id !== id);
    setTasks(newTasksList);
  }

  function handleUpdateTask(id: string, isCompleted: boolean) {
    const taskListWithoutDataUpdate = tasks.filter((task) => task.id !== id);
    const taskToDataUpdated = tasks.filter((task) => task.id === id);
    taskToDataUpdated[0].isCompleted = !isCompleted;
    const newCompleteTasks = [
      ...taskListWithoutDataUpdate,
      ...taskToDataUpdated,
    ];
    newCompleteTasks.sort((a, b) => +a.isCompleted - +b.isCompleted); // Order by isCompleted false first, then by isCompleted true
    setTasks(newCompleteTasks);
  }

  return (
    <>
      <div className="h-52 w-screen bg-gray-700-my flex justify-center items-center">
        <Logo />
      </div>
      <div className="flex items-center justify-center">
        <Form handleNewTask={handleNewTask} />
      </div>
      <div ref={tasksRef} className="pt-5 m-20 flex flex-col gap-3 items-center justify-center">
        <TasksInfo tasks={tasks} />
        {tasks.length <= 0 && <TasksEmpty />}
        {tasks.map((task) => (
          <Tasks
            key={task.id}
            task={task}
            handleDeletetask={handleDeletetask}
            handleUpdateTask={handleUpdateTask}
          />
        ))}
      </div>
    </>
  );
}
