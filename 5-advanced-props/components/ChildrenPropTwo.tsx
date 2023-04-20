// problem: returning another children component
// using React.ReactNode from @types/react package

import React from "react";
type ChildrenPropTwoType = {
  children: React.ReactNode;
};
// prop name is kept children while receiving the prop
// as we are not mentioning any name while sending a prop
export default function ChildrenProp({ children }: ChildrenPropTwoType) {
  return (
    <>
      {/* returning a whole component */}
      {children}
    </>
  );
}
