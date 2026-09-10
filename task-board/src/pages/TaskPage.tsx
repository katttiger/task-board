import { useEffect, useState } from "react";
import Column from "../components/Column";
import TaskCard from "../components/TaskCard";
import type { Task } from "../types/Task";
import SearchBar from "../components/SearchBar";

const apiUrl = "http://localhost:3001/api/tasks";

type TaskPageProps = {
  tasks: Task[];
};

const TaskPage = ({ tasks }: TaskPageProps) => {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [filters, setFilters] = useState({
    query: "",
    category: "all",
    assignee: "all",
    priority: "all",
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters((previousFilter: any) => ({ ...previousFilter, [key]: value }));
  };

  const filteredTasks = taskList.filter((task) => {
    const matchesQuery =
      task.title.toLowerCase().includes(filters.query.toLowerCase()) ||
      task.description.toLowerCase().includes(filters.query.toLowerCase());
    const matchesCat =
      filters.category === "all" || task.category === filters.category;
    const matchesPri =
      filters.priority === "all" || task.priority === filters.priority;
    const matchesAss =
      filters.assignee === "all" || task.assignee === filters.assignee;

    return matchesQuery && matchesCat && matchesPri && matchesAss;
  });

  const todolist = filteredTasks.filter((task) => task.status === "todo");
  const doinglist = filteredTasks.filter((task) => task.status === "doing");
  const donelist = filteredTasks.filter((task) => task.status === "done");

  const fetchTasks = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Kunde inte hämta uppgifter.");
      }
      const result: Task[] = await response.json();
      setTaskList(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const executeFetch = async () => {
      fetchTasks();
    };
    executeFetch();
  }, []);
  return (
    <main>
      <SearchBar
        filters={filters}
        onFilterChange={handleFilterChange}
      ></SearchBar>
      <div className="flex flex-col md:flex-row justify-center gap-6 p-6 bg-slate-50 min-h-screen">
        <Column title="Todo">
          {todolist.map((item) => (
            <TaskCard
              key={item.id}
              id={item.id}
              title={item.title}
              category={item.category}
              description={item.description}
              assignee={item.assignee}
              priority={item.priority}
              status={item.status}
            ></TaskCard>
          ))}
        </Column>

        <Column title="Doing">
          {doinglist.map((item) => (
            <TaskCard
              key={item.id}
              id={item.id}
              title={item.title}
              category={item.category}
              description={item.description}
              assignee={item.assignee}
              priority={item.priority}
              status={item.status}
            ></TaskCard>
          ))}
        </Column>

        <Column title="Done">
          {donelist.map((item) => (
            <TaskCard
              key={item.id}
              id={item.id}
              title={item.title}
              category={item.category}
              description={item.description}
              assignee={item.assignee}
              priority={item.priority}
              status={item.status}
            ></TaskCard>
          ))}
        </Column>
      </div>
    </main>
  );
};

export default TaskPage;
