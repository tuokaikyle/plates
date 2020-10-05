import React from "react";
import { useState } from "react";
import { useEffect } from "react";

// 讲解props 此时what是一个obj
// function Content(what) {
//   console.log(what);
//   return <div>此时what是一个obj</div>;
// }

// 参数是一个deconstructure形式 获得上级组件中的key
function Content({ give }) {
  // 创建state平台
  const [lines, setLines] = useState([]);

  // 监测give, 如果give有改变，则setLines, 赋值给lines
  useEffect(() => {
    // 普通的使用方式
    setLines(give);
    // 使用useCallback传递参数
    // setLines(give("aaaaaaaa"));

    // 此时有问题。即使输入框没有变动，那么再点击按钮时，
    // re-render, turnInto方法被重新执行，
    // 所以这个useEffect监测到了新的function, 所以它依然执行。
    console.log("输入框的内容有变动");
  }, [give]);

  return lines.map((l, idx) => <div key={idx}>{l}</div>);
}

export default Content;
