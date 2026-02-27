
import { useEffect, useState } from "react"
import './App.css'

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('effect', { enabled })

    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
    } // con este metodo se limpia suscripciones, y se ejecuta siempre cuando se desmonta el componente. y cada vez que cambie la dependencia

  }, [enabled])
  // getEventListeners(window)

  return (
    <>
      <div className="ms-pointer" style={{ '--position': `${position.x}px, ${position.y}px` }} />
      <h3>Proyecto 03</h3>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activado'} seguir puntero
      </button>
    </>
  )
}

function App() {
  return (
    <main>
      <FollowMouse />
    </main> 
  ) 
}

export default App
