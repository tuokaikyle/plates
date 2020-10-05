import React from "react";
import { useContext } from "react";
import { Shared } from "./Context3";

function Page2() {
  const msg = useContext(Shared);
  return (
    <div>
      <h1>page 2</h1>
      <div>{msg}</div>
    </div>
  );
}

export default Page2;
