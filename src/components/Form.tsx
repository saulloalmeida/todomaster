export default function Form() {
  return (
    <div className="w-[736px] h-14 flex justify-center items-center gap-2 absolute">
      <input
        id="email"
        type="email"
        placeholder="Adicione uma nova tarefa"
        className="text-gray-300-my bg-gray-500-my border border-gray-700-my p-4 w-[736px] h-14 rounded-lg"
      />
      <button
        type="submit"
        className="w-[90px] h-14 text-gray-100-my bg-blue-dark-my rounded-lg p-4"
      >
        Criar +
      </button>
    </div>
  );
}
