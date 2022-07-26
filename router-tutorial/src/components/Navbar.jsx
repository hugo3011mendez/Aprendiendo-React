import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
        <div className="container"> {/* Así centro los elementos del Navbar */}
            <Link to="/" className="btn btn-outline-primary">Inicio</Link>
            <Link to="/blog" className="btn btn-outline-primary">Blog</Link>
            <Link to="/contacto" className="btn btn-outline-primary">Contacto</Link>
        </div>
    </nav>
  )
}

export default Navbar