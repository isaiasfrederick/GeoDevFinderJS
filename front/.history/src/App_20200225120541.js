import React, { useState } from "react";
import "./App.css";
function App() {
  var [counter, setCounter] = useState(0);
  function incrementCounter() {
    setCounter(counter + 1);
  }

  return (
    <>
      <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
}

export default App;
