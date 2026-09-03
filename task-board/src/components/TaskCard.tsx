import type { TaskStatus } from "../types/TaskStatus";

type TaskCardProps = {
  id: number;
  title: string;
  description: string;
  assignee: string;
  category: string;
  priority: string;
  status: TaskStatus;
};

const TaskCard = (props: TaskCardProps) => {
  return (
    <article className="task-card">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>
        <b>Kategori:</b> {props.category}
      </p>
      <p>
        <b>Anvarig:</b> {props.assignee}
      </p>
      <p>
        <b>Prioritet:</b> {props.priority}
      </p>
      <p>
        <b>Status:</b> {props.status}
      </p>
    </article>
  );
};
export default TaskCard;
