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
        <div className="card-section">
          <Column title="Todo">
            <TaskCard
              id={1}
              title="Skapa dashboard"
              category="Design"
              description="Skapa ett dashboard i react/tsx."
              assignee="Jonatan"
              priority="Medel"
            ></TaskCard>
          </Column>

          <Column title="Doing">
            <TaskCard
              id={2}
              title="Bygga formulär"
              category="Backend"
              description="Bygg ett HTML-formulär för en statisk HTML-sida"
              assignee="Amanda"
              priority="Låg"
            ></TaskCard>
          </Column>

          <Column title="Done">
            <TaskCard
              id={3}
              title="Skriva tester"
              category="Tester"
              description="Skriv tester till en Java-applikation"
              assignee="Elias"
              priority="Hög"
            ></TaskCard>
          </Column>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default App;

/* <section className="card-section">
  
  <TaskCard
    
  ></TaskCard>
  
</section> */
