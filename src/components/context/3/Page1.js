import React, { useContext } from "react";
import { Shared } from "./Context3";

function Page1() {
  const msg = useContext(Shared);
  return (
    <div>
      <h1>Page 1</h1>

      <div>{msg}</div>
    </div>
  );
}

export default Page1;
