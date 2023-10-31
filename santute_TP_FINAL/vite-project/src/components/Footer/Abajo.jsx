import { useLocation } from "../../hooks/useLocation";
import { useEffect, useState } from "react";
export function Footer() {
  const { getAllLocation, location } = useLocation();

  useEffect(() => {
    getAllLocation();
  }, []);

  return (
    <>
      <h1></h1>;
    </>
  );
}
