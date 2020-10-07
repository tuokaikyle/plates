import React from "react";
import { useRef } from "react";
import { useState } from "react";

function Ref2() {
  const [name, setName] = useState("");
  const inputRef = useRef();

  function placeFocus() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={placeFocus}>开始输入</button>
      <div>输入内容是 {name}</div>
      <pre>{`
      任务：
      点击按钮，使得光标到输入框里
      这是useRef最常用的一个使用场景
    `}</pre>
    </div>
  );
}

export default Ref2;
