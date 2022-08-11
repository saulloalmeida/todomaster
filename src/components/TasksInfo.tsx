import { Task } from "../interfaces/TaskInterface";

interface TasksInfoProps {
  tasks: Task[];
}
export default function TasksInfo({ tasks }: TasksInfoProps) {
  const tasksDone = tasks.reduce(function (acc, task) {
    return task.isCompleted ? acc + 1 : acc;
  }, 0);

  return (
    <div className="w-[736px] flex items-center justify-between">
      <div className="flex text-blue-my text-lg gap-2">
        Tarefas criadas
        <span className="px-3 self-center py-1 rounded-full text-xs font-medium bg-gray-400-my text-gray-100-my">
          {tasks.length}
        </span>
      </div>
      <div className="flex text-purple-my text-lg gap-2">
        Concluídas
        <span className="px-3 self-center py-1 rounded-full text-xs font-medium bg-gray-400-my text-gray-100-my">
          {tasksDone} de {tasks.length}
        </span>
      </div>
    </div>
  );
}
