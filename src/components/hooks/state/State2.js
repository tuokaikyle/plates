import React, { useState } from "react";

function State2() {
  const [state, setState] = useState({ count: 0, theme: "blue" });
  function subtract() {
    setState((state) => ({
      ...state,
      count: state.count - 1,
    }));
  }
  function add() {
    setState((state) => ({
      ...state,
      count: state.count + 1,
    }));
  }
  return (
    <div>
      <button onClick={subtract}>减</button>
      {state.count}
      {state.theme}
      <button onClick={add}>加</button>
      <hr />
      <pre>{`
        任务：
        state包含两个内容。要求点击事件，只改变一个内容。
        此时可以...， 
        也可以使用相互独立的两个hook（第三课中讲。Kyle说，这种方法更好）

        function subtract() {
          setState((state) => ({
            ...state,
            count: state.count - 1,
          }));
        }
        第一行 方法名
        第二行 这个方法 包含另一个方法
          setState(第一个参数，一定是整体的state, 箭头函数返回一个obj)
        第三行 state所有的key不变，（不能只传送要改的内容，得传所有的）
        第四行 除了count key. 设置新的count key

      `}</pre>
    </div>
  );
}

export default State2;
