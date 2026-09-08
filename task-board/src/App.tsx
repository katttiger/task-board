import "./App.css";
import type { Task } from "./types/Task";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskCard from "./components/TaskCard";
import Column from "./components/Column";
import NewTaskForm from "./components/NewTaskForm";
import type { NewTask } from "./types/NewTask";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { TaskList } from "./data/tasks";

const App = () => {
  const [taskId, setTaskId] = useState(10);
  const [tasks, setTasks] = useState<Task[]>(TaskList);

  const addTask = (newTask: NewTask) => {
    const task: Task = {
      id: taskId,
      ...newTask,
    };
    setTaskId(taskId + 1);
    setTasks([...tasks, task]);
    console.log(newTask);
    console.log(tasks);
  };

  const todolist = tasks.filter((task) => task.status === "todo");
  const doinglist = tasks.filter((task) => task.status === "doing");
  const donelist = tasks.filter((task) => task.status === "done");

  return (
    <div>
      <Header></Header>
      <main>
        {/* <SearchBar></SearchBar> */}
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
        <NewTaskForm onAddTask={addTask}></NewTaskForm>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default App;
