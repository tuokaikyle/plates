import React, { useCallback } from "react";
import { useState } from "react";
import Content from "./Content";

function CallBack1() {
  const [name, setName] = useState("");
  const [HaveColor, setHaveColor] = useState(false);
  const color = {
    backgroundColor: HaveColor ? "pink" : "white",
  };
  // 情况一：这样会遇到问题
  // 下面这行代码 每次render时候 总是会执行 这是一个新的function
  // function turnInto() {
  //   return [name.concat("haha"), name.concat("hehe"), name.concat("caonima")];
  // }

  // 情况二 包含在useCallback里面
  const turnInto = useCallback(
    (more) => {
      return [name.concat("haha"), name.concat("hehe"), name.concat("caonima")];
    },
    [name]
  );

  return (
    <div style={color}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setHaveColor(!HaveColor)}>按钮</button>
      <div>{name}</div>
      {/* 情况一 turnInto是一个function
      <Content give={turnInto()} /> */}
      {/* 情况二 turnInto 是一个const 虽然是const 但是可以传参数 */}
      <Content give={turnInto} />
      <pre>{`
    任务：
      一个框 可以输入数字
      一个按钮 点击后可以改变 输入框 和 按钮的颜色
      三行字 根据输入框的内容 实时改变

    原理：
      类似于useMemo, 但是useMemo返回的是function的return value，
      useCallBack返回这个function. 还可以传参数。

    备忘：
      useCallback和useMemo的区别 没有深入理解 尤其是callback传参数？
    `}</pre>
    </div>
  );
}

export default CallBack1;
