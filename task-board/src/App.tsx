import "./App.css";
import type { Task } from "./types/Task";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskCard from "./components/TaskCard";
import Column from "./components/Column";

const tasks: Task[] = [
  {
    id: 1,
    title: "Skapa dashboard",
    category: "Design",
    description: "Skapa ett dashboard i react/tsx.",
    assignee: "Jonatan",
    priority: "Medel",
    status: "done",
  },
  {
    id: 2,
    title: "Bygga formulär",
    category: "Backend",
    description: "Bygg ett HTML-formulär för en statisk HTML-sida",
    assignee: "Amanda",
    priority: "Låg",
    status: "todo",
  },
  {
    id: 3,
    title: "Skriva tester",
    category: "Tester",
    description: "Skriv tester till en Java-applikation",
    assignee: "Elias",
    priority: "Hög",
    status: "doing",
  },
  {
    id: 4,
    title: "Implementera API",
    category: "Backend",
    description: "Skapa endpoints för användarhantering i Node.js",
    assignee: "Amanda",
    priority: "Hög",
    status: "doing",
  },
  {
    id: 5,
    title: "Optimera databas",
    category: "Backend",
    description: "Indexera tabeller för att förbättra laddningstider",
    assignee: "Elias",
    priority: "Medel",
    status: "todo",
  },
  {
    id: 6,
    title: "Designa mobilvy",
    category: "Design",
    description: "Anpassa dashboarden för responsiv mobilvy",
    assignee: "Jonatan",
    priority: "Låg",
    status: "todo",
  },
  {
    id: 7,
    title: "Sätta upp CI/CD",
    category: "DevOps",
    description: "Konfigurera GitHub Actions för automatisk deployment",
    assignee: "Elias",
    priority: "Hög",
    status: "done",
  },
  {
    id: 8,
    title: "Fixa buggar i UI",
    category: "Design",
    description: "Åtgärda layoutfel i navigeringsmenyn",
    assignee: "Jonatan",
    priority: "Medel",
    status: "done",
  },
  {
    id: 9,
    title: "Dokumentera kod",
    category: "Tester",
    description: "Skriva teknisk dokumentation för API-integrationen",
    assignee: "Isak",
    priority: "Låg",
    status: "doing",
  },
];

const todolist = tasks.filter((task) => task.status === "todo");
const doinglist = tasks.filter((task) => task.status === "doing");
const donelist = tasks.filter((task) => task.status === "done");

const App = () => {
  return (
    <div>
      <Header></Header>
      <main>
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
      <Footer></Footer>
    </div>
  );
};

export default App;
