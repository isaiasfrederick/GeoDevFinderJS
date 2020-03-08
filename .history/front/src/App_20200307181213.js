import React, { useEffect, useState } from "react";
import "./App.css";
import "./Global.css";
import "./SideBar.css";
import "./Main.css";
import api from "./services/apis";

function App() {
  const [devs, setDevs] = useState([]);
  const [github_username, setGithubUsername] = useState("");
  const [techs, setTechs] = useState("");
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

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");
      setDevs(response.data);
    }
    loadDevs();
  }, []);

  async function handleDevAdd(e) {
    e.preventDefault();

    const response = await api.post("/devs", {
      github_username,
      techs,
      latitude,
      longitude
    });

    console.log(response.data);
  }

  return (
    <div id="app">
      <aside>
        <strong> Cadastrar </strong>{" "}
        <form onSubmit={handleDevAdd}>
          <div className="input-block">
            <label htmlFor="github_username"> Usuário do GitHub </label>{" "}
            <input
              name="github_username"
              id="github_username"
              required
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
            ></input>{" "}
          </div>{" "}
          <div className="input-block">
            <label htmlFor="techs"> Tecnologias </label>{" "}
            <input name="techs" id="techs" required>
              {" "}
            </input>
            value = {techs}
            onChange = {e => setTechs(e.target.value)}{" "}
          </div>{" "}
          <div class="input-group">
            <div className="input-block">
              <label htmlFor="latitude"> Latitude </label>{" "}
              <input
                name="latitude"
                id="latitude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />{" "}
            </div>{" "}
            <div className="input-block">
              <label htmlFor="longitude"> Longitude </label>{" "}
              <input
                name="longitude"
                id="longitude"
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />{" "}
            </div>{" "}
          </div>{" "}
          <button type="submit"> Salvar </button>{" "}
        </form>{" "}
      </aside>{" "}
      <main>
        <main>
          <ul>
            {devs.map(dev => (
              <li key={dev._id} className="dev-item">
                <header>
                  <img src={dev.avatar_url} />
                  <div className="user-info">
                    <strong> {dev.name} </strong>{" "}
                    <span>{dev.techs.join(", ")}</span>{" "}
                  </div>{" "}
                </header>{" "}
                <p>{dev.bio}</p>{" "}
                <a href={`https://github.com/${dev.github_username}`}>
                  {" "}
                  Acessar perfil{" "}
                </a>{" "}
              </li>
            ))}
          </ul>
        </main>
      </main>
    </div>
  );
}

export default App;
