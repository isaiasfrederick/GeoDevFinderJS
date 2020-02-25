import React from "react";
import "./App.css";
import "./Global.css";

function App() {
  return (
    <div>
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
          <label htmlFor="Usuário do GitHub"></label>
          <input name="github_username" id="github_username" required></input>
          </div>

          <div class="input-block"></div>
          <label htmlFor="Tecnologias"></label>
          <input name="techs" id="techs" required></input>
          </div>

          <div class="input-block">
          <label htmlFor="Usuário do GitHub"></label>
          <input name="github_username" id="github_username" required></input>
          </div>
        </form>
      </aside>
      <main>Main</main>
    </div>
  );
}

export default App;
