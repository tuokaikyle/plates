import React from "react";
import { Link } from "react-router-dom";

function Memo() {
  return (
    <div>
      index of memo
      <ul>
        <li>
          <Link to="/memo1">kyle第一课</Link>
        </li>
        <li>
          <Link to="/memo2">kyle第2课</Link>
        </li>
      </ul>
    </div>
  );
}

export default Memo;
