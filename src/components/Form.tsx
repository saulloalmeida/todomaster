import { ChangeEvent, useState } from "react";

import { PlusCircle } from "phosphor-react";

interface FormProps {
  handleNewTask: (data: string) => void;
}

export default function Form({ handleNewTask }: FormProps) {
  const [formData, setFormData] = useState("");

  function onSubmitForm() {
    handleNewTask(formData);
    setFormData("");
  }

  function changeFormData(event: ChangeEvent<HTMLInputElement>) {
    setFormData(event.target.value);
  }

  return (
    <div className="w-[736px] h-14 flex justify-center items-center gap-2 absolute">
      <input
        id="email"
        type="email"
        placeholder="Adicione uma nova tarefa"
        className="text-gray-300-my bg-gray-500-my border border-gray-700-my p-4 w-[736px] h-14 rounded-lg
        focus:ring-purple-my focus:text-gray-200-my"
        onChange={changeFormData}
        value={formData}
      />
      <button
        type="submit"
        className="w-[120px] h-14 text-gray-100-my bg-blue-dark-my hover:bg-blue-my transition-colors rounded-lg p-4"
        onClick={onSubmitForm}
      >
        <div className="flex items-center justify-center">
          <span className="pr-1">Criar</span>
          <PlusCircle size={20} />
        </div>
      </button>
    </div>
  );
}
