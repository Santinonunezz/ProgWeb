import { useState } from "react";
export function useLocation() {
  const [location, setLocation] = useState([]);
  const getAllLocation = () => {
    return fetch("https://rickandmortyapi.com/api/location")
      .then((res) => res.json())
      .then((data) => setLocation(data.results));
  };
  return {
    location,
    getAllLocation,
  };
}
