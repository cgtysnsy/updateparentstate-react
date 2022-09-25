import { useState } from "react";

export default function Childcomponent({ handleChange }) {
  const [value, setValue] = useState("Child");
  return (
    <div className="component-container">
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => handleChange(value)}>
        Change Parent Component
      </button>
    </div>
  );
}
