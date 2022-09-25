import { useState } from "react";
import Childcomponent from "./Childcomponent";
import "./App.css";

function App() {
  const [parentState, setParentState] = useState("Let's try to change me");

  const handleChange = (value) => {
    setParentState(value);
  };
  return (
    <div className="App">
      <div className="container">
        <div className="parent-container">
          <h1>Parent</h1>
          <h3 className="parent-state">{parentState}</h3>
        </div>

        <Childcomponent handleChange={handleChange} />
      </div>
    </div>
  );
}

export default App;
