import React from 'react';

function DevItem() {
        return (            <li key={dev._id} className="dev-item">
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
            </li>);
}

export DevItem;