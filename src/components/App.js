import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./home/HomePage";
import Header from "./shared/Header";

function App() {
  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
