import "./styles.css";
import EventProp from "./components/EventProp";
import EventPropTwo from "./components/EventPropTwo";

export default function App() {
  return (
    <div className="App">
      <EventProp
        handleClick={(event, id) => console.log("Clicked", { event, id })}
      />
      <EventPropTwo
        value="fixedValue"
        onChangeHandle={(e) => console.log(e.target.value)}
      />
    </div>
  );
}
