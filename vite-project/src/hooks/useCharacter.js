import { useEffect, useState } from "react";
export function useCharacter() {

    const [character, setCharacter] = useState([]);
    
    const getAllCharacters = () => {
        fetch("https://rickandmortyapi.com/api/character")
        .then((res) => res.json())
        .then((data) => setCharacter(data.results));
    }
    return {
        character,
        getAllCharacters,

};


}