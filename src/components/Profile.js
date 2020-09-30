import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h2>This is profile page</h2>
      <Routing />
      <Link to="/profile/posts">posts page</Link>
      <br />
      <Link to="/profile/likes">likes page</Link>
      <br />
    </div>
  );
}

export default Profile;
