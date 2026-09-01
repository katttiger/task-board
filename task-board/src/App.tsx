import React from "react";
import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskCard from "./components/TaskCard";
import Column from "./components/Column";

const App = () => {
  return (
    <div>
      <Header></Header>
      <main>
        <Column title="Todo"></Column>
        <Column title="Doing"></Column>
        <Column title="Done"></Column>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default App;

/* <section className="card-section">
  <TaskCard
    id={1}
    title="Skapa dashboard"
    category="Design"
    description="Skapa ett dashboard i react/tsx."
    assignee="Jonatan"
    priority="Medel"
  ></TaskCard>
  <TaskCard
    id={2}
    title="Bygga formulär"
    category="Backend"
    description="Bygg ett HTML-formulär för en statisk HTML-sida"
    assignee="Amanda"
    priority="Låg"
  ></TaskCard>
  <TaskCard
    id={3}
    title="Skriva tester"
    category="Tester"
    description="Skriv tester till en Java-applikation"
    assignee="Elias"
    priority="Hög"
  ></TaskCard>
</section> */
