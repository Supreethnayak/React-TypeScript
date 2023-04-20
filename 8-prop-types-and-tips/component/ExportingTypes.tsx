// problem: import types from different file

import { userDetailsType } from "./DefiningTypes";
export default function ExportingTypes({
  name,
  message,
  isLoggedIn
}: userDetailsType) {
  return (
    <>
      <h2>
        {isLoggedIn
          ? `Welcome ${name.first} ${name.last}, you have ${message} unread messages`
          : ` Welcome Guest!`}
      </h2>
    </>
  );
}
