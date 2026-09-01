import React from "react";
import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskCard from "./components/TaskCard";

const App = () => {
  return (
    <div>
      <Header></Header>
      <main>
        <h1>Uppgifter</h1>
        <section className="card-section">
          <TaskCard></TaskCard>
          <TaskCard></TaskCard>
          <TaskCard></TaskCard>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default App;
