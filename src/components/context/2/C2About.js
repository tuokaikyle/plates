import React from "react";
import { ThroughOut } from "./Context2";
import { useContext } from "react";

function C2About() {
  const { user } = useContext(ThroughOut);
  return (
    <div>
      <h2>c2about</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

export default C2About;
