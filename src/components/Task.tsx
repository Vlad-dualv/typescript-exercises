import { Task } from "./Task.types";

export default function TaskItem({ title, completed }: Task) {
  return (
    <div>
      <h2>{title}</h2>
      <p>Completed: {completed ? "Yes" : "No"}</p>
    </div>
  );
}
