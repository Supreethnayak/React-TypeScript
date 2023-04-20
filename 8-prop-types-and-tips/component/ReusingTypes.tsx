// problem: import types from different file
// 2. re-using NameType in different Types file

import { NameType } from "./DefiningTypes";
type CheckNameType = {
  name: NameType;
};
export default function ReusingTypes({ name }: CheckNameType) {
  return (
    <>
      <h3>{`Welcome ${name.first} ${name.last}`}</h3>
    </>
  );
}
