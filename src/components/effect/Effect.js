import React from "react";
import { Link } from "react-router-dom";

function Effect() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/effect/effect1">第一课</Link>
        </li>
        <li>
          <Link to="/effect/effect2">第二课</Link>
        </li>
        <li>
          <Link to="/effect/effect3">第三课</Link>
        </li>
      </ul>
    </div>
  );
}

export default Effect;
