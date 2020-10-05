import React from "react";
import { useContext } from "react";
import { userInfo } from "./Context3";

function Page4() {
  const { state } = useContext(userInfo);
  return (
    <div>
      <h1>4</h1>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default Page4;
