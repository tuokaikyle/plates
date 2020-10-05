import React, { useMemo } from "react";
import { useState } from "react";
import { useEffect } from "react";

function MemoKyle1() {
  const [number, setNumber] = useState(0);
  const [haveColor, setHaveColor] = useState(false);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  // 情况一：虽然监听了color, 但是新的obj还是会被创建出来
  // const color = {
  //   backgroundColor: haveColor ? "yellow" : "white",
  // };

  // 情况二：防止去创建新的obj，因为一直在memo里面
  const color = useMemo(
    () => ({
      backgroundColor: haveColor ? "yellow" : "white",
    }),
    [haveColor]
  );

  useEffect(() => {
    console.log("from useEffect, color changed");
  }, [color]);

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
      加入useEffect, 监听color. 如果color改变，则执行useEffect.
      但是，数字改变后，useEffect依然执行。这是因为，新的color obj被创建。
      新旧两个color值一样，但是reference不一样。所以。useEffect认为，color这个值被改变了。
      使用方法：
      把color obj存在缓存里。监听haveColor. 只有得到变颜色的指令后，才创建新的obj.
      否则，直接调用现有的obj。 
    `}</pre>
    </div>
  );
}

function slowFunction(num) {
  for (let t = 0; t < 500000000; t++) {}
  return num * 2;
}

export default MemoKyle1;
