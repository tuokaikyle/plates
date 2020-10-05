import React, { useContext } from "react";
import { ContextStuff } from "./Context1";

function ContextHome() {
  const msg = useContext(ContextStuff);
  return (
    <div>
      Home
      <div>{msg}</div>
    </div>
  );
}

export default ContextHome;
