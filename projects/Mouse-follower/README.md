# 🖱️ Mouse Follower

Un proyecto práctico para entender el ciclo de vida de los componentes en React, específicamente el hook `useEffect` y la importancia del **cleanup** (limpieza de efectos).

[Vista previa del proyecto](https://mouse-follower-rev.netlify.app/)

### ¿Qué aprendí con este ejercicio?

* **Control de efectos:** Cómo ejecutar código solo cuando una dependencia cambia (en este caso, cuando activamos o desactivamos el seguimiento).
* **Suscripciones y Eventos:** Aprendí a escuchar eventos globales del navegador (`pointermove`) directamente desde React.
* **Limpieza de memoria (Cleanup):** Esta es la parte más importante. Aprendí que si no remueves el evento (`removeEventListener`) cuando el componente se desmonta o el efecto cambia, se crean múltiples suscripciones que pueden hacer que la aplicación se rompa o vaya lenta.

### Toque personal en los Estilos
A diferencia de hacerlo todo con estilos en línea (inline styles), decidí utilizar **Variables CSS** para que la transición de la posición sea más fluida y el código de React quede mucho más limpio:


```
<div 
className="ms-pointer" 
// creacion de la variable
style={{ '--position': `${position.x}px, ${position.y}px` }} />
```

```
css
/* Uso de variables para la posición */
.ms-pointer {
  position: absolute;
  transform: translate(var(--position));
  /* ... otros estilos ... */
}
```