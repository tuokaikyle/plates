import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import ContextHome from "./ContextHome";
import ContextAbout from "./ContextAbout";
import { createContext } from "react";

export const ContextStuff = createContext(null);

const Routing = () => {
  return (
    <ContextStuff.Provider value="some stuff from createContext">
      <Switch>
        <Route path="/context/home" exact>
          <ContextHome />
        </Route>
        <Route path="/context/about">
          <ContextAbout />
        </Route>
      </Switch>
    </ContextStuff.Provider>
  );
};

function Context1() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/context/home">Context - Home page</Link>
        <br />
        <Link to="/context/about">Context - About page</Link>
        <br />
        <Routing />
      </BrowserRouter>
      <pre>{`
        记录：
        Router知识回顾：return 一个router router里面包含 link 和 routing

        UseContext: 
        createContext，得到一个变量
        用变量.provider把子组件包围起来，value=内容
        在子组件中，useContext(变量)，那么内容就被传递过去了。
      `}</pre>
    </div>
  );
}

export default Context1;
