import { useEffect, useState } from "react";
import "../App.css"
export function Character() {

  const [character, setCharacter] = useState([]);


  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((data) => setCharacter(data.results));
  }, []);
  return (
  <ul>
    {character.map((item, index) => (
      <div className = "prueba" key={index}>
      <li>
        <h3>{item.name}</h3>
        <p>{item.status}</p>
        <img src={item.image}></img>
        </li>
      </div>
    ))}
  </ul> 
  
);
}