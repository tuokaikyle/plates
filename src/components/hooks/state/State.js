import React from "react";
import { Link } from "react-router-dom";

function State() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/state/state1">第一课</Link>
        </li>
        <li>
          <Link to="/state/state2">第二课</Link>
        </li>
        <li>
          <Link to="/state/state3">第三课</Link>
        </li>
        <li>
          <Link to="/state/state4">给下一章useEffect的预备代码</Link>
        </li>
      </ul>
    </div>
  );
}

export default State;
