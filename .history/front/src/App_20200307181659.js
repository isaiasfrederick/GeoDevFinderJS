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
    </div>
  );
}

export default App;
