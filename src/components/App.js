import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./home/HomePage";
import TodosPage from "./todos/TodosPage";
import Header from "./common/Header";

function App() {
  return (
    <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/todos" component={TodosPage} />
      </Switch>
    </div>
  );
}

export default App;
