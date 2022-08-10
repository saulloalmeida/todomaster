import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import Tasks from "./components/Tasks";
import TasksEmpty from "./components/TasksEmpty";
import TasksInfo from "./components/TasksInfo";

function App() {
  const [isTaskEmpty, setIsTaskEmpty] = useState(false)
  return (
    <>
      <div className="h-52 w-screen bg-gray-700-my flex justify-center items-center">
        <Logo />
      </div>
      <div className="flex items-center justify-center">
        <Form />
      </div>
      <div className="pt-5 m-20 flex flex-col gap-24 items-center justify-center">
        <TasksInfo />
        {isTaskEmpty ? <TasksEmpty /> : <Tasks />}
        
      </div>
    </>
  );
}

export default App;
