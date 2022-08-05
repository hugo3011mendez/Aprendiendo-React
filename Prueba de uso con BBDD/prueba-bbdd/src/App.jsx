import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const App = () => { // Me tomo App como una plantilla, donde se mostrarán los demás componentes
  return (
    <div>
        <Navbar /> {/* Llamo al componente antes del título porque es un Navbar */}
        <div className="container">
            <Outlet /> {/* Con esta etiqueta indicamos que aquí se debe pintar el componente referente a la ruta en la que esté */}
        </div>
    </div>
  )
}

export default App