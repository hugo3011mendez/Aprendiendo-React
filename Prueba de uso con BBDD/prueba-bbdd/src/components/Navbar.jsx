import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
        <div className="container"> {/* Así centro los elementos del Navbar */}
            <NavLink to="/" className="btn btn-outline-primary">Inicio</NavLink>
            <NavLink to="/addUsuario" className="btn btn-outline-primary">Añadir usuario</NavLink>
            <NavLink to="/editUsuario" className="btn btn-outline-primary">Editar usuario</NavLink>
        </div>
    </nav>
  )
}

export default Navbar