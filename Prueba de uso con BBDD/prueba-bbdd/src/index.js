import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Importaciones de componentes
import Inicio from './routes/Inicio';
import PageNotFound from './routes/PageNotFound';
import AddUsuario from './routes/AddUsuario';
import EditUsuario from './routes/EditUsuario';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Aquí van las rutas */}
        <Route path='/' element={<App />}> {/* Para que se muestren las rutas dentro de App, hay que anidarlas y en App.jsx escribir <Outlet /> donde se quieran mostrar */}
          <Route index element={<Inicio />} /> {/* Este componente comparte la ruta de App */}
          <Route path='/addUsuario' element={<AddUsuario />} /> {/* Para añadir un usuario a la BBDD */}
          <Route path='/editUsuario' element={<EditUsuario />} /> {/* Para editar un usuario en la BBDD */}
          <Route path='*' element={<PageNotFound />} /> {/* Este componente se mostrará cada vez que se ponga en la URL algo diferente a las páginas declaradas */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);