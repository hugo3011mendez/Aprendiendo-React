import React from 'react'; // Aquí se importa React
import ReactDOM from 'react-dom/client'; // Se usa cuando se inicie el index

import App from './App' // Importo el componente principal

const root = ReactDOM.createRoot(document.getElementById('root'));
// Está indicando que se tome el componente definido dentro de la siguiente etiqueta, y que lo lleve a donde está root, <div id="root"> en index.html
root.render(
  // El StrictMode es es una herramienta para destacar problemas potenciales en la aplicación
  // Deberíamos tener componentes que se metan aquí para mostrarlos todos
  <React.StrictMode>
    <App/> {/* Muestro el componente principal */}
  </React.StrictMode> // Info que se va a mostrar en el <div id="root">
);