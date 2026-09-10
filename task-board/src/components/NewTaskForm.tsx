import { useEffect, useState } from "react";
import type { NewTask } from "../types/NewTask";
import type { Priority } from "../types/Priority";
import { categories } from "../data/categories";
import type { Assignee } from "../types/assignee";
import { Navigate, redirect, useNavigate } from "react-router";

type TaskFormProps = {
  onAddTask: (task: NewTask) => void;
};

const apiUrl = "http://localhost:3001/api/tasks";

const NewTaskForm = ({ onAddTask }: TaskFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [newpriority, setPriority] = useState<Priority>("Låg");
  const [assignee, setAssignee] = useState<number | "">("");
  const [category, setCategory] = useState(categories[0].value);

  //import assignees for dropdown in form
  const [assignees, setAssignees] = useState<Assignee[]>([]);

  useEffect(() => {
    const fetchAssigneesFromDatabase = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/api/tasks/assignees",
        );
        if (!response.ok) {
          throw new Error("Failed to fetch assignees");
        }

        const data: Assignee[] = await response.json();
        setAssignees(data);

        if (data.length > 0) {
          setAssignee(data[0].key);
        }
      } catch (error) {
        console.log("Error loading assignees: ", error);
      }
    };
    fetchAssigneesFromDatabase();
  }, []);

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    onAddTask({
      title,
      description,
      assigneeId: assignee === "" ? 0 : assignee,
      category,
      priority: newpriority,
      status: "todo",
    });
  };
  const navigate = useNavigate();
  const goToTaskboard = () => {
    navigate("/");
  };
  return (
    <div className="w-auto flex justify-center m-6">
      <form
        className="bg-amber-200 border-3 shadow-2xl border-orange-300 shadow rounded px-8 pt-6 pb-8 mb-4 mt-4 s:w-full"
        onSubmit={handleSubmit}
      >
        <div className="p-3">
          <label htmlFor="title" className="bg-orange-100 p-4">
            Uppgift
          </label>
          <input
            required
            name="title"
            className="focus:bg-orange-200 my-2 border-2 border-orange-300 p-4 ml-0 bg-white w-full"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            placeholder="Uppgiftens namn"
          />
        </div>

        <div className="mb-5 p-3 lg:hidden">
          <label htmlFor="priority" className="bg-orange-100 p-4">
            Prioritet
          </label>
          <select
            id="priority"
            className="p-4 mt-2 focus:bg-orange-100 bg-white focus:bg-orange-200 border border-black-100 w-full"
            value={newpriority}
            onChange={(event) => setPriority(event.target.value as Priority)}
          >
            <option value="Låg">Låg</option>
            <option value="Medel">Medel</option>
            <option value="Hög">Hög</option>
          </select>
        </div>

        <div className="mb-5 p-3 lg:hidden">
          <label htmlFor="category" className="bg-orange-100 p-4">
            Kategori
          </label>
          <select
            id="category"
            className="p-4 focus:bg-orange-100 bg-white focus:bg-orange-200 border border-black-100 w-full mt-2"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            {categories.map((category) => (
              <option key={category.key} value={category.value}>
                {category.value}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-5 p-3 hidden lg:flex">
          <label htmlFor="priority" className="bg-orange-100 p-4">
            Prioritet
          </label>
          <select
            id="priority"
            className="p-4 focus:bg-orange-100 bg-white focus:bg-orange-200 border border-black-100"
            value={newpriority}
            onChange={(event) => setPriority(event.target.value as Priority)}
          >
            <option value="Låg">Låg</option>
            <option value="Medel">Medel</option>
            <option value="Hög">Hög</option>
          </select>

          <label htmlFor="category" className="ml-2 bg-orange-100 p-4">
            Kategori
          </label>
          <select
            id="category"
            className="p-4 bg-white border-1 focus:bg-orange-200"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            {categories.map((category) => (
              <option key={category.key} value={category.value}>
                {category.value}
              </option>
            ))}
          </select>
        </div>

        <div className="p-3">
          <label htmlFor="description" className="mb-20 bg-orange-100 p-4">
            Beskrivning
          </label>
          <br></br>
          <textarea
            required
            name="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Uppgiftsbeskrivning"
            className="focus:bg-orange-200 p-4 border-2 border-orange-300 text-left mt-3 bg-white w-full h-50"
          ></textarea>
        </div>

        <div className="p-3">
          <label htmlFor="assignee" className="bg-orange-100 p-4">
            Ansvarig
          </label>
          <select
            id="assignee"
            value={assignee}
            onChange={(event) => setAssignee(Number(event.target.value))}
            className="p-4 w-auto bg-white border-1 focus:bg-orange-200"
            disabled={assignees.length === 0}
          >
            {assignees.length === 0 ? (
              <option>Laddar personal...</option>
            ) : (
              assignees.map((person) => (
                <option key={person.key} value={person.key}>
                  {person.value}
                </option>
              ))
            )}
          </select>
        </div>
        <button
          onClick={goToTaskboard}
          className="ml-3 border-orange-300 bg-orange-100 hover:bg-orange-300 active:bg-orange-500 border-2 rounded px-4 py-2"
          type="submit"
        >
          Skapa uppgift
        </button>
      </form>
    </div>
  );
};

export default NewTaskForm;
