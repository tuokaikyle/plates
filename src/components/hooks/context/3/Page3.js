import React from "react";
import { useContext } from "react";
import { userInfo } from "./Context3";
import { login } from "../2/Login";

function Page3() {
  // 接收，然后deconstructure
  const { state, setState } = useContext(userInfo);

  return (
    <div>
      <h1>3</h1>
      {/* 如果state有数据，那么点击按钮，setState(null)， 
      否则将state设为获取函数 */}
      {state ? (
        <button onClick={() => setState(null)}>Log out</button>
      ) : (
        <button
          onClick={async () => {
            setState(await login());
          }}
        >
          Log in
        </button>
      )}
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default Page3;
