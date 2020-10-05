import React, { useState, useEffect } from "react";

function State4() {
  const [page, setPage] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${page}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
    // .then((json) => console.log(json));
  }, [page]);

  return (
    <div>
      <button onClick={() => setPage((page) => "posts")}>文章</button>
      <button onClick={() => setPage((page) => "users")}>用户</button>
      <button onClick={() => setPage((page) => "comments")}>评论</button>
      <h1>{page}</h1>
      {items.map((item, idx) => (
        <pre key={idx}>{JSON.stringify(item)}</pre>
      ))}

      <pre>{`
      简而言之：
      一事发生时，需要有副作用
      再简而言之，就是给出监测的state和一些列方法。如果被监测的state有变化，则执行一次给出的方法。
      *任何state改变，则造成re-render（全局重新执行）。 
      但是如果这个state在useEffect里面，那么即使它改变，useEffect里面的代码不会再执行

      任务：
      三个按钮，点击相应的按钮，就出现相应的内容

      感想：
      useEffect(() => {
        fetch(---https://jsonplaceholder.typicode.com/dollar大括号)
      神来之笔

      map function是括号对括号
    `}</pre>
    </div>
  );
}

export default State4;
