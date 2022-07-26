import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Importaciones de componentes
import Blog from './routes/Blog';
import Contacto from './routes/Contacto';
import Inicio from './routes/Inicio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Aquí van las rutas */}
        <Route path='/' element={<App />}> {/* Para que se muestren las rutas dentro de App, hay que anidarlas y en App.jsx escribir <Outlet /> donde se quieran mostrar */}
          <Route index element={<Inicio />} /> {/* Este componente comparte la ruta de App */}
          <Route path='/blog' element={<Blog />}/>
          <Route path='/contacto' element={<Contacto />}/>        
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);