const CAT_ENPOINT_RANDOM_FACT = "https://catfact.ninja/fact";

export const getRandomFact = async () => {
  const res = await fetch(CAT_ENPOINT_RANDOM_FACT);
  const data = await res.json();
  const { fact } = data;
  return fact;
};

/* fech de datos 
    Esto esta prohibido 
    fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => setFact(data.fact))
    
    ESTO SE VA A UTILIZAR DENTROP DEL USEEFFECT()
    - el setFact no se regenera, no es una depencia que no cambia
    
    las promesas se resuelven con await o con then 
    .then(response => response.json()) ->  devuelve una promise
       las promises se puede concatenar
    */
