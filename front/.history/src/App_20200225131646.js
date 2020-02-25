import React from "react";
import "./App.css";
import "./Global.css";

function App() {
  return (
    <div>
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <label htmlFor="Usuário do GitHub"></label>
          <input name="github_username" id="github_username" required></input>
        </form>
      </aside>
      <main>Main</main>
    </div>
  );
}

export default App;
