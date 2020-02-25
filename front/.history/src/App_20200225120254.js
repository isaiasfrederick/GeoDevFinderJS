import React from "react";
import "./App.css";
function App() {
  function incrementCounter() {
    counter++;
  }

  return (
    <>
      <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>Incrementar</button>
    </div>
  );
}

export default App;
