import { useState } from "react";

const assignees = [
  { key: 1, value: "Amanda" },
  { key: 2, value: "Martin" },
  { key: 3, value: "Elias" },
  { key: 4, value: "Jonatan" },
  { key: 5, value: "Gustav" },
  { key: 6, value: "Oskar" },
  { key: 7, value: "Kasper" },
  { key: 8, value: "Isak" },
  { key: 9, value: "Eva" },
];

const categories = [
  { key: 1, value: "Design" },
  { key: 2, value: "Backend" },
  { key: 3, value: "Tester" },
  { key: 4, value: "DevOps" },
];

const NewTaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Låg");
  const [assignee, setAssignee] = useState(assignees[0]);
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(title);
    console.log(description);
    console.log(priority);
    console.log(assignee);
    console.log(category);
  };

  return (
    <div className="w-full max-w-xs flex justify-center">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-4"
        onSubmit={handleSubmit}
      >
        <div>
          <label id="title">Uppgift</label>
          <input
            className="my-2"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            placeholder="Uppgift"
          />
        </div>
        <div>
          <label id="priority">Prioritet</label>
          <select
            value={priority}
            onChange={(event) => setPriority(event.target.value)}
          >
            <option>Låg</option>
            <option>Medel</option>
            <option>Hög</option>
          </select>
        </div>
        <div>
          <label id="category">Kategori</label>
          <select onChange={(event) => setCategory(event.target.value)}>
            {categories.map((category) => (
              <option key={category.key} value={category.value}>
                {category.value}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label id="assignee">Ansvarig</label>
          <select onChange={(event) => setAssignee(event.target.value)}>
            {assignees.map((person) => (
              <option key={person.key} value={person.value}>
                {person.value}
              </option>
            ))}
          </select>
        </div>

        <label id="description">Beskrivning</label>
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Uppgiftsbeskrivning"
        ></textarea>

        <button type="submit">Skapa uppgift</button>
      </form>
    </div>
  );
};

export default NewTaskForm;

// type TaskCardProps = {
//   id: number;
//   title: string;
//   description: string;
//   assignee: string;
//   category: string;
//   priority: string;
//   status: TaskStatus;
// };
