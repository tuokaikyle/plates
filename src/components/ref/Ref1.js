import React from "react";
import { useState, useEffect, useRef } from "react";

function Ref1() {
  const [name, setName] = useState("");
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  }, [name]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      <div>I rendered {renderCount.current} times</div>
      <pre>{`
      原理
      一个变量 在不同的render（state改变）之间，这个变量保持独立
      persist between renders
      与state不同，ref不会re-update component

      任务：
      输入框 每输入一次 render一次
      下面一句话 写着render了多少次

      思路：
      使用useEffect, 监听变量每变化一次，就render一次，所以可以统计。
      但是，如果不用ref, 只用state, 那么会有infinate loop?
    `}</pre>
    </div>
  );
}

export default Ref1;
