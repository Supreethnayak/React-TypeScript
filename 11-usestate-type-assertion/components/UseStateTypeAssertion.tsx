// Problem - useState without inital value
// when you know value wont be null after it is set
// when you dont want to use ?.
// as keyword is used

import { useState } from "react";
type UserType = {
  name: string;
  email: string;
};
export default function UseStateTypeAssertion() {
  // lying - {} is of type UserType
  const [userDetails, setUserDetails] = useState<UserType>({} as UserType);
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
        {userDetails.name} {userDetails.email}
      </h3>
    </>
  );
}
