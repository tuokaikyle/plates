import React, { useState, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "add-todo":
      return {
        todos: [
          ...state.todos,
          { text: action.payload.truck, completed: false },
        ],
        count: state.count + 1,
      };
    case "toggle-todo":
      return {
        todos: state.todos.map((todo, i) =>
          i === action.idx ? { ...todo, completed: !todo.completed } : todo
        ),
        count: state.count,
      };

    default:
      return false;
  }
}

function Awad3() {
  const [{ todos, count }, dispatch] = useReducer(reducer, {
    todos: [],
    count: 0,
  });
  const [text, setText] = useState("");
  return (
    <div>
      The count is {count}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "add-todo", payload: { truck: text } });
          setText("");
        }}
      >
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </form>
      {/* <pre>{JSON.stringify(todos, null, 2)}</pre> */}
      {todos.map((todo, idx) => (
        <div
          key={idx}
          onClick={(e) => dispatch({ type: "toggle-todo", idx })}
          style={{ color: todo.completed ? "red" : "" }}
          // style={{ textDecoration: todo.completed ? "line-through" : "" }}
        >
          {todo.text}
        </div>
      ))}
      <br />
      <pre>{`
      任务：
      框中输入todo，回车提交，显示出todo
      点击todo，变色 或者 划线
      显示出todo的总数量

      感想：
      1.  ...state.todos的意思是 state中所有todos的值不变，另外再加一项

      2. 正常html: style="color: blue"
      
      3. jsx: style={{ color: "red" }}
      
      4. 条件语法是 *style*={{ textDecoration: *todo*.completed ? "line-through" : "" }}
      
      5. 在html中，点击了某一条，给出一个idx. 此时触发reducer. 需要遍历。找到符合的idx，然后这句话
      
         ? { ...*todo*, completed: !*todo*.completed }
      
         的意思是，如果情况为真，则保留todo内容，然后提出用completed覆盖。
      
      6. 在这个例子中，case所return 的东西，是整个state. 因为两个key都重写了。所以没有“...”语法
      `}</pre>
    </div>
  );
}

export default Awad3;
