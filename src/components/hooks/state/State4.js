import React, { useState } from "react";

function State4() {
  const [page, setPage] = useState("Article");
  return (
    <div>
      <button onClick={() => setPage((page) => "Article")}>文章</button>
      <button onClick={() => setPage((page) => "User")}>用户</button>
      <button onClick={() => setPage((page) => "Comment")}>评论</button>
      <h1>{page}</h1>
      <pre>{`
      任务：
      三个按钮，点击相应的按钮，就出现相应的内容

      onClick是一个funtion, ()=> 是因为不需要参数
    `}</pre>
    </div>
  );
}

export default State4;
