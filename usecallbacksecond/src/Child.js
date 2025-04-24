import React from "react";
const Child = React.memo(({ count, onIncrement }) => {
  console.log("Rendering Child");
  return (
    <div
      style={{
        marginTop: "20px",
        padding: "1rem",
        border: "1px solid #ccc",
      }}
    >
      <h2>Child Component</h2>
      <p>Received Count: {count}</p>
      <button onClick={onIncrement}>Increment from Child</button>
    </div>
  );
});

export default Child;