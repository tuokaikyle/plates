import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Profile from "./components/Profile";
import About from "./components/About";
import Posts from "./components/Posts";
import Likes from "./components/Likes";

const Routing = () => {
  return (
    <Switch>
      <Route path="/profile" exact>
        <Profile />
      </Route>
      <Route path="/profile/posts">
        <Posts />
      </Route>
      <Route path="/profile/likes">
        <Likes />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </Switch>
  );
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routing />
        <Link to="/">Go to home page</Link>
        <br />
        <Link to="/profile">Profile page</Link>
        <br />
        <Link to="/about">About page</Link>
      </BrowserRouter>
      <hr />
      Home page content
    </div>
  );
}

export default App;
