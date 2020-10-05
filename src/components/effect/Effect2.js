import React, { useState, useEffect } from "react";

function Effect2() {
  const [w, setW] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setW(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () => setW(window.innerWidth));
    };
  }, [w]);
  return (
    <div>
      {w}
      <pre>{`
    如果不用useeffect，意思就是得刷新界面才能捕捉到变化，setW才会启用。
    用了useeffect, 就是通过Listener, 实时调用setW.
    错误：[w]:凡是windowwidth改变，就调用setW. 这就是useEffect的作用。
    Warning: Can't perform a React state update on an unmounted component. 
    正确：[]

    window.addEventListener("resize", () => setW(window.innerWidth));
    两个参数。第一个是 event名字，第二个是运行一个function

    useEffect的return的意思是，销毁这个useEffect?

  `}</pre>
    </div>
  );
}

export default Effect2;
