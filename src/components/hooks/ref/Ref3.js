import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

function Ref3() {
  const [name, setName] = useState("");
  const pre = useRef("");

  // 由此可见，先执行useEffect, 再去真正改变监听变量
  useEffect(() => {
    pre.current = name;
  }, [name]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>Current value is {name} </div>
      <div>Previous value is {pre.current} </div>
      <pre>{`
    任务:
    找出一个变量 的 上一个状态
    一个框，可以输入
    下面写着 当前值 和 上一个值
  `}</pre>
    </div>
  );
}

export default Ref3;
