import React from "react";
import { useContext } from "react";
import { ThroughOut } from "./Context2";
import { login } from "./Login";

function C2Home() {
  const { user, setUser } = useContext(ThroughOut);
  return (
    <div>
      <h2>Home</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {user ? (
        <button
          onClick={() => {
            setUser(null);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={async () => {
            const user = await login();
            setUser(user);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
}

export default C2Home;
