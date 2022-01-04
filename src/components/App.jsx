import React, { useState } from "react";

function App() {
  var [count, setNewCount] = useState(0);

  function increase() {
    setNewCount(count + 1);
  }

  function decrease() {
    setNewCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
