import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./home/HomePage";
import TodosPage from "./todos/TodosPage";
import Header from "./common/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/todos" component={TodosPage} />
      </Switch>
    </div>
  );
}

export default App;
