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

const priorityColors = {
  Hög: "bg-red-100 text-red-700",
  Medel: "bg-amber-100 text-amber-700",
  Låg: "bg-green-100 text-green-700",
};

const categoryColors = {
  Design: "bg-blue-100 text-blue-700",
  Backend: "bg-purple-100 text-purple-700",
  Tester: "bg-orange-100 text-orange-700",
  DevOps: "bg-indigo-100 text-indigo-700",
};

const TaskCard = (props: TaskCardProps) => {
  return (
    <article className="bg-white border-3 h-55 border-slate-400 rounded-xl p-5 mb-3">
      <div className="flex justify-between items-start mb-2">
        <h3 className="uppercase text-s font-medium leading-tight">
          {props.title}
        </h3>

        <span
          className={`text-xs font-medium ml-4 px-2 py-1 rounded ${priorityColors[props.priority as keyof typeof priorityColors] || "bg-slate-100"}`}
        >
          {props.priority}
        </span>
      </div>

      <div className="flex flex-wrap gap-2 items-center justify-between mt-auto">
        <span
          className={`text-s font-medium px-2 py-1 mb-3 rounded ${categoryColors[props.category as keyof typeof categoryColors] || "bg-slate-100 text-slate-600"}`}
        >
          {props.category}
        </span>
      </div>

      <p className="text-sm text-slate-600 mb-4 line-clamp-2">
        {props.description}
      </p>

      <div className="text-s text-slate-500 italic">
        <b>Anvarig:</b> {props.assignee}
      </div>
    </article>
  );
};
export default TaskCard;
