import React, { useState } from "react";

function State1() {
  const [count, setCount] = useState(() => {
    console.log("useState中传入方法 每次render只会执行一次n");
    return 0;
  });
  return (
    <div>
      <button onClick={() => setCount((para) => para - 1)}>减</button>
      {count}
      <button onClick={() => setCount((para) => para + 1)}>加</button>
      <hr />
      <pre>{`
        错误：<button onclick={setCount(count - 1)}>减</button>
        错误：<button onClick={() => setCount(count - 1)}>减</button>
        正确：<button onClick={() => setCount((para) => para - 1)}>减</button>
        onClick={()=>方法名(方法)}
        setCount(当前state => 新state)
        第二条错误的原因是 setCount需要有一个返回值 所以要用function
        useState中传入arrow方法 每次render只会执行一次。如果直接传入外部方法，则render一次执行一次。
        所以，最好在useState()括号里写入function
      `}</pre>
    </div>
  );
}

export default State1;
