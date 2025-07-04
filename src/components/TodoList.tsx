import TaskItem from "./Task";
import { TodoListProps } from "./TodoList.types";

export default function TodoList({ items }: TodoListProps) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <TaskItem {...item} />
        </li>
      ))}
    </ul>
  );
}
