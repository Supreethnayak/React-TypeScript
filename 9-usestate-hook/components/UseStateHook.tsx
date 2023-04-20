// Problem - useState in tsx file

import { useState } from "react";
export default function UseStateHook() {
  // type inference - based on initial value provided
  const [isLOggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          // setIsLoggedIn(0); not possible
          setIsLoggedIn(true); // only boolean value is possible
        }}
      >
        Click
      </button>
      <div>{isLOggedIn ? "logged in" : "logged out"}</div>
    </>
  );
}
