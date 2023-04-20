import "./styles.css";
import StyleProp from "./components/StyleProp";

export default function App() {
  return (
    <div className="App">
      <StyleProp
        style={{
          border: "3px solid black",
          padding: "1px",
          background: "yellow"
        }}
      />
    </div>
  );
}
