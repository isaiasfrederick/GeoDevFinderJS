import React, { useEffect, useState } from "react";
import "./App.css";
import "./Global.css";
import "./SideBar.css";
import "./Main.css";
import api from "./services/apis";
import DevItem from "./components/DevItem";
import DevForm from "./components/DevForm";

function App() {
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

    setGithubUsername("");
    setTechs("");

    setDevs([...devs, response.data]);

    console.log(response.data);
  }

  return (
    <div id="app">
      <aside>
        <strong> Cadastrar </strong>
        <DevForm onSubmit={handleDevAdd} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
