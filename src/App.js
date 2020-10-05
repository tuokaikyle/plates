import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Ref from "./components/ref/Ref";
import State2 from "./components/state/State2";
import State1 from "./components/state/State1";
import State3 from "./components/state/State3";
import State from "./components/state/State";
import Reducer from "./components/reducer/Reducer";
import Awad1 from "./components/reducer/Awad1";
import Awad2 from "./components/reducer/Awad2";
import Awad3 from "./components/reducer/Awad3";
import State4 from "./components/state/State4";
import Effect from "./components/effect/Effect";
import Effect1 from "./components/effect/Effect1";
import Effect2 from "./components/effect/Effect2";
import Memo from "./components/memo/Memo";
import MemoKyle1 from "./components/memo/MemoKyle1";
import MemoKyle2 from "./components/memo/MemoKyle2";
import Ref1 from "./components/ref/Ref1";
import Ref2 from "./components/ref/Ref2";
import Ref3 from "./components/ref/Ref3";
import CallBack from "./components/callback/CallBack";
import CallBack1 from "./components/callback/CallBack1";
import Context from "./components/context/Context";

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
      <Route path="/state/state3">
        <State3 />
      </Route>
      <Route path="/state/state4">
        <State4 />
      </Route>

      <Route path="/effect" exact>
        <Effect />
      </Route>
      <Route path="/effect/effect1">
        <Effect1 />
      </Route>
      <Route path="/effect/effect2">
        <Effect2 />
      </Route>

      <Route path="/memo" exact>
        <Memo />
      </Route>
      <Route path="/memo1">
        <MemoKyle1 />
      </Route>
      <Route path="/memo2">
        <MemoKyle2 />
      </Route>

      <Route path="/ref">
        <Ref />
      </Route>
      <Route path="/ref1">
        <Ref1 />
      </Route>
      <Route path="/ref2">
        <Ref2 />
      </Route>
      <Route path="/ref3">
        <Ref3 />
      </Route>

      <Route path="/callback">
        <CallBack />
      </Route>
      <Route path="/callback1">
        <CallBack1 />
      </Route>

      <Route path="/context" exact>
        <Context />
      </Route>

      <Route path="/reducer" exact>
        <Reducer />
      </Route>
      <Route path="/reducer/awad1">
        <Awad1 />
      </Route>
      <Route path="/reducer/awad2">
        <Awad2 />
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
        <pre>{`
  备忘：
  1、state awad 后面有一个custom hook没有看
  2、只看了kyle：effect
  3、reducer 只看了awad
  4、context kyle 没看
  5、全部：memo, ref
  6、Ins mern stack只做笔记
`}</pre>
        <hr />
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
