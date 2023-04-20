import "./styles.css";
import TypeScriptOne from "./components/TypeScriptOne";

export default function App() {
  const name = "Supreeth";
  return (
    <div className="App">
      {/* type of prop - while you send the data */}
      <TypeScriptOne name={name} />
    </div>
  );
}
