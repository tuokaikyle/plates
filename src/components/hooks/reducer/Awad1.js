import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "减法":
      return state - 1;
    case "加法":
      return state + 1;
    default:
      return state;
  }
}

function Awad1() {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      Awad1 page
      <br />
      <button onClick={() => dispatch({ type: "减法" })}>减法</button>
      {state}
      <button onClick={() => dispatch({ type: "加法" })}>加法</button>
      <hr />
      <pre>
        {`
        
        本质

        用户给出事件，html中对应着一个type. 根据这个type，改变一个值。



        架构

        function reducer(值变量名，action) switch (action.type)

        const [值变量名，dispatch] = useReducer(case集合，原始具体值)

        return 小括号 onclick 大括号 一个arrow function dispatch 一个小括号 小括号里面包含一个object

        *dispatch和action是相等的



        任务

        两个按钮，中间一个数字，点击按钮可以实现加减`}
      </pre>
    </div>
  );
}

export default Awad1;
