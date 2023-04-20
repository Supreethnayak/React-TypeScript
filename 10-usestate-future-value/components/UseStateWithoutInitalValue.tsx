// Problem - useState without inital value
// or value Type can be different compared to inital value

import { useState } from "react";
type UserType = {
  name: string;
  email: string;
};
export default function UseStateWithoutInitalValue() {
  // type inference - not possible
  // <can be specified type | or null>
  // mention type of initial and future value
  const [userDetails, setUserDetails] = useState<UserType | null>(null);
  return (
    <>
      <button
        onClick={() => {
          setUserDetails({
            name: "Supreeth",
            email: "sup@gmail.com"
          });
        }}
      >
        Click
      </button>
      <h3>
        {/* automatically adds ?. as value can be null */}
        {userDetails?.name} {userDetails?.email}
      </h3>
    </>
  );
}
