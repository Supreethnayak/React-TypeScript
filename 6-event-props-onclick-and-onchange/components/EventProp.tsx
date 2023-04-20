// Problem: Event as a props - onCLick

import React from "react";
type EventPropType = {
  // 1. no parameter and does not return anything
  // handleClick: () => void;
  // 2. event parameter
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};
export default function EventProp({ handleClick }: EventPropType) {
  return (
    <>
      <button onClick={(event) => handleClick(event, 1)}>Click</button>
    </>
  );
}
