export default function TasksInfo() {
  return (
    <div className="w-[736px] flex items-center justify-between">
      <div className="flex text-blue-my text-lg gap-2">
        Tarefas criadas
        <span className="px-3 self-center py-1 rounded-full text-xs font-medium bg-gray-400-my text-gray-100-my">0</span>
      </div>
      <div className="flex text-purple-my text-lg gap-2">
      Concluídas
        <span className="px-3 self-center py-1 rounded-full text-xs font-medium bg-gray-400-my text-gray-100-my">0 de 0</span>
      </div>
    </div>
  );
}
