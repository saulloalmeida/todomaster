export interface Task{
  id: string;
  name: string;
  isCompleted: boolean;
}
export interface Tasks{
  tasks: Task[];
}