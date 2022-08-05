import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
        <div className="container"> {/* Así centro los elementos del Navbar */}
            <NavLink to="/" className="btn btn-outline-primary">Inicio</NavLink>
            <NavLink to="/addProyecto" className="btn btn-outline-primary">Añadir proyecto</NavLink>
            {/* TODO : Ver si pongo más links como para añadir una tarea o algo así */}
        </div>
    </nav>
  )
}

export default Navbar