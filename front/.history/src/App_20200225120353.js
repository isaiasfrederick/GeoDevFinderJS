import React, { useState } from "react";
import "./App.css";
function App() {
  var counter = useState(0);
  function incrementCounter() {
    counter++;
  }

  return (
    <>
      <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
}

export default App;
