# 🐦 Twitter Follow Card (React Clone)| Proyecto 01

Un clon funcional del componente de sugerencias "A quién seguir" de Twitter (X), desarrollado con **React** y **Vite**. Este proyecto se enfoca en el manejo de estado, renderizado condicional y estilos CSS interactivos.
![Vista previa de la aplicación](./src/assets/Preview.png)

## Características

- **Componentes Reutilizables:** El componente `TwitterFollowCard` es modular y recibe props para personalizar el avatar, nombre de usuario y estado inicial.
- **Manejo de Estado (Hooks):** Uso de `useState` para controlar la acción de seguir/dejar de seguir de forma independiente en cada tarjeta.
- **Renderizado de Listas:** Uso de `.map()` para renderizar dinámicamente una lista de usuarios desde un array de objetos.
- **Estilos CSS Avanzados:**
  - Efectos **Hover** condicionales: El botón cambia de estilo y texto ("Dejar de seguir" en rojo) cuando el usuario pasa el mouse sobre una cuenta que ya sigue.
  - Metodología BEM en las clases CSS para evitar colisiones de estilos.
- **Avatares Automáticos:** Integración con la API `unavatar.io` para cargar imágenes de perfil basadas en el `userName`.

## Tecnologías Utilizadas

- **React 18** (Librería UI)
- **Vite** (Empaquetador y servidor de desarrollo)
- **CSS3** (Variables y Flexbox)
- **Standard JS** (Estilo de código)