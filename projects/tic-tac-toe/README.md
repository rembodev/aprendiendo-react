# ❌ Tic Tac Toe en React

Un proyecto sencillo de Tres en Raya para practicar **React** y el manejo del estado.Me sirvió mucho para entender mejor cómo manejar el estado y la inmutabilidad. 

Me basé en algunas ideas de midudev, pero quise darle mi toque personal, especialmente en la lógica para verificar quién gana.

![Vista previa del juego](src/assets/2026-02-24-194040_hyprshot.png)

![Vista previa del juego](src/assets/2026-02-24-194047_hyprshot.png)



### Características 
* **Lógica compacta:** En lugar de escribir todas las combinaciones ganadoras a mano, usé un bucle `for` para chequear filas y columnas de forma más eficiente.
* **No se pierde el progreso:** Si se cierra la pestaña por error o refrescas, la partida sigue ahí gracias al `localStorage`.
* **Confeti:** Se Uso `canvas-confetti` para cuando alguien gana.
* **Componentes limpios:** Separé el tablero, los cuadrados y el modal del ganador para que el código sea fácil de leer.
