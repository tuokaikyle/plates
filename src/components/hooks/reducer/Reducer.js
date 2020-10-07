import React from "react";
import { Link } from "react-router-dom";

function Reducer() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/reducer/awad1">awad第一课</Link>
        </li>
        <li>
          <Link to="/reducer/awad2">awad第二课</Link>
        </li>
        <li>
          <Link to="/reducer/awad3">awad第三课</Link>
        </li>
      </ul>
    </div>
  );
}

export default Reducer;
