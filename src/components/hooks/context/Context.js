import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { createContext } from "react";
import Context1 from "./1/Context1";
import Context2 from "./2/Context2";
import Context3 from "./3/Context3";

export const ContextStuff = createContext(null);

const Routing = () => {
  return (
    <ContextStuff.Provider value="some stuff from createContext">
      <Switch>
        <Route path="/context1" exact>
          <Context1 />
        </Route>
        <Route path="/context2" exact>
          <Context2 />
        </Route>
        <Route path="/context3" exact>
          <Context3 />
        </Route>
      </Switch>
    </ContextStuff.Provider>
  );
};

function Context() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/context1">第1课</Link>
        <br />
        <Link to="/context2">第2课</Link>
        <br />
        <Link to="/context3">第3课</Link>
        <br />
        <Routing />
      </BrowserRouter>
      <hr />
      <pre>{`
      以下内容来自二级组件
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

export default Context;
