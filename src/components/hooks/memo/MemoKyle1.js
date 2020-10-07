import React, { useMemo } from "react";
import { useState } from "react";

function MemoKyle1() {
  const [number, setNumber] = useState(0);
  const [haveColor, setHaveColor] = useState(false);
  // 情况一：
  // const doubleNumber = slowFunction(number);

  // 情况二：改进方法是使用useMemo (()=>{slowFunction},[监听])
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const color = {
    backgroundColor: haveColor ? "yellow" : "white",
  };
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setHaveColor(!haveColor)}>Change color</button>
      <div style={color}>{doubleNumber}</div>
      <pre>{`
      任务：
      一个框，框中输入数字。下面一行显示这个数字的2倍。但是，这个计算过程很慢。
      一个按钮，点击之后，下面这个数字的颜色会变。
      虽然改变颜色的速度，按照正常情况下应该很快，但是此时因为会受到数字计算的影响，也会跟数字显示同步一样慢。

      原理：
      当一个state改变时，整个app component都重新render
      useMemo就是让这个component中的一部分运算存储在缓存里。

      笔记：
      <input type="number" />就是有上下增减三角
      useMemo 返回一个第一个参数 这个函数 的 return value. 这是跟useCallback的不同点
    `}</pre>
    </div>
  );
}

function slowFunction(num) {
  for (let t = 0; t < 1000000000; t++) {}
  return num * 2;
}

export default MemoKyle1;
