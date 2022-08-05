import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
        <div className="container"> {/* Así centro los elementos del Navbar */}
            <NavLink to="/ruta1" className="btn btn-outline-primary">1</NavLink>
            <NavLink to="/ruta2" className="btn btn-outline-primary">2</NavLink>
            <NavLink to="/ruta3" className="btn btn-outline-primary">3</NavLink>
        </div>
    </nav>
  )
}

export default Navbar