import React from "react";
import TodosPage from "../todos/TodosPage";

const HomePage = () => (
  <div>
    <h1 className="my-5  text-2xl">Welcome to React Todos</h1>
    <p className="italic">A simple test react app to handle a todo list.</p>
    <TodosPage />
  </div>
);

export default HomePage;
