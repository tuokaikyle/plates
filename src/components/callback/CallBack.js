import React from "react";
import { Link } from "react-router-dom";

function CallBack() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/callback1">第一课</Link>
        </li>
        <li>
          <Link to="/callback2">第二课</Link>
        </li>
      </ul>
    </div>
  );
}

export default CallBack;
