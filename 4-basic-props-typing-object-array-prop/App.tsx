import "./styles.css";
import TypeScriptTwo from "./components/TypeScriptTwo";
import TypingObjectProp from "./components/TypingObjectProp";
import TypingArrayProp from "./components/TypingArrayProp";

export default function App() {
  const name = "Supreeth";
  const messageCount = 12;
  const isLoggedIn = true;
  const personName = {
    firstName: "John",
    lastName: "Doe"
  };
  const devNamesArr = [
    {
      first: "Brendan",
      last: "Eich"
    },
    {
      first: "Linus",
      last: "Torvalds"
    },
    {
      first: "Mark",
      last: "Z"
    }
  ];
  return (
    <div className="App">
      <TypeScriptTwo
        name={name}
        message={messageCount}
        isLoggedIn={isLoggedIn}
      />
      <TypingObjectProp personName={personName} />
      <TypingArrayProp devNames={devNamesArr} />
    </div>
  );
}
