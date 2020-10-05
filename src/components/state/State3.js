import React, { useState } from "react";

function State2() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("blue");
  function subtract() {
    setCount((para) => para - 1);
  }
  function add() {
    setCount((para) => para + 1);
    setTheme(() => "green");
  }

  return (
    <div>
      <button onClick={subtract}>减</button>
      {count}
      {theme}
      <button onClick={add}>加</button>
      <hr />
      <pre>{`

      任务：
      两个状态，两边两个按钮。点击一个按钮，实现数字的减少。点击另一按钮，实现数字和字符的时候改变。
      因为有两个状态，所有最好用两个useState hooks.

      `}</pre>
    </div>
  );
}

export default State2;
