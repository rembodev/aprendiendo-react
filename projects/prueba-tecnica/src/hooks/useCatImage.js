import { useState, useEffect } from "react";
// los custoomhooks no pueden ir atados a la implementacion que tiene por dentro el custoomhooks debido a que puede cambiar
//Custom Hook - reutilizar logica
// extensibilidad del custom hook, debe ser extensible al agregarse algun parametro adicional
// parametros nombrados
export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState();

  // recuperar la imagen cada vez que se carga una cita nueva

  useEffect(() => {
    if (!fact) return;
    const threeFirstWords = fact.split(" ", 3).join(" ");
    console.log(threeFirstWords);

    fetch(
      `https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red&json=true`,
    )
      .then((res) => res.json())
      .then((response) => {
        const { url } = response;
        setImageUrl(url);
      });
  }, [fact]);
  return { imageUrl };
}
