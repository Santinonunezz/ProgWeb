import { useEffect, useState } from "react";
import { useCharacter } from "../hooks/useCharacter";
import "../App.css"
export function Character() {

  const {getAllCharacters, character} = useCharacter()

  useEffect(() => {
    getAllCharacters();
  }, []);
  return (
  <ul className="todo">
    {character.map((item, index) => (
      <div className = "personajes" key={index}>
        <div className="caja">
          <img src={item.image}></img>
        
        <div className="info">
         
          <h3 className="blanco">{item.name}</h3>
          <p className="blanco">
            {item.status} - {item.species}
          </p>
          <div>
          <p className="blanco">Last known location:</p>
          <h3 className="blanco">{item.location.name}</h3>
          </div>
          <div>
          <p className="blanco">First seen in:</p>
          <h3 className="blanco">{item.origin.name}</h3>
          </div>
        </div>
        </div>
      </div>
    ))}
  </ul> 
  
);
}