import { useNavigate } from "react-router";
import NewTaskForm from "../components/NewTaskForm";
import type { NewTask } from "../types/NewTask";

type CreateTaskPageProps = {
  onAddTask: (task: NewTask) => Promise<void>;
};

const CreateTaskPage = ({ onAddTask }: CreateTaskPageProps) => {
  const navigate = useNavigate();
  const executeOnAddTask = async (newtask: NewTask) => {
    await onAddTask(newtask);
    navigate("/");
  };

  return (
    <main>
      <section>
        <h1>Lägg till en ny uppgift</h1>
        <NewTaskForm onAddTask={executeOnAddTask}></NewTaskForm>
      </section>
    </main>
  );
};
export default CreateTaskPage;
