// Prop Types and Tips
// 1. Desructure props
// 2. Exporting Types
// 3. Reusing Types

import "./styles.css";
import ExportingTypes from "./component/ExportingTypes";
import ReusingTypes from "./component/ReusingTypes";

export default function App() {
  return (
    <div className="App">
      <ExportingTypes
        name={{ first: "Supreeth", last: "N" }}
        message={10}
        isLoggedIn={true}
      />
      <ReusingTypes name={{ first: "John", last: "Doe" }} />
    </div>
  );
}
