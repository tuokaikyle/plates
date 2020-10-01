import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Ref from "./components/Ref";
import State2 from "./components/state/State2";
import State1 from "./components/state/State1";
import State from "./components/state/State";
import Reducer from "./components/reducer/Reducer";
import Awad_1 from "./components/reducer/Awad_1";
import Awad_2 from "./components/reducer/Awad_2";
import Awad3 from "./components/reducer/Awad3";

const Routing = () => {
  return (
    <Switch>
      <Route path="/state" exact>
        <State />
      </Route>
      <Route path="/state/state1">
        <State1 />
      </Route>
      <Route path="/state/state2">
        <State2 />
      </Route>
      <Route path="/ref">
        <Ref />
      </Route>
      <Route path="/reducer" exact>
        <Reducer />
      </Route>
      <Route path="/reducer/awad_1">
        <Awad_1 />
      </Route>
      <Route path="/reducer/awad_2">
        <Awad_2 />
      </Route>
      <Route path="/reducer/awad3">
        <Awad3 />
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
        <Link to="/state">1. useState</Link>
        <br />
        <Link to="/effect">2. useEffect</Link>
        <br />
        <Link to="/memo">3. useMemo</Link>
        <br />
        <Link to="/ref">4. useRef</Link>
        <br />
        <Link to="/callback">5. useCallback</Link>
        <br />
        <Link to="/context">6. useContext</Link>
        <br />
        <Link to="/reducer">7. useReducer</Link>
        <br />
        <hr />

        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
