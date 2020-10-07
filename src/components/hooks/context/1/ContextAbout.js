import React from "react";
import { useContext } from "react";
import { ContextStuff } from "./Context1";

function ContextAbout() {
  const stuff = useContext(ContextStuff);
  return (
    <div>
      about
      <div>{stuff}</div>
    </div>
  );
}

export default ContextAbout;
