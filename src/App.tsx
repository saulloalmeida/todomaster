import { useEffect, useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import Tasks from "./components/Tasks";
import TasksEmpty from "./components/TasksEmpty";
import TasksInfo from "./components/TasksInfo";
import { v4 as uuidv4 } from 'uuid';

interface Task{
  id: string;
  name: string;
  isCompleted: boolean;
}
interface Tasks{
  tasks: Task[];
}
const data = [
  { id:uuidv4(), name: "Tasks", isCompleted: false },
  { id:uuidv4(), name: "Tasks 2", isCompleted: true },
  { id:uuidv4(), name: "Tasks 3", isCompleted: true },
]

function App() {
  const [tasks, setTasks] = useState<Task[]>(data)
  function handleNewTask(name: string){
    const newTask = { id:uuidv4(), name: name, isCompleted: false }
    setTasks(state=>[...state, newTask])
  }
  function handleDeletetask(id: string){
    const newTasksList = tasks.filter(task => task.id !==id)
    setTasks(newTasksList)
  }
  function handleUpdateTask(id:string,isCompleted:boolean){
    const newTaskList = tasks.filter(task => task.id !== id)
    const newTaskList2 = tasks.filter(task => task.id === id)
    newTaskList2[0].isCompleted = !isCompleted
    setTasks([...newTaskList, newTaskList2[0]])
  }
  return (
    <>
      <div className="h-52 w-screen bg-gray-700-my flex justify-center items-center">
        <Logo />
      </div>
      <div className="flex items-center justify-center">
        <Form handleNewTask={handleNewTask}/>
      </div>
      <div className="pt-5 m-20 flex flex-col gap-3 items-center justify-center">
        <TasksInfo tasks={tasks}/>
        {tasks.length <= 0 && <TasksEmpty /> }
        {tasks.map(task=> <Tasks key={task.id} task={task} handleDeletetask={handleDeletetask} handleUpdateTask={handleUpdateTask}/>)}
        
      </div>
    </>
  );
}

export default App;
