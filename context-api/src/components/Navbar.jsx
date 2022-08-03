import { useContext } from "react"; // Importaciones de hooks
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const Navbar = () => {
  const {user} = useContext(UserContext); // Sólo necesitaré el nombre del usuario

  return (
    <nav className="navbar navbar-dark bg-dark">
        <div className="container"> {/* Así centro los elementos del Navbar */}
          <Link to="/">{user ? "Juanito" : "Sin conexión"}</Link> {/* Link referente al usuario */}
          <NavLink to="/" className="btn btn-outline-primary">Inicio</NavLink>
          <NavLink to="/blog" className="btn btn-outline-primary">Blog</NavLink>
          <NavLink to="/contacto" className="btn btn-outline-primary">Contacto</NavLink>
        </div>
    </nav>
  )
}

export default Navbar