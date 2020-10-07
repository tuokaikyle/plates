import React from "react";
import { Link } from "react-router-dom";

function Ref() {
  return (
    <div>
      ref page
      <ul>
        <li>
          <Link to="/ref1">kyle第1课</Link>
        </li>
        <li>
          <Link to="/ref2">kyle第2课</Link>
        </li>
        <li>
          <Link to="/ref3">kyle第3课</Link>
        </li>
      </ul>
    </div>
  );
}

export default Ref;
