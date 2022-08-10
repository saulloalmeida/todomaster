import { Trash } from "phosphor-react";
import { useState } from "react";

export default function Tasks() {
  const [isTaskComplete, setIsTaskComplete] = useState(true);
  return (
    <>
      {isTaskComplete ? (
        <div className="bg-gray-500-my w-[736px] h-20 flex justify-center items-center gap-6 rounded-lg p-4 border border-gray-500-my">
          <input
            id="tasks"
            aria-describedby="tasks-description"
            name="tasks"
            type="checkbox"
            checked
            className="focus:ring-blue-my h-6 w-6 text-purple-dark-my bg-gray-600-my border-blue-my rounded-full border-2"
          />
          <p className="font-normal text-gray-300-my  text-justify text-sm line-through">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed est
            officia impedit dolorem, similique quae iusto in
          </p>
          <Trash size={32} className="text-gray-300-my" />
        </div>
      ) : (
        <div className="bg-gray-500-my w-[736px] h-20 flex justify-center items-center gap-6 rounded-lg p-4 border border-gray-400-my">
          <input
            id="tasks"
            aria-describedby="tasks-description"
            name="tasks"
            type="checkbox"
            className="focus:ring-blue-my h-6 w-6 text-blue-my bg-gray-600-my border-blue-my rounded-full border-2"
          />
          <p className="font-normal text-gray-100-my  text-justify text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed est
            officia impedit dolorem, similique quae iusto in
          </p>
          <Trash size={32} className="text-gray-300-my" />
        </div>
      )}
    </>
  );
}
