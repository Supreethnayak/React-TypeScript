// topic: Advanced Types
// 1. Union of sting
// 2. children prop with type sting
// 3. children prop with type React.ReactNode - component
// 4. Optional props

import "./styles.css";
import UnionProps from "./components/UnionProps";
import ChildrenProp from "./components/ChildrenProp";
import ChildrenPropTwo from "./components/ChildrenPropTwo";
import OptionalProp from "./components/OptionalProp";

export default function App() {
  return (
    <>
      <UnionProps status={"loading"} />
      <ChildrenProp>Placeholder text</ChildrenProp>
      <ChildrenPropTwo>
        <ChildrenProp>Children component</ChildrenProp>
      </ChildrenPropTwo>
      {/* message field can be skipped as it is defined as optional field */}
      <OptionalProp name={"Supreeth"} isLoggedIn={true} />
    </>
  );
}
