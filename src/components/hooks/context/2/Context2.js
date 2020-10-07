import React from "react";
import C2About from "./C2About";
import C2Home from "./C2Home";
import { useState } from "react";
import { useMemo } from "react";
import { createContext } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export const ThroughOut = createContext(null);

function Context2() {
  const [user, setUser] = useState(null);
  const information = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <Router>
      <ul>
        <li>
          <Link to="/context2/c2home">c2home</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/context2/c2about">c2about</Link>
        </li>
      </ul>
      <ThroughOut.Provider value={information}>
        {" "}
        <Route path="/context2/c2home" exact component={C2Home} />
        <Route path="/context2/c2about" exact component={C2About} />
      </ThroughOut.Provider>
    </Router>
  );
}

export default Context2;
