import { useEffect, useState } from "react";
import { useCharacter } from "../hooks/useCharacters";
import { Svgfondo } from "../utils/Svgfondo";
export function Characters() {
  const { getAllCharacters, character } = useCharacter();

  useEffect(() => {
    getAllCharacters();
  }, []);
  const getStatusColor = (status) => {
    if (status === "Alive") {
      return "vivo";
    } else if (status === "Dead") {
      return "muerto";
    } else {
      return "depa";
    }
  };
  return (
    <>
      <div className="barra">
        <div className="logo">
          <img
            src="data:image/png;base64,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"
            alt=""
            className="logo"
          />
        </div>
        <div className="lbt">
          <button className="tt">Docs </button>
          <button className="tt">About </button>
          <button className="bot">SUPPORT US </button>
        </div>
      </div>
      <div className="blanco">
        <div className="titulo">
          <h1> The Rick and Morty API</h1>
        </div>
        <div className="fondo">
          <Svgfondo />
        </div>
      </div>
      <div className="agarrador">
        {character.map((item, index) => (
          <arti cle className="gris" key={index}>
            <img src={item.image}></img>
            <div className="personajes">
              <h2> {item.name} </h2>

              <h4 key={index} className="estado">
                <div className={`status ${getStatusColor(item.status)}`}>
                  &#x25CF;
                </div>
                {item.status} - {item.species}
              </h4>
              <div className="last">
                <p>Last known location:</p>
                <h3>{item.location.name}</h3>
              </div>
              <div className="first">
                <p> First seen in:</p>
                <h3> {item.origin.name}</h3>
              </div>
            </div>
          </arti>
        ))}
      </div>
    </>
  );
}
