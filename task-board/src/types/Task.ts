import type { Priority } from "./Priority";
import type { TaskStatus } from "./TaskStatus";

export type Task = {
  id: number;
  title: string;
  description: string;
  assignee: string;
  category: string;
  priority: Priority;
  status: TaskStatus;
};
