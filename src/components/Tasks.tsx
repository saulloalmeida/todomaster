import classNames from "classnames";
import { Trash } from "phosphor-react";
import { useState } from "react";
interface Task {
  id: string;
  name: string;
  isCompleted: boolean;
}
interface TasksProps {
  task: Task;
  handleDeletetask: (id: string) => void;
  handleUpdateTask: (id: string, isCompleted: boolean) => void;
}
export default function Tasks({
  task,
  handleDeletetask,
  handleUpdateTask,
}: TasksProps) {
  const [isCompleted, setIsCompleted] = useState<boolean>(task.isCompleted);
  const borderTask = classNames({
    "border-gray-500-my": task.isCompleted,
    "border-gray-400-my": !task.isCompleted,
  });
  const colorInputTask = classNames({
    "focus:ring-purple-my h-6 w-6 text-purple-my bg-gray-600-my hover:bg-purple-dark-my border-purple-my rounded-full border-2":
      task.isCompleted,
    "focus:ring-blue-my h-6 w-6 text-blue-my bg-gray-600-my hover:bg-blue-dark-my border-blue-my rounded-full border-2":
      !task.isCompleted,
  });
  const lineThrough = classNames({
    "text-gray-300-my  line-through": task.isCompleted,
    "text-gray-200-my": !task.isCompleted,
  });

  function onDeleteTask(id: string) {
    handleDeletetask(id);
  }
  function onUpdateTask(id: string, isCompleted: boolean) {
    handleUpdateTask(id, isCompleted);
  }
  function OnChange() {
    setIsCompleted(!isCompleted);
    onUpdateTask(task.id, isCompleted);
  }
  return (
    <>
      <div
        className={`bg-gray-500-my w-[736px] h-20 flex justify-between items-center gap-6 rounded-lg p-4 border ${borderTask}`}
      >
        <div className="flex gap-4 justify-center items-center">
          <input
            id="tasks"
            aria-describedby="tasks-description"
            name="tasks"
            type="checkbox"
            className={colorInputTask}
            checked={isCompleted}
            onChange={OnChange}
          />
          <p className={`font-normal text-justify text-sm ${lineThrough}`}>
            {task.name}
          </p>
        </div>
        <button
          className="text-gray-300-my hover:bg-gray-400-my hover:text-danger-my rounded-md h-10 w-10 flex justify-center items-center"
          onClick={() => onDeleteTask(task.id)}
        >
          <Trash size={24} />
        </button>
      </div>
    </>
  );
}
