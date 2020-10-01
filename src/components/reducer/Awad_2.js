import React, { useState, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "add-todo":
      return {
        todos: [
          ...state.todos,
          { text: action.payload.truck, completed: false },
        ],
      };

    default:
      return false;
  }
}

function Awad_2() {
  const [{ todos }, dispatch] = useReducer(reducer, { todos: [] });
  const [text, setText] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "add-todo", payload: { truck: text } });
          setText("");
        }}
      >
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </form>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
      {/* {todos.map((todo, idx) => (
        <div key={idx}>{todo.text}</div>
      ))} */}
      <br />
      <pre>{`
      任务：
      框中输入todo，回车提交，显示出todo
      感想：

        1. const[state, dispatch]中的state, 可以是一个obj. 这个例子中，obj中只有一个key, todos. 即 state = {todos: [...]}. 所以，{todos} 是deconstructure的写法。
        2. dispatch(这里一般有两个变量。一个是type, 即分发的标签。另一个是payload, 即要传的变量。在这个例子中，payload是一个obj类型)
        3. input标签中，value和onChange是共存的。
        4. map的写法：todos.map( (单一变量，idx) => ())
        5. component文件变量名的写法应当是 帕斯卡尔 写法。不是camel, 或者下划线
      `}</pre>
    </div>
  );
}

export default Awad_2;
