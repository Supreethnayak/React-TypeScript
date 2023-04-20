// Problem: Event as a props - onChange and value

import React from "react";
type EventPropTwoType = {
  value: string;
  onChangeHandle: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function EventPropTwo({
  value,
  onChangeHandle
}: EventPropTwoType) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };
  return (
    <>
      <div>
        {/* 1. passing event as a prop */}
        1. <input onChange={(e) => onChangeHandle(e)} value={value} />
      </div>
      <div>
        {/* 2. defining handler within the component */}
        2. <input onChange={handleInputChange} />
      </div>
    </>
  );
}
