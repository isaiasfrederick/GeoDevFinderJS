import React from "react";
import "./App.css";
function App() {
  const counter = userState(0);
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
