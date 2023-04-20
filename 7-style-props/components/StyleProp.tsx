// Problem: Style as a props

import React from "react";
type StylePropType = {
  style: React.CSSProperties;
};
export default function StyleProp({ style }: StylePropType) {
  return (
    <>
      <div style={style}>div content</div>
    </>
  );
}
