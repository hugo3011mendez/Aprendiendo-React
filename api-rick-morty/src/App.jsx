import { useState, useEffect } from "react" // Importaciones de hooks
// Importaciones de componentes
import Formulario from "./components/Formulario"
import PintarDatos from "./components/PintarDatos"

const App = () => {

  const [nombrePersonaje, setNombrePersonaje] = useState(""); // Hook referente al nombre del personaje que queremos buscar, vendrá desde el componente Formulario

  /**
   * Cuando se cargue por primera vez el componente, se lee el almacenamiento local por si hay un nombre almacenado
   * Y se establece el nombre actual del personaje al del almacenamiento local
   */
  useEffect(() =>{
    if (localStorage.getItem("nombrePersonaje")) {
      setNombrePersonaje(JSON.parse(localStorage.getItem("nombrePersonaje")));
    }
  }, []);
  
  return (
    <div className="container">
        <h1>API de Rick & Morty</h1>
        <Formulario setNombrePersonaje={setNombrePersonaje} /> {/* Mando el set del nombre del personaje como prop al componente Formulario */}
        <PintarDatos nombrePersonaje={nombrePersonaje} /> {/* El hook referente al nombre del personaje a buscar, lo mandamos como prop a este componente */}
    </div>
  )
}

export default App