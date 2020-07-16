import React from "react";
import TodosPage from "../todos/TodosPage";

const HomePage = () => (
  <div>
    <h1 className="ml-1 mt-4 mb-4 text-xl">Welcome to React Todos</h1>
    <p className="italic">A simple test react app to handle a todo list.</p>
    <TodosPage />
  </div>
);

export default HomePage;
