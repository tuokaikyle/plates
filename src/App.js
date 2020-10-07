import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Hooks from "./routing/Hooks";

const Routing = () => {
  return (
    <Switch>
      <Route path="/" exact></Route>
      <Route path="/hooks">
        <Hooks />
      </Route>
    </Switch>
  );
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/">
          <h1>Home page</h1>
        </Link>
        <Link to="/hooks">
          <h2>Hooks</h2>
        </Link>
        <hr />
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
