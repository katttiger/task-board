import type { TaskStatus } from "./TaskStatus";

export type Task = {
  id: number;
  title: string;
  description: string;
  assignee: string;
  category: string;
  priority: string;
  status: TaskStatus;
};
