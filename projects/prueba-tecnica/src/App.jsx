import './App.css'
import { useCatImage } from "./hooks/useCatImage.js"
import { useCastFact } from "./hooks/useCatFact.js"


// const CAT_ENPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`

export function App() {
    const { fact, refreshFact } = useCastFact()
    const { imageUrl } = useCatImage({ fact })

    /* Los efectos es mejor cuando tienen una sola depuracion*/
    // evitar la anidación\

    const handleClick = async () => {
        refreshFact()
    }


    return (
        <main>
            <h1>App de Gatitos</h1>
            <button onClick={handleClick}>Get new fact</button>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three word for ${fact}`} />}
        </main>
    )
}