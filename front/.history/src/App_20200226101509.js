import React, { useEffect, useState } from "react";
import "./App.css";
import "./Global.css";
import "./SideBar.css";
import "./Main.css";

function App() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="github_username" required></input>
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required></input>
          </div>
          <div class="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required value={latitude} />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                name="longitude"
                id="longitude"
                required
                value={longitude}
              />
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
