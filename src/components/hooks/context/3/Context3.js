import React from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { createContext, useState } from "react";
import Page4 from "./Page4";
import Page3 from "./Page3";

export const Shared = createContext(null);
export const userInfo = createContext(null);

// 总状态
function Context3() {
  const [state, setState] = useState(null);
  return (
    <Router>
      <ul>
        <li>
          <Link to="/context3/page1">page 1</Link>
        </li>
        <li>
          <Link to="/context3/page2">page 2</Link>
        </li>
        <li>
          <Link to="/context3/page3">page 3</Link>
        </li>
        <li>
          <Link to="/context3/page4">page 4</Link>
        </li>
      </ul>
      <Shared.Provider value={"information from createContext(null).provider"}>
        {" "}
        <Route path="/context3/page1" component={Page1} />
        <Route path="/context3/page2" component={Page2} />
      </Shared.Provider>

      {/* 传出去一个obj, 这个obj包含state, setState */}
      <userInfo.Provider value={{ state, setState }}>
        {" "}
        <Route path="/context3/page3" component={Page3} />
        <Route path="/context3/page4" component={Page4} />
      </userInfo.Provider>
    </Router>
  );
}

export default Context3;
