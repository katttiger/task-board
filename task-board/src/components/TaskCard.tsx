type TaskCardProps = {
  id: number;
  title: string;
  description: string;
  assignee: string;
  category: string;
  priority: string;
};

const TaskCard = (props: TaskCardProps) => {
  return (
    <article className="task-card">
      <p>{props.title}</p>
      <p>{props.category}</p>
      <p>{props.description}</p>
      <p>Anvarig: {props.assignee}</p>
      <p>Prioritet: {props.priority}</p>
    </article>
  );
};
export default TaskCard;
