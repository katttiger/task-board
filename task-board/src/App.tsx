import "./App.css";
import Header from "./components/Header";
import TaskPage from "./pages/TaskPage";
import NewTaskForm from "./components/NewTaskForm";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router";
import type { Task } from "./types/Task";
import { useEffect, useState } from "react";
import type { NewTask } from "./types/NewTask";

const apiUrl = "http://localhost:3001/api/tasks";

const App = () => {
  const addTask = async (newTask: NewTask) => {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      if (!response.ok) {
        throw new Error("Kunde inte skapa en ny uppgift.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<TaskPage tasks={[]}></TaskPage>}></Route>
        <Route
          path="/new-task"
          element={<NewTaskForm onAddTask={addTask}></NewTaskForm>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
};

export default App;
