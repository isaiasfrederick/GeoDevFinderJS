import React, { useEffect } from "react";
import "./App.css";
import "./Global.css";
import "./SideBar.css";
import "./Main.css";

function App() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition();
  }, []);

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="github_username" required></input>
          </div>
          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required></input>
          </div>
          <div class="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/2727053?s=460&v=4" />
              <div className="user-info">
                <strong>Isaias Frederick</strong>
                <span>Python, ReactJS, ReactNative, Cuda, etc...</span>
              </div>
            </header>
            <p>
              Eterno estudante. Mestre em Ciência da Computação. Entusiasta de
              Processamento de Linguagem Natural.{" "}
            </p>
            <a href="http://www.github.com/isaiasfrederick">Acessar perfil</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/2727053?s=460&v=4" />
              <div className="user-info">
                <strong>Isaias Frederick</strong>
                <span>Python, ReactJS, ReactNative, Cuda, etc...</span>
              </div>
            </header>
            <p>
              Eterno estudante. Mestre em Ciência da Computação. Entusiasta de
              Processamento de Linguagem Natural.{" "}
            </p>
            <a href="http://www.github.com/isaiasfrederick">Acessar perfil</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/2727053?s=460&v=4" />
              <div className="user-info">
                <strong>Isaias Frederick</strong>
                <span>Python, ReactJS, ReactNative, Cuda, etc...</span>
              </div>
            </header>
            <p>
              Eterno estudante. Mestre em Ciência da Computação. Entusiasta de
              Processamento de Linguagem Natural.{" "}
            </p>
            <a href="http://www.github.com/isaiasfrederick">Acessar perfil</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/2727053?s=460&v=4" />
              <div className="user-info">
                <strong>Isaias Frederick</strong>
                <span>Python, ReactJS, ReactNative, Cuda, etc...</span>
              </div>
            </header>
            <p>
              Eterno estudante. Mestre em Ciência da Computação. Entusiasta de
              Processamento de Linguagem Natural.{" "}
            </p>
            <a href="http://www.github.com/isaiasfrederick">Acessar perfil</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
