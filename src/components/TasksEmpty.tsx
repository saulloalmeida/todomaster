import ClipboardIcon from "./ClipboardIcon";

export default function TasksEmpty() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <ClipboardIcon />
      <div>
        <p className="text-gray-300-my text-lg font-bold">
          Você ainda não tem tarefas cadastradas
        </p>
        <p className="text-gray-300-my font-normal text-center">Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
