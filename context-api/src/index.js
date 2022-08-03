import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Importaciones de componentes
import Blog from './routes/Blog';
import Contacto from './routes/Contacto';
import Inicio from './routes/Inicio';
import PageNotFound from './routes/PageNotFound';
import BlogPost from './routes/BlogPost';
import UserProvider  from './context/UserProvider'; // Importo el contexto del usuario

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <Routes>
          {/* Aquí van las rutas */}
          <Route path='/' element={<App />}> {/* Para que se muestren las rutas dentro de App, hay que anidarlas y en App.jsx escribir <Outlet /> donde se quieran mostrar */}
            <Route index element={<Inicio />} /> {/* Este componente comparte la ruta de App */}
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog/:id' element={<BlogPost />} /> {/* Debido a cómo tengo montada la URL, ésta depende de una variable id referente al ID del post */}
            <Route path='/contacto' element={<Contacto />} /> 
            <Route path='*' element={<PageNotFound />} /> {/* Este componente se mostrará cada vez que se ponga en la URL algo diferente a las páginas declaradas */}
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);