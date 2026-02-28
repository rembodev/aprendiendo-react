import { useState, useEffect } from "react";
import { getRandomFact } from "../services/facts";

// los custoomhooks no pueden ir atados a la implementacion que tiene por dentro el custoomhooks debido a que puede cambiar

export function useCastFact() {
  const [fact, setFact] = useState();

  const refreshFact = () => {
    getRandomFact().then((newFact) => setFact(newFact));
  }
  // para recuperar la cita al cargar la pagina
  useEffect(() => {
    refreshFact();
  }, []);

  return { fact, refreshFact };
}
