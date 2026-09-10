import type { Priority } from "./Priority";
import type { TaskStatus } from "./TaskStatus";

export type NewTask = {
  title: string;
  description: string;
  assigneeId: number;
  category: string;
  priority: Priority;
  status: TaskStatus;
};
